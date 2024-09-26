import styles from "./title.module.css";
import StarWhite from "../../../assets/star-btn/star-white.svg?react";
import StarBlack from "../../../assets/star-btn/star-black.svg?react";
import StarGrey from "../../../assets/star-btn/star-grey.svg?react";

export default function CityTitle({ city, weatherMain = "white" }) {
  const colorClass =
    weatherMain.includes("rain") || weatherMain.includes("clouds_n")
      ? styles.grey
      : weatherMain.includes("atmosphere")
      ? styles.black
      : styles.white;

  const StarBtn =
    weatherMain.includes("rain") || weatherMain.includes("clouds_n")
      ? StarGrey
      : weatherMain.includes("atmosphere")
      ? StarBlack
      : StarWhite;

  return (
    <div className={styles.container}>
      <h1 className={`${styles.first} ${colorClass}`}>The Weather in</h1>
      <div className={styles.btn_container}>
        <h1 className={`${styles.city} ${colorClass}`}>{city}</h1>
        <button className={styles.star}>
          <StarBtn />
        </button>
      </div>
    </div>
  );
}
