import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

// Function to create Razorpay instance only when needed
function createRazorpayInstance() {
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error('Razorpay environment variables are not configured');
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

export async function POST(request) {
  try {
    const { amount, currency = 'INR', receipt, notes } = await request.json();

    // Validate required fields
    if (!amount || !receipt) {
      return NextResponse.json(
        { error: 'Amount and receipt are required' },
        { status: 400 }
      );
    }

    // Create order options
    const amountInPaise = Math.round(amount * 100); // Convert to paise (smallest currency unit)

    // Log for debugging
    console.log('Original amount:', amount);
    console.log('Amount in paise:', amountInPaise);

    // Razorpay maximum amount is 50,00,000 paise (₹50,000)
    if (amountInPaise > 5000000) {
      return NextResponse.json(
        { error: `Amount ₹${amount} exceeds maximum limit of ₹50,000` },
        { status: 400 }
      );
    }

    const options = {
      amount: amountInPaise,
      currency,
      receipt,
      notes: notes || {},
    };

    // Create Razorpay instance and order
    const razorpay = createRazorpayInstance();
    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        status: order.status,
        created_at: order.created_at,
      },
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);

    // Handle configuration errors
    if (error.message.includes('environment variables')) {
      return NextResponse.json(
        {
          error: 'Payment service configuration error',
          details: 'Service temporarily unavailable'
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to create order',
        details: error.message
      },
      { status: 500 }
    );
  }
}
