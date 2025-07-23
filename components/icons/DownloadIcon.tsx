import React from "react";

const DownloadIcon: React.FC = () => {
  return (
    <svg
      className="w-6 h-6 text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
      />
    </svg>
  );
};

export default DownloadIcon;
