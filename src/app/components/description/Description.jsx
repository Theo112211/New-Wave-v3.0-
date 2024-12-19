"use client";

import React from "react";
import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <span className={styles.activeTab}>Description</span>
        {/* <span className={styles.inactiveTab}>Additional information</span> */}
      </div>

      <div className={styles.content}>
        <p>
          Our <strong>DATA REQUEST DOESN’T</strong> support the following
        </p>
        <div className={styles.list}>
          <p>Turbone SIM</p>
          <p>Merchant SIM</p>
          <p>EVD SIM</p>
          <p>Broadband SIM</p>
          <p>Blacklisted SIM</p>
          <p>Roaming SIM</p>
          <p>Different Network</p>
          <p>Wrong Number</p>
          <p>Inactive Number</p>
        </div>
      </div>
      <p className={styles.warning}>
        <b className={styles.red}>Note: </b>
        Any data transferred to the above SIMS get burned and cannot be
        reversed. <b>Client pays for the loss</b>.
      </p>
    </div>
  );
};

export default Description;
