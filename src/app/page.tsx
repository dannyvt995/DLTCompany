
import type { Metadata } from "next";
import HeroSection from "@/modules/HeroSection";
import Intro from "@/modules/Intro";
import Fact from "@/modules/Fact";

import {pageData} from '@/Contrast/page';
import NavbarSection from "@/modules/NavbarSection";
import ListService from "@/modules/ListService";
import FormSection from "@/modules/FormSection";

export const metadata: Metadata = {
  title: "Home || DLT TECHNICAL SERVICES",
  description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
  openGraph: {
    title: "Home || DLT TECHNICAL SERVICES",
    description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
    images: [
      {
        url: "https://dlt-company.vercel.app/logo_clear_full.png", 
        width: 500,
        height: 300,
      },
    ],
    url: "https://dlt-company.vercel.app/", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Home || DLT TECHNICAL SERVICES",
    description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
    images: ["https://dlt-company.vercel.app/logo_clear_full.png"], 
  },
};

export default function Main() {
  return (
    <>
      <main >
  
        <NavbarSection/>
        <HeroSection/>
      
        <Intro data={pageData.aboutus}/>
        {/* <Services/> */}
        <ListService/>
        <Fact/>
        <FormSection/>

      </main>
    </>
  );
}
