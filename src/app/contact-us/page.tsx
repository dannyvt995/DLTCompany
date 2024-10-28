import React from 'react'

import type { Metadata } from "next";
import PageHeader from '@/modules/PageHeader';
import FormSection from '@/modules/FormSection';
import { breedCum } from '@/Contrast/page';
import NavbarSection from "@/modules/NavbarSection";
export const metadata: Metadata = {
  title: "Contact us || DLT TECHNICAL SERVICES",
  description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
  openGraph: {
    title: "Contact us || DLT TECHNICAL SERVICES",
    description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
    images: [
      {
        url: "https://dlt-company.vercel.app/logo_clear_full.png", 
        width: 500,
        height: 300,
      },
    ],
    url: "https://dlt-company.vercel.app/contact-us", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact us || DLT TECHNICAL SERVICES",
    description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
    images: ["https://dlt-company.vercel.app/logo_clear_full.png"], 
  },
};


export default function index() {
  return (
    <main>
      <NavbarSection/>
      <PageHeader data={breedCum.contact}/>
      <FormSection/>
    </main>

  )
}
