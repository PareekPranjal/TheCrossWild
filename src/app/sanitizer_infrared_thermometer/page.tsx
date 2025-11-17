import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/AllProductsPages/sanitizer_infrared_thermometer";

const SanitizerInfraredThermometerPage = () => {
  return (
    <>
      <Head>
        <title>PPE Kits, Sanitizers & Thermometers | Cross Wild Jaipur</title>
        <meta
          name="description"
          content="Cross Wild is a leading manufacturer and wholesaler of Face Masks, PPE Kits, Sanitizers, and Infrared Thermometers in Jaipur. High-quality products available in bulk."
        />
      </Head>

      <Breadcrumb
        pageName="Protective Healthcare Products"
        description="Cross Wild brings you premium, PPE Kits, Hand Sanitizers, and Infrared Thermometers — wholesale supplies in Jaipur."
      />
      <Product />
    </>
  );
};

export default SanitizerInfraredThermometerPage;