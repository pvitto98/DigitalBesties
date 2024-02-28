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
        <div className={styles.chiSiamo1} >
          Chi Siamo
        </div>
        <div className={styles.chisiamotext}>
          <div className={styles.siamoUnTeam} >
          Siamo un team di freelancers e una web agency in costruzione, ma ancor prima siamo persone che continuano a scegliersi sin dai banchi di liceo e che hanno deciso di tradurre le proprie competenze in uno spazio eclettico e creativo: Digital Besties. 
          </div>
          <div className={styles.iNostriDifferenti} >
          Il nostro modo di fare comunicazione è frutto di differenti percorsi accademici che arricchiscono il nostro lavoro con un taglio critico e trasversale.
          <br />
          Unendo competenze multidisciplinari e passione per il digitale, arricchiamo progetti web e social in ottica strategica e innovativa secondo le esigenze di aziende, professionisti e realtà che intendono rivoluzionare la loro presenza online ━ il tutto accompagnato dalla freschezza GenZ che ci distingue. 
          </div>
          <div className={styles.iNostriDifferenti} >
          E ora vieni qua e racconta alle tue Digital Besties perché la tua comunicazione online ha avuto l'efficacia dei caroselli su Facebook!          </div>
        </div>
      </div>
      <img
        className={styles.chisiamoimageIcon}
        alt=""
        src="/chisiamoimage.svg"
        data-animate-on-scroll
      />
            <img
        className={styles.chisiamoimageIcon2}
        alt=""
        src="/chisiamoimage.svg"
        data-animate-on-scroll
      />
    </div>
  );
};

export default ChiSiamo;
