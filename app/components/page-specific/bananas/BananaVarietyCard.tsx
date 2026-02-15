import Image from 'next/image';
import React from 'react';
import Motion from '../../shared/Motion';

interface BananaVarietyCardProps {
  name: string;
  varietyImage: any;
  moreInfo1: string;
  moreInfo2?: string;
  varietyDetails1?: string;
  varietyDetails2?: string;
}

const BananaVarietyCard = ({
  name,
  varietyImage,
  moreInfo1,
  moreInfo2,
  varietyDetails1,
  varietyDetails2,
}: BananaVarietyCardProps) => {
  return (
    <div className="flex flex-col border-b-3 border-b-gray-600 hover:border-primaryGreen md:h-150 justify-start items-center rounded-b-lg shadow-sm">
      <Image
        src={varietyImage}
        alt={'image of banana variety'}
        className=" flex w-full h-[60%] object-cover mt-0"
      />
      <div className="flex flex-col p-5 rounded-lg shadow-t-xl -mt-7 gap-3 w-[85%] text-center tracking-wider leading-loose bg-white">
        <h2 className="font-semibold tracking-widest text-slate-700  text-[20px] md:text-lg">
          {name}
        </h2>

        {varietyDetails1 ? (
          <ul className="list-disc">
            <li className="flex gap-1.5 text-sm md:text-lg text-gray-500">
              <span className="font-bold">{varietyDetails1}</span>
              {moreInfo1}
            </li>
            <li className="flex gap-1.5 text-sm md:text-lg text-gray-500">
              <span className="font-bold">{varietyDetails2}</span>
              {moreInfo2}
            </li>
          </ul>
        ) : (
          <div className="flex flex-col gap-1.5 ">
            <Motion direction="left">
              <p className="text-sm md:text-md text-gray-600 tracking-widest leading-loose">
                {moreInfo1}
              </p>
            </Motion>
            {moreInfo2 && (
              <p className="text-sm md:text-md text-gray-600 tracking-widest leading-loose">
                {moreInfo2}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BananaVarietyCard;
