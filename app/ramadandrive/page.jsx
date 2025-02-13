// import Header from "../../components/shared/Header";
// import Link from "next/link";
// import Footer from "../(root)/(home)/components/Footer";

// // Completed By Nomso

// export default function Page() {
//   return (
//     <div className="bg-white">
//       {/* Header Section */}
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-12 text-center">
//         <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
//           <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
//             Support the Poor Initiative Ramadan drive
//           </h1>
//           <p className="text-gray-700 text-lg lg:text-xl mb-6">
//             At RefreeG, we believe that access to books, gadgets, money, and
//             clothes is crucial in unlocking the potential of children and
//             communities. Our Ramadan drive is dedicated to collecting and
//             distributing books to those who need them most, from underfunded
//             schools to community libraries in need of resources. Your
//             contributions will make a tangible difference in the lives of
//             children and learners around the world.
//           </p>
// <Link href="/ramadandrive/whatareyoudonating">
//   <button className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center">
//     Proceed to Donate
//     <svg
//       className="w-6 h-6 ml-2"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M5 12h14M12 5l7 7-7 7"
//       ></path>
//     </svg>
//   </button>
// </Link>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//           About Our Ramadan drive
//         </h2>
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           {/* Why Donate */}
//           <div className="flex-1 p-4">
//             <div className="bg-white shadow-md rounded-lg p-6 text-center">
//               <div className="text-blue-500 text-3xl mb-4">🎁</div>
//               <h3 className="text-xl font-bold mb-2">Why Donate?</h3>
//               <p className="text-gray-700">
//                 Books are a gateway to knowledge, imagination, and opportunity.
//                 Many children and communities face a lack of access to
//                 educational materials, stunting their growth and limiting their
//                 potential.
//               </p>
//             </div>
//           </div>

//           {/* Who Benefits */}
//           <div className="flex-1 p-4">
//             <div className="bg-white shadow-md rounded-lg p-6 text-center">
//               <div className="text-yellow-500 text-3xl mb-4">❓</div>
//               <h3 className="text-xl font-bold mb-2">Who Benefits?</h3>
//               <p className="text-gray-700">
//                 Your donations will go to children in need, community libraries,
//                 and schools. These beneficiaries are in dire need of books to
//                 improve literacy and support education efforts.
//               </p>
//             </div>
//           </div>

//           {/* What to Donate */}
//           <div className="flex-1 p-4">
//             <div className="bg-white shadow-md rounded-lg p-6 text-center">
//               <div className="text-green-500 text-3xl mb-4">📚</div>
//               <h3 className="text-xl font-bold mb-2">What to Donate?</h3>
//               <p className="text-gray-700">
//                 We accept children's books,gadget ,money,clothes, textbooks,
//                 novels, educational books, and more. Donating these books
//                 ensures they reach those who will use them to grow and expand
//                 their knowledge.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
            <Link href="/ramadandrive/whatareyoudonating">
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
