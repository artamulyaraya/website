import styles from "./MissionVision.module.css";
import { mission, vision } from "@/lib/about";

export default function MissionVision() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.card}>
          <h3 className={styles.title}>
            {mission.title}
          </h3>

          <p className={styles.description}>
            {mission.description}
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.title}>
            {vision.title}
          </h3>

          <p className={styles.description}>
            {vision.description}
          </p>
        </div>

      </div>
    </section>
  );
}