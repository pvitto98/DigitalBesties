import { FunctionComponent, useEffect } from "react";
import Servizio from "./Servizio";
import styles from "./INostriServizi.module.css";
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN

const INostriServizi: FunctionComponent = () => {


  return (
    <div className={styles.inostriserviziNew} data-scroll-to="iNostriServiziNew">
      <div className={styles.chisiamo1content}>
        <div className={styles.title} data-aos="fade-up">
          I Nostri Servizi
        </div>
        <div className={styles.text} >
          <div className={styles.abbiamoUnServizio} data-aos="fade-up">
            Abbiamo un servizio per ogni tua esigenza:
          </div>
        </div>
        <div className={styles.servizicontainer} data-aos="fade-up">
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

export default INostriServizi;