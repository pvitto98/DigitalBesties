import { FunctionComponent, useEffect } from "react";
import styles from "./ChiSiamo3.module.css";

const Frame1: FunctionComponent = () => {
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
    <div className={styles.chisiamo3}>
      <div className={styles.chisiamo3content}>
        <div className={styles.textButton}>
          <div className={styles.eOraVieni} data-animate-on-scroll>
            E ora vieni qua e racconta alle tue Digital Besties perché la tua
            comunicazione online ha avuto l'efficacia dei caroselli su Facebook:
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <div className={styles.contattaci}>Contattaci!</div>
            </div>
            <img className={styles.frameChild} alt="" src="/arrow-3.svg" />
            <img className={styles.frameItem} alt="" src="/arrow-2.svg" />
            <img className={styles.frameInner} alt="" src="/arrow-4.svg" />
            <img className={styles.arrowIcon} alt="" src="/arrow-5.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
