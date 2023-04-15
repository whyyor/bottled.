import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header__container}>
        <h2 className={styles.header__heading}>Introducing</h2>
        <div className={styles.text__container}>
          <div className={styles.text__container_small}>
            <p>Personalized Branding</p>
            <p style={{ paddingLeft: "35px" }}>Unmatched Quality</p>
          </div>
          <div className={styles.text__container_small}>
            <p>Better Margins</p>
            <p>Alkaline water</p>
          </div>
        </div>
        <div className={styles.bottle__img_container}>
          <Image
            src="/bottle.webp"
            width={250}
            height={550}
            alt="bottle"
            className={styles.bottle__img}
          />

          <Image
            src="/BottleOnBottle.svg"
            width={150}
            height={250}
            alt="bottle"
            className={styles.bottleLogo__img}
          />
          <Image
            src="/Arrow.svg"
            width={1950}
            height={950}
            alt="arrows"
            className={styles.arrow__img}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
