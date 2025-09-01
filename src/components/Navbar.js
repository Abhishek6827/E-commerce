import React, { useState, useEffect } from "react";

const Navbar = ({ cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg py-2"
          : "bg-gradient-to-r from-purple-600 to-blue-600 py-3 md:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">ShopNow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </button>
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </button>
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Categories
              </button>
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </button>
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md text-sm font-medium transition-colors transform hover:scale-105">
              Sign In
            </button>
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>

            <button
              className="text-white text-2xl focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu (shown when menu button is clicked) */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-3 px-2 pt-2 pb-3">
            <button
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors text-left"
              onClick={handleMenuItemClick}
            >
              Home
            </button>
            <button
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors text-left"
              onClick={handleMenuItemClick}
            >
              Products
            </button>
            <button
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors text-left"
              onClick={handleMenuItemClick}
            >
              Categories
            </button>
            <button
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors text-left"
              onClick={handleMenuItemClick}
            >
              About
            </button>
            <button
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors text-left"
              onClick={handleMenuItemClick}
            >
              Contact
            </button>
            <button
              className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md text-base font-medium transition-colors mt-2"
              onClick={handleMenuItemClick}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
