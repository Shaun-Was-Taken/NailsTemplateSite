"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css"; // Import the CSS module

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/path-to-your-logo.png"
            alt="Pink Lotus Logo"
            width={150}
            height={50}
          />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        {/* Add additional links as needed */}
      </nav>
    </header>
  );
}
