import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Process from "@/components/Process/Process";
import Locations from "@/components/Locations/locations";
import Category from "@/components/Category/Category";
import ImageSlider from "@/components/Slider/ImageSlider";
import RunningClientsBar from "@/components/RunningBar/RunningClientsBar";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import ProductShowcaseTwo from "@/components/ProductShowcase2/ProductShowcaseTwo";
import CategorySection from "@/components/CategorySection/CategorySection";
import BestSellersAndNewArrivals from "@/components/CategorySection/BestSellersAndNewArrivals";
import ProductScroller from "@/components/ProductScroller/ ProductScroller";
import VideoAndImageBanner from "@/components/VideoAndImageBanner/videoAndImageBanner";
import ExploreCategories from "@/components/ExploreCategories/ExploreCategories";
import Img from "@/components/VideoAndImageBanner/yourLogoBanner.webp";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      {/* <ImageSlider /> */}
      {/* <Locations /> */}
      <CategorySection />
      <ExploreCategories />
      <BestSellersAndNewArrivals />
      {/* <Category /> */}
      <VideoAndImageBanner
        backgroundImage={Img}
        subtitle="Personalize Your Products with Your Logo"
        title="Add your logo and let us bring your brand to life."
        buttonText="DISCOVER NOW"
        buttonLink="/collection"
      />
      {/* <Hero /> */}
      <ProductScroller />
      <VideoAndImageBanner
        backgroundVideo="/videos/vdo.mp4"
        subtitle="Create Unique Custom Products"
        title="Design your products, your way — from hoodies to caps, make it truly yours."
        buttonText="DISCOVER NOW"
        buttonLink="/collection"
      />
      <ProductShowcaseTwo/>
      <Process />
      {/* <ProductScroller /> */}
      {/* <RunningClientsBar /> */}
      {/* <ProductShowcase /> */}
      {/* <Features /> */}
      <Video />
      <Brands />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}