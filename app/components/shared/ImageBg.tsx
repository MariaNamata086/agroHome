import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImageBgProps {
  src: StaticImageData;
  alt: string;
  componentHeading?: string;
  componentSubheading?: string;
  componentContent?: string[];
  componentMoreInfo?: string;
  quote?: string;
}

const ImageBg = ({
  src,
  alt,
  componentHeading,
  componentSubheading,
  componentContent,
  componentMoreInfo,
  quote,
}: ImageBgProps) => {
  return (
    <div className="flex md:h-130 relative">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectFit: 'fill' }}
      />
      <div className="flex flex-col h-full items-left px-3 py-6 md:p-25 md:gap-8 z-10 absolute bg-linear-to-r from-stone-900/90 via-stone-900/80 to-transparent text-white tracking-widest leading-loose">
        {componentHeading && (
          <h2 className="flex items-center tracking-widest p-3 md:p-5 text-white justif-center font-bold text-[28px] md:text-5xl gap-3.5">
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              size="lg"
              className="text-lime-200"
            />
            <span>{componentHeading}</span>
          </h2>
        )}
        {quote && (
          <i className="font-gochi text-center text-md md:text-2xl md:w-[50%] font-semibold tracking-widest">
            {quote}
          </i>
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
        {componentMoreInfo && (
          <p className="text-center md:w-[60%]">{componentMoreInfo}</p>
        )}
      </div>
    </div>
  );
};

export default ImageBg;
