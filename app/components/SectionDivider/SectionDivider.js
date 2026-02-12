import styles from "./SectionDivider.module.css";

export default function SectionDivider({ src }) {
  return (
    <div className={styles.divider} aria-hidden="true">
      <img src={src} alt="" className={styles.svg} />
    </div>
  );
}
