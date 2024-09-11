import styles from "./title.module.css";

export default function Title() {
  return (
    <div className={styles.title}>
      <h1 className={styles.weather}>WEATHER</h1>
      <h1 className={styles.explore}>Explore</h1>
    </div>
  );
}
