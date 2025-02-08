"use client";

import React from "react";
import Image from "next/image";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 max-w-xs sm:max-w-md w-full space-y-4">
        <button
          className="text-black font-bold float-right"
          onClick={onClose}
        >
          <Image src="/petitions/x 1.svg" alt="close" width={24} height={24} />
        </button>
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/petitions/image 32.png"
            alt="Warning"
            className="w-24 h-24 sm:w-36 sm:h-36"
            width={150}
            height={150}
          />
          <h2 className="text-base md:text-lg font-bold font-montserrat sm:text-xl">
            New petitions can’t be created
          </h2>
          <p className="text-center text-sm font-normal font-montserrat sm:text-base">
            New petitions can’t be created at the moment but our engineers are
            working round the clock to fix this issue.
          </p>
        </div>
      </div>
    </div>
  );
}
