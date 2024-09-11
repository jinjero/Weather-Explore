import React from "react";

export default function FourButton({ svgImage, label }) {
  return (
    <div style={styles.container}>
      <button style={styles.button}>
        <div>{svgImage}</div>
      </button>
      <p style={styles.label}>{label}</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "423px",
  },

  button: {
    border: "none",
    cursor: "pointer",
    marginBottom: "20px",
  },

  label: {
    fontWeight: "700",
    color: "#091F6C",
    textDecoration: "none",
  },
};
