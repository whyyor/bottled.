import React from "react";
import Image from "next/image";
import styles from "../styles/Team.module.css";

const Card = ({ name, imgSrc, designation, twitterUrl, linkdinUrl }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImgContainer}>
        <Image
          src={imgSrc}
          width={100}
          height={100}
          className={styles.profilePic}
          alt="profile picture"
        />
        <Image
          src="./Grid.svg"
          width={180}
          height={180}
          className={styles.profileBackground}
          alt="profile picture background grid"
        />
      </div>
      <div className={styles.infoContainer}>
        <h3>{name}</h3>
        <p>{designation}</p>
        <div className={styles.socialsContainer}>
          <a href={twitterUrl}>
            <Image
              src="./twitter.svg"
              width={35}
              height={35}
              className={styles.socialImg}
              alt="twitter logo"
            />
          </a>
          <a href={linkdinUrl}>
            <Image
              src="./linkdin.svg"
              width={35}
              height={35}
              className={styles.socialImg}
              alt="linkdin logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <h1>Our team</h1>
      <div className={styles.cardsContainer}>
        <Card
          name="Safal Malhotra"
          imgSrc="/edlong.jpg"
          designation="COO"
          twitterUrl="twitter.com/elon"
          linkdinUrl="twitter.com/elon"
        />

        <Card
          name="Kunal Sharma"
          imgSrc="/edlong.jpg"
          designation="CEO"
          twitterUrl="twitter.com/elon"
          linkdinUrl="twitter.com/elon"
        />

        <Card
          name="Akshat Dhawan"
          imgSrc="/edlong.jpg"
          designation="CD"
          twitterUrl="twitter.com/elon"
          linkdinUrl="twitter.com/elon"
        />
      </div>
    </div>
  );
};

export default Team;
