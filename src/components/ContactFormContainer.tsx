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
    <button className={styles.button} onClick={onButtonClick}>
      <div className={styles.button1}>
        <b className={styles.scrivici}>Scrivici!</b>
        <img className={styles.patternIcon} alt="" src="/pattern.svg" />
      </div>
    </button>
  );
};

export default ContactFormContainer;
