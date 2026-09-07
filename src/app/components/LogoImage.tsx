'use client';

import Image from 'next/image';

interface LogoImageProps {
  className?: string;
  width?: number;
  height?: number;
  inverted?: boolean;
}

export default function LogoImage({
  className = '',
  width,
  height,
  inverted = false,
}: LogoImageProps) {
  const style = width && height ? { width, height } : undefined;
  return (
    <div className={`relative ${className}`} style={style}>
      <Image
        src="/images/logo/toteindo-logo-v2.png"
        alt="Toteindo — Premium Canvas Bags"
        fill
        sizes="160px"
        className={`object-contain ${inverted ? 'brightness-0 invert' : ''}`}
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = inverted
              ? `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;"><span style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:600;color:white;letter-spacing:3px;">TOTEINDO</span><span style="font-family:'Jost',sans-serif;font-size:7px;letter-spacing:3px;color:#B38A4D;margin-top:2px;">CRAFTED TO PERFECTION</span></div>`
              : `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;"><span style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;color:#7E1323;letter-spacing:3px;">TOTEINDO</span><span style="font-family:'Jost',sans-serif;font-size:8px;letter-spacing:3px;color:#B38A4D;margin-top:2px;">CRAFTED TO PERFECTION</span></div>`;
          }
        }}
      />
    </div>
  );
}
