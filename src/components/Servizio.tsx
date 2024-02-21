import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Servizio.module.css";

export type ServizioType = {
  servizioTitle?: string;
  image?: string;
  servizioText?: string;

  /** Style props */
  servizioBorderRadius?: CSSProperties["borderRadius"];
  servizioBackgroundColor?: CSSProperties["backgroundColor"];
  servizioBoxShadow?: CSSProperties["boxShadow"];
  servizioBorder?: CSSProperties["border"];
  servizioHeight?: CSSProperties["height"];
  servizioPadding?: CSSProperties["padding"];
  headingWidth?: CSSProperties["width"];
  servizioTitleFontWeight?: CSSProperties["fontWeight"];
  servizioTitleColor?: CSSProperties["color"];
  servizioTitleTextShadow?: CSSProperties["textShadow"];
  servizioTextColor?: CSSProperties["color"];
  servizioTextFontWeight?: CSSProperties["fontWeight"];
};

const Servizio: FunctionComponent<ServizioType> = ({
  servizioTitle,
  image,
  servizioText,
  servizioBorderRadius,
  servizioBackgroundColor,
  servizioBoxShadow,
  servizioBorder,
  servizioHeight,
  servizioPadding,
  headingWidth,
  servizioTitleFontWeight,
  servizioTitleColor,
  servizioTitleTextShadow,
  servizioTextColor,
  servizioTextFontWeight,
}) => {
  const servizioStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: servizioBorderRadius,
      backgroundColor: servizioBackgroundColor,
      boxShadow: servizioBoxShadow,
      border: servizioBorder,
      height: servizioHeight,
      padding: servizioPadding,
    };
  }, [
    servizioBorderRadius,
    servizioBackgroundColor,
    servizioBoxShadow,
    servizioBorder,
    servizioHeight,
    servizioPadding,
  ]);

  const headingStyle: CSSProperties = useMemo(() => {
    return {
      width: headingWidth,
    };
  }, [headingWidth]);

  const servizioTitleStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: servizioTitleFontWeight,
      color: servizioTitleColor,
      textShadow: servizioTitleTextShadow,
    };
  }, [servizioTitleFontWeight, servizioTitleColor, servizioTitleTextShadow]);

  const servizioTextStyle: CSSProperties = useMemo(() => {
    return {
      color: servizioTextColor,
      fontWeight: servizioTextFontWeight,
    };
  }, [servizioTextColor, servizioTextFontWeight]);

  return (
    <div className={styles.servizio} style={servizioStyle}>
      <div className={styles.serviziocontent}>
        <div className={styles.heading} style={headingStyle}>
          <div className={styles.serviziotitle} style={servizioTitleStyle}>
            {servizioTitle}
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
      <div className={styles.serviziotextcontainer}>
        <div className={styles.serviziotext} style={servizioTextStyle}>
          {servizioText}
        </div>
      </div>
    </div>
  );
};

export default Servizio;
