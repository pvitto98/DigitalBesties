import { FunctionComponent, useEffect } from "react";
import styles from "./Frame16.module.css";

const Frame: FunctionComponent = () => {
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
    <div className={styles.chisiamo1Parent}>
      <div className={styles.chisiamo1}>
        <div className={styles.chisiamo1content}>
          <div className={styles.title} data-animate-on-scroll>
            Chi Siamo
          </div>
          <div className={styles.textAnimation}>
            <div className={styles.text}>
              <div
                className={styles.siamoUnTeamContainer}
                data-animate-on-scroll
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
            </div>
            <div className={styles.animation} data-animate-on-scroll>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chisiamo2}>
        <div className={styles.chisiamo2content}>
          <div className={styles.text1}>
            <div
              className={styles.ilNostroModoContainer}
              data-animate-on-scroll
            >
              <span>{`Il nostro modo di fare comunicazione è frutto di differenti percorsi accademici che arricchiscono il nostro lavoro con un `}</span>
              <span className={styles.taglioCriticoE}>
                taglio critico e trasversale
              </span>
              <span>.</span>
            </div>
          </div>
          <div className={styles.textAnimation1}>
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
      <div className={styles.chisiamo3}>
        <div className={styles.chisiamo3content}>
          <div className={styles.textButton}>
            <div className={styles.eOraVieni} data-animate-on-scroll>
              E ora vieni qua e racconta alle tue Digital Besties perché la tua
              comunicazione online ha avuto l'efficacia dei caroselli su
              Facebook:
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
    </div>
  );
};

export default Frame;
