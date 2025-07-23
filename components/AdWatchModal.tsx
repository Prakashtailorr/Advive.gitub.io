"use client";

import React from "react";

interface AdWatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const AdWatchModal: React.FC<AdWatchModalProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  if (!isOpen) return null;

  const handleComplete = () => {
    onComplete();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
        <h2 className="text-lg font-bold mb-2">🎥 Watch Ad</h2>
        <p className="text-sm text-gray-600 mb-4">Watch this ad to earn +10 coins.</p>
        <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center text-gray-500">
          Ad Playing...
        </div>
        <button
          onClick={handleComplete}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          I Watched The Ad ✅
        </button>
      </div>
    </div>
  );
};

export default AdWatchModal;
