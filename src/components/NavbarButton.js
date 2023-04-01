import React, { useContext } from "react";
import styles from "../styles/NavbarButton.module.css";
import { UserContext } from "@/contexts/userContext";
import Image from "next/image";

const NavbarButton = () => {
  const { menu, setMenu } = useContext(UserContext);
  const toggleMenu = (ev) => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <div>
      <Image
        src="/finalbottled.svg"
        className={styles.logo}
        alt="logo"
        width={120}
        height={120}
      />
      <label htmlFor="check" className={styles.label} onChange={toggleMenu}>
        <input type="checkbox" id="check" className={styles.checkbox} />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default NavbarButton;
