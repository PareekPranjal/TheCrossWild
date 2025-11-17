"use client";

import React from "react";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";

const DUMMY_PRODUCT = {
  id: 1,
  name: "Men's T-Shirts",
  price: 450,
  shortDescription:
    "High quality Polo T-shirts in various styles, colors, and sizes as per requirements.",
  images: [
    "/images/products/huddee.jpg",
    "/images/products/sportt.jpg",
    "/images/products/sss2.jpg",
    "/images/products/swett.jpg",
  ],
};

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const ProductPage = ({ params }: ProductPageProps) => {
  // UNWRAP THE PARAMS PROMISE
  const { id } = React.use(params);

  console.log("Product ID:", id);

  const product = DUMMY_PRODUCT;

  return (
    <div className="mt-24">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
