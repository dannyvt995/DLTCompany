import React from 'react'
import type { Metadata } from "next";
import PageHeader from '@/modules/PageHeader';
import Services from '@/modules/Services';

import {breedCum} from '@/Contrast/page'
import NavbarSection from "@/modules/NavbarSection";
export const metadata: Metadata = {
  title: "Our Services || DLT TECHNICAL SERVICES",
  description: "Civil & Construction - Skid-resistant and Colour Surface Treatment - Permeable paving",
  openGraph: {
    title: "Our Services || DLT TECHNICAL SERVICES",
    description: "Civil & Construction - Skid-resistant and Colour Surface Treatment - Permeable paving",
    images: [
      {
        url: "https://dlt-company.vercel.app/logo_clear_full.png", 
        width: 500,
        height: 300,
      },
    ],
    url: "https://dlt-company.vercel.app/our-service", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services || DLT TECHNICAL SERVICES",
    description: "Civil & Construction - Skid-resistant and Colour Surface Treatment - Permeable paving",
    images: ["https://dlt-company.vercel.app/logo_clear_full.png"], 
  },
};


export default function index() {
  return (
    <main>
      <NavbarSection/>
    <PageHeader data={breedCum.service} />
    <Services/>
  
    </main>

  )
}
