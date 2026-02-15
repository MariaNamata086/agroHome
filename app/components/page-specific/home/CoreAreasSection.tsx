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
    <div className="flex flex-row md:flex-col shadow-md  px-4 md:p-2 items-center rounded-md h-auto md:h-60 w-full md:w-1/3">
      <div className="flex bg-[rgb(150,202,45)] items-center justify-center shadow-xl md:shadow-md animate-pulse rounded-full p-[16.5px] w-14 md:w-18 h-14 md:h-26">
        <FontAwesomeIcon icon={icon} color="#FFFFFF" size="2xl" />
      </div>
      <div className="flex flex-col justify-center p-4 md:p-7 gap-1 md:gap-3">
        <h2 className="font-bold text-lg md:text-xl text-center text-slate-700 tracking-wider leading-relaxed">
          {heading}
        </h2>
        <p className="text-stone-700 text-[13px] text-center md:text-[14px] tracking-wider md:text-right leading-loose ">
          {moreInfo}
        </p>
      </div>
    </div>
  );
};

export default CoreAreasSection;
