import { FunctionComponent } from "react";
import styles from "./MusicPlayer.module.css";

const MusicPlayer: FunctionComponent = () => {
  return (
    <div className={styles.musicplayer}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.playercontent}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.contenttext}>
              <div className={styles.socialMediaMarketing}>
                SOCIAL MEDIA MARKETING
              </div>
              <div className={styles.seISocial}>se i social fossero musica</div>
            </div>
            <div className={styles.contentcontrol}>
              <img className={styles.backIcon} alt="" src="/back1.svg" />
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
              </div>
              <img className={styles.backIcon} alt="" src="/forward1.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
