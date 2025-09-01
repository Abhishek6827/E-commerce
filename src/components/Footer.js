import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShopNow</h3>
            <p className="text-gray-400">
              Your one-stop shop for all your needs. Quality products at
              affordable prices.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white">Home</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                  Products
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                  Categories
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white">FAQ</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                  Returns & Refunds
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                  Shipping Info
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and once-in-a-lifetime deals.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 ShopNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
