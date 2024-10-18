
import type { Metadata } from "next";
import HeroSection from "@/modules/HeroSection";
import Feature from "@/modules/Feature";
import Intro from "@/modules/Intro";
import Fact from "@/modules/Fact";
import Faq from "@/modules/Faq";
import {pageData} from '@/Contrast/page';
export const metadata: Metadata = {
  title: "Home || DLT TECHNICAL SERVICES",
  description: "Product / Service Categories Project Name Talk about this portfolio piece–who you did it for and why, plus what the results were (potential customers love to hear about real-world results).…Read More",
};
export default function Main() {
  return (
    <>
      <main >
        <HeroSection/>
        <Feature/>
        <Intro data={pageData.aboutus}/>
        <Fact/>
        <Faq/>

      </main>
    </>
  );
}
