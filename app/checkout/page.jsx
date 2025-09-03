"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { usePayment } from '@/hooks/usePayment';
import { X, CreditCard, User, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/checkout/CheckoutPage.module.scss';
import { formatCurrency, formatItemPrice, extractPrice } from '@/lib/payment/razorpay';
import PaymentSuccessModal from '@/components/payment/PaymentSuccessModal';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const CheckoutPage = () => {
  const router = useRouter();
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

  // Redirect if cart is empty
  React.useEffect(() => {
    if (items.length === 0) {
      router.push('/products');
    }
  }, [items, router]);

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

  const handlePayment = async (e) => {
    e.preventDefault();
    
    await initiatePayment(
      customerInfo,
      (result) => {
        setPaymentResult(result);
        setShowSuccess(true);
      },
      (error) => {
        console.error('Payment failed:', error);
      }
    );
  };

  if (items.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Navbar />
      <div className={styles.checkoutPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <Link href="/products" className={styles.backButton}>
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
            <h1>
              <CreditCard size={28} />
              Checkout
            </h1>
          </div>

          <div className={styles.content}>
            <div className={styles.orderSummary}>
              <h2>Order Summary</h2>
              <div className={styles.itemsList}>
                {items.map((item) => (
                  <div key={item.id} className={styles.summaryItem}>
                    <div className={styles.itemImage}>
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={60}
                        height={60}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{item.name}</span>
                      {item.selectedSize && (
                        <span className={styles.itemSize}>Size: {item.selectedSize}</span>
                      )}
                      <span className={styles.itemQuantity}>Qty: {item.quantity}</span>
                      <span className={styles.itemPrice}>
                        {item.formattedPrice || formatItemPrice(item.price)} each
                      </span>
                    </div>
                    <div className={styles.itemTotal}>
                      {formatCurrency(
                        (item.selectedPrice ?
                          (typeof item.selectedPrice === 'number' ? item.selectedPrice : parseFloat(item.selectedPrice)) :
                          extractPrice(item.price)
                        ) * item.quantity
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.orderTotal}>
                <div className={styles.totalRow}>
                  <span>Subtotal:</span>
                  <span>{formatCurrency(getCartTotal())}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className={styles.totalRow + ' ' + styles.grandTotal}>
                  <span>Total:</span>
                  <span>{formatCurrency(getCartTotal())}</span>
                </div>
              </div>
            </div>

            <form className={styles.customerForm} onSubmit={handlePayment}>
              <h2>Customer Information</h2>
              
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

              <h3>Delivery Address</h3>

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
                <Link href="/products" className={styles.cancelBtn}>
                  Continue Shopping
                </Link>
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
      <Footer />

      <PaymentSuccessModal 
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          router.push('/products');
        }}
        paymentResult={paymentResult}
      />
    </>
  );
};

export default CheckoutPage;
