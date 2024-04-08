import { FunctionComponent, useCallback, useEffect } from "react";
import styles from "./ChiSiamo.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN
import Ticker from "./ExperimentalComponent/Ticker";


const ChiSiamo: FunctionComponent = () => {
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

  const onContattaciButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contattiContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);


  return (
    <div className={styles.chisiamo1Parent}>
      <div className={styles.chisiamo1}>
        <div className={styles.chisiamo1content}>
          <div className={styles.title} data-aos="fade-up">
            Chi Siamo
          </div>
          <div className={styles.textAnimation} data-aos="fade-up">
            <div className={styles.text}>
              <div
                className={styles.siamoUnTeamContainer}
              >
                <span className={styles.siamoUnTeam}>
                  Siamo un team di freelancers e una web agency in costruzione,
                  ma ancor prima siamo persone che continuano a scegliersi sin
                  dai banchi di liceo e che hanno deciso di tradurre le proprie
                  competenze in uno spazio eclettico e creativo:
                </span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.digitalBesties}>Digital Besties</span>
              </div>
              <br />
              <div
                className={styles.ilNostroModoContainer}
                data-aos="fade-up"
              >
                <span>{`Il nostro modo di fare comunicazione è frutto di differenti percorsi accademici che arricchiscono il nostro lavoro con un `}</span>
                <span className={styles.taglioCriticoE}>
                  taglio critico e trasversale
                </span>
                <span>.</span>
              </div>
            </div>
            <img
              className={styles.chisiamoimageIcon}
              alt=""
              src="/ChiSiamo1Icon.svg"
            />
          </div>
        </div>
      </div>

      <div className={styles.chisiamo2}>
        <div className={styles.chisiamo2content}>
          <div className={styles.textAnimation1} data-aos="fade-up">
            <div className={styles.animation1}>
              <img
                className={styles.animationChild}
                alt=""
                src="/group-6.svg"
              />
            </div>
            <div className={styles.text2}>
              <div
                className={styles.unendoCompetenzeMultidisciplContainer}
              >
                <span>{`Unendo competenze multidisciplinari e passione per il digitale, arricchiamo progetti web e social in ottica strategica e innovativa secondo le esigenze di aziende, professionisti e realtà che intendono rivoluzionare la loro presenza online - il tutto accompagnato dalla `}</span>
                <span className={styles.taglioCriticoE}>freschezza GenZ</span>
                <span> che ci distingue.</span>
              </div>
            </div>
          </div>
          <div className={styles.textButton}>
            <div className={styles.eOraVieni} data-aos="fade-up">
              E ora vieni qua e racconta alle tue Digital Besties perché la tua
              comunicazione online ha avuto l'efficacia dei caroselli su
              Facebook:
            </div>
            <div className={styles.buttonParent} data-aos="fade-up">
              <div className={styles.button}>
                <div className={styles.contattaci} onClick={onContattaciButtonClick}>
                  Contattaci!
                </div>
              </div>
              <img className={styles.frameChild} alt="" src="/arrow-3.svg" />
              <img className={styles.frameItem} alt="" src="/arrow-2.svg" />
              <img className={styles.frameInner} alt="" src="/arrow-4.svg" />
              <img className={styles.arrowIcon} alt="" src="/arrow-5.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;
