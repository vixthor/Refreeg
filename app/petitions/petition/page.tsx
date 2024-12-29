'use client';

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PetitionForm } from "../../../components/petitionForm";
import JoinCommunityPopup from "components/shared/JoinCommunityPopup";
import Image from "next/image";

function PetitionsPageContent() {
  // Get the title from the search params
  const title = useSearchParams().get("title") || "Loading...";

  return (
    <main className="flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="px-6 py-8 bg-[#f3f6fb] w-full md:w-[537px] flex flex-col gap-12 md:gap-48">
        <div className="flex flex-col gap-4">
          {/* Header with Image */}
          <div className="flex gap-2 items-center">
            <Image src="/petitions/Frame 1.svg" alt="sign up" width={150} height={150} />
            <h1 className="text-[#5a5555] text-[20px] md:text-[25px] font-bold font-montserrat">
              Sign Our Petition
            </h1>
          </div>
          <p className="text-[#0a0a0b] text-sm md:text-base font-normal font-montserrat leading-normal">
            Help us take action against injustice. Your signature makes a difference in ensuring accountability for those in power.
          </p>
        </div>

        {/* Quote Section */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h3 className="text-[#0a0a0b] text-lg font-semibold font-montserrat">
            “Join us in building a better tomorrow. Your support can spark the change we need.”
          </h3>
          <div className="flex gap-2">
            <Image src="/petitions/Ellipse 24.svg" alt="Adeiza" width={50} height={50} />
            <span className="flex flex-col gap-1">
              <h3 className="text-black font-semibold font-montserrat">Angulu Adeiza Julius</h3>
              <p className="text-black text-xs md:text-sm font-normal font-montserrat">
                Chief Executive Officer of Refreeg
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="max-w-xl mx-auto my-8 md:my-14 text-center space-y-4 px-6">
        <h1 className="font-semibold text-2xl md:text-4xl">{title}</h1>
        <p className="text-sm md:text-base">
          None of the information provided would be public knowledge. Let’s get as many signatures as possible!
        </p>
        <PetitionForm />
      </div>
    </main>
  );
}

export default function PetitionsPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup when the page loads
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PetitionsPageContent />
      {showPopup && (
        <JoinCommunityPopup isOpen={showPopup} onClose={handleClosePopup} />
      )}
    </Suspense>
  );
}
