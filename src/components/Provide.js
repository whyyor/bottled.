import React from "react";
import styles from "../styles/Provide.module.css";

const Menu = () => {
  return (
    <div className={styles.provide__container}>
      <h1 className={styles.heading}>Our Aim</h1>
      <div className={styles.solution__container}>
        <p>
          We aim to differentiate ourselves by providing both high-quality,
          great-tasting alkaline water and beautifully designed, customizable
          bottles that meet the needs and preferences of our clients and their
          customers. By offering customized water bottles we also aim to help
          our clients in the hospitality industry showcase their own brand and
          create a more memorable guest experience.
        </p>
      </div>
    </div>
  );
};

export default Menu;
