"use client";

import Image from "next/image";
import {
  Handshake,
  ClipboardList,
  Scissors,
Spool,
  Printer,
  ShieldCheck,
  Package,
} from "lucide-react";

export default function ProcessDetailsPage() {
  const steps = [
    {
      id: "step-1",
      num: 1,
      title: "Client Meeting",
      icon: Handshake,
      img: "/images/about/clinte-meet.jpg", // replace with your image
      alt: "Client meeting at our Jaipur facility",
      text: `We are committed to finding the right products for you. To tailor to your particular needs, we hold various meetings with our team to discuss in-depth your specific use case and ensure we don't miss a thing with your vision. From Wholesale Hoodies Manufacturer in Jaipur to Custom Caps for Teams in Jaipur, we listen to you in detail before progressing for Sampling phase.`,
    },
    {
      id: "step-2",
      num: 2,
      title: "Sampling",
      icon: ClipboardList,
      img: "/images/about/fabric-smapling.jpg", // replace with your image
      alt: "Sampling and design selection",
      text: `We have a huge range of personalized tools for both people and businesses that can meet all budgets and all purposes (even tailored for you!) We provide you the option to choose from our exclusive designs or create your template when you become a Personalized Hoodie Manufacturer in Jaipur. After finalizing the design, we now head to the next step: Fabric Cutting.`,
    },
    {
      id: "step-3",
      num: 3,
      title: "Fabric Cutting",
      icon: Scissors,
      img: "/images/about/fabricCutting1.jpg", // replace with your image
      alt: "Precision fabric cutting",
      text: `Once the sample is confirmed we cut the fabric to the desired shape. We are one of the best Custom hoodie suppliers also in Jaipur — you can choose any kind of grey/red hoodie sizes and styles and we will ship in small or large, customized as per your instruction. From one piece to one thousand we create each and every piece to your specifications.`,
    },
    {
      id: "step-4",
      num: 4,
      title: "Stitching",
      icon: Spool,
      img: "/images/about/sttching.jpg", // replace with your image
      alt: "High quality stitching",
      text: `Our Hoodie Manufacturing Company in Jaipur is proud to offer precision. To make sure your custom hoodie or custom cap is prepared with greatest care and a focus on detail, skilled artisans perform high quality stitching. This is where your product starts to take shape, helping to deliver the quality craftsmanship that our clients expect.`,
    },
    {
      id: "step-5",
      num: 5,
      title: "Printing",
      icon: Printer,
      img: "/images/about/digitalPrint.webp", // replace with your image
      alt: "Advanced printing methods",
      text: `Our expertise in advanced printing methods such as digital printing, screen printing, sublimation printing, rubber printing, etc. We are a Printed Hoodie Manufacturer in Jaipur, and with the best and latest technology and tools on the market, we take the utmost care to ensure you get complete satisfaction on your personalized products like hoodie, cap, bags, etc. Printed with clear and smudge-free designs that will last for long.`,
    },
    {
      id: "step-6",
      num: 6,
      title: "Checking and Testing",
      icon: ShieldCheck,
      img: "/images/about/testing.jpeg", // replace with your image
      alt: "Quality control and testing",
      text: `We are known as Branded Hoodie Manufacturer in Jaipur where we believe in delivering error-free goods to our end users. Each product is individually checked and tested to ensure the highest quality by our quality control team. We make the necessary changes so that your ordering is perfect, if any modification is required.`,
    },
    {
      id: "step-7",
      num: 7,
      title: "Packing and Shipping",
      icon: Package,
      img:"/images/about/pakingg.png", // replace with your image
      alt: "Packing and shipping",
      text: `After your product passes the quality tests, we pack it securely and prepare it for delivery. We work with trusted shipping partners as a Hoodie Manufacturer for E-commerce in Jaipur, to ensure your order reaches you safely and on time. We can help you save on shipping costs and add to your profit margin whether your order is a bulk order or a small custom order.`,
    },
  ];

  return (
    <main className="relative min-h-screen bg-white">
      {/* Soft blurred background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-amber-200 blur-[120px] opacity-30" />
        <div className="absolute bottom-0 -left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-200 via-indigo-200 to-purple-200 blur-[120px] opacity-25" />
      </div>

      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto py-14 md:py-20">
          <div className="text-center md:text-left">
        
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Welcoming You All <span className="whitespace-nowrap">From Our Facility At Jaipur</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base md:text-lg text-gray-700">
              We want to provide products tailored specifically for you. This is part of our unique
              manufacturing process, which we are carrying out to ensure that you only receive the
              items that fit your style and needs the best. Here&apos;s how we do it:
            </p>

            {/* Quick anchor list */}
            <div className="mt-6 flex flex-wrap gap-2">
              {steps.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs md:text-sm text-indigo-700 bg-white/70 backdrop-blur hover:bg-white px-3 py-1 rounded-full ring-1 ring-indigo-100 shadow-sm transition"
                >
                  {s.num}. {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 1;
            return (
              <article
                id={step.id}
                key={step.id}
                className={`grid items-center gap-8 md:gap-12 ${
                  isEven ? "md:grid-cols-[1.1fr_.9fr]" : "md:grid-cols-[.9fr_1.1fr]"
                }`}
              >
                {/* Text Block */}
                <div className={`${isEven ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold shadow-sm">
                      {step.num}
                    </span>
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 ring-1 ring-indigo-100 shadow-sm">
                      <Icon className="h-5 w-5 text-indigo-700" />
                    </div>
                  </div>

                  <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-gray-700 leading-relaxed">{step.text}</p>

                  {/* Replace or extend with bullet points if needed */}
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Tailored to your use case
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Transparent communication
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Quality-first approach
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      On-time delivery
                    </li>
                  </ul>
                </div>

                {/* Image Block */}
                <div className={`${isEven ? "md:order-1" : ""}`}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white/60 ring-1 ring-black/5 shadow-sm">
                    {/* Replace the src with your own images */}
                    <Image
                      src={step.img}
                      alt={step.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                      priority={idx < 2}
                    />
                    {/* subtle top gradient for legibility */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/10 to-transparent" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-indigo-100 shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Ready to start your custom order?
              </h3>
              <p className="mt-1 text-gray-600">
                Talk to our team and get a tailored quotation for your project.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-indigo-700 transition"
              >
                Contact Us
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-gray-900 font-medium shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
