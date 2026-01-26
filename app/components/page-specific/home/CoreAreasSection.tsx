import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface coreAreasSectionProps {
  icon: any;
  heading: string;
  moreInfo: string;
}

const CoreAreasSection = ({
  icon,
  heading,
  moreInfo,
}: coreAreasSectionProps) => {
  return (
    <div className="flex gap-1">
      <span className=" bg-primaryGreen rounded-full p-[16.5px] w-5 h-5">
        <FontAwesomeIcon icon={icon} color="#96CA2D" size="lg" />
      </span>
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-lg md:text-xl">{heading}</h2>
        <p className="text-stone-400 text-[13px] md:text-[16px]">{moreInfo}</p>
      </div>
    </div>
  );
};

export default CoreAreasSection;
