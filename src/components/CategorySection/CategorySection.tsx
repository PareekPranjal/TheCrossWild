"use client";
import Image from "next/image";
import Link from "next/link";

export default function CategorySection() {
  return (
    <section className="pt-28 lg:pt-36">
      <div className="max-w-9xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left Large Box */}
        <div className="group relative h-[580px] overflow-hidden rounded-lg bg-gray-100">
          <Image
            // src="/images/explore/dd.png" // <-- replace with your image
            src="/images/explore/logohere.png" // <-- replace with your image
            alt="Add your logo"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/60 via-white/30 to-transparent p-6">
            <h3 className="text-xl font-light text-gray-800 sm:text-2xl">
              Your <span className="font-bold">Logo Here</span>
            </h3>
            <Link
              href="/categories/wooden-table"
              className="mt-3 inline-block rounded-md bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
            >
              Add Your Logo
            </Link>
          </div>
        </div>

        {/* Right Side - Two Small Boxes */}
        <div className="flex flex-col gap-4">
          {/* Top Small Box */}
          <div className="group relative h-[280px] overflow-hidden rounded-lg bg-gray-100">
            <Image
              // src="/images/explore/ddd.png" // <-- replace with your image
              src="/images/explore/tshirts.jpg" // <-- replace with your image
              alt="Pottery Products"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-t from-white/60 via-white/30 to-transparent p-5">
              <h3 className="text-lg font-light text-gray-800 sm:text-xl">
                Every Style. <span className="font-bold">Every Fabric.</span>
              </h3>
              <Link
                href="/categories/pottery"
                className="mt-2 inline-block rounded-md bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Bottom Small Box */}
          <div className="group relative h-[280px] overflow-hidden rounded-lg bg-gray-100">
  <Image
    src="/images/explore/trt.png"
    alt="Florence Compact"
    fill
    className="object-contain bg-gray-100 transition-transform duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-y-0 right-0 flex flex-col justify-center bg-gradient-to-t from-white/60 via-white/30 to-transparent p-5 text-right">
    <h3 className="text-lg font-light text-gray-800 sm:text-xl">
      Office <span className="font-bold"> Locations</span>
    </h3>
    <Link
      href="/contact"
      className="mt-2 inline-block rounded-md bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
    >
      View Locations
    </Link>
  </div>
</div>

          {/* <div className="group relative h-[280px] overflow-hidden rounded-lg bg-gray-100">
            <Image
              // src="/images/explore/dddd.png" // <-- replace with your image
              src="/images/explore/trt.png" // <-- replace with your image
              alt="Florence Compact"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-y-0 right-0 flex flex-col justify-center bg-gradient-to-t from-white/60 via-white/30 to-transparent p-5 text-right">
              <h3 className="text-lg font-light text-gray-800 sm:text-xl">
                Office <span className="font-bold"> Locations</span>
              </h3>
              <Link
                href="/categories/florence"
                className="mt-2 inline-block rounded-md bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
              >
                View Locations
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}