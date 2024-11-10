"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { galleryImage } from '@/Contrast/page'
import FormSection from '../FormSection';

export default function Gallery() {
  const listClassSize = ["", "wide_gallery_item", "tall_gallery_item", "big_gallery_item"];

  // State to hold class names to ensure they are consistent after mount
  const [classNames, setClassNames] = useState<string[]>([]);
  useEffect(() => {
    // Generate random class names with weighted probability
    const generatedClasses = galleryImage.list.map(() => {
      const random = Math.random();
      if (random < 0.50) {  // 75% chance of selecting ""
        return listClassSize[0];
      } else {
        // 25% chance split between the other three classes
        return listClassSize[Math.floor(Math.random() * (listClassSize.length - 1)) + 1];
      }
    });
    setClassNames(generatedClasses);
  }, []);

  return (
    <div>
      <div className="section-header text-center">
        <p>Explore gallery project</p>
        <h2>Project</h2>
      </div>
      <ul className="container_gallery">
        {galleryImage.list.map((item, index) => (
          <li key={index} className={classNames[index] || ""}>
            <Image
              src={item}  // Use the correct item from the gallery list
              fill  // Use the new "fill" property for images in Next.js 13
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}  // Ensure image fits the parent without distortion
              alt={`Gallery image ${index}`}  // Dynamic alt text for better accessibility
            />
          </li>
        ))}
      </ul>
   
      <FormSection/>
    </div>
  );
}