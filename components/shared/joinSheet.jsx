"use client";

import React from "react";

export default function JoinSheet({ isOpen, onClose, joinLink }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] sm:w-[400px] text-center">
        <h2 className="text-lg font-semibold mb-4">Join Our Community</h2>
        <p className="mb-6 text-sm text-gray-700">
          Become part of a movement that makes a difference. Join our community now!
        </p>
        <a
          href={joinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-4 px-6 py-2 rounded-md bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
        >
          Join Community
        </a>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-2 rounded-md border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
