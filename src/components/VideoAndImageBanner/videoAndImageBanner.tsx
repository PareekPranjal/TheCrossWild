'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface VideoAndImageBannerProps {
  backgroundImage?: StaticImageData; // Optional
  backgroundVideo?: string; // Optional
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
}

const VideoAndImageBanner: React.FC<VideoAndImageBannerProps> = ({
  backgroundImage,
  backgroundVideo,
  title,
  subtitle,
  buttonText,
  buttonLink = '#',
}) => {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden flex items-center">
      {/* Background Video */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Background Image (fallback) */}
      {!backgroundVideo && backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          className="object-cover z-0"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 md:px-16 lg:px-24 text-white max-w-[800px]">
        {subtitle && (
          <p className="text-sm uppercase tracking-widest mb-3">{subtitle}</p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          {title}
        </h1>
        {buttonText && (
          <Link href={buttonLink}>
            <button className="bg-white text-black px-6 py-3 font-semibold text-sm tracking-wider rounded hover:bg-gray-200 transition">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default VideoAndImageBanner;
