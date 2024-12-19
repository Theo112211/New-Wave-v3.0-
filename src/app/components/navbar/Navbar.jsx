import React from "react";
import styles from "../../page.module.css";
import { IoMenu } from "react-icons/io5";
import { IoLogoAndroid } from "react-icons/io";
// import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className={styles.nav}>
        <div>
          <IoLogoAndroid className={styles.logo} />
        </div>

        {/* <div className={styles.menu}>
          <a className={styles.link}>Home</a>
          <a className={styles.link}>Shop</a>
          <a className={styles.link}>Cart</a>
          <a className={styles.link}>Checkout</a>
        </div> */}

        <div>
          <IoMenu className={styles.menuico} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
