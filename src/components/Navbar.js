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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg py-2"
          : "bg-gradient-to-r from-purple-600 to-blue-600 py-3 md:py-4"
      }`}
    >
      <div className="w-full px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">ShopNow</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>

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

          <div className="hidden md:flex items-center">
            <div className="relative mr-4">
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
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-ping-once">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md text-sm font-medium transition-colors transform hover:scale-105">
              Sign In
            </button>
          </div>

          {/* Mobile cart icon (visible on mobile) */}
          <div className="md:hidden flex items-center">
            <div className="relative mr-4">
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
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-ping-once">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu (shown when menu button is clicked) */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left">
                Home
              </button>
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left">
                Products
              </button>
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left">
                Categories
              </button>
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left">
                About
              </button>
              <button className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left">
                Contact
              </button>
              <button className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md text-sm font-medium transition-colors transform hover:scale-105 mt-2">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
