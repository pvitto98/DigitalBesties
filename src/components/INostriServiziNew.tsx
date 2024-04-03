import { FunctionComponent, useEffect } from "react";
import Servizio from "./Servizio1";
import styles from "./INostriServiziNew.module.css";

const INostriServiziNew: FunctionComponent = () => {
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
    <div className={styles.inostriserviziNew} data-scroll-to="iNostriServiziNew">
      <div className={styles.chisiamo1content}>
        <div className={styles.title} >
          I Nostri Servizi
        </div>
        <div className={styles.text}>
          <div className={styles.abbiamoUnServizio}>
            Abbiamo un servizio per ogni tua esigenza:
          </div>
        </div>
        <div className={styles.servizicontainer}>
          <Servizio
            servizioTitle="Social Media Marketing"
            servizioText="Gestiamo i tuoi account sui social media per aumentare la tua visibilità online e coinvolgere il tuo pubblico target."
            services={[
              { name: "Digital Strategy", description: "Digital Strategy" },
              { name: "Content Marketing e Advertising", description: "Content Marketing e Advertising" },
              { name: "Social Media Management", description: "Social Media Management" },
            ]}
            imageSrc="/smartphone.png"
          />
          <Servizio
            servizioTitle="Web Development"
            servizioText="Creiamo siti web che si adattano a tutti i dispositivi e offrono un'esperienza utente fluida e piacevole."
            services={[
              { name: "Sviluppo Siti Web", description: "Sviluppo Siti Web" },
              { name: "Sviluppo E commerce", description: "Sviluppo E commerce" },
              { name: "Sviluppo App Mobile", description: "Sviluppo App Mobile" },
            ]}
            imageSrc="/desktop.png"
          />
          <Servizio
            servizioTitle="Copywriting"
            servizioText="Scriviamo testi persuasivi e coinvolgenti per promuovere la tua azienda o prodotto."
            services={[
              { name: "Analisi e Strategia SEO", description: "Analisi e Strategia SEO" },
              { name: "Branding e posizionamento", description: "Branding e posizionamento" },
              { name: "Storytelling", description: "Storytelling" },
            ]}
            imageSrc="/notebook.png"
          />
        </div>
      </div>
    </div>
  );
};

export default INostriServiziNew;