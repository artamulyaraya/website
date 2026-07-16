"use client";

import { useState } from "react";
import { company } from "../lib/company";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
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
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
  >
    {menuOpen ? "✕" : "☰"}
  </button>

      <nav
  className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
>

<a
  href="#home"
  onClick={() => setMenuOpen(false)}
>
  Home
</a>

<a href="#about"
  onClick={() => setMenuOpen(false)}
>
  About
</a>

<a href="#services"
  onClick={() => setMenuOpen(false)}
>
  Services
</a>

<a href="#contact"
  onClick={() => setMenuOpen(false)}
>
  Contact
</a>

        <button className={styles.quoteButton}
        onClick={() => setMenuOpen(false)}>
          Get a Quote
        </button>
      </nav>
    </header>
  );
}