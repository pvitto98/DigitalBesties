import { FunctionComponent } from "react";
import styles from "./Servizio.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN

interface ServizioProps {
  title: string;
  imageSrc: string;
  text: string;
}

const Servizio: FunctionComponent<ServizioProps> = ({ title, imageSrc, text }) => {
  return (
    <div className={styles.servizio} data-aos="fade-up" data-aos-delay="200">
      <div className={styles.serviziocontent}>
        <div className={styles.heading}>
          <div className={styles.serviziotitle}>{title}</div>
        </div>
        <img className={styles.imageIcon} alt="" src={imageSrc} />
      </div>
      <div className={styles.serviziotextcontainer}>
        <div className={styles.serviziotext}>{text}</div>
      </div>
    </div>
  );
};

export default Servizio;