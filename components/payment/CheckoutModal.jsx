"use client";
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { usePayment } from '@/hooks/usePayment';
import { X, CreditCard, User, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import styles from '@/styles/payment/CheckoutModal.module.scss';
import { formatCurrency, formatItemPrice } from '@/lib/payment/razorpay';
import PaymentSuccessModal from './PaymentSuccessModal';

const CheckoutModal = ({ isOpen, onClose, onCartClose }) => {
  const { items, getCartTotal } = useCart();
  const { initiatePayment, isProcessing, paymentError } = usePayment();
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    country: 'India',
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Special handling for PIN code - only allow numbers
    if (name === 'pinCode') {
      const numericValue = value.replace(/\D/g, '').slice(0, 6);
      setCustomerInfo(prev => ({
        ...prev,
        [name]: numericValue
      }));
      return;
    }

    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    await initiatePayment(
      customerInfo,
      (result) => {
        setPaymentResult(result);
        setShowSuccess(true);
        onClose();
        onCartClose();
      },
      (error) => {
        console.error('Payment failed:', error);
      }
    );
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = customerInfo.name &&
                      customerInfo.email &&
                      isEmailValid(customerInfo.email) &&
                      customerInfo.phone &&
                      customerInfo.address &&
                      customerInfo.city &&
                      customerInfo.state &&
                      customerInfo.pinCode &&
                      customerInfo.pinCode.length === 6 &&
                      customerInfo.country;

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h2>
              <CreditCard size={24} />
              Checkout
            </h2>
            <button className={styles.closeButton} onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          <div className={styles.content}>
            <div className={styles.orderSummary}>
              <h3>Order Summary</h3>
              <div className={styles.itemsList}>
                {items.map((item) => (
                  <div key={item.id} className={styles.summaryItem}>
                    <div className={styles.itemImage}>
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={50}
                        height={50}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemQuantity}>Qty: {item.quantity}</span>
                    </div>
                    <span className={styles.itemPrice}>{formatItemPrice(item.price)}</span>
                  </div>
                ))}
              </div>
              <div className={styles.total}>
                <strong>Total: {formatCurrency(getCartTotal())}</strong>
              </div>
            </div>

            <form className={styles.customerForm} onSubmit={handlePayment}>
              <h3>Customer Information</h3>
              
              <div className={styles.formGroup}>
                <label htmlFor="name">
                  <User size={18} />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">
                  <Mail size={18} />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">
                  <Phone size={18} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address">
                  <MapPin size={18} />
                  Street Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your street address"
                  rows={2}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your city"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="state">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={customerInfo.state}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your state"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="pinCode">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    value={customerInfo.pinCode}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter PIN code"
                    pattern="[0-9]{6}"
                    maxLength="6"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="country">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={customerInfo.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="India">India</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>

              {paymentError && (
                <div className={styles.error}>
                  {paymentError}
                </div>
              )}

              <div className={styles.actions}>
                <button 
                  type="button"
                  className={styles.cancelBtn}
                  onClick={onClose}
                  disabled={isProcessing}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className={styles.payBtn}
                  disabled={!isFormValid || isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Pay ${formatCurrency(getCartTotal())}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <PaymentSuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        paymentResult={paymentResult}
      />
    </>
  );
};

export default CheckoutModal;
