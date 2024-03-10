import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DigitalBesties from "./pages/DigitalBesties";
import loadingStyles from "./components/Loading.module.css";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Add a new state variable for tracking loading status
  const [isLoading, setIsLoading] = useState(true);

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

    // Simulate a loading delay, then set isLoading to false
    setTimeout(() => setIsLoading(false), 1500);
  }, [pathname]);

  // If the app is loading, render a loading screen
  if (isLoading) {
    return <div className={loadingStyles.container}>
      <img className={loadingStyles.longdigitalbesties} src="/longdigitalbesties.png"/>
      <div className={loadingStyles.progress}>
        <div className={loadingStyles.color}></div>
      </div>
    </div>;
  }

  return (
    <Routes>
      <Route path="/" element={<DigitalBesties />} />
    </Routes>
  );
}

export default App;