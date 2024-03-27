import { FunctionComponent } from "react";
import styles from "./Contatti.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN
import ContactForm from "./ExperimentalComponent/ContactForm";

const Contatti: FunctionComponent = () => {
  return (
    <div className={styles.contatti} data-scroll-to="contattiContainer">
      <div className={styles.contatticontent}>
        <div className={styles.contattitext}>
          <b className={styles.title} >Ti interessiamo? Scrivici!</b>
          <a href="mailto:digitalbestiesagency@gmail.com" className={styles.email} >
            <b>{`digitalbestiesagency@gmail.com`}</b>
          </a>
          {/* <b className={`${styles.title} ${styles.sede}`} data-aos="fade-up" data-aos-delay="400">Sede: Torino</b> */}
          </div>
      </div>

      {/* <ContactForm/> */}
    </div>
  );
};

export default Contatti;
