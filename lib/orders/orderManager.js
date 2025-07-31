/**
 * Order Management Utilities
 * Handles order creation, tracking, and management
 */

import { extractPrice } from '@/lib/payment/razorpay';

// Order status constants
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Create order object
export const createOrder = (orderData) => {
  const order = {
    id: generateOrderId(),
    ...orderData,
    status: ORDER_STATUS.PENDING,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // Save to localStorage (in a real app, this would be saved to a database)
  saveOrderToStorage(order);
  
  return order;
};

// Generate unique order ID
export const generateOrderId = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `HP${timestamp}${random}`;
};

// Save order to localStorage
export const saveOrderToStorage = (order) => {
  try {
    const existingOrders = getOrdersFromStorage();
    const updatedOrders = [...existingOrders, order];
    localStorage.setItem('hema-pickles-orders', JSON.stringify(updatedOrders));
  } catch (error) {
    console.error('Error saving order to storage:', error);
  }
};

// Get orders from localStorage
export const getOrdersFromStorage = () => {
  try {
    const orders = localStorage.getItem('hema-pickles-orders');
    return orders ? JSON.parse(orders) : [];
  } catch (error) {
    console.error('Error getting orders from storage:', error);
    return [];
  }
};

// Get order by ID
export const getOrderById = (orderId) => {
  const orders = getOrdersFromStorage();
  return orders.find(order => order.id === orderId);
};

// Update order status
export const updateOrderStatus = (orderId, newStatus) => {
  try {
    const orders = getOrdersFromStorage();
    const orderIndex = orders.findIndex(order => order.id === orderId);
    
    if (orderIndex !== -1) {
      orders[orderIndex].status = newStatus;
      orders[orderIndex].updatedAt = new Date().toISOString();
      localStorage.setItem('hema-pickles-orders', JSON.stringify(orders));
      return orders[orderIndex];
    }
    
    return null;
  } catch (error) {
    console.error('Error updating order status:', error);
    return null;
  }
};

// Get order status display text
export const getOrderStatusDisplay = (status) => {
  const statusMap = {
    [ORDER_STATUS.PENDING]: 'Order Pending',
    [ORDER_STATUS.CONFIRMED]: 'Order Confirmed',
    [ORDER_STATUS.PROCESSING]: 'Processing',
    [ORDER_STATUS.SHIPPED]: 'Shipped',
    [ORDER_STATUS.DELIVERED]: 'Delivered',
    [ORDER_STATUS.CANCELLED]: 'Cancelled',
  };
  
  return statusMap[status] || 'Unknown Status';
};

// Get order status color
export const getOrderStatusColor = (status) => {
  const colorMap = {
    [ORDER_STATUS.PENDING]: '#f59e0b',
    [ORDER_STATUS.CONFIRMED]: '#3b82f6',
    [ORDER_STATUS.PROCESSING]: '#8b5cf6',
    [ORDER_STATUS.SHIPPED]: '#06b6d4',
    [ORDER_STATUS.DELIVERED]: '#10b981',
    [ORDER_STATUS.CANCELLED]: '#ef4444',
  };
  
  return colorMap[status] || '#6b7280';
};

// Calculate order total
export const calculateOrderTotal = (items) => {
  return items.reduce((total, item) => {
    const price = extractPrice(item.price);
    return total + (price * item.quantity);
  }, 0);
};

// Format order date
export const formatOrderDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Get estimated delivery date
export const getEstimatedDeliveryDate = (orderDate) => {
  const date = new Date(orderDate);
  date.setDate(date.getDate() + 5); // Add 5 days for delivery
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Create order from payment success
export const createOrderFromPayment = (paymentResult, customerInfo, items) => {
  // Store only essential item information
  const essentialItems = items.map(item => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price
  }));

  const orderData = {
    paymentId: paymentResult.payment_id,
    razorpayOrderId: paymentResult.order_id,
    customer: customerInfo,
    items: essentialItems,
    total: calculateOrderTotal(items),
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
  };

  return createOrder(orderData);
};

// Get order tracking steps
export const getOrderTrackingSteps = (currentStatus) => {
  const steps = [
    { status: ORDER_STATUS.PENDING, label: 'Order Placed', completed: false },
    { status: ORDER_STATUS.CONFIRMED, label: 'Order Confirmed', completed: false },
    { status: ORDER_STATUS.PROCESSING, label: 'Preparing Your Order', completed: false },
    { status: ORDER_STATUS.SHIPPED, label: 'Order Shipped', completed: false },
    { status: ORDER_STATUS.DELIVERED, label: 'Delivered', completed: false },
  ];

  const statusOrder = [
    ORDER_STATUS.PENDING,
    ORDER_STATUS.CONFIRMED,
    ORDER_STATUS.PROCESSING,
    ORDER_STATUS.SHIPPED,
    ORDER_STATUS.DELIVERED,
  ];

  const currentIndex = statusOrder.indexOf(currentStatus);
  
  if (currentIndex !== -1) {
    for (let i = 0; i <= currentIndex; i++) {
      const stepIndex = steps.findIndex(step => step.status === statusOrder[i]);
      if (stepIndex !== -1) {
        steps[stepIndex].completed = true;
      }
    }
  }

  return steps;
};
