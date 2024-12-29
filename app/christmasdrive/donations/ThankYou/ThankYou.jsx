"use client";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use"; // Optional: To handle responsive confetti
import Link from "next/link";
import { FormProgressBar } from "../../../../components/progressBar";

const ThankYou = () => {
  const { width, height } = useWindowSize();
  const [confettiRun, setConfettiRun] = useState(false);

  useEffect(() => {
    setConfettiRun(true);
    // Optionally, stop confetti after a certain time
    const timer = setTimeout(() => {
      setConfettiRun(false);
    }, 10000); // Confetti runs for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center relative">
      {confettiRun && <Confetti width={width} height={height} />}
      <FormProgressBar currentStep={5} className="w-[20%]" />
      {/* Main Section */}
      <main className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Thank You, An Email Will Be Sent When your Donation is Confirmed!
        </h1>

        <p className="text-gray-700 text-lg text-center mb-8">
          Would you like to stay informed about future Christmas drives and
          other charitable events? By creating an account?
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-8">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg mb-4 sm:mb-0 hover:bg-blue-600">
            Receive Future Updates
          </button>
          <Link href="/">
            <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400">
              Continue to Homepage
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="/boysmiling.svg"
            alt="Smiling Child"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
