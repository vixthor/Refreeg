"use client";

import React from "react";

export default function ShareSheet({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] sm:w-[400px] text-center">
        <h2 className="text-lg font-semibold mb-4">Share this petition</h2>
        <p className="mb-6 text-sm text-gray-700">
          Spread the word and make a difference! Share this petition with your network.
        </p>
        <button
          onClick={onClose}
          className="mb-4 px-6 py-2 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
        >
          Copy Link
        </button>
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
