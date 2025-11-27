import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Countdown from "./Countdown.jsx";

import Hero from "./hero.jsx";
import Umur from "./umur.jsx";
import Berkas from "./berkas.jsx";
import Dekor from "./dekor.jsx";
import Hadiah from "./hadiah.jsx";
import Footer from "./footer.jsx";

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain ? (
        <Countdown onFinish={() => setShowMain(true)} />
      ) : (
        <>
          <Hero />
          <Umur />
          <Berkas />
          <Dekor />
          <Hadiah />
          <Footer />
        </>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
