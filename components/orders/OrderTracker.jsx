"use client";
import React from 'react';
import { Check, Package, Truck, MapPin, Clock } from 'lucide-react';
import styles from '@/styles/orders/OrderTracker.module.scss';
import { getOrderTrackingSteps, getOrderStatusColor } from '@/lib/orders/orderManager';

const OrderTracker = ({ order }) => {
  const trackingSteps = getOrderTrackingSteps(order.status);

  const getStepIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock size={20} />;
      case 'confirmed':
        return <Check size={20} />;
      case 'processing':
        return <Package size={20} />;
      case 'shipped':
        return <Truck size={20} />;
      case 'delivered':
        return <MapPin size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  return (
    <div className={styles.orderTracker}>
      <h3>Order Tracking</h3>
      <div className={styles.trackingSteps}>
        {trackingSteps.map((step, index) => (
          <div 
            key={step.status} 
            className={`${styles.step} ${step.completed ? styles.completed : ''}`}
          >
            <div className={styles.stepIcon}>
              {step.completed ? <Check size={20} /> : getStepIcon(step.status)}
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepLabel}>{step.label}</div>
              {step.completed && (
                <div className={styles.stepTime}>Completed</div>
              )}
            </div>
            {index < trackingSteps.length - 1 && (
              <div className={`${styles.stepLine} ${step.completed ? styles.completed : ''}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracker;
