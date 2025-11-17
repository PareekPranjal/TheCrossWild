"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample product data
const products = {
  bestSellers: [
    {
      id: 1,
      image: '/images/delete/products/Product35.png',
      tag: "NEW",
      name: "Wi-fi speaker lamp",
      price: "$65.00",
    },
    {
      id: 2,
      image: '/images/delete/products/Product36.png',
      tag: null,
      name: "Wall clock gray pink",
      price: "$85.00",
    }, 
    {
      id: 3,
      image: '/images/delete/products/Product73.png',
      tag: "SALE",
      name: "Nordrana basket",
      price: "$65.00",
      oldPrice: "$95.00",
    },
    {
      id: 4,
      image:'/images/delete/products/Product92.png',
      tag: null,
      name: "Sockeraert vase black",
      price: "$65.00",
    },
    {
      id: 5,
      image: '/images/delete/products/Product95.png',
      tag: null,
      name: "Palm leaf handmade",
      price: "$65.00",
    },
    {
      id: 6,
      image: '/images/delete/products/Product97.png',
      tag: "SALE",
      name: "Earth globe black",
      price: "$55.00",
      oldPrice: "$65.00",
    },
    {
      id: 7,
      image: '/images/delete/products/Product3.png',
      tag: null,
      name: "Fejka artificial plant",
      price: "$65.00",
    },
    {
      id: 8,
      image: '/images/delete/products/Product24.png',
      tag: "NEW",
      name: "Vardande plant pot",
      price: "$27.00",
    },
  ],
  newArrivals: [
    {
      id: 9,
      image: '/images/delete/products/Product27.png',
      tag: "NEW",
      name: "New Product 1",
      price: "$45.00",
    },
    {
      id: 10,
      image: '/images/delete/products/Product 49 (1).png',
      tag: null,
      name: "New Product 2",
      price: "$75.00",
    },
    {
      id: 11,
      image:'/images/delete/products/Product 80 (1).png',
      tag: "SALE",
      name: "New Product 3",
      price: "$35.00",
      oldPrice: "$50.00",
    },
    {
      id: 12,
      image: '/images/delete/products/Product 93 (2).png',
      tag: "NEW",
      name: "New Product 4",
      price: "$99.00",
    },
  ],
};

// Tab Button Component
const TabButton = ({ isActive, label, onClick }) => (
  <button
    className={`pb-2 mx-4 text-xl font-semibold transition-colors duration-200 ${
      isActive
        ? "text-black border-b-2 border-black"
        : "text-gray-500 hover:text-gray-700"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="flex-none w-64 sm:w-72 md:w-80 lg:w-72 xl:w-80 2xl:w-96 p-3 relative group">
    <div className="bg-gray-100 p-5 rounded-xl relative overflow-hidden transition-all duration-300 group-hover:shadow-lg">
      {product.tag && (
        <span
          className={`absolute top-3 left-3 text-xs font-medium px-3 py-1.5 rounded-full z-10 ${
            product.tag === "NEW"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.tag}
        </span>
      )}
      <div className="relative h-60 md:h-72 lg:h-64 xl:h-72 2xl:h-80 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 line-clamp-1">
        {product.name}
      </h3>
      <div className="mt-2 text-lg md:text-xl">
        <span className="font-bold text-black">{product.price}</span>
        {product.oldPrice && (
          <span className="ml-3 text-gray-400 line-through text-base">
            {product.oldPrice}
          </span>
        )}
      </div>
    </div>
  </div>
);

// Main Component
const BestSellersAndNewArrivals = () => {
  const [activeTab, setActiveTab] = useState("bestSellers");
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400; // Fixed scroll amount
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  const currentProducts = products[activeTab];

  return (
    <div className="font-sans max-w-7xl mx-auto px-4 py-12">
      {/* Tab Buttons */}
      <div className="flex justify-center mb-10">
        <TabButton
          isActive={activeTab === "bestSellers"}
          label="Best sellers"
          onClick={() => setActiveTab("bestSellers")}
        />
        <TabButton
          isActive={activeTab === "newArrivals"}
          label="New arrivals"
          onClick={() => setActiveTab("newArrivals")}
        />
      </div>

      <div className="relative">
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile / Tablet Carousel */}
        <div className="relative lg:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-4 py-2 px-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Navigation Arrows */}
          {currentProducts.length > 1 && (
            <>
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellersAndNewArrivals;
