import React from "react";

const WalletIcon: React.FC = () => {
  return (
    <svg
      className="w-6 h-6 text-yellow-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 9V7a4 4 0 00-4-4H5a2 2 0 00-2 2v12a2 2 0 002 2h8a4 4 0 004-4v-2m0-2h4m-4 0a2 2 0 000 4m0-4v4"
      />
    </svg>
  );
};

export default WalletIcon;
