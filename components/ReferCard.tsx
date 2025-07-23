"use client";

import React from "react";

const ReferCard: React.FC = () => {
  const referralCode = "AD1234";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    alert("Referral code copied! ✅");
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-md mb-
