import React from 'react'
import type { Metadata } from "next";
import PageHeader from '@/modules/PageHeader';
import { breedCum } from '@/Contrast/page';

import ListProject from '@/modules/ListProject';
import FormSection from '@/modules/FormSection';
export const metadata: Metadata = {
  title: "Gallery Project || DLT TECHNICAL SERVICES",
  description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
};

export default function index() {
  return (
    <main>
        <PageHeader data={breedCum.project}/>
        <ListProject />
        <FormSection/>
    </main>
 
  )
}
