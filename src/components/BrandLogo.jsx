import React from 'react';
import jsMartLogo from '../assets/JSMartLogoSimple.png';

export default function BrandLogo({ 
  className = '', 
  imgClassName = 'w-14 h-14', 
  showText = true, 
  layout = 'vertical' 
}) {
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col items-center' : 'flex-row items-center gap-3'} ${className}`}>
      {/* Official JS Grocery Mart Mark */}
      <div className="relative flex items-center justify-center">
        <img
          src={jsMartLogo}
          alt="JS Grocery Mart"
          className={`${imgClassName} object-contain drop-shadow-sm select-none`}
        />
      </div>
      {showText && (
        <div className={`text-center ${layout === 'vertical' ? 'mt-1.5' : ''}`}>
          <div className="text-[9px] font-extrabold tracking-widest text-[#1E1B4B] uppercase">GROCERY MART</div>
        </div>
      )}
    </div>
  );
}
