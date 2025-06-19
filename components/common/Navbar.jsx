"use client";
import React, { useState } from 'react'
import styles from '@/styles/common/Navbar.module.scss'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/public/assets/landingpage/hema-logo.png';
import Image from 'next/image';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={styles.container}>
            {/* Desktop Layout */}
            <div className={styles.desktopNav}>
                <div className={styles.title}>
                    <Link href='/'><Image src={logo} alt="logo" width={180} height={90} /></Link>
                </div>
                <div className={pathname === "/about" ? styles.whiteLinks : ""}>
                    <Link href="/products" className={pathname === "/products" ? styles.active : ""}>Products</Link>
                    <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link>
                    <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>Contact</Link>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className={styles.mobileNav}>
                <div className={styles.mobileHeader}>
                    <div className={styles.title}>
                        <Link href='/'><Image src={logo} alt="logo" width={120} height={60} /></Link>
                    </div>
                    <button
                        className={styles.hamburger}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
                        <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
                        <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
                    </button>
                </div>

                <div className={`${styles.mobileLinks} ${isMobileMenuOpen ? styles.mobileLinksOpen : ''} ${pathname === "/about" ? styles.whiteLinks : ""}`}>
                    <Link
                        href="/products"
                        className={pathname === "/products" ? styles.active : ""}
                        onClick={closeMobileMenu}
                    >
                        Products
                    </Link>
                    <Link
                        href="/about"
                        className={pathname === "/about" ? styles.active : ""}
                        onClick={closeMobileMenu}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={pathname === "/contact" ? styles.active : ""}
                        onClick={closeMobileMenu}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;