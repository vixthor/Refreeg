"use client";

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use'; // For responsive confetti
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

export default function Home() {
  const { width, height } = useWindowSize();
  const [confettiRun, setConfettiRun] = useState(false);

  useEffect(() => {
    setConfettiRun(true); // Start confetti when the page loads
    const timer = setTimeout(() => {
      setConfettiRun(false); // Stop confetti after 10 seconds
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* Confetti */}
      {confettiRun && <Confetti width={width} height={height} />}

      {/* Main content */}
      <Header />
      <Hero />
      <About />
      <WhoWeAre />
      <HowWeMakeADifference />
      <HowDoWeWork />
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
