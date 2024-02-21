import { FunctionComponent, useCallback } from "react";
import ContactFormContainer from "./ContactFormContainer";
import styles from "./ChiSiamo.module.css";

const ChiSiamo: FunctionComponent = () => {
  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contattiContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.chisiamo}>
      <div className={styles.title}>
        <div className={styles.blackbox} />
        <b className={styles.chiSiamo}>
          <span className={styles.chi}>{`Chi  `}</span>
          <span className={styles.siamo}>siamo</span>
        </b>
      </div>
      <div className={styles.chisiamocontent}>
        <b className={styles.text}>
          <p className={styles.siamoUnTeam}>
            Siamo un team di freelancers e una web agency in costruzione, ma
            ancor prima siamo persone che continuano a scegliersi sin dai banchi
            di liceo, e che nel mezzo dei vent'anni hanno deciso di unire le
            proprie passioni e specialità in uno spazio di menti creative
            interconnesse: Digital Besties. I nostri differenti percorsi di vita
            e punti di vista sono la risorsa guida verso progetti web e social
            strategici e lungimiranti, cuciti sulle aziende, professionisti e
            realtà che intendono rivoluzionare la loro presenza online. Il
            nostro approccio è fresco, innovativo, critico e inclusivo (voce del
            verbo GenZ di fine anni 90).
          </p>
          <p className={styles.siamoUnTeam}>&nbsp;</p>
          <p className={styles.siamoUnTeam}>
            E ora vieni, racconta alle zie perché la tua comunicazione online ha
            avuto l'efficacia dei caroselli su Facebook:
          </p>
        </b>
        <ContactFormContainer onButtonClick={onButton1Click} />
      </div>
    </div>
  );
};

export default ChiSiamo;
