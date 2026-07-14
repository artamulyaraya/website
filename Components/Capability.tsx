import styles from "./Capability.module.css";
import SectionTitle from "./UI/SectionTitle";
import {
  capabilitySection,
  capabilities,
} from "../lib/capabilities";

export default function Capability() {
  return (
    <section id="capability" className={styles.capability}>
      <div className={styles.container}>

      <SectionTitle
  eyebrow={capabilitySection.eyebrow}
  title={capabilitySection.title}
/>

<p className={styles.description}>
  {capabilitySection.description}
</p>

        <div className={styles.grid}>
          {capabilities.map((item) => (
            <div
              key={item.title}
              className={styles.card}
            >
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