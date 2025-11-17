import Breadcrumb from "@/components/Common/Breadcrumb";
import Locations from "@/components/Locations/locations";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us for inquiries, support, or collaborations. We're here to help and just a message or call away."
      />
      <Locations />
      <Contact />
    </>
  );
};

export default ContactPage;
