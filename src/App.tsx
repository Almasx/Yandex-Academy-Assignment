import clsx from "clsx";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Cursor from "./components/molecules/Cursor";
import Navigation from "./components/molecules/Navigation";
import About from "./sections/About";
import Awards from "./sections/Awards";
import Title from "./sections/Title";
import WebProject from "./sections/WebProject";
import MobileProject from "./sections/MobileProject";
import Background from "./components/atoms/Background";

function App() {
  return (
    <div className="relative bg-black  text-white">
      <Cursor />
      <Background />
      <Navigation className="fixed top-0 z-30" />
      <Title />
      <About />
      <Awards />
      <MobileProject />
      <WebProject />
      {/* lol */}
    </div>
  );
}

export default App;
