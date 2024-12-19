import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Herosection from "./components/herosection/Herosection";
import Packages from "./components/packages/Packages";
import Form from "./components/form/Form.jsx";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.head}>
        <div className={styles.text}>
          {" "}
          <b>We are open.</b>{" "}
          <p>
            For support, WhatsApp <br />
            <b>
              {" "}
              <em> +233 53 130 6402 OR +233 54 597 3939</em>
            </b>{" "}
          </p>
          Thank you!
        </div>
      </div>
      <div id="nav" className={styles.navbardiv}>
        <Navbar />
      </div>
      <Herosection />
      <div className={styles.wrapper}>
        <div className={styles.label}>Home / Data / MTN</div>
        <div className={styles.label1}>Data</div>
        <h2 className={styles.label2}>MTN</h2>
        <h3 className={styles.range}>₵4.50 - ₵395.00</h3>
      </div>
      <Packages />
      <Form />
      <Description />
      <Footer />
      <Image
        className={styles.whatsApp}
        src="/assets/whatsapp.png"
        alt="WhatsApp Icon"
        width={242}
        height={242}
        title="WhatsApp Us"
      />{" "}
      <a href="#nav" className={styles.toTop}>
        Back to top
      </a>
    </div>
  );
}
