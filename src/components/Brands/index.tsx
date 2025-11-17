import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {/* Unified background wrapper */}
            <div className="rounded-xs bg-gray-light dark:bg-gray-dark px-8 py-12 sm:px-10 md:px-[50px] md:py-[50px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              
              {/* Heading */}
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Our Clients
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Trusted by leading companies around the world
                </p>
              </div>

              {/* Logos */}
              <div className="flex flex-wrap items-center justify-center">
                {brandsData.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        {/* Light and dark mode logo */}
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
