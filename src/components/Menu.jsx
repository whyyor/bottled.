import React from "react";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu__container}>
      <div className={styles.menu__links_container}>
        <a href="#">
          <h2>Lorem, ipsum</h2>
        </a>
        <a href="#">
          <h2>Lorem, ipsum</h2>
        </a>
        <a href="#">
          <h2>Lorem, ipsum</h2>
        </a>
        <a href="#">
          <h2>Lorem, ipsum</h2>
        </a>
      </div>
    </div>
  );
};

export default Menu;
