import Image from 'next/image';
import React from 'react';

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
    <div className="flex flex-col border-b-1.5 border-b-gray-600 hover:border-b-lime-300 shadow-sm">
      Banana varieties
      <Image
        src={varietyImage}
        alt={'image of banana variety'}
        className="w-full h-[65%] object-cover"
      />
      <div className="flex flex-col px-2.5 py-3 -mt-3.5 w-[85%] text-center tracking-wider leading-loose">
        <h2 className="font-bold text-lg">{name}</h2>

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
            <p className="text-sm md:text-lg text-gray-500">{moreInfo1}</p>
            {moreInfo2 && (
              <p className="text-sm md:text-lg text-gray-500">{moreInfo2}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BananaVarietyCard;
