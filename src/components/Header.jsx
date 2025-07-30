import React from "react";
import shoppingCartIcon from "../assets/trolley.png";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      {/* Logo / Site Title  */}
      <h1 className="text-2xl font-bold text-gray-800">🛍️ MyCart</h1>

      {/* Cart Icon with Item Count  */}
      <div className="relative">
        <button className="relative inline-flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-900">
          {/* Shopping cart icon (heroicons or similar)  */}
          <img src={shoppingCartIcon} alt="" />
          {/* Cart item count badge  */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
