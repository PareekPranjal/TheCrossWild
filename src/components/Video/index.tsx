"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container relative z-10">
          <SectionTitle
            title="We are ready to help"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
            mb="80px"
          />
        </div>

        {/* Video Thumbnail Section */}
        <div className="relative overflow-hidden z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md relative">
                <div className="relative aspect-[16/9] flex items-center justify-center">
                  <Image
                    // src="/images/video/image.png"
                    src="/images/brands/videoBanner.jpg"
                    alt="video thumbnail"
                    className={`object-cover transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                    fill
                  />
                  {!isOpen && (
                    <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg transition z-20"
                    >
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Background Shape */}
          <div className="absolute right-0 bottom-0 left-0 z-0 h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </section>

      {/* Video Modal on top of everything */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/SZHJqicfEEc?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-gray-300 z-50"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
