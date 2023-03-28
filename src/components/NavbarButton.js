import React,{useContext} from "react";
import styles from "../styles/NavbarButton.module.css";
import { UserContext } from "@/contexts/userContext";

const NavbarButton = () => {
  const { menu, setMenu } = useContext(UserContext);
  const toggleMenu = (ev) => {
    ev.preventDefault();
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <label htmlFor="check" className={styles.label} onClick={toggleMenu} >
      <input type="checkbox" id="check" className={styles.checkbox} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default NavbarButton;
