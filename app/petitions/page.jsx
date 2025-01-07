"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "components/shared/PetitionCreationPopup";
import { getTotalPetitionCount } from "lib/firebase/action";

// Function to calculate the number of days left until a petition's end date
const calculateDaysLeft = (endDate) => {
  const daysLeft = Math.ceil(
    (new Date(endDate) - new Date()) / (1000 * 60 * 60 * 24)
  );
  return daysLeft > 0 ? `${daysLeft} days left` : "1 day left"; // Returns "1 Day left" if the date has passed
};

export default function Home() {
  const [signatureCount, setSignatureCount] = useState(0); // State to store the total number of signatures
  const [isMounted, setIsMounted] = useState(false); // Ensure client-side rendering
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  // Fetch the total petition count when the component mounts
  useEffect(() => {
    setIsMounted(true); // Flag that the component is mounted
    const fetchPetitionCount = async () => {
      try {
        const count = await getTotalPetitionCount();
        setSignatureCount(count);
      } catch (error) {
        console.error("Error fetching petition count:", error);
      }
    };

    fetchPetitionCount();
  }, []);

  if (!isMounted) return null; // Empty dependency array ensures this runs only once

  return (
    <div className="px-[10px] md:px-[50px] space-y-8 my-12">
      {/* Header text */}
      <p className="text-[#726c6c] text-2xl font-semibold font-montserrat text-center">
        Make your voice heard and support a cause
      </p>

      {/* Message when there are no petitions */}
      <div className="flex flex-col items-center justify-center mt-16 space-y-6">
        <p className="text-gray-700 text-2xl font-bold text-center">
          There are no current petitions. Do you want to create one?
        </p>
        <button
          className="bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          onClick={() => setShowModal(true)}
        >
          Create Petition
        </button>
      </div>

      {/* Modal for creating a new petition */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
