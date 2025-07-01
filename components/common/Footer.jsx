import React from 'react'
import styles from '@/styles/common/Footer.module.scss'
import Link from 'next/link';
import logo from '@/public/assets/logo.png';
import amigos from '@/public/assets/amigos.png';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLinksContainer}>
                    <Image src={logo} alt="logo" width={220} height={90} />
                    <div>
                        <div className={styles.contactItem}>
                            <FaPhoneAlt className={styles.icon} />
                            <a href="tel:+916303191921">+91 6303191921</a>
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
                <div className={`${styles.footerLinksContainer} ${styles.desktopInfo}`}>
                    <div>
                        <h2>Company</h2>
                    </div>
                    <div>
                        <Link href=''>Products</Link>
                        <Link href="">About</Link>
                        <Link href=''>Contact</Link>
                    </div>
                </div>
                <div className={`${styles.footerLinksContainer} ${styles.desktopInfo}`}>
                    <div>
                        <h2>Connect</h2>
                    </div>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.facebook.com/hemapickles" target='_blank' aria-label="Facebook">
                            <FaFacebook className={styles.socialIcon} />
                        </Link>
                        <Link href="https://www.instagram.com/hemapickles/" target='_blank'  aria-label="Instagram">
                            <FaInstagram className={styles.socialIcon} />
                        </Link>
                        <Link href="https://wa.me/916303191921" target='_blank' aria-label="WhatsApp">
                            <FaWhatsapp className={styles.socialIcon} />
                        </Link>
                    </div>
                </div>
                <div className={styles.mobileInfo}>
                    <div className={styles.footerLinksContainer}>
                        <div>
                            <h2>Company</h2>
                        </div>
                        <div>
                            <Link href=''>Products</Link>
                            <Link href="">About</Link>
                            <Link href=''>Contact</Link>
                        </div>
                    </div>
                    <div className={styles.footerLinksContainer}>
                        <div>
                            <h2>Connect</h2>
                        </div>
                        <div className={styles.socialIcons}>
                            <Link href="" aria-label="Facebook">
                                <FaFacebook className={styles.socialIcon} />
                            </Link>
                            <Link href="" aria-label="Instagram">
                                <FaInstagram className={styles.socialIcon} />
                            </Link>
                            <Link href="" aria-label="Twitter">
                                <FaTwitter className={styles.socialIcon} />
                            </Link>
                            <Link href="https://wa.me/916303191921" aria-label="WhatsApp">
                                <FaWhatsapp className={styles.socialIcon} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className={styles.copyrightSection}>
                <p>&copy; 2025 All rights reserved</p>
                <Image src={amigos}alt='logo'width={50} />
            </div>
        </div >
    )
}

export default Footer;