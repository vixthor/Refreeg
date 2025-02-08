"use client";

import React from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

export default function ShareSheet({ isOpen, onClose }) {
  if (!isOpen) return null;

  const petitionUrl =
    "https://www.refreeg.com/petitions/petition?title=GET%20DAHIRU%20FIRED!";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(petitionUrl);
    toast.success("Link copied to clipboard!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      petitionUrl
    )}`,
    instagram: "#", // Instagram does not have a direct share URL
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      petitionUrl
    )}&text=Check%20out%20this%20petition!`,
    youtube: "#", // YouTube sharing is not applicable in this context
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      petitionUrl
    )}`,
  };

  const openShareLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Toast container */}
      <ToastContainer />

      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] text-center flex flex-col relative">
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

        <h2 className="text-black text-xl font-semibold font-montserrat">
          📢 Amplify Your Impact
        </h2>
        <p className="text-center text-black text-sm font-normal font-montserrat">
          Share this petition with your friends and family to help us reach our
          goal faster!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 items-center mt-4 space-x-2 bg-gray-100 p-4 rounded-lg">
          <button onClick={copyToClipboard} aria-label="Copy Link">
            <Image src="/petitions/Picture1.png" alt="Link" width={50} height={50} />
          </button>
          <button
            onClick={() => openShareLink(shareLinks.facebook)}
            aria-label="Share on Facebook"
          >
            <Image
              src="/petitions/Picture2.png"
              alt="Facebook"
              width={50}
              height={50}
            />
          </button>
          <button onClick={copyToClipboard} aria-label="Share on Instagram">
            <Image
              src="/petitions/Picture3.png"
              alt="Instagram"
              width={50}
              height={50}
            />
          </button>
          <button onClick={copyToClipboard} aria-label="Share on YouTube">
            <Image
              src="/petitions/Picture4.png"
              alt="YouTube"
              width={50}
              height={50}
            />
          </button>
          <button
            onClick={() => openShareLink(shareLinks.twitter)}
            aria-label="Share on Twitter"
          >
            <Image src="/petitions/Picture5.png" alt="Twitter/X" width={50} height={50} />
          </button>
          <button
            onClick={() => openShareLink(shareLinks.whatsapp)}
            aria-label="Share on WhatsApp"
          >
            <Image
              src="/petitions/Picture6.png"
              alt="WhatsApp"
              width={50}
              height={50}
            />
          </button>
        </div>

        {/* Copy Link Section */}
        <div className="flex justify-between items-center mt-4 border p-2 rounded-lg">
          <span className="text-sm text-gray-700 truncate">{petitionUrl}</span>
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 text-white text-sm px-4 py-1 rounded-md hover:bg-blue-700 transition-colors"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
