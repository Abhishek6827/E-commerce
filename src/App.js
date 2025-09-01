import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category from "./components/Category";
import ProductItems from "./components/ProductItems";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [finalCategory, setFinalCategory] = useState([]);
  const [finalProduct, setFinalProduct] = useState([]);
  const [catName, setCatname] = useState("");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showCategories, setShowCategories] = useState(!isMobile);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On larger screens, always show categories
      if (!mobile) setShowCategories(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      });
  };

  const getProducts = () => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalProduct(finalRes.products);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      setLoading(true);
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((proRes) => proRes.data)
        .then((finalRes) => {
          setFinalProduct(finalRes.products);
          setLoading(false);
        })
        .catch(() => {
          const customData = getCustomCategoryData(catName);
          setFinalProduct(customData);
          setLoading(false);
        });
    }
  }, [catName]);

  const getCustomCategoryData = (category) => {
    const customData = {
      "mobile-phones": [
        {
          id: 101,
          title: "Premium Smartphone X",
          price: 899,
          rating: 4.7,
          thumbnail:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description:
            "Latest flagship smartphone with amazing camera and performance",
        },
        {
          id: 102,
          title: "Budget Phone Lite",
          price: 199,
          rating: 4.2,
          thumbnail:
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "Affordable smartphone with all essential features",
        },
      ],
      laptops: [
        {
          id: 201,
          title: "Ultrabook Pro",
          price: 1299,
          rating: 4.8,
          thumbnail:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "Thin and light laptop with powerful performance",
        },
        {
          id: 202,
          title: "Gaming Laptop",
          price: 1599,
          rating: 4.6,
          thumbnail:
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description:
            "High-performance laptop for gaming and content creation",
        },
      ],
      fragrances: [
        {
          id: 301,
          title: "Luxury Perfume",
          price: 89,
          rating: 4.5,
          thumbnail:
            "https://images.unsplash.com/photo-1595425970377-2f8ded7c7b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "Elegant fragrance for special occasions",
        },
      ],
      skincare: [
        {
          id: 401,
          title: "Anti-Aging Cream",
          price: 49,
          rating: 4.3,
          thumbnail:
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "Revitalizing cream for youthful skin",
        },
      ],
      groceries: [
        {
          id: 501,
          title: "Organic Food Basket",
          price: 59,
          rating: 4.4,
          thumbnail:
            "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "Collection of fresh organic products",
        },
      ],
      "home-decoration": [
        {
          id: 601,
          title: "Modern Wall Art",
          price: 79,
          rating: 4.6,
          thumbnail:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "Contemporary art piece for your living space",
        },
      ],
      furniture: [
        {
          id: 701,
          title: "Ergonomic Office Chair",
          price: 249,
          rating: 4.7,
          thumbnail:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "Comfortable chair for long working hours",
        },
      ],
      "womens-dresses": [
        {
          id: 801,
          title: "Summer Floral Dress",
          price: 59,
          rating: 4.5,
          thumbnail:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "Light and breezy dress for summer days",
        },
      ],
      "mens-shirts": [
        {
          id: 901,
          title: "Classic Formal Shirt",
          price: 45,
          rating: 4.4,
          thumbnail:
            "https://images.unsplash.com/photo-1618517048287-2d0e13ab5d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "Crisp shirt for professional settings",
        },
      ],
      sunglasses: [
        {
          id: 1001,
          title: "Designer Sunglasses",
          price: 129,
          rating: 4.6,
          thumbnail:
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          description: "UV protected sunglasses with stylish design",
        },
      ],
    };

    return customData[category] || [];
  };

  const resetCategory = () => {
    setCatname("");
    getProducts();
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <Navbar cartCount={cartItems.length} />

      {/* Mobile category toggle button */}
      {isMobile && (
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="md:hidden fixed top-16 left-4 z-40 bg-blue-600 text-white p-2 rounded-md shadow-lg"
        >
          {showCategories ? "Hide Categories" : "Show Categories"}
        </button>
      )}

      <div className="pt-20 pb-10 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-[1320px] mx-auto px-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse">
            Our Products
          </h1>

          {catName && (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700 capitalize mb-2 md:mb-0">
                Category: {catName.replace(/-/g, " ")}
              </h2>
              <button
                onClick={resetCategory}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-md transition-all transform hover:scale-105 shadow-md"
              >
                View All Products
              </button>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Categories Panel - Hidden on mobile when not active */}
            <div
              className={`bg-white rounded-lg shadow-lg p-4 md:p-6 h-fit animate-slide-in-left ${
                showCategories ? "block" : "hidden md:block"
              }`}
            >
              <Category
                finalCategory={finalCategory}
                setCatname={setCatname}
                selectedCategory={catName}
              />
            </div>

            {/* Products Grid */}
            <div className="flex-1 animate-fade-in">
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  {finalProduct.length >= 1 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {finalProduct.map((product, index) => (
                        <ProductItems
                          key={index}
                          pdata={product}
                          addToCart={addToCart}
                          index={index}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-lg shadow-lg animate-bounce">
                      <h3 className="text-xl font-medium text-gray-600">
                        No products found
                      </h3>
                      <p className="text-gray-500 mt-2">
                        Try selecting a different category
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
