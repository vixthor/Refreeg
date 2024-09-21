import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ReliefPopup = ({ onClose, onScrollToRelief }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Image */}
          <Image
            src={"/flood.svg"}
            // className="w-20 h-20 rounded-full"
            alt="Flood Relief"
            Flood
            Relief
            width={80}
            height={80}
          />

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mt-4">
            Help Us Support the Maiduguri Flood Victims
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm md:text-base text-neutral-600">
            Thousands of people in Maiduguri have been displaced by devastating
            floods, losing their homes, livelihoods, and basic necessities.
            Together, we can make a difference by providing immediate relief and
            helping rebuild their lives.
          </p>

          {/* Button */}
          <button
            onClick={onScrollToRelief}
            className="flex gap-[6px] bg-[#036] mt-6 py-[10px] px-[15px] rounded-[8px]  hover:bg-blue-700 text-white text-[15px] items-center justify-center font-semibold"
          >
            Help Save Lives
            <ArrowRight size={"18"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReliefPopup;
