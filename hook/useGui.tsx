"use client"
import { useEffect, useRef } from 'react';
import * as dat from 'dat.gui';
import s from './style.module.css';

export default function UseGui() {
  const container = useRef<HTMLDivElement>(null);
  const guiRef = useRef<any>(null);
  useEffect(() => {
    if(guiRef.current) return
    guiRef.current = new dat.GUI({ autoPlace: false });
    if (container.current) {
      container.current.appendChild(guiRef.current.domElement);
    }

    const controls = {
      df_clr1 : '#e49826' ,
      df_clr2 : '#030f27' ,
    };

    guiRef.current.addColor(controls, 'df_clr1').onChange((value:any) => {
      document.documentElement.style.setProperty('--p1-color', value);
    });
    guiRef.current.addColor(controls, 'df_clr2').onChange((value:any) => {
      document.documentElement.style.setProperty('--p2-color', value);
    });
    return () => {
      guiRef.current.destroy();
    };
  }, []);

  return (
    <div className={s.controls} ref={container}></div>
  );
}
