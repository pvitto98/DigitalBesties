import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Motto from "../components/Motto";
import ChiSiamo from "../components/ChiSiamo";
import INostriServiziNew from "../components/INostriServiziNew";
import Contatti from "../components/Contatti";
import styles from "./DigitalBesties.module.css";
import ChiSiamoNew from "../components/ChiSiamoNew";
import Hero1 from "./Hero1";
import Wave from "react-wavify";
import CustomWave from "../components/CustomWave";

const DigitalBesties: FunctionComponent = () => {
  return (
    <div className={styles.digitalbesties}>
      <Hero1 />
      <CustomWave fill="#ce6a85" backgroundColor="#e3e3e3" />
      <Motto />
      <CustomWave fill="#5c374c" backgroundColor="#ce6a85" />
      <ChiSiamoNew />
      <CustomWave fill="#e3e3e3" backgroundColor="#5c374c" />
      <INostriServiziNew />
      <CustomWave fill="#ce6a85" backgroundColor="#e3e3e3" />
      <Contatti />
    </div>
  );
};

export default DigitalBesties;
