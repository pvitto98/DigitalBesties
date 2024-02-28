import { FunctionComponent } from "react";
import styles from "./Motto.module.css";

const Motto: FunctionComponent = () => {
  return (
    <div className={styles.motto}>
      <div className={styles.title}>
        <div className={styles.ilNostroCredo}>
          Il nostro credo
        </div>
        <div className={styles.raccontiamoStorieAccendiamo}>
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