import { FunctionComponent, useEffect } from "react";
import styles from "./ChiSiamo.module.css";

const ChiSiamo: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.chiSiamo}>
      <div className={styles.title}>
        <div className={styles.chiSiamo1} data-animate-on-scroll>
          Chi Siamo
        </div>
        <div className={styles.chisiamotext}>
          <div className={styles.siamoUnTeam} data-animate-on-scroll>
            Siamo un team di freelancers e una web agency in costruzione, ma
            ancor prima siamo persone che continuano a scegliersi sin dai banchi
            di liceo, e che nel mezzo dei vent'anni hanno deciso di unire le
            proprie passioni e specialità in uno spazio di menti creative
            interconnesse: Digital Besties.
          </div>
          <div className={styles.iNostriDifferenti} data-animate-on-scroll>
          Il nostro modo di fare comunicazione è frutto di differenti percorsi accademici che arricchiscono il nostro lavoro con un taglio critico e trasversale indispensabile per un pubblico sempre più consapevole. 
Unendo competenze multidisciplinari e passione per il digitale, arricchiamo progetti web e social in ottica strategica e innovativa secondo le esigenze di aziende, professionisti e realtà che intendono rivoluzionare la loro presenza online ━ il tutto accompagnato dalla freschezza GenZ che ci distingue. 

          </div>
          <div className={styles.iNostriDifferenti} data-animate-on-scroll>
          E ora vieni qua e racconta alle tue Digital Besties perché la tua comunicazione online ha avuto l'efficacia dei caroselli su Facebook! 
          </div>
        </div>
      </div>
      <img
        className={styles.chisiamoimageIcon}
        alt=""
        src="/chisiamoimage.svg"
        data-animate-on-scroll
      />
    </div>
  );
};

export default ChiSiamo;
