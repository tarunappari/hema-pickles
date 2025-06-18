import React, { useState } from 'react'
import styles from '@/styles/contact/contact.module.scss'
import Lottie from 'lottie-react';
import mango from '@/public/assets/lottie/mango.json'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.titleInfo}>
        <h1 >We’d Love to Hear From You!</h1>
        <p>place your order through WhatsApp or the contact form. We'll handle the rest — from kitchen to your doorstep.
        </p>
      </div>
      <div className={styles.contactContent}>
        <div className={styles.leftContainer}>
          <Lottie loop={true} animationData={mango} autoplay={true} />
        </div>
        <div className={styles.rightContainer}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className={styles.contactInfoContainer}>
        <div>
          <div className={styles.contactItem}>
            <FaWhatsapp className={styles.icon} style={{ fontSize: '2rem' }} />
            <a
              href="https://wa.me/916303191921"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 6303191921
            </a>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:hemapickles@gmail.com">hemapickles@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>Ongole</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;