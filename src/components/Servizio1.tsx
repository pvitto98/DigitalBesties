import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Servizio1.module.css";

export type ServizioType = {
  servizioTitle?: string;
  servizioText?: string;
  services?: { name: string; description: string }[];
  imageSrc?: string; // Add this line
};

const Servizio: FunctionComponent<ServizioType> = ({
  servizioTitle,
  servizioText,
  services = [],
  imageSrc, // Add this line
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

    // Pre-load the image
    useEffect(() => {
      if (imageSrc) {
        const img = new Image();
        img.src = imageSrc;
      }
    }, [imageSrc]);

  return (
    <div className={`${styles.servizio} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.serviziocontent}>
        <div className={styles.serviziotextcontainer}>
          <div className={styles.serviziopreview}>
            <div className={styles.serviziotitolo}>
              <div className={styles.serviziotitle}>{servizioTitle}</div>
            </div>
            <div
              className={`${styles.extend} ${isExpanded ? styles.rotate : styles.reverseRotate}`}
              onClick={handleExpandClick}
            >
              {isExpanded ? "-" : "+"}
            </div>
          </div>
        </div>
        <div className={styles.servizioExpandedContent}>
        <div className={styles.serviziopreview1}>
        <div className={`${styles.serviziotext} ${isExpanded ? styles.fadeInFlex : ""}`}>
          {servizioText}
          </div>
        <div className={`${styles.servizicontainer} ${isExpanded ? styles.fadeInGrid : ""}`}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviziotext1}>
              <ul className={styles.digitalStrategy}>
                <li>{service.description}</li>
              </ul>
            </div>
          ))}
        </div>
        </div>
        <img
      src={imageSrc}
      alt="Servizio image"
      className={`${styles.servizioImage} ${isExpanded ? styles.show : styles.hide}`}
    />
    </div>
      </div>
    </div>
  );
};

export default Servizio;