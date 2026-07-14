/**
 * STATUS
 * LOCKED V1
 * Last Review: July 2026
 */
import styles from "./Services.module.css";
import SectionTitle from "./UI/SectionTitle";
import { services } from "../lib/services";
export default function Services() {
  return (
    <section
  id="services"
  className={styles.services}
>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="OUR SERVICES"
          title="End-to-End Sourcing Solutions"
        />
        <p className={styles.description}>
          We support international buyers throughout the sourcing,
          procurement, inspection, consolidation, and export process
          from Indonesia.
        </p>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}