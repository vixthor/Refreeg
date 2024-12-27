"use client";

import React, { useState, useEffect } from "react"; // Import useEffect
import { useRouter } from "next/navigation";
import { socialLinks } from "../../../../constants"; // Assuming you have this for the community link
import Image from "next/image";
import { getTotalPetitionCount } from "../../../../lib/firebase/action"; // Import the function
import { Counter } from "../../../../components/counter";
import ShareSheet from "../../../../components/shared/shareSheet"; // Import your ShareSheet component
import JoinSheet from "../../../../components/shared/joinSheet"; // Import your JoinSheet component

export default function PetitionsSuccessPage() {
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false);
  const [isJoinSheetOpen, setIsJoinSheetOpen] = useState(false);
  const [totalPetitionCount, setTotalPetitionCount] = useState(0);
  const goal = 1000; // Goal for the petition count

  // Fetch the petition count on mount
  useEffect(() => {
    async function fetchPetitionCount() {
      const count = await getTotalPetitionCount();
      setTotalPetitionCount(count);
    }
    fetchPetitionCount();
  }, []); // Empty dependency array to run on mount

  const progress = totalPetitionCount ? (totalPetitionCount / goal) * 100 : 0;

  return (
    <div className="mx-auto my-10 px-4 sm:px-6 md:px-8 text-center space-y-6">
      <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat">
        Thank You for Signing!
      </h1>
      <p className="text-black text-base sm:text-lg md:text-xl font-normal font-montserrat">
        Your voice matters. Together, we’re one step closer to making a
        difference.
      </p>
      <Image
        src="/petitions/image 30.png"
        alt="Sign"
        className="mx-auto"
        width={500}
        height={500}
      />

      {/* Progress Bar */}
      <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[604px] h-2 bg-gray-300 rounded-full mx-auto mb-4">
        <div
          className="h-full bg-[#0070E0] rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl space-x-2">
        <span className="bg-gradient-to-t from-blue-500 to-[#ef4286] text-transparent bg-clip-text">
          {totalPetitionCount !== null ? (
            <Counter start={0} end={totalPetitionCount} duration={0.5} />
          ) : (
            <span>Loading...</span>
          )}
        </span>
        <span className="block sm:inline">
          people have signed. Our goal is 1000!
        </span>
      </h1>

      <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center gap-4 sm:gap-0">
        <button
          onClick={() => setIsShareSheetOpen(true)}
          className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-md border-2 border-[#0070e0] text-[#0070e0] text-base sm:text-lg font-semibold font-montserrat text-center transition-transform transform hover:bg-[#0070e0] hover:text-white hover:scale-105"
        >
          Share this petition
        </button>
        <button
          onClick={() => setIsJoinSheetOpen(true)}
          className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#336bad] rounded-md text-white text-base sm:text-lg font-semibold font-montserrat text-center transition-transform transform hover:bg-[#274a80] hover:scale-105"
        >
          Join our community
        </button>
      </div>

      {/* ShareSheet Modal */}
      <ShareSheet
        isOpen={isShareSheetOpen}
        onClose={() => setIsShareSheetOpen(false)}
      />

      {/* JoinSheet Modal */}
      <JoinSheet
        isOpen={isJoinSheetOpen}
        onClose={() => setIsJoinSheetOpen(false)}
        joinLink={socialLinks.community}
      />
    </div>
  );
}
