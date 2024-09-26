import React from "react";
import styles from "./header.module.css";

export default function Header({ weatherMain = "header" }) {
  const headerClass =
    weatherMain.includes("rain") || weatherMain.includes("clouds_n")
      ? styles.grey
      : weatherMain.includes("atmosphere")
      ? styles.black
      : weatherMain === "header"
      ? styles.main
      : styles.white;

  const lineClass =
    weatherMain.includes("rain") || weatherMain.includes("clouds_n")
      ? styles.greyB
      : weatherMain.includes("atmosphere")
      ? styles.blackB
      : weatherMain === "header"
      ? styles.mainB
      : styles.whiteB;

  return (
    <>
      <div className={`${styles.header} ${headerClass}`}>
        <p>LOOK</p>
        <p>UP</p>
        <p>THE</p>
        <p>WEATHER</p>
        <p>IN</p>
        <p>THE</p>
        <p>CITY</p>
      </div>
      <hr className={`${styles.line} ${lineClass}`} />
    </>
  );
}
