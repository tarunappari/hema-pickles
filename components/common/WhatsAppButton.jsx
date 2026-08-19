"use client";
import React from 'react';
import styles from '@/styles/common/WhatsAppButton.module.scss';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "916303191921"; 
    const message = "Hello Hema Pickles! I'm interested in ordering.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsappButton} 
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
}

export default WhatsAppButton;
