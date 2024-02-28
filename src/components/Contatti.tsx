import { FunctionComponent } from "react";
import styles from "./Contatti.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN

const Contatti: FunctionComponent = () => {
  return (
    <div className={styles.contatti} data-scroll-to="contattiContainer">
      <div className={styles.contatticontent}>
        <div className={styles.contattitext}>
          <b className={styles.title} data-aos="fade-up" >Ti interessiamo? Scrivici!</b>
          <a href="mailto:digitalbestiesagency@gmail.com" className={styles.email} data-aos="fade-up" data-aos-delay="200">
            <b>{`digitalbestiesagency@gmail.com`}</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
