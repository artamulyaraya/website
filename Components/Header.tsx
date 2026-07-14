import { company } from "../lib/company";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
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
      <nav className={styles.nav}>
        <a href="#home">
  Home
</a>

<a href="#about">
  About
</a>

<a href="#services">
  Services
</a>

<a href="#contact">
  Contact
</a>

        <button className={styles.quoteButton}>
          Get a Quote
        </button>
      </nav>
    </header>
  );
}