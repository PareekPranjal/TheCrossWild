"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Headerr from "@/components/Headerr/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton/whatsAppBotton";  
import CallButton from "@/components/CallButton/callButton";   
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {/* <Header /> */}
          <Headerr />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />  
          <CallButton />    
        </Providers>
      </body>
    </html>
  );
}
