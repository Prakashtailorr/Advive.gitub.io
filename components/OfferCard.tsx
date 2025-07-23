import React from "react";

interface OfferCardProps {
  title: string;
  description: string;
  onClaim: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, onClaim }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-700 mb-3">{description}</p>
      <button
        onClick={onClaim}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
      >
        Claim Offer 🎉
      </button>
    </div>
  );
};

export default OfferCard;
