import React from "react";
import Image from "next/image";
import NavbarButton from "@/components/NavbarButton";
import styles from "../styles/Header.module.css";
import Menu from "./Menu";

const Header = () => {
  return (
    <div>
      <div className={styles.header__container}>
        <div className={styles.navbar__container}>
          <Image
            src="/finalbottled.svg"
            className={styles.logo}
            alt="logo"
            width={120}
            height={120}
          />
          <NavbarButton classname={styles.navbarbutton} />
        </div>
        <Menu/>
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
