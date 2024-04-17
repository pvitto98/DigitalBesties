import { FunctionComponent } from "react";
import styles from "./MusicPlayer.module.css";

const MusicPlayer: FunctionComponent = () => {
  return (
    <div className={styles.musicplayer}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.playercontent}>
        <div className={styles.content}>
          <div className={styles.contenttext}>
            <div className={styles.copywriting}>COPYWRITING</div>
            <div className={styles.tiScrivoLe}>ti scrivo le cose</div>
          </div>
          <div className={styles.contentcontrol}>
            <img className={styles.backIcon} alt="" src="/back.svg" />
            <img className={styles.buttonIcon} alt="" src="/button.svg" />
            <img className={styles.backIcon} alt="" src="/forward.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
