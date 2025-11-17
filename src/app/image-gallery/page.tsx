import type { Metadata } from 'next';
import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallary/ImageGallary";

export const metadata: Metadata = {
  title: 'Image Gallery | Showcase of Our Custom Designs and Work',
  description: 'Explore our image gallery featuring high-quality photos of custom t-shirts, visiting cards, caps, and manufacturing samples. See our work and get inspired!',
  // Add a canonical URL to prevent duplicate content issues
  alternates: {
    canonical: 'https://yourwebsite.com/image-gallery',
  },
};

const ImageGallery = () => {
  return (
    <>
      <Breadcrumb
        pageName="Image Gallery" // Should match the actual page content
        description="Explore our best custom printing and manufacturing projects."
      />
      {/* Assuming 'Process' component is actually displaying the gallery content */}
      <Gallery /> 
    </>
  );
};

export default ImageGallery;


