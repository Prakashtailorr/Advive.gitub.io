import React from "react";
import WalletIcon from "./WalletIcon";

interface HeaderProps {
  coins: number;
}

const Header: React.FC<HeaderProps> = ({ coins }) => {
  return (
    <header className="bg-blue-600 text-white px-4 py-3 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">🎯 Ad Viewer App</h1>
      <div className="flex items-center space-x-2">
        <WalletIcon />
        <span className="text-sm font-medium">{coins} Coins</span>
      </div>
    </header>
  );
};

export default Header;
