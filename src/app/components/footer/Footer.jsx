"use client";

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>MADealz GH</h2>
        <p className={styles.description}>
          Great packages at the Best Price you will ever find
        </p>

        <div className={styles.section}>
          <h3 className={styles.subheading}>OPENING HOURS</h3>
          <p>Monday - Saturday</p>
          <p>8:00am - 9:30pm</p>
          <p>Sundays</p>
          <p>11:00am - 9:30pm</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subheading}>QUICK LINKS</h3>
          <div className={styles.links}>
            <li>Chat Support +233 54 597 3939 / +233 53 130 6402 </li>
            <li>Click To Chat Us On Whatsapp</li>
            {/* <li>AFA REG. (Reg & Validation 24hr.)</li> */}
            <li>Terms And Condition</li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
