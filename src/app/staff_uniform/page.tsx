import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/AllProductsPages/staff_uniform";

const StaffUniformPage = () => {
  return (
    <>
      <Head>
        <title>
          Custom Uniform Manufacturer in Jaipur | Hospital, Hotel & Staff
          Uniform Supplier in India | Cross Wild
        </title>
        <meta
          name="description"
          content="Cross Wild is a leading custom uniform manufacturer in Jaipur with logo printing for hospitals, hotels, and staff uniforms across India. Durable, comfortable, and tailored workwear."
        />
      </Head>

      <Breadcrumb
        pageName="Custom Uniforms"
        description="Cross Wild — trusted uniform manufacturer in Jaipur for hospitals, hotels, staff, and industrial workwear. Custom designs with logos for your brand identity."
      />

      <Product />
    </>
  );
};

export default StaffUniformPage;
