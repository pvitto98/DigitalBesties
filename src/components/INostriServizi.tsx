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
            <img className={styles.imageIcon} alt="" src="/image@2x.jpg" />
          </div>
          <div className={styles.serviziotextcontainer}>
            <div className={styles.serviziotext}>
            Studiamo e curiamo le tue piattaforme social per dare ai tuoi progetti la visibilità e il valore che meritano
            </div>
          </div>
        </div>
        <div className={styles.servizio1} data-animate-on-scroll>
          <div className={styles.serviziocontent}>
            <div className={styles.heading1}>
              <div className={styles.serviziotitle}>Web Developing</div>
            </div>
            <img className={styles.imageIcon} alt="" src="/image1@2x.jpg" />
          </div>
          <div className={styles.serviziotextcontainer}>
            <div className={styles.serviziotext}>
            Sviluppiamo siti web in grado di incorniciare la tua idea in una User Experience avvincente e confortevole per qualsiasi dispositivo
            </div>
          </div>
        </div>
        <div className={styles.servizio2} data-animate-on-scroll>
          <div className={styles.serviziocontent}>
            <div className={styles.heading2}>
              <div className={styles.serviziotitle}>Copywriting</div>
            </div>
            <img className={styles.imageIcon} alt="" src="/image2@2x.jpg" />
          </div>
          <div className={styles.serviziotextcontainer}>
            <div className={styles.serviziotext}>
            Tessiamo le trame della tua presenza online promuovendo la tua attività con storytelling coinvolgenti e ottimizzati in chiave SEO 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default INostriServizi;
