import styles from "./ContactCard.module.css";

import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";

type ContactCardProps = {
  icon: string;
  title: string;
  value: string;
  description: string;
};

export default function ContactCard({
  icon,
  title,
  value,
  description,
}: ContactCardProps) {

  const renderIcon = () => {
    switch (icon) {
      case "mail":
        return <Mail size={34} className={styles.icon} />;

      case "message-circle":
        return <MessageCircle size={34} className={styles.icon} />;

      case "map-pin":
        return <MapPin size={34} className={styles.icon} />;

      case "clock":
        return <Clock size={34} className={styles.icon} />;

      default:
        return null;
    }
  };

  return (
    <div className={styles.card}>

      <div className={styles.iconWrapper}>
        {renderIcon()}
      </div>

      <h3 className={styles.title}>
        {title}
      </h3>

      <p className={styles.value}>
        {value}
      </p>

      <p className={styles.description}>
        {description}
      </p>

    </div>
  );
}