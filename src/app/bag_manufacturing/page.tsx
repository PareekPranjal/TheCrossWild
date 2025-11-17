import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/AllProductsPages/bag_manufacturing";

const BagPage = () => {
  return (
    <>
      <Head>
        <title>Best Bag Manufacturers in Jaipur | The Cross Wild</title>
        <meta
          name="description"
          content="The Cross Wild is one of the best bag manufacturers in Jaipur. We design and produce high-quality school bags, college bags, laptop bags, travel bags, office bags, delivery bags, and more."
        />
      </Head>

      <Breadcrumb
        pageName="Bags"
        description="The Cross Wild is marching towards becoming the best bag manufacturer in Jaipur. With quality, style, and bulk production capacity, our bags stand out in fashion and functionality."
      />
      <Product />
    </>
  );
};

export default BagPage;
