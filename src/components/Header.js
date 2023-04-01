import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Menu from "./Menu";

const Header = () => {
  return (
    <div>
      <div className={styles.header__container}>
        <Image
          src="/bottle.png"
          width={300}
          height={650}
          alt="bottle"
          className={styles.bottle__img}
        />
        <Menu />
        <div className={styles.header__text_container}>
          <h1>
            Superior Quality
            <br /> Personalized Bottles
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
