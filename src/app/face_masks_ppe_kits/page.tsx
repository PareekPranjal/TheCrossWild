import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Product from "@/components/AllProductsPages/face_masks_ppe_kits";

const FaceMasksPpeKitsPage = () => {
  return (
    <>
      <Head>
        <title>Face Masks & PPE Kits | Cross Wild Jaipur</title>
        <meta
          name="description"
          content="Cross Wild is a leading manufacturer and wholesaler of Face Masks and PPE Kits in Jaipur. High-quality N95 masks and PPE kits available in bulk."
        />
      </Head>

      <Breadcrumb
        pageName="Face Masks & PPE Kits"
        description="Protect yourself and society with high-quality Face Masks and PPE Kits from Cross Wild – Jaipur’s trusted manufacturer and wholesaler."
      />
      <Product />
    </>
  );
};

export default FaceMasksPpeKitsPage;
