import React, { useState } from "react";

const ProductItems = ({ pdata, addToCart, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(pdata);
  };

  // Different border colors based on index for variety
  const borderColors = [
    "border-l-4 border-t-0 border-r-0 border-b-0 border-purple-500",
    "border-l-4 border-t-0 border-r-0 border-b-0 border-blue-500",
    "border-l-4 border-t-0 border-r-0 border-b-0 border-green-500",
    "border-l-4 border-t-0 border-r-0 border-b-0 border-yellow-500",
    "border-l-4 border-t-0 border-r-0 border-b-0 border-pink-500",
    "border-l-4 border-t-0 border-r-0 border-b-0 border-red-500",
  ];

  const colorClass = borderColors[index % borderColors.length];

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${colorClass} animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 animate-pulse flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <img
          src={pdata.thumbnail}
          alt={pdata.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            imageLoaded ? "block" : "hidden"
          } ${isHovered ? "scale-110" : "scale-100"}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
          {pdata.rating} ★
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-1">
          {pdata.title}
        </h4>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {pdata.description}
        </p>
        <div className="flex justify-between items-center mb-3">
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-xl">
            ${pdata.price}
          </b>
          <span className="text-xs text-gray-500">Free Shipping</span>
        </div>
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-md transition-all transform hover:scale-105 shadow-md"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
