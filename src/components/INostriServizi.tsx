import { FunctionComponent, useEffect } from "react";
import styles from "./INostriServizi.module.css";

const INostriServizi: FunctionComponent = () => {
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
    <div
      className={styles.inostriservizi}
      data-scroll-to="iNostriServiziContainer"
    >
      <div className={styles.title}>
        <div className={styles.iNostriServizi} data-animate-on-scroll>
          I nostri servizi
        </div>
      </div>
      <div className={styles.inostriservizicontent}>
        <div className={styles.servizio} data-animate-on-scroll>
          <div className={styles.serviziocontent}>
            <div className={styles.heading}>
              <div className={styles.serviziotitle}>Social Media Marketing</div>
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
        <div className={styles.servizio1} data-animate-on-scroll>
          <div className={styles.serviziocontent}>
            <div className={styles.heading1}>
              <div className={styles.serviziotitle}>Web Developing</div>
            </div>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.serviziotextcontainer}>
            <div className={styles.serviziotext}>
              Creiamo siti web che si adattano a tutti i dispositivi e offrono
              un'esperienza utente fluida e piacevole.
            </div>
          </div>
        </div>
        <div className={styles.servizio2} data-animate-on-scroll>
          <div className={styles.serviziocontent}>
            <div className={styles.heading2}>
              <div className={styles.serviziotitle}>Copywriting</div>
            </div>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
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
