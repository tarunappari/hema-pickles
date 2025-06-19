import React from 'react'
import styles from '@/styles/common/Footer.module.scss'
import Link from 'next/link';
import logo from '@/public/assets/landingpage/hema-logo.png';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLinksContainer}>
                <Image src={logo} alt="logo" width={180} height={90} />
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
                <div>
                    <Link href="">Facebook</Link>
                    <Link href="">Instagram</Link>
                    <Link href="">Twitter</Link>
                    <Link href="">WhatsApp</Link>
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
                    <div>
                        <Link href="">Facebook</Link>
                        <Link href="">Instagram</Link>
                        <Link href="">Twitter</Link>
                        <Link href="">WhatsApp</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;