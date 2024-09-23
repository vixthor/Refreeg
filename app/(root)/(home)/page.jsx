"use client";

import React, { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use"; // For responsive confetti
import Header from "@/components/shared/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhoWeAre from "./components/WhoWeAre";
import HowWeMakeADifference from "./components/HowWeMakeADifference";
import HowDoWeWork from "./components/HowDoWeWork";
import HowWeEnsureTransparency from "./components/HowWeEnsureTransparency";
import WhatKindOfCausesDoWeSupport from "./components/WhatKindOfCausesDoWeSupport";
import EffortToMakeABetterNation from "./components/EffortToMakeABetterNation";
import WhatMakesUsDifferent from "./components/WhatMakesUsDifferent";
import WhoIsARefreegerian from "./components/WhoIsARefreegerian";
import WhoWereBuiltBy from "./components/WhoWereBuiltBy";
import Faqs from "./components/Faqs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Relief from "./components/Relief"; // Relief section component
import ReliefPopup from "./components/ReliefPopup"; // ReliefPopup component

export default function Home() {
  const { width, height } = useWindowSize();
  const [confettiRun, setConfettiRun] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Create a reference to the Relief section
  const reliefRef = useRef(null);

  useEffect(() => {
    // Start confetti when the page loads
    setConfettiRun(true);

    const confettiTimer = setTimeout(() => {
      setConfettiRun(false); // Stop confetti after 10 seconds
    }, 10000);

    // Show the relief popup after 5 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  // Handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Scroll to the Relief section
  const handleScrollToRelief = () => {
    if (reliefRef.current) {
      reliefRef.current.scrollIntoView({ behavior: "smooth" });
      setShowPopup(false); // Optionally close the popup after scrolling
    }
  };

  return (
    <main>
      {/* Confetti */}
      {confettiRun && <Confetti width={width} height={height} />}

      {/* Relief Popup */}
      {showPopup && <ReliefPopup onClose={handleClosePopup} onScrollToRelief={handleScrollToRelief} />}

      {/* Main content */}
      <Header />
      <Hero />
      <About />
      <WhoWeAre />
      <HowWeMakeADifference />
      <HowDoWeWork />
      {/* Relief Section with reference */}
      <div ref={reliefRef}>
        <Relief />
      </div>
      <HowWeEnsureTransparency />
      <WhatKindOfCausesDoWeSupport />
      <EffortToMakeABetterNation />
      <WhatMakesUsDifferent />
      <WhoIsARefreegerian />
      <WhoWereBuiltBy />
      <Faqs />
      <CTA />
      <Footer />
    </main>
  );
}
