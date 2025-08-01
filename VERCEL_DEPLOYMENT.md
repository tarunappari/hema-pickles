# Vercel Deployment Guide

## Environment Variables Required

For the payment system to work on Vercel, you need to set these environment variables:

### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_id_here
RAZORPAY_KEY_SECRET=your_secret_key_here
```

### Important Notes:
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` - This is your public key (starts with `rzp_test_` or `rzp_live_`)
- `RAZORPAY_KEY_SECRET` - This is your secret key (keep this private)
- Make sure to set these for all environments (Production, Preview, Development)

## Build Fix Applied

The previous build error was caused by Razorpay being initialized at module level during build time. This has been fixed by:

1. **Lazy Initialization**: Razorpay instance is now created only when the API route is called
2. **Environment Variable Validation**: Proper error handling for missing credentials
3. **Build-time Safety**: No external API calls during build process

## Testing the Deployment

After setting environment variables:

1. Deploy to Vercel
2. Test the payment flow:
   - Add items to cart
   - Go to checkout
   - Try creating an order
3. Check Vercel function logs for any errors

## Local Development

For local development, create a `.env.local` file:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_id_here
RAZORPAY_KEY_SECRET=your_secret_key_here
```

## Troubleshooting

If you still get build errors:
1. Verify environment variables are set correctly in Vercel
2. Check that variable names match exactly (case-sensitive)
3. Ensure no spaces in variable values
4. Try redeploying after setting variables
