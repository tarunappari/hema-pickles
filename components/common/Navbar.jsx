"use client";
import React from 'react'
import styles from '@/styles/common/Navbar.module.scss'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';
import CartButton from '@/components/payment/CartButton';


const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Link href='/'><Image src={logo} alt="logo" width={255}height={150} /></Link>
            </div>
            <div className={pathname === "/about" ? styles.whiteLinks : ""}>
                <Link href="/products" className={pathname === "/products" ? styles.active : ""}>Products</Link>
                <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link>
                <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>Contact</Link>
            </div>
            <div className={styles.cartContainer}>
                <CartButton />
            </div>
        </div>
    )
}

export default Navbar;