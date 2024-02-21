import { FunctionComponent } from "react";
import Servizio from "./Servizio";
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
        <Servizio
          servizioTitle="Social Media Marketing"
          image="/image@2x.png"
          servizioText="Gestiamo i tuoi account sui social media per aumentare la tua visibilità online e coinvolgere il tuo pubblico target."
          servizioBorderRadius="15px"
          servizioBackgroundColor="#a25cad"
          servizioBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          servizioBorder="0.5px solid var(--color-whitesmoke)"
          servizioHeight="511px"
          servizioPadding="var(--padding-mini) var(--padding-xl) var(--padding-xl)"
          headingWidth="298px"
          servizioTitleFontWeight="bold"
          servizioTitleColor="#fff"
          servizioTitleTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          servizioTextColor="#fff"
          servizioTextFontWeight="600"
        />
        <Servizio
          servizioTitle="Web Developing"
          image="/image@2x.png"
          servizioText="Creiamo siti web che si adattano a tutti i dispositivi e offrono un'esperienza utente fluida e piacevole."
          servizioBorderRadius="15px"
          servizioBackgroundColor="#a25cad"
          servizioBoxShadow="0px 4px 40px rgba(0, 0, 0, 0.25)"
          servizioBorder="0.5px solid var(--color-whitesmoke)"
          servizioHeight="511px"
          servizioPadding="var(--padding-mini) var(--padding-xl) var(--padding-xl)"
          headingWidth="209px"
          servizioTitleFontWeight="bold"
          servizioTitleColor="#fff"
          servizioTitleTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          servizioTextColor="#fff"
          servizioTextFontWeight="600"
        />
        <Servizio
          servizioTitle="Copywriting"
          image="/image@2x.png"
          servizioText="Scriviamo testi persuasivi e coinvolgenti per promuovere la tua azienda o prodotto."
          servizioBorderRadius="15px"
          servizioBackgroundColor="#a25cad"
          servizioBoxShadow="0px 4px 40px rgba(0, 0, 0, 0.25)"
          servizioBorder="0.5px solid var(--color-whitesmoke)"
          servizioHeight="511px"
          servizioPadding="var(--padding-mini) var(--padding-xl) var(--padding-xl)"
          headingWidth="154px"
          servizioTitleFontWeight="bold"
          servizioTitleColor="#fff"
          servizioTitleTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          servizioTextColor="#fff"
          servizioTextFontWeight="600"
        />
      </div>
    </div>
  );
};

export default INostriServizi;
