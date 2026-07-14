import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  dark?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  dark = false,
}: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.eyebrow}>
        {eyebrow}
      </p>

      <h2
        className={`${styles.title} ${dark ? styles.dark : ""}`}
      >
        {title}
      </h2>
    </div>
  );
}