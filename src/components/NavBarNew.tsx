import { FunctionComponent } from "react";
import styles from "./NavBarNew.module.css";

const NavbarNew: FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logoframeIcon} alt="" src="/longdigitalbesties.png" />
      {/* <div className={styles.navigation}>
        <div className={styles.links}>
          <div className={styles.chisiamo}>
            <span className={styles.hiSiamo}>Chi Siamo</span>
          </div>
          <div className={styles.chisiamo}>
            I<span className={styles.hiSiamo}> nostri Servizi</span>
          </div>
          <div className={styles.chisiamo}>
            C<span className={styles.hiSiamo}>ontattaci</span>
          </div>
        </div>
        <img
          className={styles.clipPathGroup}
          alt=""
          src="/clip-path-group.svg"
        />
      </div> */}
    </div>
  );
};

export default NavbarNew;
