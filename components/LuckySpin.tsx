"use client";

import React, { useState } from "react";

const rewards = ["+10 Coins", "+20 Coins", "+50 Coins", "Try Again", "+5 Coins", "Jackpot! 🎉"];

const LuckySpin: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSpin = () => {
    setSpinning(true);
    setResult(null);

    setTimeout(() => {
      const random = Math.floor(Math.random() * rewards.length);
      setResult(rewards[random]);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-bold mb-4">🎰 Lucky Spin</h2>
      <div className="mb-4">
        {spinning ? (
          <div className="animate-spin h-12 w-12 border-4 border-pink-500 border-t-transparent rounded-full mx-auto"></div>
        ) : result ? (
          <div className="text-lg font-semibold text-green-700">{result}</div>
        ) : (
          <div className="text-gray-600">Tap the button to spin!</div>
        )}
      </div>
      <button
        onClick={handleSpin}
        disabled={spinning}
        className="bg-pink-500 text-white px-5 py-2 rounded hover:bg-pink-600 disabled:opacity-50"
      >
        {spinning ? "Spinning..." : "Spin Now"}
      </button>
    </div>
  );
};

export default LuckySpin;
