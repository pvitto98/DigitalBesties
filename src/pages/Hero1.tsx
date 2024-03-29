import { FunctionComponent, useCallback } from "react";
import NavbarNew from "../components/NavBarNew";
import styles from "./Hero1.module.css";
import Wave from "react-wavify";

const Hero1: FunctionComponent = () => {
  const onServiziButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='iNostriServiziNew']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContattaciButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contattiContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
<div className={styles.hero2}>
  <div className={styles.herocontent}>
    <div className={styles.herotext}>
      <div className={styles.title}>
        <p className={styles.sulWebNon}>{`Sul web non ti `}</p>
        <p className={styles.sulWebNon}>si fila nessuno?</p>
      </div>
      <b className={styles.subtitle}>
        Forse perché non ci conosci ancora...
      </b>
      <div className={styles.herobuttons}>
        <button
          className={styles.servizibutton}
          onClick={onServiziButtonClick}
        >
          <div className={styles.button}>
            <div className={styles.iNostriServizi}>I Nostri Servizi</div>
          </div>
        </button>      
        <button
          className={styles.contattacibutton}
          onClick={onContattaciButtonClick}
        >
          <div className={styles.button}>
            <div className={styles.contattaci}>Contattaci</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Hero1;
