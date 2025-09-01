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
          // If API fails, use our custom data
          const customData = getCustomCategoryData(catName);
          setFinalProduct(customData);
          setLoading(false);
        });
    }
  }, [catName]);

  const getCustomCategoryData = (category) => {
    // Custom data for categories that might not have data in the API
    const customData = {
      "mobile-phones": [
        {
          id: 101,
          title: "Premium Smartphone X",
          price: 899,
          rating: 4.7,
          thumbnail:
            "https://via.placeholder.com/300/4A90E2/FFFFFF?text=Smartphone",
          description:
            "Latest flagship smartphone with amazing camera and performance",
        },
        {
          id: 102,
          title: "Budget Phone Lite",
          price: 199,
          rating: 4.2,
          thumbnail:
            "https://via.placeholder.com/300/50C878/FFFFFF?text=Budget+Phone",
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
            "https://via.placeholder.com/300/FF6B6B/FFFFFF?text=Ultrabook",
          description: "Thin and light laptop with powerful performance",
        },
        {
          id: 202,
          title: "Gaming Laptop",
          price: 1599,
          rating: 4.6,
          thumbnail:
            "https://via.placeholder.com/300/9B59B6/FFFFFF?text=Gaming+Laptop",
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
            "https://via.placeholder.com/300/F39C12/FFFFFF?text=Perfume",
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
            "https://via.placeholder.com/300/FFC0CB/FFFFFF?text=Skincare",
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
            "https://via.placeholder.com/300/27AE60/FFFFFF?text=Groceries",
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
            "https://via.placeholder.com/300/E67E22/FFFFFF?text=Home+Decor",
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
            "https://via.placeholder.com/300/95A5A6/FFFFFF?text=Furniture",
          description: "Comfortable chair for long working hours",
        },
      ],
      "womens-dresses": [
        {
          id: 801,
          title: "Summer Floral Dress",
          price: 59,
          rating: 4.5,
          thumbnail: "https://via.placeholder.com/300/E74C3C/FFFFFF?text=Dress",
          description: "Light and breezy dress for summer days",
        },
      ],
      "mens-shirts": [
        {
          id: 901,
          title: "Classic Formal Shirt",
          price: 45,
          rating: 4.4,
          thumbnail: "https://via.placeholder.com/300/3498DB/FFFFFF?text=Shirt",
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
            "https://via.placeholder.com/300/2C3E50/FFFFFF?text=Sunglasses",
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

      {/* Added pt-20 to account for fixed navbar height */}
      <div className="pt-20 pb-[40px] min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-[1320px] mx-auto px-4">
          <h1 className="text-center text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse">
            Our Products
          </h1>

          {catName && (
            <div className="flex justify-between items-center mb-6 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700 capitalize">
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

          <div className="grid grid-cols-1 md:grid-cols-[25%_auto] gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit animate-slide-in-left">
              <Category
                finalCategory={finalCategory}
                setCatname={setCatname}
                selectedCategory={catName}
              />
            </div>

            <div className="animate-fade-in">
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  {finalProduct.length >= 1 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
