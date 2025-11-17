import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Tshirts from "@/components/AllProductsPages/t-shirt_manufacturing";
import ProductList from "@/components/ProductCards/ProductList";
import ProductPage from "@/components/ProductDetail/ProductPage";

const TshirtsPage = () => {
  return (
    <>
      <Head>
        <title>T-Shirts Page | Free Next.js Template for Startup and SaaS</title>
        <meta
          name="description"
          content="This is Tshirts Page for Startup Nextjs Template"
        />
      </Head>

      <Breadcrumb
        pageName="Tshirts Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <ProductList />
      {/* <ProductPage /> */}
      {/* <Tshirts /> */}
    </>
  );
};

export default TshirtsPage;
