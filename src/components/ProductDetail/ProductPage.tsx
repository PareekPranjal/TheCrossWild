"use client"
import ProductDetail from "./ProductDetail";

const DUMMY_PRODUCT = {
  id: 1,
  name: "Men's T-Shirts",
  price: 450,
  shortDescription: "High quality Polo T-shirts in various styles, colors, and sizes as per requirements. Guaranteed completion on time, every time.",
  images: [
    "/images/products/huddee.jpg",
    "/images/products/sportt.jpg",
    "/images/products/sss2.jpg",
    "/images/products/swett.jpg",
  ],
};

const ProductPage = () => {
  const product = DUMMY_PRODUCT; 

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;