import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DigitalBesties from "./pages/DigitalBesties";
import Frame from "./components/Frame16";
import ChiSiamoNuovo from "./pages/ChiSiamoNuovo";
import Hero1 from "./pages/Hero1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-16":
        title = "";
        metaDescription = "";
        break;
      case "/chisiamo-nuovo":
        title = "";
        metaDescription = "";
        break;
      case "/hero2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DigitalBesties />} />
      <Route path="/frame-16" element={<Frame />} />
      <Route path="/chisiamo-nuovo" element={<ChiSiamoNuovo />} />
      <Route path="/hero2" element={<Hero1 />} />
    </Routes>
  );
}
export default App;
