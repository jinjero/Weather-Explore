import styles from "./forcast.module.css";
import Sunrise from "../../../assets/sun-icon/sunrise.svg?react";
import Sunset from "../../../assets/sun-icon/sunset.svg?react";

export default function Forecast({
  temp,
  main,
  description,
  temp_min,
  temp_max,
  sunrise,
  sunset,
  weatherMain = "",
}) {
  const tempClass = weatherMain.includes("clear_d")
    ? styles.clear_d
    : weatherMain.includes("clear_n")
    ? styles.clear_n
    : weatherMain.includes("clouds_d")
    ? styles.clouds_d
    : weatherMain.includes("clouds_n")
    ? styles.clouds_n
    : weatherMain.includes("rain")
    ? styles.rain
    : weatherMain.includes("drizzle")
    ? styles.drizzle
    : weatherMain.includes("snow")
    ? styles.snow
    : weatherMain.includes("atmosphere")
    ? styles.atmosphere
    : weatherMain.includes("thunderstorm")
    ? styles.thunderstorm
    : styles.default;

  return (
    <div className={styles.container}>
      <div>
        <h1 className={`${styles.temp} ${tempClass}`}>{temp}℃</h1>
      </div>
      <div className={styles.description}>
        <p className={styles.main}>{main}</p>
        <p className={styles.des}>{description}</p>
        <p className={styles.high}>This high will be {temp_max}℃</p>
        <p className={styles.low}>This low will be {temp_min}℃</p>
        <div className={styles.sun}>
          <div className={styles.rise}>
            <span className={styles.icon}>
              {" "}
              <Sunrise />{" "}
            </span>
            <span className={styles.small}>Sunrise </span>
            <span className={styles.small}>{sunrise}</span>
          </div>
          <div className={styles.set}>
            <span className={styles.icon}>
              {" "}
              <Sunset />{" "}
            </span>
            <span className={styles.small}>Sunset </span>
            <span className={styles.small}>{sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
