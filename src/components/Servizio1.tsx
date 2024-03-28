import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Servizio1.module.css";

export type ServizioType = {
  servizioTitle?: string;
  servizioText?: string;
  digitalStrategy?: string;
  contentMarketingEAdvertis?: string;
  socialMediaManagement?: string;

  /** Style props */
  servizioTextWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propFontFamily?: CSSProperties["fontFamily"];
  propFontSize?: CSSProperties["fontSize"];
  propPaddingLeft?: CSSProperties["paddingLeft"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPosition?: CSSProperties["position"];
  propFontWeight?: CSSProperties["fontWeight"];
  propColor?: CSSProperties["color"];
  propTextAlign?: CSSProperties["textAlign"];
  propDisplay?: CSSProperties["display"];
  socialMediaManagementAlignSelf?: CSSProperties["alignSelf"];
  socialMediaManagementPosition?: CSSProperties["position"];
  socialMediaManagementFontSize?: CSSProperties["fontSize"];
  socialMediaManagementFontWeight?: CSSProperties["fontWeight"];
  socialMediaManagementFontFamily?: CSSProperties["fontFamily"];
  socialMediaManagementColor?: CSSProperties["color"];
  socialMediaManagementTextAlign?: CSSProperties["textAlign"];
  socialMediaManagementDisplay?: CSSProperties["display"];
  propMargin1?: CSSProperties["margin"];
  propFontFamily1?: CSSProperties["fontFamily"];
  propFontSize1?: CSSProperties["fontSize"];
  propPaddingLeft1?: CSSProperties["paddingLeft"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propPosition1?: CSSProperties["position"];
  propFontWeight1?: CSSProperties["fontWeight"];
  propColor1?: CSSProperties["color"];
  propTextAlign1?: CSSProperties["textAlign"];
  propDisplay1?: CSSProperties["display"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propPosition2?: CSSProperties["position"];
  propFontSize2?: CSSProperties["fontSize"];
  propFontWeight2?: CSSProperties["fontWeight"];
  propFontFamily2?: CSSProperties["fontFamily"];
  propColor2?: CSSProperties["color"];
  propTextAlign2?: CSSProperties["textAlign"];
  propDisplay2?: CSSProperties["display"];
};

const Servizio: FunctionComponent<ServizioType> = ({
  servizioTitle,
  servizioText,
  digitalStrategy,
  contentMarketingEAdvertis,
  socialMediaManagement,
  servizioTextWidth,
  propMargin,
  propFontFamily,
  propFontSize,
  propPaddingLeft,
  propAlignSelf,
  propPosition,
  propFontWeight,
  propColor,
  propTextAlign,
  propDisplay,
  socialMediaManagementAlignSelf,
  socialMediaManagementPosition,
  socialMediaManagementFontSize,
  socialMediaManagementFontWeight,
  socialMediaManagementFontFamily,
  socialMediaManagementColor,
  socialMediaManagementTextAlign,
  socialMediaManagementDisplay,
  propMargin1,
  propFontFamily1,
  propFontSize1,
  propPaddingLeft1,
  propAlignSelf1,
  propPosition1,
  propFontWeight1,
  propColor1,
  propTextAlign1,
  propDisplay1,
  propAlignSelf2,
  propPosition2,
  propFontSize2,
  propFontWeight2,
  propFontFamily2,
  propColor2,
  propTextAlign2,
  propDisplay2,
}) => {
  const servizioTitoloStyle: CSSProperties = useMemo(() => {
    return {
      width: servizioTextWidth,
    };
  }, [servizioTextWidth]);

  const digitalStrategyStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      fontFamily: propFontFamily,
      fontSize: propFontSize,
      paddingLeft: propPaddingLeft,
      alignSelf: propAlignSelf,
      position: propPosition,
      fontWeight: propFontWeight,
      color: propColor,
      textAlign: propTextAlign,
      display: propDisplay,
    };
  }, [
    propMargin,
    propFontFamily,
    propFontSize,
    propPaddingLeft,
    propAlignSelf,
    propPosition,
    propFontWeight,
    propColor,
    propTextAlign,
    propDisplay,
  ]);

  const servizioText1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: socialMediaManagementAlignSelf,
      position: socialMediaManagementPosition,
      fontSize: socialMediaManagementFontSize,
      fontWeight: socialMediaManagementFontWeight,
      fontFamily: socialMediaManagementFontFamily,
      color: socialMediaManagementColor,
      textAlign: socialMediaManagementTextAlign,
      display: socialMediaManagementDisplay,
    };
  }, [
    socialMediaManagementAlignSelf,
    socialMediaManagementPosition,
    socialMediaManagementFontSize,
    socialMediaManagementFontWeight,
    socialMediaManagementFontFamily,
    socialMediaManagementColor,
    socialMediaManagementTextAlign,
    socialMediaManagementDisplay,
  ]);

  const contentMarketingEAdvertisinStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
      fontFamily: propFontFamily1,
      fontSize: propFontSize1,
      paddingLeft: propPaddingLeft1,
      alignSelf: propAlignSelf1,
      position: propPosition1,
      fontWeight: propFontWeight1,
      color: propColor1,
      textAlign: propTextAlign1,
      display: propDisplay1,
    };
  }, [
    propMargin1,
    propFontFamily1,
    propFontSize1,
    propPaddingLeft1,
    propAlignSelf1,
    propPosition1,
    propFontWeight1,
    propColor1,
    propTextAlign1,
    propDisplay1,
  ]);

  const servizioText2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      position: propPosition2,
      fontSize: propFontSize2,
      fontWeight: propFontWeight2,
      fontFamily: propFontFamily2,
      color: propColor2,
      textAlign: propTextAlign2,
      display: propDisplay2,
    };
  }, [
    propAlignSelf2,
    propPosition2,
    propFontSize2,
    propFontWeight2,
    propFontFamily2,
    propColor2,
    propTextAlign2,
    propDisplay2,
  ]);

  return (
    <div className={styles.servizio}>
      <div className={styles.serviziocontent}>
        <div className={styles.serviziotextcontainer}>
          <div className={styles.serviziopreview}>
            <div className={styles.serviziotitolo} style={servizioTitoloStyle}>
              <div className={styles.serviziotitle}>{servizioTitle}</div>
            </div>
            <div className={styles.reduce}>-</div>
            <div className={styles.extend}>+</div>
          </div>
        </div>
        <div className={styles.serviziotext}>{servizioText}</div>
        <div className={styles.servizicontainer}>
          <div className={styles.serviziotext1}>
            <ul className={styles.digitalStrategy} style={digitalStrategyStyle}>
              <li>{digitalStrategy}</li>
            </ul>
          </div>
          <div className={styles.serviziotext1} style={servizioText1Style}>
            <ul
              className={styles.digitalStrategy}
              style={contentMarketingEAdvertisinStyle}
            >
              <li>{contentMarketingEAdvertis}</li>
            </ul>
          </div>
          <div className={styles.serviziotext1} style={servizioText2Style}>
            <ul className={styles.digitalStrategy}>
              <li>{socialMediaManagement}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servizio;
