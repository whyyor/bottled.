import React, { useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  const { menu } = useContext(UserContext);
  const menuClasses = `${styles.menu__container} ${menu ? "" : styles.hidden}`;
  return (
    <div className={menuClasses}>
      <div className={styles.menu__links_container}>
        <a href="#">
          <h2>Order Now</h2>
        </a>
        <a href="#">
          <h2>Our Vision</h2>
        </a>
        <a href="#">
          <h2>Testimonials</h2>
        </a>
        <a href="#">
          <h2>About Us</h2>
        </a>
      </div>
    </div>
  );
};

export default Menu;
