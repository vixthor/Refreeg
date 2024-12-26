import { socialLinks } from "../../../../constants";
import Image from "next/image";
import Link from "next/link";
import { getTotalPetitionCount } from "../../../../lib/firebase/action";
import { Counter } from "../../../../components/counter";

export default async function PetitionsSuccessPage() {
  const totalPetitionCount = await getTotalPetitionCount();
  const goal = 1000; // Your goal for the petition count
  const progress = totalPetitionCount ? (totalPetitionCount / goal) * 100 : 0; // Calculate progress as a percentage

  console.log("Total Petition Count: ", totalPetitionCount); // Debugging: Check the fetched value

  return (
    <div className="max-w-xl mx-auto my-10 px-4 sm:px-6 md:px-8 text-center space-y-6">
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
        className="w-full h-auto mx-auto"
        width={600}
        height={600}
      />

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-300 rounded-full mb-4">
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
        <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-md border-2 border-[#0070e0] text-[#0070e0] text-base sm:text-lg font-semibold font-montserrat text-center transition-transform transform hover:bg-[#0070e0] hover:text-white hover:scale-105">
          Share this petition
        </button>
        <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#336bad] rounded-md text-white text-base sm:text-lg font-semibold font-montserrat text-center transition-transform transform hover:bg-[#274a80] hover:scale-105">
          Join our community
        </button>
      </div>
    </div>
  );
}

{
  /* 
        <Link href={socialLinks.community}>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg mb-4 sm:mb-0 hover:bg-blue-600">
            Join our Community
          </button>
        </Link>
        <Link href="/">
          <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400">
            Continue to Homepage
          </button>
        </Link>
        */
}
