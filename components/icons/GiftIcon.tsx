import React from "react";

const GiftIcon: React.FC = () => {
  return (
    <svg
      className="w-6 h-6 text-pink-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16 0H4m16 0V9a2 2 0 00-2-2h-3M4 12V9a2 2 0 012-2h3m6 0a2 2 0 10-4 0m4 0a2 2 0 104 0m-8 0a2 2 0 11-4 0"
      />
    </svg>
  );
};

export default GiftIcon;
