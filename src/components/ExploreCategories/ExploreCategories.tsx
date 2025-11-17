"use client"
import React, { useRef } from 'react';

const categories = [
  { id: 5, name: 'Technology', image: '/images/delete/products/Product35.png' },
  { id: 6, name: 'Fashion', image: '/images/delete/products/Product36.png' },
  { id: 8, name: 'Sports', image: '/images/delete/products/Product73.png' },
  { id: 9, name: 'Music', image: '/images/delete/products/Product92.png' },
  { id: 10, name: 'Gaming', image: '/images/delete/products/Product95.png' },
  { id: 1, name: 'No', image: '/images/delete/products/Product97.png' },
  { id: 13, name: 'Adventure',  image: '/images/delete/products/Product3.png' },
  { id: 2, name: 'Lifestyle', image: '/images/delete/products/Product24.png' },
  { id: 3, name: 'Travel', image: '/images/delete/products/Product27.png' },
  { id: 11, name: 'asd', image: '/images/delete/products/Product 49 (1).png' },
  { id: 12, name: 'teh', image: '/images/delete/products/Product 53 (1).png' },
  { id: 14, name: 'wf', image: '/images/delete/products/Product 80 (1).png' },
  { id: 15, name: 'erge', image: '/images/delete/products/Product 93 (2).png' },
  { id: 16, name: 'erEWge', image: '/images/delete/products/Product 97 (1).png' },
];

export default function App() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-8">
      {/* Main Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore all categories</h2>

      {/* Scrollable Container with Arrows */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform z-10"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Categories Scroller */}
        <div
          ref={scrollContainerRef}
          className="flex items-center space-x-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-none w-36 h-36 rounded-full overflow-hidden cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform z-10"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
