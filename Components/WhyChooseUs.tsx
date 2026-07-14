import styles from "./WhyChooseUs.module.css";
import SectionTitle from "./UI/SectionTitle";
import { whyChooseUs } from "../lib/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section
      className={styles.whyChooseUs}
    >
      <div className={styles.container}>

        <SectionTitle
          eyebrow="WHY CHOOSE US"
          title="Your Reliable Partner in Indonesia"
        />

        <p className={styles.description}>
          We combine local sourcing expertise, supplier verification,
          procurement management, and export coordination into one
          integrated solution for international buyers.
        </p>

        <div className={styles.grid}>
  {whyChooseUs.map((item) => (
    <div key={item.title} className={styles.card}>
      <h3 className={styles.cardTitle}>
        {item.title}
      </h3>

      <p className={styles.cardDescription}>
        {item.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}