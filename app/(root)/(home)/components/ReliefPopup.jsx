import React from 'react';

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
          <img
            src="/your-image.png"
            alt="Flood Relief"
            className="w-20 h-20 rounded-full"
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
            className="bg-blue-600 text-white py-2 px-4 mt-6 rounded-md hover:bg-blue-700 transition w-full"
          >
            Help Save Lives
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReliefPopup;
