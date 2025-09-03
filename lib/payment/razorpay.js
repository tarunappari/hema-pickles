/**
 * Razorpay Payment Utilities
 * Handles client-side payment processing and order management
 */

// Load Razorpay script dynamically
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Create Razorpay order
export const createRazorpayOrder = async (orderData) => {
  try {
    const response = await fetch('/api/payment/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to create order');
    }

    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Verify payment
export const verifyPayment = async (paymentData) => {
  try {
    const response = await fetch('/api/payment/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Payment verification failed');
    }

    return data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};

// Process payment with Razorpay
export const processPayment = async (orderDetails, customerInfo, onSuccess, onFailure) => {
  try {
    // Load Razorpay script
    const isScriptLoaded = await loadRazorpayScript();
    
    if (!isScriptLoaded) {
      throw new Error('Failed to load Razorpay script');
    }

    // Create order
    const orderData = {
      amount: orderDetails.total,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        customer_name: customerInfo.name,
        customer_email: customerInfo.email,
        customer_phone: customerInfo.phone,
        customer_address: customerInfo.address,
        customer_city: customerInfo.city,
        customer_state: customerInfo.state,
        customer_pincode: customerInfo.pinCode,
        customer_country: customerInfo.country,
        items: JSON.stringify(orderDetails.items.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price
        }))),
      },
    };

    const { order } = await createRazorpayOrder(orderData);

    // Razorpay options
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Hema Pickles',
      description: 'Traditional Andhra Pickles',
      image: '/assets/logo.png',
      order_id: order.id,
      prefill: {
        name: customerInfo.name,
        email: customerInfo.email,
        contact: customerInfo.phone,
        method: 'card',
      },
      theme: {
        color: '#e53e3e',
      },
      handler: async function (response) {
        try {
          // Verify payment
          const verificationData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            order_details: orderDetails,
          };

          const verificationResult = await verifyPayment(verificationData);
          
          if (verificationResult.success) {
            onSuccess(verificationResult);
          } else {
            onFailure(new Error('Payment verification failed'));
          }
        } catch (error) {
          onFailure(error);
        }
      },
      modal: {
        ondismiss: function () {
          onFailure(new Error('Payment cancelled by user'));
        },
      },
    };

    // Open Razorpay checkout
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    onFailure(error);
  }
};

// Format currency for display
export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

// Extract price from price string or object
export const extractPrice = (priceInput) => {
  // Handle different input types:

  // If it's a number, return as is
  if (typeof priceInput === 'number') {
    return priceInput;
  }

  // If it's a string, extract price from various formats
  if (typeof priceInput === 'string') {
    // Handle formats like:
    // "Rs600/500G(Inc - all taxes)" -> 600
    // "600rs - 500G" -> 600
    // "₹1299/1kg" -> 1299
    // "1299" -> 1299

    const match = priceInput.match(/[₹Rs]?(\d+)/i);
    if (match) {
      return parseFloat(match[1]);
    }

    // Fallback: extract first number
    const fallbackMatch = priceInput.match(/(\d+)/);
    return fallbackMatch ? parseFloat(fallbackMatch[1]) : 0;
  }

  // If it's an object (like {300g: '449', 500g: '749', 1kg: '1299'})
  // This shouldn't happen in cart items, but handle gracefully
  if (typeof priceInput === 'object' && priceInput !== null) {
    console.warn('extractPrice received object instead of string/number:', priceInput);
    // Try to get a default price (prefer 1kg, then 500g, then first available)
    const sizes = Object.keys(priceInput);
    if (sizes.includes('1kg')) {
      return parseFloat(priceInput['1kg']);
    } else if (sizes.includes('500g')) {
      return parseFloat(priceInput['500g']);
    } else if (sizes.length > 0) {
      return parseFloat(priceInput[sizes[0]]);
    }
  }

  console.warn('extractPrice: Unable to extract price from:', priceInput);
  return 0;
};

// Format item price for display
export const formatItemPrice = (priceString) => {
  const price = extractPrice(priceString);
  return formatCurrency(price);
};

// Calculate order total
export const calculateOrderTotal = (items) => {
  return items.reduce((total, item) => {
    // Use selectedPrice if available (for new price selector items)
    // Otherwise fall back to extractPrice for legacy items
    let price;
    if (item.selectedPrice && typeof item.selectedPrice === 'number') {
      price = item.selectedPrice;
    } else if (item.selectedPrice && typeof item.selectedPrice === 'string') {
      price = parseFloat(item.selectedPrice);
    } else {
      price = extractPrice(item.price);
    }
    console.log(`Item: ${item.name}, Selected price: ${item.selectedPrice}, Extracted price: ${price}, Quantity: ${item.quantity}`);
    return total + (price * item.quantity);
  }, 0);
};

// Generate order receipt
export const generateOrderReceipt = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `HP_${timestamp}_${random}`;
};
