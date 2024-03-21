import { FunctionComponent } from "react";
import styles from "./Contatti.module.css";

const Contatti: FunctionComponent = () => {
  return (
    <div className={styles.contatti} data-scroll-to="contattiContainer">
      <div className={styles.contatticontent}>
        <div className={styles.contattitext}>
          <b className={styles.title}>Interessat*? Scrivici!</b>
          <div className={styles.email}>digitalbestiesagency@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
