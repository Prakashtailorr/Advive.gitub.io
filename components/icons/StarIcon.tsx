import React from "react";

const StarIcon: React.FC = () => {
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
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.236 3.799a1 1 0 00.95.69h3.996c.969 0 1.371 1.24.588 1.81l-3.233 2.351a1 1 0 00-.364 1.118l1.236 3.799c.3.921-.755 1.688-1.54 1.118l-3.233-2.35a1 1 0 00-1.175 0l-3.233 2.35c-.784.57-1.838-.197-1.539-1.118l1.236-3.8a1 1 0 00-.364-1.117L2.279 9.226c-.783-.57-.38-1.81.588-1.81h3.996a1 1 0 00.95-.69l1.236-3.8z"
      />
    </svg>
  );
};

export default StarIcon;
