import { FunctionComponent } from "react";
import styles from "./INostriServizi.module.css";

const INostriServizi: FunctionComponent = () => {
  return (
    <div className={styles.inostriservizi}>
      <div className={styles.title}>
        <div className={styles.blackbox} />
        <b className={styles.iNostriServiziContainer}>
          <span className={styles.iNostri}>{`I nostri  `}</span>
          <span className={styles.servizi}>{`servizi `}</span>
        </b>
      </div>
      <div className={styles.inostriservizicontent}>
        <div className={styles.servizio}>
          <div className={styles.serviziocontent}>
            <div className={styles.heading}>
              <b className={styles.serviziotitle}>Social Media Marketing</b>
            </div>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.serviziotextcontainer}>
            <div className={styles.serviziotext}>
              Gestiamo i tuoi account sui social media per aumentare la tua
              visibilità online e coinvolgere il tuo pubblico target.
            </div>
          </div>
        </div>
        <div className={styles.servizio1}>
          <div className={styles.serviziocontent}>
            <div className={styles.heading1}>
              <b className={styles.serviziotitle}>Web Developing</b>
            </div>
            <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          </div>
          <div className={styles.serviziotextcontainer}>
            <div className={styles.serviziotext}>
              Creiamo siti web che si adattano a tutti i dispositivi e offrono
              un'esperienza utente fluida e piacevole.
            </div>
          </div>
        </div>
        <div className={styles.servizio1}>
          <div className={styles.serviziocontent}>
            <div className={styles.heading2}>
              <b className={styles.serviziotitle}>Copywriting</b>
            </div>
            <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
          </div>
          <div className={styles.serviziotextcontainer}>
            <div className={styles.serviziotext}>
              Scriviamo testi persuasivi e coinvolgenti per promuovere la tua
              azienda o prodotto.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default INostriServizi;
