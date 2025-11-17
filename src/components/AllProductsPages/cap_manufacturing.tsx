"use client";
import Image from "next/image";
import { Mail, MessageCircle, X } from "lucide-react";
import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Corporate Cap",
    image: "/images/products/Caps/Corporate-Cap.jpg",
    description:
      "CrossWild manufactures customized corporate caps in Jaipur, available in various colors and sizes with premium quality, best prices, and adjustable straps.",
  },
  {
    id: 2,
    name: "Sports Cap",
    image: "/images/products/Caps/Sports-Cap.jpg",
    description:
      "CrossWild manufactures and supplies sports caps in Jaipur, available in various designs and colors. Durable, cost-effective, and customizable with your brand or team logo.",
  },
  {
    id: 3,
    name: "Tourist Cap",
    image: "/images/products/Caps/Tourist-Cap.jpg",
    description:
      "CrossWild, a top tourist cap maker in Jaipur, offers quality, affordable, and customizable designs in varied sizes and colors.",
  },
  {
    id: 4,
    name: "Plain Cap",
    image: "/images/products/Caps/Plain-Cap.jpg",
    description:
      "CrossWild, a leading plain cap manufacturer in Jaipur, offers quality caps in various colors and sizes—comfortable, durable, and customizable.",
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
      Promotional Customized Cap Printing & Manufacturing Company in Jaipur, India - The Cross Wild
    </h1>
    <p className="mt-6 text-lg leading-relaxed text-gray-700">
      Hats and caps are more than just sun protection—they’ve become essential
      accessories that elevate your outfit. When customized, they add a unique
      charm and personality. At{" "}
      <span className="font-semibold">The Cross Wild</span>, we specialize in
      designing and printing high-quality customized caps for every occasion and
      purpose. Choose from multiple styles, sizes, and patterns, all crafted with
      care to ensure the perfect fit and superior finish.
    </p>
  </div>
</section>


      {/* Product Grid */}
      <section className="px-6 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Caps Collection
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

   {/* About & Types of Caps */}
<section className="bg-white px-6 py-16">
  <div className="mx-auto max-w-5xl text-center">
    <h2 className="mb-6 text-3xl font-bold text-gray-900">
      Various Types of Caps We Manufacture and Print
    </h2>
    <p className="mb-8 text-lg leading-relaxed text-gray-700">
      Using ultra-modern embroidery and printing equipment, we deliver caps that
      meet the highest standards of design and durability. Whether you need
      embroidery, text, or full customization,{" "}
      <span className="font-semibold">The Cross Wild</span> ensures fast
      delivery and consistent quality across all cap varieties.
    </p>

    <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-4">
      <div className="rounded-xl bg-gray-50 p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Corporate Caps</h3>
        <p className="text-sm text-gray-600">
          Customized caps tailored for organizations and branding needs—stylish,
          durable, and excellent value for money.
        </p>
      </div>
      <div className="rounded-xl bg-gray-50 p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Sports Caps</h3>
        <p className="text-sm text-gray-600">
          Perfect for teams and athletes, our adjustable sports caps are built
          for durability and long-lasting wear.
        </p>
      </div>
      <div className="rounded-xl bg-gray-50 p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Tourist Caps</h3>
        <p className="text-sm text-gray-600">
          Affordable and functional camper caps designed for travelers while
          doubling as great promotional merchandise.
        </p>
      </div>
      <div className="rounded-xl bg-gray-50 p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Simple & Versatile Caps</h3>
        <p className="text-sm text-gray-600">
          Fitted or adjustable plain caps available in vibrant colors and
          fashionable designs for everyday use.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Section */}
<section className="bg-gray-50 px-6 py-16">
  <div className="mx-auto max-w-5xl text-center">
    <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Choose The Cross Wild?</h2>
    <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-4">
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Caps of The Highest Quality</h3>
        <p className="text-sm text-gray-600">Every cap is crafted with precision for comfort and durability.</p>
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Latest Embroidery Technology</h3>
        <p className="text-sm text-gray-600">Modern printing & embroidery machines for flawless designs.</p>
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Affordable Pricing</h3>
        <p className="text-sm text-gray-600">Pocket-friendly bulk pricing without compromising quality.</p>
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-2 font-semibold text-gray-900">Premium Customization</h3>
        <p className="text-sm text-gray-600">Tailored designs for corporate, sports, tourist, and casual use.</p>
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
