"use client"
import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Polo T-Shirt",
    image: "/images/products/huddee.jpg",
    description:
      "High quality Polo T-shirts in various styles, colors, and sizes as per requirements. Guaranteed completion on time, every time.",
  },
  {
    id: 2,
    name: "Round Neck T-shirt",
    image: "/images/products/sportt.jpg",
    description:
      "Unisex round neck t-shirts — softer and more comfortable than you can imagine. Perfect with a custom design.",
  },
  {
    id: 3,
    name: "Customised T-shirt",
    image: "/images/products/sss2.jpg",
    description:
      "Customized t-shirts are perfect gifts for loved ones or employees. Add creative printing options to make them unique.",
  },
  {
    id: 4,
    name: "Dry Fit Sports T-shirt",
    image: "/images/products/swett.jpg",
    description:
      "Polyester dry-fit sports t-shirts with sublimation & screen printing. Perfect for marathons, sports, and promotional events.",
  },
  {
    id: 5,
    name: "Promotional T-shirt",
    image: "/images/products/tshirt.jpg",
    description:
      "Stylish promotional t-shirts made with 100% cotton. Elegant designs, soft sleeves, and perfect fitting.",
  },
];

const ProductList = () => {
  const [sortOption, setSortOption] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    // Add other sorting logic here (e.g., price)
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      {/* Sort & Filter Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <div className="flex items-center space-x-4">
          <label htmlFor="sort" className="text-gray-700">Sort By:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded-md py-1 px-2"
          >
            <option value="default">Default</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;