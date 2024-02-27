import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Motto from "../components/Motto";
import ChiSiamo from "../components/ChiSiamo";
import INostriServizi from "../components/INostriServizi";
import Contatti from "../components/Contatti";
import styles from "./DigitalBesties.module.css";

const DigitalBesties: FunctionComponent = () => {
  return (
    <div className={styles.digitalbesties}>
      <Navbar />
      <Hero />
      <Motto />
      <ChiSiamo />
      <INostriServizi />
      <Contatti />
    </div>
  );
};

export default DigitalBesties;
