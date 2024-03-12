import { FunctionComponent } from "react";
import styles from "./Servizio.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load AOS styles from a CDN

interface ServizioProps {
  title: string;
  imageSrc: string;
  text: string;
  services: string[]; // Add this line

}

const Servizio: FunctionComponent<ServizioProps> = ({ title, imageSrc, text, services }) => {
  return (
    <div className={styles.servizio} >
      <div className={styles.serviziocontent}>
        <div className={styles.heading}>
          <div className={styles.serviziotitle}>{title}</div>
        </div>
        <img className={styles.imageIcon} alt="" src={imageSrc} />
      </div>
      <div className={styles.serviziotextcontainer}>
        <div className={styles.serviziotext}>{text}</div>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Servizio;