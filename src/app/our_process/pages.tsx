import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Process from "@/components/Gallary/ImageGallary";

const ImageGallery = () => {
  return (
    <>
      <Head>
        <title>
          Our Process | Our process making business easy in fashion
        </title>
        <meta
          name="description"
          content="Our process making business easy in fashion"
        />
      </Head>

      <Breadcrumb
        pageName="Our Process"
        description="Our process making business easy in fashion
"
      />

      <Process />
    </>
  );
};

export default ImageGallery;
