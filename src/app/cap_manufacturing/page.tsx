import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/AllProductsPages/cap_manufacturing";

const CapPage = () => {
  return (
    <>
      <Head>
        <title>
          Customized Cap Printing & Manufacturing in Jaipur | The Cross Wild
        </title>
        <meta
          name="description"
          content="Promotional and customized cap printing & manufacturing company in Jaipur, India. The Cross Wild designs and produces corporate caps, sports caps, tourist caps, and versatile plain caps."
        />
      </Head>

      <Breadcrumb
        pageName="Caps"
        description="We are pioneers in customized cap printing and manufacturing in Jaipur. From corporate to sports, tourist, and versatile plain caps, The Cross Wild ensures top-notch quality and premium designs."
      />
      <Product />
    </>
  );
};

export default CapPage;
