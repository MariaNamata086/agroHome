import Image from 'next/image';
import React from 'react';

interface ImageBgProps {
  src: string;
  alt: string;
  componentHeading?: string;
  componentSubheading?: string;
  componentContent?: string[];
}

const ImageBg = ({
  src,
  alt,
  componentHeading,
  componentSubheading,
  componentContent,
}: ImageBgProps) => {
  return (
    <div className="relative">
      <Image src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/20 flex gap-2 flex-col items-center justify-center text-white p-4">
        {componentHeading && (
          <h2 className="text-2xl font-bold mb-2">{componentHeading}</h2>
        )}
        {componentSubheading && (
          <h3 className="text-lg mb-4">{componentSubheading}</h3>
        )}
        {componentContent && (
          <ul className="list-disc gap-2 md:gap-3 text-left">
            {componentContent.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ImageBg;
