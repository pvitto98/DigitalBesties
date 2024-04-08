import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import Motto from "../components/Motto";
import INostriServizi from "../components/INostriServizi";
import styles from "./Homepage.module.css";
import ChiSiamo from "../components/ChiSiamo";
import Hero from "../components/Hero";
import CustomWave from "../components/CustomWave";
import Contattaci from "../components/Contattaci";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.digitalbesties}>
      <Navbar />
      <Hero />
      <CustomWave fill="#ce6a85" backgroundColor="#e3e3e3" />
      <Motto />
      <CustomWave fill="#5c374c" backgroundColor="#ce6a85" />
      <ChiSiamo />
      <CustomWave fill="#e3e3e3" backgroundColor="#5c374c" />
      <INostriServizi />
      <CustomWave fill="#ce6a85" backgroundColor="#e3e3e3" />
      <Contattaci />
    </div>
  );
};

export default HomePage;
