import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header__container}>
        <div className={styles.text__container}>
          <div className={styles.text__container_small}>
            <p>Personalized Branding</p>
            <p>Unmatched Quality</p>
          </div>
          <div className={styles.text__container_small}>
            <p>Better Margins</p>
            <p>Alkaline water</p>
          </div>
        </div>
        <div className={styles.bottle__img_container}>
          <h2 className={styles.img__heading}>Introducing</h2>
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
