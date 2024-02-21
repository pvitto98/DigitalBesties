import { FunctionComponent, useCallback } from "react";
import ContactFormContainer from "./ContactFormContainer";
import styles from "./Hero.module.css";

const Hero: FunctionComponent = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contattiContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.herocontent}>
        <div className={styles.title}>
          <p className={styles.sulWebNon}>{`Sul web non ti `}</p>
          <p className={styles.sulWebNon}>si fila nessuno?</p>
        </div>
        <div className={styles.subtitle}>
          Forse perché non ci conoscevi ancora...
        </div>
        <ContactFormContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
};

export default Hero;
