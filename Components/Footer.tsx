import { company } from "../lib/company";
import { services } from "../lib/services";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Brand */}
        <div className={styles.brand}>
          <h3 className={styles.title}>
            {company.name}
          </h3>

          <p className={styles.description}>
            Independent sourcing and procurement partner connecting
            international buyers with reliable Indonesian suppliers
            through professional procurement and export coordination.
          </p>
        </div>

        {/* Services */}
        <div className={styles.column}>
          <h4 className={styles.heading}>
            Our Services
          </h4>

          {services.map((service) => (
            <p
              key={service.title}
              className={styles.item}
            >
              {service.title}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h4 className={styles.heading}>
            Quick Contact
          </h4>

          <p className={styles.location}>
            {company.location}
          </p>

          <a
  href={`mailto:${company.email}`}
  className={styles.item}
>
  {company.email}
</a>

          <p className={styles.copyright}>
            © 2026 {company.name}
          </p>
        </div>

      </div>
    </footer>
  );
}