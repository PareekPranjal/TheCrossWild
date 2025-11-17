"use client";
import Image from 'next/image';

const Gallery = () => {
  const images = [
    "/images/gallery/one.jpg",
    "/images/gallery/to.jpg",
    "/images/gallery/three.jpg",
    "/images/gallery/for.jpg",
    "/images/gallery/five.jpg",
    "/images/gallery/six.jpg",
    "/images/gallery/seven.jpg",
    "/images/gallery/nine.jpg",
    // Add more images as needed
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Gallery
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Capturing moments that inspire
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg font-semibold">
                    Image {index + 1}
                  </h3>
                  <p className="text-gray-200 mt-1">Beautiful moment</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            View More Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;