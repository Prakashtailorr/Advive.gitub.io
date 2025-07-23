"use client";

import React, { useState } from "react";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWithdraw: (amount: number) => void;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose, onWithdraw }) => {
  const [amount, setAmount] = useState<number>(0);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (amount > 0) {
      onWithdraw(amount);
      setAmount(0);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
        <h2 className="text-lg font-bold mb-4">💸 Withdraw Coins</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
          className="w-full border rounded-md p-2 mb-
