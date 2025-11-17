import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/AllProductsPages/mug_manufacturing";

const MugPage = () => {
  return (
    <>
       <Head>
        <title>Personalized Custom Mug Printing in Jaipur - The Cross wild</title>
        <meta
          name="description"
          content="Get personalized custom mug printing in Jaipur with The Cross Wild. High-quality mugs with logos, photos, designs & inspirational quotes. Perfect for gifts & corporate use."
        />
      </Head>


       <Breadcrumb
        pageName="Personalized Custom Mug Printing in Jaipur"
        description="The Cross Wild offers premium mug printing services in Jaipur. Choose from promotional, corporate, or personalized mugs with high-quality prints, available in multiple colors and styles."
      />
      <Product />
    </>
  );
};

export default MugPage;
