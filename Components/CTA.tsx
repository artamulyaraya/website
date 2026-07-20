import styles from "./CTA.module.css";
import SectionTitle from "./UI/SectionTitle";

export default function CTA() {
  return (
    <section
  id="contact"
  className={styles.cta}
>
        <div className={styles.container}>
      <SectionTitle
  eyebrow="LET'S WORK TOGETHER"
  title="Ready to Source Products from Indonesia?"
  dark
/>

      <p className={styles.description}>
        Let us help you source quality products from Indonesia with reliable
        support and transparent communication.
      </p>

      <a
  href="mailto:sales@artamulyaraya.com"
  className={styles.button}
>
  Contact Us
</a>
    </div>
    </section>
  );
}