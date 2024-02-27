import { FunctionComponent } from "react";
import styles from "./Contatti.module.css";

const Contatti: FunctionComponent = () => {
  return (
    <div className={styles.contatti} data-scroll-to="contattiContainer">
      <div className={styles.contatticontent}>
        <div className={styles.contattitext}>
          <b className={styles.title}>Interessat*? Scrivici!</b>
          <a href="mailto:digitalbestiesagency@gmail.com" className={styles.email}>
            <b>{`digitalbestiesagency@gmail.com`}</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
