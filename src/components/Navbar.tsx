import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN
import Ticker from "./ExperimentalComponent/Ticker";

AOS.init();

const Navbar: FunctionComponent = () => {
  return (
    <div className={styles.navbar} data-aos="fade-down" data-aos-delay="300">
      {/* <div className={styles.logo}>Digital Besties</div> */}
      <Ticker></Ticker>
    </div>
  );
};

export default Navbar;
