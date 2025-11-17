"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import tshirt from "./categoryImg/tshirt.webp";
import huddiee from "./categoryImg/huddiee.webp";
import cap from "./categoryImg/cap.png";
import bag from "./categoryImg/bag.png";
import mug from "./categoryImg/mug.png";
import digital from "./categoryImg/digital.png";
import facemasksppe from "./categoryImg/face.png";
import sanitizer from "./categoryImg/st.png";
import school from "./categoryImg/school.png";

const categories = [
  { name: "T-Shirt Manufacturing", img: tshirt, href: "/categories/tshirt-manufacturing" },
  { name: "Sweatshirt Manufacturing", img: huddiee, href: "/categories/sweatshirt-manufacturing" },
  { name: "Cap Manufacturer", img: cap, href: "/categories/cap-manufacturer" },
  { name: "Bag Manufacturer", img: bag, href: "/categories/bag-manufacturer" },
  { name: "Digital Printing", img: digital, href: "/categories/digital-printing" },
  { name: "School & Staff Uniform", img: school, href: "/categories/school-uniform" },
];

export default function CategoryScroll() {
  const scrollRef = useRef(null);

  // Scroll Handler
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth - 100; // Scroll amount

    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-8 relative">
      {/* Inline CSS for scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <h2 className="text-xl font-bold mb-4 px-4">
        SHOP BY <span className="font-extrabold">CATEGORY</span>
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition hidden md:block"
        >
          <FiChevronLeft size={24} className="text-gray-700" />
        </button>

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 scroll-smooth"
        >
          {categories.map((category, idx) => (
            <Link
              key={idx}
              href={category.href}
              className="flex-shrink-0 w-64 relative rounded-lg overflow-hidden group"
            >
              <Image
                src={category.img}
                alt={category.name}
                className="object-cover w-full h-120 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 text-white font-bold text-sm drop-shadow-lg">
                {category.name.toUpperCase()}
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition hidden md:block"
        >
          <FiChevronRight size={24} className="text-gray-700" />
        </button>
      </div>
    </section>
  );
}
