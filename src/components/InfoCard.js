import React from "react";
import Image from "next/image";
import styles from "../styles/InfoCard.module.css";

const Card = ({
  imageSrc,
  paraContent,
  headingContent,
  toggle,
  width,
  height,
}) => {
  const image = (
    <>
      <div className={styles.cardImgContainer}>
        <Image
          src={imageSrc}
          className={styles.cardImg}
          width={width}
          height={height}
          alt="roadmap image"
        />
      </div>
    </>
  );
  return (
    <div className={styles.cardContainer}>
      {toggle ? image : null}
      <div className={styles.textContainer}>
        <h2 className={styles.headingText}>{headingContent}</h2>
        <p>{paraContent}</p>
      </div>
      {!toggle ? image : null}
    </div>
  );
};

const InfoCard = () => {
  return (
    <div className={styles.infoCardContainer} style={{ marginTop: "5vh" }}>
      <h1>But what do we do?</h1>
      <Card
        imageSrc="/Personalized.webp"
        paraContent="At our company, we specialize in creating customized bottles that cater specifically to the needs of the HoReCa (Hotels, Restaurants, and Cafes) industry. With a focus on personalization, we work closely with businesses to design and produce bottles that align with their unique branding and marketing strategies. From custom labels to unique shapes and sizes, our bottles are designed to stand out and make a lasting impression on customers. We take pride in our attention to detail and commitment to delivering high-quality products that exceed expectations."
        headingContent="Personalization"
        toggle={false}
        width="170"
        height="280"
      />

      <Card
        imageSrc="/Alkaline.webp"
        paraContent="At our company, we take great pride in providing our customers with high-quality alkaline water in our personalized bottles. Alkaline water has been shown by several studies to have a variety of health benefits, such as helping to neutralize acid in the body and improving hydration. Our alkaline water is carefully sourced and processed to ensure that it meets the highest standards of quality and purity, and our bottles are designed to preserve its healthful properties. We believe that by providing our customers with access to this high-quality water, we can help them to lead healthier and happier lives."
        headingContent="Alkaline water"
        toggle={true}
        width="250"
        height="250"
      />
    </div>
  );
};

export default InfoCard;
