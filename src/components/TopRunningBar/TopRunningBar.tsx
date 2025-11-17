"use client";
import React from "react";

const TopRunningBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-black text-white text-sm flex items-center overflow-hidden z-50">
      <div className="whitespace-nowrap animate-marquee">
        🎉 Big Sale Alert! Get <span className="font-bold">50% OFF</span> on all products – Limited Time Offer! | 🚚 Free Shipping on Orders Above ₹999 | 🛒 Shop Now and Save More!
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TopRunningBar;
