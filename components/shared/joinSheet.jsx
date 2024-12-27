"use client";

import React from "react";
import Image from "next/image";

export default function JoinSheet({ isOpen, onClose, joinLink }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] sm:w-[400px] text-center">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="" aria-label="Close">
            <Image
              src="/petitions/x 1.svg"
              alt="close"
              width={24}
              height={24}
            />
          </button>
        </div>
        <h2 className="text-black text-base font-semibold font-montserrat">
          Keep Track of the Change You’re Making!
        </h2>
        <p className="text-center text-black text-sm font-normal font-montserrat mb-6">
          Join our community to see the real impact of your contributions. Stay
          updated on the progress of causes you care about, connect with other
          changemakers, and be part of a movement that’s transforming lives and
          building a better future.
        </p>
        <a
          href={joinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4 px-16 py-5 bg-[#336bad] rounded-md text-center text-white text-sm font-medium hover:bg-[#214b7b] transition-colors"
        >
          Join Community
        </a>
      </div>
    </div>
  );
}
