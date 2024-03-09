import { FunctionComponent, useCallback, useEffect } from "react";
import ContactFormContainer from "./ContactFormContainer";
import styles from "./Hero.module.css";
import DripEffect from "./DripEffect"; // Assuming DripEffect contains the HTML and CSS for the liquid drop effect
import Ticker from "./ExperimentalComponent/Ticker";

const Hero: FunctionComponent = () => {
  
  const onServiziButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='iNostriServiziContainer']"
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
    <div className={styles.hero}>
            {/* <Ticker /> */}

      <div className={styles.herocontent}>
        <div className={styles.herotext}>
          <div className={styles.title}>
            <p className={styles.sulWebNon}>Sul web non ti </p>
            <p className={styles.sulWebNon}>si fila nessuno?</p>
          </div>
          <div className={styles.subtitle}>Forse perché non ci conosci ancora...</div>
        </div>
        <div className={styles.herobuttons} data-aos="fade-up" data-aos-delay="400">
          <ContactFormContainer onButtonClick={onServiziButtonClick} />
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
      {/* <div id="liquid-container" className={styles.liquidContainer}>
      </div> */}



    </div>
  );
};

export default Hero;