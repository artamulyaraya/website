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
            YOUR TRUSTED INDONESIA
          </p>

   <h1 className={styles.title}>
  SOURCING &
  PROCUREMENT PARTNER
</h1>

          <p className={styles.description}>
            Helping international buyers source, procure, inspect, and export Indonesian products with confidence.
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