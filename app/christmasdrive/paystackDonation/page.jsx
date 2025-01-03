"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const PaymentPage = () => {
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter(); // Initialize router

  const accountNumber = "1022688902";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDone = () => {
    router.push("/christmasdrive/donations/ThankYou"); // Redirect to "thankyou" page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center mb-2">
        Please donate by transferring to the details below
      </h1>
      <p className="text-sm sm:text-base text-gray-500 text-center mb-4">
        A confirmation email will be sent once we confirm your donation!
      </p>

      <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-700 font-medium">
            Account number: <span className="font-bold">{accountNumber}</span>
          </p>
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 focus:outline-none"
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="text-gray-700 font-medium mb-2">
          Bank Name: <span className="font-bold">United Bank for Africa</span>
        </p>
        <p className="text-gray-700 font-medium">
          Name on Account:{" "}
          <span className="font-bold">Destined Children's Orphanage</span>
        </p>
      </div>

      <button
        onClick={handleDone} // Call handleDone on click
        className="mt-6 bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 focus:outline-none"
      >
        Done!
      </button>
    </div>
  );
};

export default PaymentPage;
