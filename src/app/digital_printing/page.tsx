import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/AllProductsPages/digital_printing";

const DigitalPrintingPage = () => {
  return (
    <>
    <Head>
  <title>Digital, Rubber Printing on T-shirt | Commercial Printing Company in Jaipur</title>
  <meta
    name="description"
    content="Cross Wild is a leading Digital, Rubber Printing on T-shirt | Commercial Printing Company in Jaipur available in bulk."
  />
</Head>

<Breadcrumb
  pageName="Digital and Rubber Printing"
  description="We are the largest commercial printing company in Jaipur, specializing in t-shirt printing methods like digital, rubber, screen, sublimation, etc. "
/>
      <Product />
    </>
  );
};

export default DigitalPrintingPage;
