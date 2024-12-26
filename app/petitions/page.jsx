"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../../lib/firebase/config";

const initialPetitions = [
  {
    id: 1,
    title: "GET DAHIRU FIRED!",
    description:
      "This petition is calling for justice and accountability. Together, we can create change. Add your voice by signing today and be a part of the solution.",
    daysLeft: "10 days left",
    signatures: 0, // Initialize with 0 or any default value
    image: "/petitions/women.png",
    link: "/petitions/petition",
  },
  // Add more petitions here
];

export default function Home() {
  const [petitions, setPetitions] = useState(initialPetitions);

  useEffect(() => {
    const fetchPetitions = async () => {
      try {
        const petitionRef = collection(db, "petitions");
        const snapshot = await getDocs(petitionRef);
        const fetchedPetitions = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          signatures: doc.data().signatures || 0,
        }));
        setPetitions(fetchedPetitions);
      } catch (error) {
        console.error("Error fetching petitions:", error);
      }
    };

    fetchPetitions();
  }, []);

  return (
    <div className="px-[10px] md:px-[50px] space-y-5 my-10">
      <p className="text-[#726c6c] text-lg font-medium font-montserrat">
        Make your voice heard and support a cause
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {petitions.map(petition => (
          <div key={petition.id} className="max-w-[300px] h-[500px] mx-auto">
            <div className="rounded-tr-2xl rounded-tl-2xl overflow-hidden">
              <Image
                src={petition.image}
                alt={petition.title}
                width={300}
                height={200}
                className="object-cover w-full"
              />
            </div>
            <div className="shadow-xl rounded-b-2xl">
              <div className="px-2">
                <div className="py-4">
                  <h2 className="text-black text-xl font-bold font-montserrat">
                    {petition.title}
                  </h2>
                  <span className="flex gap-2">
                    <p className="flex gap-1 text-black text-sm font-normal font-montserrat">
                      <Image
                        src="/petitions/clock 2.svg"
                        alt="Days Left"
                        width={10}
                        height={10}
                      />
                      {petition.daysLeft}
                    </p>
                    <p className="flex gap-1 text-black text-sm font-normal font-montserrat">
                      <Image
                        src="/petitions/pencil-square 1.svg"
                        alt="Signatures"
                        width={10}
                        height={10}
                      />
                      <span>{petition.signatures}</span> signatures
                    </p>
                  </span>
                </div>
                <p className="text-black font-normal font-montserrat">
                  {petition.description}
                </p>
              </div>
              <Link
                href={`${petition.link}?title=${encodeURIComponent(
                  petition.title
                )}`}
              >
                <button className="flex gap-2 items-center justify-center bg-blue-500 text-white p-2 rounded-b-2xl w-full mt-3 hover:bg-blue-800 transition-all delay-100">
                  Sign Petition
                  <Image
                    src="/petitions/chevron-right 2.svg"
                    alt="Sign"
                    width={20}
                    height={20}
                  />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
