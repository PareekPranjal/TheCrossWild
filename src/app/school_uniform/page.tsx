import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/AllProductsPages/school_uniform";
const SchoolUniformPage = () => {
  return (
    <>
    <Head>
        <title>
          School Uniform Manufacturer for Students & Teachers | Sports Dress Manufacturer Jaipur | Cross Wild
        </title>
        <meta
          name="description"
          content="Cross Wild is a leading school uniform manufacturer in Jaipur for students, teachers, and sportswear. Premium quality, durable uniforms with custom designs available."
        />
      </Head>

      <Breadcrumb
        pageName="School Uniforms & Sportswear"
        description="Cross Wild — trusted school uniform manufacturer in Jaipur for students, teachers, and sports dress. We deliver durable, comfortable, and high-performance uniforms."
      />
      <Product />
    </>
  );
};

export default SchoolUniformPage;
