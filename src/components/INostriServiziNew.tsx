import { FunctionComponent, useEffect } from "react";
import Servizio from "./Servizio";
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
    <div className={styles.inostriserviziNew}>
      <div className={styles.chisiamo1content}>
        <div className={styles.title} data-animate-on-scroll>
          I Nostri Servizi
        </div>
        <div className={styles.text}>
          <div className={styles.abbiamoUnServizio} data-animate-on-scroll>
            Abbiamo un servizio per ogni tua esigenza:
          </div>
        </div>
        <div className={styles.servizicontainer}>
          <Servizio
            servizioTitle="Social Media Marketing"
            servizioText="Gestiamo i tuoi account sui social media per aumentare la tua visibilità online e coinvolgere il tuo pubblico target."
            digitalStrategy="Digital Strategy"
            contentMarketingEAdvertis="Content Marketing e Advertising"
            socialMediaManagement="Social Media Management"
          />
          <Servizio
            servizioTitle="Web Development"
            servizioText="Creiamo siti web che si adattano a tutti i dispositivi e offrono un'esperienza utente fluida e piacevole."
            servizioTextWidth="384px"
            propMargin="unset"
            propFontFamily="Poppins"
            propFontSize="25px"
            propPaddingLeft="unset"
            propAlignSelf="stretch"
            propPosition="relative"
            propFontWeight="600"
            propColor="#e9e9e9"
            propTextAlign="center"
            propDisplay="inline-block"
            propMargin1="unset"
            propFontFamily1="Poppins"
            propFontSize1="25px"
            propPaddingLeft1="unset"
            propAlignSelf1="stretch"
            propPosition1="relative"
            propFontWeight1="600"
            propColor1="#e9e9e9"
            propTextAlign1="center"
            propDisplay1="inline-block"
          />
          <Servizio
            servizioTitle="Copywriting"
            servizioText="Scriviamo testi persuasivi e coinvolgenti per promuovere la tua azienda o prodotto."
            digitalStrategy="Analisi e Strategia SEO"
            contentMarketingEAdvertis="Branding e posizionamento"
            socialMediaManagement="Storytelling"
            servizioTextWidth="259px"
            propMargin="0"
            propFontFamily="inherit"
            propFontSize="inherit"
            propPaddingLeft="33px"
            propAlignSelf="unset"
            propPosition="unset"
            propFontWeight="unset"
            propColor="unset"
            propTextAlign="unset"
            propDisplay="unset"
            socialMediaManagementAlignSelf="stretch"
            socialMediaManagementPosition="relative"
            socialMediaManagementFontSize="25px"
            socialMediaManagementFontWeight="600"
            socialMediaManagementFontFamily="Poppins"
            socialMediaManagementColor="#e9e9e9"
            socialMediaManagementTextAlign="center"
            socialMediaManagementDisplay="inline-block"
            propMargin1="0"
            propFontFamily1="inherit"
            propFontSize1="inherit"
            propPaddingLeft1="33px"
            propAlignSelf1="unset"
            propPosition1="unset"
            propFontWeight1="unset"
            propColor1="unset"
            propTextAlign1="unset"
            propDisplay1="unset"
            propAlignSelf2="stretch"
            propPosition2="relative"
            propFontSize2="25px"
            propFontWeight2="600"
            propFontFamily2="Poppins"
            propColor2="#e9e9e9"
            propTextAlign2="center"
            propDisplay2="inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default INostriServiziNew;
