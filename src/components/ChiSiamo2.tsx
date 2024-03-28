import { FunctionComponent, useEffect } from "react";
import styles from "./ChiSiamo2.module.css";

const ChiSiamo2: FunctionComponent = () => {
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
    <div className={styles.chisiamo2}>
      <div className={styles.chisiamo2content}>
        <div className={styles.text}>
          <div className={styles.ilNostroModoContainer} data-animate-on-scroll>
            <span>{`Il nostro modo di fare comunicazione è frutto di differenti percorsi accademici che arricchiscono il nostro lavoro con un `}</span>
            <span className={styles.taglioCriticoE}>
              taglio critico e trasversale
            </span>
            <span>.</span>
          </div>
        </div>
        <div className={styles.textAnimation}>
          <div className={styles.animation}>
            <img className={styles.animationChild} alt="" src="/group-6.svg" />
          </div>
          <div className={styles.text1}>
            <div
              className={styles.unendoCompetenzeMultidisciplContainer}
              data-animate-on-scroll
            >
              <span>{`Unendo competenze multidisciplinari e passione per il digitale, arricchiamo progetti web e social in ottica strategica e innovativa secondo le esigenze di aziende, professionisti e realtà che intendono rivoluzionare la loro presenza online - il tutto accompagnato dalla `}</span>
              <span className={styles.taglioCriticoE}>freschezza GenZ</span>
              <span> che ci distingue.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo2;
