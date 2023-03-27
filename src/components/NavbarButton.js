import React from "react";
import styles from "../styles/NavbarButton.module.css";

const NavbarButton = () => {
  return (
    <label htmlFor="check" className={styles.label}>
      <input type="checkbox" id="check" className={styles.checkbox} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default NavbarButton;
