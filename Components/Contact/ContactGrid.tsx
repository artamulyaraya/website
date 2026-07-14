import ContactCard from "./ContactCard";
import { contactCards } from "@/lib/contactPage";

import styles from "./Contact.module.css";

export default function ContactGrid() {
  return (
    <section className={styles.grid}>
      {contactCards.map((card) => (
  <ContactCard
    key={card.title}
    icon={card.icon}
    title={card.title}
    value={card.value}
    description={card.description}
  />
))}
    </section>
  );
}