"use client"
import { useEffect, useRef } from 'react';

import s from './style.module.css';

export default function UseGui() {
  const container = useRef<HTMLDivElement>(null);
  const guiRef = useRef<any>(null);
  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure we're in a client environment

    // Dynamically import `dat.GUI` only on the client side
    import('dat.gui').then((dat) => {
      if (guiRef.current) return; // Prevent re-initialization

      guiRef.current = new dat.GUI({ autoPlace: false });
      if (container.current) {
        container.current.appendChild(guiRef.current.domElement);
      }

      const controls = {
        bg_color_1: '#e49826',
        bg_color_2: '#030f27',
      };

      guiRef.current.addColor(controls, 'bg_color_1').onChange((value: any) => {
        document.documentElement.style.setProperty('--background_color_1', value);
      });
      guiRef.current.addColor(controls, 'bg_color_2').onChange((value: any) => {
        document.documentElement.style.setProperty('--background_color_2', value);
      });
    });

    return () => {
      guiRef.current?.destroy();
    };
  }, []);

  return (
    <div className={s.controls} ref={container}></div>
  );
}
