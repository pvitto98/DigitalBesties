import { FunctionComponent } from "react";
import styles from "./ContactFormContainer.module.css";

export type ContactFormContainerType = {
  /** Action props */
  onButtonClick?: () => void;
};

const ContactFormContainer: FunctionComponent<ContactFormContainerType> = ({
  onButtonClick,
}) => {
  return (
    <button className={styles.servizibutton} onClick={onButtonClick}>
      <div className={styles.button}>
        <div className={styles.iNostriServizi}>I nostri Servizi</div>
      </div>
    </button>
  );
};

export default ContactFormContainer;
