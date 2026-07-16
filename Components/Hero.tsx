import Image from "next/image";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <main
  id="home"
  className={styles.hero}
>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            Trusted Partner for Global Buyers
          </p>

   <h1 className={styles.title}>
  Indonesia Sourcing,
  <br />
  Procurement &
  <br />
  Export Partner
</h1>

          <p className={styles.description}>
            Helping global buyers source reliable Indonesian products through trusted suppliers, procurement support, quality inspection, and export solutions.
          </p>

          <div className={styles.buttons}>
            <a
  href="#contact"
  className={styles.primaryButton}
>
  Contact Us
</a>

            <a
  href="#services"
  className={styles.secondaryButton}
>
  Our Services
</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
        <Image
  src="/images/hero.png"
  alt="Indonesia Export"
  width={760}
  height={760}
  priority
  className={styles.image}
/>
        </div>
      </div>
    </main>
  );
}