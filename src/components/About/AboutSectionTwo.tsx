import Image from "next/image";
import { CheckCircleIcon, TruckIcon, PaintBrushIcon, CurrencyRupeeIcon, CogIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";

const features = [
  {
    title: "100% India-Based Operations",
    description: "All our products are proudly manufactured in India.",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    title: "Top Quality Prints with Precision",
    description: "We use advanced printing technology for accurate designs.",
    icon: PaintBrushIcon,
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs – what you see is what you get.",
    icon: CurrencyRupeeIcon,
  },
  {
    title: "Innovative Design Studio",
    description: "Get access to our extensive library or create your own custom artwork.",
    icon: CogIcon,
  },
  {
    title: "Comprehensive Customization",
    description: "Whether it’s personalized t-shirts, bags, or caps, we’ve got you covered.",
    icon: CheckCircleIcon,
  },
  {
    title: "Drop Shipping Services",
    description: "Hassle-free delivery to your customers’ doorstep.",
    icon: TruckIcon,
  },
];


const AboutSectionTwo = () => {
  return (
    <>
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/aboutPage/cp.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/aboutPage/cp.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
     <div className="w-full px-4 lg:w-1/2">
  <div className="max-w-[470px]">
    {/* Heading */}
    <div className="mb-9">
      <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Value to Customers
      </h3>
      <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
        We aim to give customers more — helping them transition smoothly into work with pride and style.
      </p>
    </div>

    <div className="mb-8">
  <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
    Wide Product Range & Better Business Ties
  </h3>
  <p className="text-base text-gray-600 dark:text-gray-300">
    From corporate bags to personalized t-shirts — and more, while building stronger
    relationships with employees and partners.
  </p>
</div>

    {/* Feature 3 */}
    <div className="mb-8">
      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Safe Workspaces
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-300">
        Spacious, clean, and secure production facilities.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="mb-8">
      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Fast Delivery
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-300">
        Quick shipping across India, always on time.
      </p>
    </div>

    {/* Feature 5 */}
    <div className="mb-8">
      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Lasting Quality
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-300">
        Durable products built to stand the test of time.
      </p>
    </div>

    {/* Feature 6 */}
    <div>
      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Fair Pricing
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-300">
        Competitive rates with bulk order discounts.
      </p>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
      <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Here’s why we are trusted by businesses and individuals alike for their custom product manufacturing needs:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-10 w-10 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSectionTwo;
