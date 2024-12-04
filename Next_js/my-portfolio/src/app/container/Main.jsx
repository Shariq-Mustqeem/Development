"use client";

import React, { useEffect } from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Home />
      <Skills />
    </>
  );
}

export default Main;
