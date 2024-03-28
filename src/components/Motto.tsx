import { FunctionComponent, useEffect } from "react";
import styles from "./Motto.module.css";

const Motto: FunctionComponent = () => {
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
    <div className={styles.motto}>
      <div className={styles.title}>
        <div className={styles.ilNostroCredo} data-animate-on-scroll>
          Il nostro credo
        </div>
        <div
          className={styles.raccontiamoStorieAccendiamo}
          data-animate-on-scroll
        >
          Raccontiamo storie, accendiamo passioni e creiamo connessioni per te e
          per i tuoi progetti digitali
        </div>
      </div>
      <img
        className={styles.mottoimageIcon}
        alt=""
        src="/mottoimage.svg"
        data-animate-on-scroll
      />
    </div>
  );
};

export default Motto;
