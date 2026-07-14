import styles from "./Workflow.module.css";
import SectionTitle from "./UI/SectionTitle";
import { workflow } from "../lib/workflow";
export default function Workflow() {
  return (
    
  <section
    id="workflow"
    className={styles.workflow}
    >
      <div className={styles.container}>
  <SectionTitle
    eyebrow="HOW WE WORK"
    title="Simple & Transparent Process"
  />
  
<p className={styles.description}>
  Our structured workflow ensures clear communication, efficient procurement, and reliable export coordination from inquiry to shipment.
</p>

  <div className={styles.grid}>
          {workflow.map((step) => (
            <div key={step.number} className={styles.card}>
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}