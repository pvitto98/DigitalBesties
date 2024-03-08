import { FunctionComponent, useEffect } from "react";
import styles from "./INostriServizi.module.css";
import Servizio from "./Servizio";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN

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
        <div className={styles.iNostriServizi} data-aos="fade-up">
          I nostri servizi
        </div>
      </div>
      <div className={styles.inostriservizicontent} >
      <Servizio
          title="Social Media Marketing"
          imageSrc="/smartphone.png"
          text="Studiamo e curiamo le tue piattaforme social per dare ai tuoi progetti la visibilità e il valore che meritano"
        />
        <Servizio
          title="Web Developing"
          imageSrc="/desktop.png"
          text="Sviluppiamo siti web in grado di incorniciare la tua idea in una User Experience avvincente e confortevole per qualsiasi dispositivo"
        />
        <Servizio
          title="Copywriting"
          imageSrc="/notebook.png"
          text="Tessiamo le trame della tua presenza online promuovendo la tua attività con storytelling coinvolgenti e ottimizzati in chiave SEO"
        />
      </div>
    </div>
  );
};

export default INostriServizi;
