"use client";
import React, { useEffect, useState } from 'react';
import { CheckCircle, X, Download, Share2 } from 'lucide-react';
import styles from '@/styles/payment/PaymentSuccessModal.module.scss';
import { createOrderFromPayment } from '@/lib/orders/orderManager';

const PaymentSuccessModal = ({ isOpen, onClose, paymentResult }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (isOpen && paymentResult && paymentResult.order_details) {
      // Create order from payment result
      const newOrder = createOrderFromPayment(
        paymentResult,
        paymentResult.order_details.customerInfo || {},
        paymentResult.order_details.items || []
      );
      setOrder(newOrder);
    }
  }, [isOpen, paymentResult]);

  if (!isOpen || !paymentResult) return null;

  const handleDownloadReceipt = () => {
    // In a real application, you would generate and download a PDF receipt
    console.log('Download receipt for payment:', paymentResult.payment_id);
    console.log('Order details:', order);
  };

  const handleShareOrder = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Hema Pickles Order',
        text: `Order placed successfully! Payment ID: ${paymentResult.payment_id}`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.successIcon}>
            <CheckCircle size={80} />
          </div>
          
          <h2 className={styles.title}>Payment Successful!</h2>
          <p className={styles.message}>
            Thank you for your order. Your payment has been processed successfully.
          </p>

          <div className={styles.orderDetails}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Payment ID:</span>
              <span className={styles.value}>{paymentResult.payment_id}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Order ID:</span>
              <span className={styles.value}>{order?.id || paymentResult.order_id}</span>
            </div>
            {order && (
              <div className={styles.detailItem}>
                <span className={styles.label}>Total Amount:</span>
                <span className={styles.value}>₹{order.total.toFixed(2)}</span>
              </div>
            )}
          </div>

          <div className={styles.nextSteps}>
            <h3>What's Next?</h3>
            <ul>
              <li>You will receive an order confirmation email shortly</li>
              <li>We'll prepare your fresh pickles with love</li>
              <li>Your order will be shipped within 2-3 business days</li>
              <li>Track your order status via email updates</li>
            </ul>
          </div>

          <div className={styles.actions}>
            <button 
              className={styles.downloadBtn}
              onClick={handleDownloadReceipt}
            >
              <Download size={18} />
              Download Receipt
            </button>
            <button 
              className={styles.shareBtn}
              onClick={handleShareOrder}
            >
              <Share2 size={18} />
              Share Order
            </button>
          </div>

          <button 
            className={styles.continueBtn}
            onClick={onClose}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
