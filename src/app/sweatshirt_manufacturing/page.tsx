import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/AllProductsPages/sweatshirt_manufacturing";

const SweatshirtManufacturingPage = () => {
  return (
    <>
   <Head>
  <title>Sweatshirts & Hoodies | The Cross Wild Jaipur</title>
  <meta
    name="description"
    content="Best Sweatshirt & Hoodie Manufacturer in Jaipur. Customized, promotional, and personalized sweatshirts, hoodies, and sweaters by The Cross Wild."
  />
</Head>

  <Breadcrumb
  pageName="Sweatshirts & Hoodies"
  description="Being the prime sweatshirt printer in Jaipur, our catalogues speak our caliber. Our custom and personalized woolens with soft fabric give you comfort, while the top stitching makes them durable for the fall."
/>
      <Product />
    </>
  );
};

export default SweatshirtManufacturingPage;
