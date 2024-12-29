"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function JoinCommunityPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 max-w-xs sm:max-w-md w-full space-y-4">
        <button className="text-black font-bold float-right" onClick={onClose}>
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
          <h2 className="text-lg font-bold font-montserrat">
            Keep Track of the Change You’re Making!
          </h2>
          <p className="text-center text-black text-sm font-normal font-montserrat">
            Join our community to see the real impact of your contributions.
            Stay updated on the progress of causes you care about, connect with
            other changemakers, and be part of a movement that’s transforming
            lives and building a better future.
          </p>
          <span className="py-2 w-full">
            <Link href="http://t.me/+d67UCIer8c01ODhk">
              <button className="w-full bg-[#eda145] rounded-md py-3 text-neutral-50 text-sm font-montserrat mt-2 hover:bg-[#c08237] transition-colors sm:w-[300px] sm:px-20">
                Proceed
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
