'use client';
import Image from 'next/image';

interface ServiceLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ServiceLogo = ({ src, alt, width = 40, height = 40 }: ServiceLogoProps) => {
  return (
    <div className="relative group">
      {/* Shadow effect */}
      <div className="absolute inset-0 rounded-full bg-black/10 blur-sm transform group-hover:scale-110 transition-transform duration-300"></div>
      
      {/* Logo */}
      <div className="relative bg-white rounded-full p-2 shadow-md transform group-hover:scale-105 transition-transform duration-300">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ServiceLogo; 