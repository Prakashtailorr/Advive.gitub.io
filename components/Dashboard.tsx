"use client";

import React, { useState } from "react";
import Header from "./Header";
import LuckySpin from "./LuckySpin";
import ReferCard from "./ReferCard";
import OfferCard from "./OfferCard";
import TaskCard from "./TaskCard";
import WithdrawModal from "./WithdrawModal";

const Dashboard: React.FC = () => {
  const [coins, setCoins] = useState<number>(100);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  const handleWithdraw = (amount: number) => {
    if (amount <= coins) {
      setCoins(coins - amount);
    } else {
      alert("Not enough coins! ❌");
    }
  };

  const handleClaimOffer = () => {
    setCoins(coins + 20);
    alert("🎉 Offer claimed! +20 coins");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header coins={coins} />
      <main className="p-4 space-y-4 max-w-md mx-auto">
        <LuckySpin />
        <ReferCard />
        <OfferCard
          title="🔥 Welcome Bonus"
          description="Claim your 20 bonus coins now!"
          onClaim={handleClaimOffer}
        />
        <div className="space-y-2">
          <TaskCard title="Watch 3 ads" completed={false} />
          <TaskCard title="Login daily" completed={true} />
        </div>
        <button
          onClick={() => setIsWithdrawOpen(true)}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Withdraw Coins
        </button>
        <WithdrawModal
          isOpen={isWithdrawOpen}
          onClose={() => setIsWithdrawOpen(false)}
          onWithdraw={handleWithdraw}
        />
      </main>
    </div>
  );
};

export default Dashboard;
