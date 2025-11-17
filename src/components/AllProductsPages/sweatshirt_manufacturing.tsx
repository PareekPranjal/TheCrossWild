"use client";
import Image from "next/image";
import { Mail, MessageCircle, X } from "lucide-react";
import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Sweatshirt",
    image: "/images/products/SwetShirt/one.jpg",
    description:
      "We are a Jaipur-based men’s sweatshirt manufacturer, wholesaler, and supplier. Our range includes various styles, colors, prints, embroidery, and sizes—crafted with premium fabrics for comfort and quality, also available for export.",
  },
  {
    id: 2,
    name: "Hoodies",
    image: "/images/products/SwetShirt/two.jpg",
    description:
      "We are the manufacture of different types of Hoodies.",
  },
  {
    id: 3,
    name: "Sweaters",
    image: "/images/products/SwetShirt/three.jpg",
    description:
      "We manufacturer the stylish and fashionable Sweaters. ",
  },
  {
    id: 4,
    name: "Tracksuit",
    image: "/images/products/SwetShirt/four.jpg",
    description:
      "We are manufacturer of wide variety of Tracksuits with stylish and trend fashion designs and prints.",
  },
];

export default function ProductsPage() {
  // NEW: selection + modal state
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  // Build quick map for selected products
  const selectedProducts = useMemo(
    () => products.filter((p) => selectedIds.includes(p.id)),
    [selectedIds],
  );

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const ensureSelectedThen = (id: number, fn: () => void) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    fn();
  };

  // WhatsApp
  const handleWhatsApp = (preselected?: number) => {
    let ids = selectedIds;
    if (preselected && !ids.includes(preselected)) {
      ids = [...ids, preselected];
      setSelectedIds(ids);
    }
    const list =
      ids.length > 0
        ? products
            .filter((p) => ids.includes(p.id))
            .map((p) => `- ${p.name} (ID: ${p.id})`)
            .join("\n")
        : "- (no products selected)";
    const message =
      "Hello, I am interested in the following products:\n" + list;
    const url = `https://wa.me/919529626262?text=${encodeURIComponent(
      message,
    )}`;
    if (typeof window !== "undefined") window.open(url, "_blank");
  };

  // Simple form handler (frontend only)
  const handleEmailSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const required = ["name", "mobile", "email"];
    for (const field of required) {
      if (!String(data.get(field) || "").trim()) {
        alert("Please fill all required fields.");
        return;
      }
    }
    alert("Enquiry captured! (Hook this to your email API/route.)");
    setShowEmailPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / Intro */}
  <section className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-16 text-center">
  <div className="mx-auto max-w-4xl">
    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
      Best Sweatshirt & Hoodie Manufacturer in Jaipur
    </h1>
    <p className="mt-6 text-lg leading-relaxed text-gray-700">
      <span className="font-semibold">Wear with Pride and Passion</span>. Stay warm as you brave the elements with our exclusive range of breathable and wind-resistant sweatshirts and hoodies. Trusted by corporates, companies, groups, and shops across Jaipur and beyond,{" "}
      <span className="font-semibold">The Cross Wild</span> delivers bespoke quality that will leave you astonished. Explore our massive design gallery with ideas for every style.
    </p>
  </div>
</section>

      {/* Product Grid */}
      <section className="px-6 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
           Sweatshirts & Hoodies Collection
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const checked = selectedIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl"
                >
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="h-60 w-full object-contain"
                    />
                    {/* small checkbox for select */}
                    <label className="absolute top-3 right-3 flex cursor-pointer items-center gap-2 rounded-lg bg-white/80 px-2 py-1     shadow backdrop-blur-sm">
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-blue-600"
                        checked={checked}
                        onChange={() => toggleSelect(product.id)}
                        aria-label={`Select ${product.name}`}
                      />
                      <span className="text-xs font-medium text-gray-700">
                        Select
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col justify-between p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>

                    <div className="mb-3 flex gap-3">
                      <button
                        onClick={() =>
                          ensureSelectedThen(product.id, () =>
                            setShowEmailPopup(true),
                          )
                        }
                        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-700"
                      >
                        <Mail size={16} /> Email
                      </button>
                      <button
                        onClick={() => handleWhatsApp(product.id)}
                        className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-green-700"
                      >
                        <MessageCircle size={16} /> WhatsApp
                      </button>
                    </div>

                    <p className="mb-4 text-sm text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Global actions if user used only checkboxes */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setShowEmailPopup(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow transition hover:bg-blue-700 disabled:opacity-50"
              disabled={selectedIds.length === 0}
              title={
                selectedIds.length === 0
                  ? "Select at least one product"
                  : "Enquiry via Email"
              }
            >
              <Mail size={16} /> Enquiry via Email ({selectedIds.length})
            </button>
            <button
              onClick={() => handleWhatsApp()}
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-medium text-white shadow transition hover:bg-green-700 disabled:opacity-50"
              disabled={selectedIds.length === 0}
              title={
                selectedIds.length === 0
                  ? "Select at least one product"
                  : "Enquiry via WhatsApp"
              }
            >
              <MessageCircle size={16} /> WhatsApp ({selectedIds.length})
            </button>
          </div>
        </div>
      </section>

  {/* About & Services */}
<section className="bg-white px-6 py-16">
  <div className="mx-auto max-w-5xl text-center">
    <h2 className="mb-6 text-3xl font-bold text-gray-900">
      Promotional & Customized Sweatshirt Manufacturing Company in Jaipur
    </h2>
    <p className="mb-8 text-lg leading-relaxed text-gray-700">
      Since customers are our first priority, we ensure their experience is smooth and convenient. From purchase to delivery and payment,{" "}
      <span className="font-semibold">The Cross Wild</span> focuses on fast delivery and easy payment options, making us a trusted shopping hub for personalized sweatshirts and hoodies in Jaipur.
    </p>

    <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-3">
      <div className="rounded-xl bg-gray-50 p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Sweatshirts</h3>
        <p className="text-sm text-gray-600">
          From heavyweight to super soft tri-blends, we stock the widest range of sweatshirts in Jaipur. Unique and personalized options for every occasion.
        </p>
      </div>
      <div className="rounded-xl bg-gray-50 p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Hoodies</h3>
        <p className="text-sm text-gray-600">
          Designed for youth and the young at heart, our fun hoodies with custom designs bring out your style and confidence.
        </p>
      </div>
      <div className="rounded-xl bg-gray-50 p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Sweaters</h3>
        <p className="text-sm text-gray-600">
          Slim-fit, full-sleeve, and trendy designs made to keep you warm even in the coldest months.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Section */}
<section className="bg-gray-50 px-6 py-16">
  <div className="mx-auto max-w-5xl text-center">
    <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Choose The Cross Wild</h2>
    <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-4">
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Quick Delivery</h3>
        <p className="text-sm text-gray-600">Fast and reliable delivery with a customer-first approach.</p>
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">High-Quality Fabric</h3>
        <p className="text-sm text-gray-600">Soft, breathable, and durable materials for ultimate comfort.</p>
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Fine Printing</h3>
        <p className="text-sm text-gray-600">Premium printing techniques for vibrant and lasting designs.</p>
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Wide Variety</h3>
        <p className="text-sm text-gray-600">
          Endless options in sweaters, sweatshirts, and hoodies across sizes, materials, and colors.
        </p>
      </div>
    </div>
  </div>
</section>

  
      {/* Email Popup Modal: transparent + blur background */}
      {showEmailPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/25 backdrop-blur-sm"
            onClick={() => setShowEmailPopup(false)}
            aria-hidden="true"
          />
          {/* Modal */}
          <div className="relative w-[92%] max-w-3xl rounded-2xl border border-white/40 bg-white p-6 shadow-2xl backdrop-blur-sm sm:w-[680px]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Email Enquiry</h2>
              <button
                className="rounded-lg p-2 hover:bg-gray-100"
                onClick={() => setShowEmailPopup(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Selected Products */}
            <div className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-gray-700">
                Selected Products ({selectedProducts.length})
              </h3>
              {selectedProducts.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No products selected. Click “Add more product” to select.
                </p>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {selectedProducts.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 rounded-xl border bg-gray-50 p-2 pr-3"
                    >
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-lg object-cover"
                      />
                      <div className="leading-tight">
                        <p className="text-sm font-semibold">{p.name}</p>
                        <p className="text-xs text-gray-500">ID: {p.id}</p>
                      </div>
                      {/* remove button (NOT on top of image) */}
                      <button
                        onClick={() =>
                          setSelectedIds((prev) =>
                            prev.filter((id) => id !== p.id),
                          )
                        }
                        className="ml-1 text-gray-500 hover:text-red-600"
                        aria-label={`Remove ${p.name}`}
                        title="Remove"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-3">
                <button
                  onClick={() => setShowEmailPopup(false)}
                  className="text-sm font-medium text-blue-700 hover:underline"
                >
                  + Add more product
                </button>
              </div>
            </div>

            {/* Enquiry Form */}
            <form
              onSubmit={handleEmailSubmit}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <input
                name="name"
                required
                placeholder="Name *"
                className="rounded border p-2"
              />
              <input
                name="company"
                placeholder="Company Name"
                className="rounded border p-2"
              />
              <input
                name="mobile"
                required
                placeholder="Mobile Number *"
                className="rounded border p-2"
              />
              <input
                name="email"
                required
                placeholder="Email Address *"
                type="email"
                className="rounded border p-2"
              />
              <input
                name="address"
                placeholder="Address"
                className="rounded border p-2 sm:col-span-2"
              />
              <input
                name="city"
                placeholder="City"
                className="rounded border p-2"
              />
              <input
                name="state"
                placeholder="State"
                className="rounded border p-2"
              />
              <textarea
                name="requirement"
                placeholder="Requirement message"
                className="min-h-[90px] rounded border p-2 sm:col-span-2"
              />
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 sm:col-span-2"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
