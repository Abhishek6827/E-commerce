import React from "react";

const Category = ({ finalCategory, setCatname, selectedCategory }) => {
  // Enhanced categories with more items
  const enhancedCategories = [
    ...finalCategory,
    { name: "mobile-phones", slug: "mobile-phones" },
    { name: "laptops", slug: "laptops" },
    { name: "fragrances", slug: "fragrances" },
    { name: "skincare", slug: "skincare" },
    { name: "groceries", slug: "groceries" },
    { name: "home-decoration", slug: "home-decoration" },
    { name: "furniture", slug: "furniture" },
    { name: "tops", slug: "tops" },
    { name: "womens-dresses", slug: "womens-dresses" },
    { name: "womens-shoes", slug: "womens-shoes" },
    { name: "mens-shirts", slug: "mens-shirts" },
    { name: "mens-shoes", slug: "mens-shoes" },
    { name: "mens-watches", slug: "mens-watches" },
    { name: "womens-watches", slug: "womens-watches" },
    { name: "womens-bags", slug: "womens-bags" },
    { name: "womens-jewellery", slug: "womens-jewellery" },
    { name: "sunglasses", slug: "sunglasses" },
    { name: "automotive", slug: "automotive" },
    { name: "motorcycle", slug: "motorcycle" },
    { name: "lighting", slug: "lighting" },
  ];

  let cat = enhancedCategories.map((v, i) => {
    const isSelected = selectedCategory === v.name;
    const colorClass = isSelected
      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
      : "bg-gradient-to-r from-gray-100 to-blue-50 hover:from-blue-100 hover:to-purple-100 text-gray-700";

    return (
      <li
        onClick={() => setCatname(v.name)}
        key={i}
        className={`p-4 cursor-pointer text-lg font-medium mb-3 rounded-lg transition-all transform hover:scale-105 ${colorClass}`}
      >
        {v.name.replace(/-/g, " ")}
      </li>
    );
  });

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
        Product Categories
      </h3>
      <ul className="space-y-2 max-h-[500px] overflow-y-auto">{cat}</ul>
    </div>
  );
};

export default Category;
