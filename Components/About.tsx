import styles from "./About.module.css";
import SectionTitle from "./UI/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className={styles.about}
    >
      <div className={styles.container}>

        <SectionTitle
          eyebrow="ABOUT US"
          title="Indonesia Sourcing & Procurement Partner"
        />

        <p className={styles.description}>
  Arta Mulya Raya is an independent Indonesia sourcing and procurement partner connecting international buyers with reliable manufacturers, processors, and agricultural suppliers across Indonesia. We help buyers source products, manage procurement, perform quality inspections, consolidate shipments, and coordinate exports according to each buyer&apos;s specific requirements.
</p>

      </div>
    </section>
  );
}