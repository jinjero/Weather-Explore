import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <p>LOOK</p>
        <p>UP</p>
        <p>THE</p>
        <p>WEATHER</p>
        <p>IN</p>
        <p>THE</p>
        <p>CITY</p>
      </div>
      <hr className={styles.line} />
    </>
  );
}
