"use client";

import { useState } from "react";
import { company } from "../lib/company";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
      <div className={styles.logoArea}>
        <Image
          src="/images/amr-logo.png"
          alt="ARTA MULYA RAYA"
          width={52}
          height={52}
        />

        <div>
          <div className={styles.companyName}>
            {company.name}
          </div>

          <div className={styles.tagline}>
            {company.tagline}
          </div>
        </div>
      </div>

      {/* Navigation */}

  <button
  className={styles.burger}
  onClick={() => setMenuOpen((prev) => !prev)}
  aria-label="Toggle navigation"
  aria-expanded={menuOpen}
  aria-controls="primary-navigation"
>
  {menuOpen ? "✕" : "☰"}
</button>

    <nav
  id="primary-navigation"
  className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
>

<a
  href="#home"
  onClick={() => setMenuOpen((prev) => !prev)}
>
  Home
</a>

<a href="#about"
  onClick={() => setMenuOpen((prev) => !prev)}
>
  About
</a>

<a href="#services"
  onClick={() => setMenuOpen((prev) => !prev)}
>
  Services
</a>

<a href="#contact"
  onClick={() => setMenuOpen((prev) => !prev)}
>
  Contact
</a>

<a
  href="#quote"
  className={styles.quoteButton}
  onClick={() => setMenuOpen((prev) => !prev)}
  >
  Get a Quote
</a>

      </nav>
      </div>
    </header>
  );
}