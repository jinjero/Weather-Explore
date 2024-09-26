import styles from "./style.module.css";

export const getClass = (main, icon) => {
  const oneClass = {
    Rain: styles.rain,
    Drizzle: styles.drizzle,
    Snow: styles.snow,
    Thunderstorm: styles.thunderstorm,
    Atmosphere: styles.atmosphere,
  };

  const dayOrNight = icon.includes("d") ? "d" : "n";

  if (main === "Clear") {
    return dayOrNight === "d" ? styles.clear_d : styles.clear_n;
  }

  if (main === "Clouds") {
    return dayOrNight === "d" ? styles.clouds_d : styles.clouds_n;
  }

  return oneClass[main];
};
