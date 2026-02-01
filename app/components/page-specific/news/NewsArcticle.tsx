import Image, { StaticImageData } from 'next/image';
import React from 'react';
import CallToActionButton from '../../shared/CallToActionButton';

interface NewsArcticleProps {
  title: string;
  articleExcerpt: string;
  publicationHouse: string;
  publicationDate: string;
  link: string;
  imageSrc: StaticImageData;
}

const NewsArcticle = ({
  title,
  articleExcerpt,
  publicationHouse,
  publicationDate,
  link,
  imageSrc,
}: NewsArcticleProps) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 bg-stone-100  tracking-wider leading-loose w-full justify-center h-80 md:h-100">
      <div className="flex flex-col gap-3.5 items-center justify-center px-4 md:px-8 md:gap-5">
        <h2 className="text-xl text-center font-bold text-slate-700 tracking-wider leading-loose">
          {title}
        </h2>
        <p className="text-stone-700 text-right">{articleExcerpt}</p>
        <div className="flex md:-ml-28 items-center">
          <span className="text-sm text-gray-500 font-semibold">
            {publicationHouse}
          </span>
          <span className="text-sm text-gray-500 font-semibold">
            {publicationDate}
          </span>
        </div>
        <CallToActionButton href={link} callToAction="Read More" />
      </div>
      <Image
        src={imageSrc}
        alt="Image that is shown on the news article"
        className="flex w-full md:w-[50%] h-full object-cover"
      />
    </div>
  );
};

export default NewsArcticle;
