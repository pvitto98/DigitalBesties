import { FunctionComponent } from "react";
import styles from "./Motto.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN

AOS.init();
const Motto: FunctionComponent = () => {
  return (
    <div className={styles.motto}>
      <div className={styles.title}>
        <div className={styles.ilNostroCredo} data-aos="fade-up">
          Il nostro credo
        </div>
        <div className={styles.raccontiamoStorieAccendiamo} data-aos="fade-up">
          Raccontiamo storie, accendiamo passioni e creiamo connessioni per te e per i tuoi progetti digitali
        </div>
      </div>
      <img
        className={styles.mottoimageIcon}
        alt=""
        src="/mottoimage.svg"
      />
    </div>
  );
};

export default Motto;