"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "components/shared/PetitionCreationPopup";
import { getTotalPetitionCount } from "lib/firebase/action";

// Sample petition data (can be fetched dynamically in a real application)
const petitions = [
  {
    id: 1,
    title: "Ramadan Drive",
    description:
      "Join us in making a difference—your donations can provide food, clothing, and essential supplies to those in need this holy month. This Ramadan, let’s come together as a community to support the less privileged. Every donation counts and brings barakah into your life. Give generously and spread kindness.",
    endDate: "2025-03-03",
    image: "/petitions/image.png",
    link: "/ramadandrive",
  },
];

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
    <div className="px-[10px] md:px-[50px] space-y-5 my-10">
      {/* Header text to introduce the petitions */}
      <p className="text-[#726c6c] text-lg font-medium font-montserrat">
        Support a cause with Refreeg
      </p>

      {/* Petition cards grid */}
      <div className="flex flex-col md:flex-row gap-6">
        {petitions.map(({ id, title, description, endDate, image, link }) => (
          <div
            key={id}
            className="w-full sm:w-[350px] md:w-[400px] h-[450px] md:h-[420px]"
          >
            {/* Petition image */}
            <div className="rounded-tr-2xl rounded-tl-2xl overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Petition details */}
            <div className="shadow-xl rounded-b-2xl px-2 py-4">
              {/* Petition title */}
              <h2 className="text-black text-xl font-bold font-montserrat">
                {title}
              </h2>

              {/* Info items (creator, days left, signatures) */}
              <div className="flex gap-2 items-center py-2 w-full  flex-wrap sm:flex-nowrap">
                <span className="flex gap-1 items-center w-full sm:w-auto">
                  <Image
                    src="/petitions/Account.png"
                    alt="Bloody civilians"
                    width={20}
                    height={20}
                  />
                  <p className="text-black text-sm font-normal font-montserrat">
                    Support the Poor Initiative
                  </p>
                </span>
                <InfoItem
                  src="/petitions/clock 2.svg"
                  alt="Days Left"
                  text={calculateDaysLeft(endDate)}
                  className=""
                />
              </div>

              {/* Petition description */}
              <p className="text-black font-normal font-montserrat mb-3">
                {description}
              </p>

              {/* Link to sign the petition */}
            </div>
            <Link href={`${link}?title=${encodeURIComponent(title)}`}>
              <button className="flex gap-2 items-center justify-center bg-blue-500 text-white p-2 rounded-b-2xl w-full hover:bg-blue-800 transition-all delay-100">
                Donate
                <Image
                  src="/petitions/chevron-right 2.svg"
                  alt="Sign"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
      {/* Link to create a new petition */}
      {/* Modal for creating a new petition */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

// Reusable component for displaying an icon with text (e.g., creator, days left, signatures)
const InfoItem = ({ src, alt, text }) => (
  <p className="flex gap-1 text-black text-sm font-normal font-montserrat">
    <Image src={src} alt={alt} width={15} height={15} />
    {text}
  </p>
);
