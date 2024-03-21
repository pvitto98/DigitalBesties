import { FunctionComponent, useEffect } from "react";
import styles from "./ChiSiamo1.module.css";

const ChiSiamo3: FunctionComponent = () => {
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
    <div className={styles.chisiamo1}>
      <div className={styles.chisiamo1content}>
        <div className={styles.title} data-animate-on-scroll>
          Chi Siamo
        </div>
        <div className={styles.textAnimation}>
          <div className={styles.text}>
            <div className={styles.siamoUnTeamContainer} data-animate-on-scroll>
              <span className={styles.siamoUnTeam}>
                Siamo un team di freelancers e una web agency in costruzione, ma
                ancor prima siamo persone che continuano a scegliersi sin dai
                banchi di liceo e che hanno deciso di tradurre le proprie
                competenze in uno spazio eclettico e creativo:
              </span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.digitalBesties}>Digital Besties</span>
            </div>
          </div>
          <div className={styles.animation} data-animate-on-scroll>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo3;
