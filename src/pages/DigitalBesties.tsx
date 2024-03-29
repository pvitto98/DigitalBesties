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
import NavbarNew from "../components/NavBarNew";
import Wave from "react-wavify";

const DigitalBesties: FunctionComponent = () => {
  return (
    <div className={styles.digitalbesties}>
      <NavbarNew />
      <Hero1 />
      <Wave
    fill="#ce6a85"
    paused={false}
    options={{
      height: 50,
      amplitude: 40,
      speed: 0.2,
      points: 5,
    }}
    style={{position: "relative", top: "0px", zIndex: 1, backgroundColor: "#e3e3e3", scale: "1.08"}}
  />
      <Motto />
      <Wave
    fill="#5c374c"
    paused={false}
    options={{
      height: 50,
      amplitude: 40,
      speed: 0.2,
      points: 5,
    }}
    style={{position: "relative", top: "0px", zIndex: 1, backgroundColor: "#ce6a85", scale: "1.08"}}
  />
      <ChiSiamoNew />
      <Wave
    fill="#e3e3e3"
    paused={false}
    options={{
      height: 50,
      amplitude: 40,
      speed: 0.2,
      points: 5,
    }}
    style={{position: "relative", top: "0px", zIndex: 1, backgroundColor: "#5c374c", scale: "1.08"}}
  />
      <INostriServiziNew />
      <Wave
    fill="#ce6a85"
    paused={false}
    options={{
      height: 50,
      amplitude: 40,
      speed: 0.2,
      points: 5,
    }}
    style={{position: "relative", top: "0px", zIndex: 1, backgroundColor: "#e3e3e3", scale: "1.08"}}
  />
      <Contatti />
    </div>
  );
};

export default DigitalBesties;
