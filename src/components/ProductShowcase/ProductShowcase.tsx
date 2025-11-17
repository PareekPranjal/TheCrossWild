import Image from "next/image";

export default function ProductShowcase() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full">
      {/* Left Image */}
      <div className="relative w-full md:w-1/3 h-[250px] md:h-[400px]">
        <Image
          src="/images/testimonials/print1.jpg"
          alt="Official Tomorrowland Flag"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-base md:text-lg font-bold">
            OFFICIAL TOMORROWLAND FLAG
          </h2>
          <button className="mt-2 border border-white px-4 py-1 text-xs md:text-sm uppercase tracking-wider hover:bg-white hover:text-black transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Center Image */}
      <div className="relative w-full md:w-1/3 h-[250px] md:h-[400px]">
        <Image
          src="/images/testimonials/print.jpg"
          alt="Tomorrowland Official Shirt"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-base md:text-lg font-bold">
            TOMORROWLAND OFFICIAL SHIRT
          </h2>
          <button className="mt-2 border border-white px-4 py-1 text-xs md:text-sm uppercase tracking-wider hover:bg-white hover:text-black transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/3 h-[250px] md:h-[400px]">
        <Image
          src="/images/testimonials/print2.jpg"
          alt="Tomorrowland x Loop Earplugs"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-base md:text-lg font-bold">
            TOMORROWLAND X LOOP EARPLUGS
          </h2>
          <button className="mt-2 border border-white px-4 py-1 text-xs md:text-sm uppercase tracking-wider hover:bg-white hover:text-black transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
