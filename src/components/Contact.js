import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Get in touch!</h1>
      <form action="#" method="post">
        <div className={styles.nameEmailContainer}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name *"
            required
            className={styles.input}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email *"
            required
            className={styles.input}
          />
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="Message *"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
