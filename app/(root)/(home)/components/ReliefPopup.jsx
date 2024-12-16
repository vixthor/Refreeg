import React from "react";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const ReliefPopup = ({ onClose, onScrollToRelief }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative mx-4 md:mx-0"> {/* Added mx-4 for mobile */}
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
            className=' bg-primaryShades-900 '
            src={'/drive/boxdonate.jpg'}
            width={150}
            height={150}
          />

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mt-4">
            Help Us Donate Books to our Christmas drive
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral-600 mt-2">
            Your contributions can make a big impact. By donating books, you help provide
            valuable resources to those in need. Join us in spreading knowledge and supporting
            education. Together, we can make a difference.
          </p>

          <Link
            href={"/bookdrive"}
            className="flex gap-[6px] bg-[#036] mt-6 py-[10px] px-[15px] rounded-[8px]  hover:bg-blue-700 text-white text-[15px] items-center justify-center font-semibold"
          >
            Donate
            <ArrowRight size={"18"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReliefPopup;
