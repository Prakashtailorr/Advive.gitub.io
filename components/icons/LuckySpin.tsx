"use client";

import React, { useState } from "react";

const prizes = [5, 10, 15, 20, 25, 50];

const LuckySpin: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const spinWheel = () => {
    setSpinning(true);
    setResult(null);
    setTimeout(() => {
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      setResult(randomPrize);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">🎯 Lucky Spin</h2>
      <p className="text-gray-600 mb-4">Spin the wheel & win coins!</p>

      <button
        onClick={spinWheel}
        disabled={spinning}
        className={`px-4 py-2 rounded text-white ${
          spinning ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        {spinning ? "Spinning..." : "Spin Now"}
      </button>

      {result !== null && (
        <div className="mt-4 text-lg font-semibold text-green-600">
          🎉 You won {result} coins!
        </div>
      )}
    </div>
  );
};

export default LuckySpin;
