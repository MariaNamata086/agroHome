import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImageBgProps {
  src: StaticImageData;
  alt: string;
  componentHeading?: string;
  componentSubheading?: string;
  componentContent?: string[];
  componentMoreInfo?: string;
}

const ImageBg = ({
  src,
  alt,
  componentHeading,
  componentSubheading,
  componentContent,
  componentMoreInfo
}: ImageBgProps) => {
  return (
    <div className="flex relative">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectFit: 'contain' }}
      />
      <div className="flex h-full items-center px-3 py-6 z-10 absolute bg-linear-to-r from-white/10 via-white/60 to-transparent text-white tracking-wider leading-loose">
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
        {componentMoreInfo && <p className="text-center">{componentMoreInfo}</p>}
      </div>
    </div>
  );
};

export default ImageBg;
