"use client";

import Header from "../../../components/shared/Header";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import dynamic from "next/dynamic";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../../lib/firebase/config";

// const PaystackButton = dynamic(
//   () => import("react-paystack").then((mod) => mod.PaystackButton),
//   {
//     ssr: false,
//   }
// );

const Donate = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true); // State for modal visibility

  const closeModal = () => {
    // Redirect user to the "/whatareyoudonating" page
    router.push("/christmasdrive/whatareyoudonating");
  };

  const style = {
    modalOverlay:
      "fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50",
    modalContent:
      "bg-white rounded-lg p-6 shadow-lg text-center max-w-md mx-auto",
    illustration: "w-48 h-48 mx-auto mb-4", // Increased size of the illustration
    modalTitle: "text-xl font-semibold mb-2 text-gray-800",
    modalMessage: "text-gray-600 mb-4",
    closeButton: "bg-[#1369A1] text-white px-4 py-2 rounded hover:bg-[#0A4B79]",
  };

  return (
    <div className="px-4">
      {isModalOpen && (
        <div className={style.modalOverlay}>
          <div className={style.modalContent}>
            <div className={style.illustration}>
              {/* Replace this with an actual image or illustration */}
              <img
                src="/maintenance.jpg"
                alt="Maintenance Illustration"
                className="w-full h-full"
              />
            </div>
            <h2 className={style.modalTitle}>Donations Temporarily Paused</h2>
            <p className={style.modalMessage}>
              Donations are paused for maintenance. Please check back soon. 😊💙
            </p>
            <button onClick={closeModal} className={style.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* <Header />
      <h1 className="text-center text-[25px] my-4 font-[600]">
        Make your donation here 😊🎄
      </h1>
      <div className="text-center text-sm text-gray-500 mb-4">
        All donations are processed in Naira (₦).
      </div>
      <div className="max-w-md mx-auto my-4">
        <input
          type="text"
          placeholder="Name"
          className="block w-full px-4 py-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <PaystackButton
          className="block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md transition duration-300 ease-in-out hover:bg-[#0A4B79] hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!isFormValid}
        />
      </div> */}
    </div>
  );
};

export default Donate;
