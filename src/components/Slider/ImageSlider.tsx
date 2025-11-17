"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import image1 from "../../../public/images/slider/sliderOne.jpg";
import image2 from "../../../public/images/slider/SliderThree.png";
import image3 from "../../../public/images/slider/sliderTow.webp";

const images = [
  { src: image1, alt: "First slide" },
  { src: image2, alt: "Second slide" },
  { src: image3, alt: "Third slide" },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality: changes image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-24 md:mt-20 lg:mt-28">
      {/* Slider Container */}
      <div className="relative w-full aspect-video max-h-[80vh] overflow-hidden rounded-lg shadow-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6 md:w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
