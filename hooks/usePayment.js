"use client";
import { useState } from 'react';
import { processPayment } from '@/lib/payment/razorpay';
import { useCart } from '@/contexts/CartContext';

export const usePayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const { items, getCartTotal, clearCart } = useCart();

  const initiatePayment = async (customerInfo, onSuccess, onError) => {
    try {
      setIsProcessing(true);
      setPaymentError(null);

      // Validate customer info
      if (!customerInfo.name || !customerInfo.email || !customerInfo.phone ||
          !customerInfo.address || !customerInfo.city || !customerInfo.state ||
          !customerInfo.pinCode || !customerInfo.country) {
        throw new Error('Please fill in all required fields');
      }

      // Validate cart
      if (items.length === 0) {
        throw new Error('Cart is empty');
      }

      // Prepare order details
      const orderDetails = {
        items: items,
        total: getCartTotal(),
        itemCount: items.reduce((total, item) => total + item.quantity, 0),
      };

      // Process payment
      await processPayment(
        orderDetails,
        customerInfo,
        (result) => {
          setIsProcessing(false);
          clearCart(); // Clear cart on successful payment
          if (onSuccess) onSuccess(result);
        },
        (error) => {
          setIsProcessing(false);
          setPaymentError(error.message);
          if (onError) onError(error);
        }
      );
    } catch (error) {
      setIsProcessing(false);
      setPaymentError(error.message);
      if (onError) onError(error);
    }
  };

  const resetPaymentState = () => {
    setPaymentError(null);
    setIsProcessing(false);
  };

  return {
    initiatePayment,
    isProcessing,
    paymentError,
    resetPaymentState,
  };
};

export default usePayment;
