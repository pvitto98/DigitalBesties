import { FunctionComponent } from "react";
import NavbarNew from "../components/NavbarNew";
import styles from "./Hero1.module.css";

const Hero1: FunctionComponent = () => {
  return (
    <div className={styles.hero2}>
      <NavbarNew />
      <div className={styles.herocontent}>
        <div className={styles.herotext}>
          <div className={styles.title}>
            <p className={styles.sulWebNon}>{`Sul web non ti `}</p>
            <p className={styles.sulWebNon}>si fila nessuno?</p>
          </div>
          <b className={styles.subtitle}>
            Forse perché non ci conosci ancora...
          </b>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default Hero1;
