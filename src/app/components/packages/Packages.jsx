"use client";

import React, { useState } from "react";
import styles from "./packages.module.css";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState({
    size: "",
    price: "0.00",
  });

  const packages = [
    { size: "1GB", price: "5.00" },
    { size: "2GB", price: "8.00" },
    { size: "3GB", price: "12.00" },
    { size: "4GB", price: "15.00" },
    { size: "5GB", price: "18.00" },
    { size: "6GB", price: "20.00" },
    { size: "7GB", price: "25.00" },
    { size: "8GB", price: "30.00" },
    { size: "10GB", price: "35.00" },
    { size: "12GB", price: "40.00" },
    { size: "15GB", price: "50.00" },
    { size: "20GB", price: "60.00" },
    { size: "25GB", price: "70.00" },
    { size: "30GB", price: "85.00" },
    { size: "40GB", price: "100.00" },
    { size: "50GB", price: "120.00" },
    { size: "100GB", price: "200.00" },
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  return (
    <div>
      <div className={styles.tray}>
        <h3>Selected Package: {selectedPackage.size}</h3>
        <div className={styles.list}>
          {packages.map((pkg) => (
            <div
              key={pkg.size}
              className={styles.option}
              onClick={() => handlePackageSelect(pkg)}
              title={`${pkg.size} Package`}
            >
              {pkg.size}
            </div>
          ))}
        </div>
        <h2>₵ {selectedPackage.price}</h2>
      </div>
      <div className={styles.note}>
        <h4>TAKE NOTE</h4>
        <p>❗❗❗❗❗ Delivery take 20mins to 4hrs ❗❗❗❗❗</p>
      </div>
    </div>
  );
};

export default Packages;
