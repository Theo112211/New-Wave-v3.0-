import React from "react";
import styles from "./invest.module.css";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { FcAbout } from "react-icons/fc";
import { MdLocalOffer } from "react-icons/md";

const page = () => {
  return (
    <div className={styles.mainwrapper}>
      <div className={styles.header}>
        <div className={styles.imgdiv}>
          <IoMenu className={styles.icon} />
          <Image
            src={"/gh.png"}
            alt=""
            width={500}
            height={500}
            className={styles.img}
          />
        </div>
        <div className={styles.investment}>
          <h5 className={styles.title}>
            sika <br />
            <span>investment</span>
          </h5>
        </div>
        <div className={styles.logins}>
          <button className={styles.login}>Login</button>
          <button className={styles.register}>Register</button>
        </div>
      </div>

      <div className={styles.down}>
        <div className={styles.hero}>
          <div className={styles.writings}>
            <h2 className={styles.h2}>Investing </h2>
            <h3 className={styles.h3}>Even Better Now</h3>
            <button className={styles.investbtn}>Invest Now</button>
          </div>
          <div className={styles.imgdiv1}>
            <Image
              src={"/MTN-store.jpg"}
              alt=""
              width={500}
              height={500}
              className={styles.imghero}
            />
          </div>
        </div>
        <div className={styles.afterhero}>
          <h2 className={styles.h22}>
            About <FcAbout />{" "}
          </h2>
          <p className={styles.para}>
            Welcome to Sika investment the newest investement agency in town,
            where innovation meets financial growth. We’re excited to invite you
            to become a shareholder in this high-potential venture and start
            earning profits every week!
          </p>
        </div>
        <div className={styles.afterhero}>
          <h2 className={styles.h22}>
            Offers <MdLocalOffer />{" "}
          </h2>
          <p className={styles.p}>Purchase an offer suitable for you </p>
          <div className={styles.offers}>
            <div className={styles.offer1}>
              <div className={styles.desc}>
                We are thrilled to present an exciting investment opportunity in
                our fast-growing tomato-selling business! Fresh, healthy, ..{" "}
              </div>
              <div className={styles.stock}>Instock</div>
              <Image
                src={"/Tomato.webp"}
                alt=""
                width={500}
                height={500}
                className={styles.offerimg}
              />
            </div>
            <div className={styles.offer1}>
              <div className={styles.desc}>
                Invest in Fuel, Earn Daily Profits!
              </div>
              <div className={styles.stock}>
                <h3>Instock</h3>
              </div>
              <Image
                src={"/taxi.jpg"}
                alt=""
                width={500}
                height={500}
                className={styles.offerimg}
              />
            </div>
            <div className={styles.offer1}>
              <div className={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
              <div className={styles.stock}>Instock</div>
              <Image
                src={"/MTN-store.jpg"}
                alt=""
                width={500}
                height={500}
                className={styles.offerimg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
