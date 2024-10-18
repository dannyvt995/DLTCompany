'use client';

import s from './style.module.css';
import Image, { ImageProps } from 'next/image';
import React, { forwardRef } from 'react';

const ImagePreload = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {


  return (
    <Image
      ref={ref}
      quality={100}
  
      className={`${props.className} ${s.imagePreload_origin}`}
      sizes={`100vw`}
      {...props}
      loading="eager"
      alt={props.alt}
      width={0}
      height={0}
    
    />
  );
});

ImagePreload.displayName = 'ImagePreload';
export default ImagePreload;
