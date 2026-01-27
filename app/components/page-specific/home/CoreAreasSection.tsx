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
    <div className="flex flex-col gap- shadow-md p-2 rounded-md h-60  w-1/3">
      <span className="flex bg-[rgb(150,202,45)] items-center md:ml-40 justify-center shadow-md rounded-full p-[16.5px] w-10 md:w-18 h-10 md:h-24">
        <FontAwesomeIcon icon={icon} color="#FFFFFF" size="2xl" />
      </span>
      <div className="flex flex-col justify-center p-4 md:p-7 gap-1 md:gap-3">
        <h2 className="font-bold text-lg md:text-xl text-center text-black tracking-wider leading-relaxed">
          {heading}
        </h2>
        <p className="text-stone-500 text-[13px] text-center md:text-[14px] tracking-wider leading-relaxed">
          {moreInfo}
        </p>
      </div>
    </div>
  );
};

export default CoreAreasSection;
