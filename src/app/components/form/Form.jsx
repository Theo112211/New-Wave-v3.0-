import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div>
      <form className={styles.form} action="">
        <label>Beneficiary's Phone Number</label>
        <input type="number" placeholder="Enter Number Here" required />
        <div className={styles.dash}></div>
        <button type="submit">BUY</button>
        <div className={styles.dash}></div>
      </form>
      <p>SKU: N/A Category: Data</p>
    </div>
  );
};

export default Form;
