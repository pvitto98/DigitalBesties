import { FunctionComponent } from "react";
import styles from "./Motto.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN
import { useTypewriter, Cursor } from 'react-simple-typewriter'

AOS.init();
const Motto: FunctionComponent = () => {
  const [text, typewriterHelper] = useTypewriter({
    words: [' Raccontiamo storie', 'Accendiamo passioni', 'Creiamo connessioni'],
    loop: true,
    deleteSpeed: 50,
  });
  return (
    <div className={styles.motto}>
      <div className={styles.title}>
        <div className={styles.ilNostroCredo} data-aos="fade-up">
          Il nostro credo
        </div>
        <div className={styles.raccontiamoStorieAccendiamo} data-aos="fade-up">
          <span style={{ color: 'white' }}>{text}</span>
          <br />
          per te e per i tuoi progetti digitali
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