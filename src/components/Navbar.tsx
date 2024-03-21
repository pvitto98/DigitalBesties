import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";

const Navbar: FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Digital Besties</div>
    </div>
  );
};

export default Navbar;
