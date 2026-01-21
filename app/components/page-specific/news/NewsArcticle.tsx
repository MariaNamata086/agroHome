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
    <div className="glex flex-col md:flex-row md: gap-5 md:gap-2 tracking-wider leading-loose">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-stone-700">{articleExcerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{publicationHouse}</span>
          <span className="text-sm text-gray-500">{publicationDate}</span>
        </div>
        <CallToActionButton href={link} callToAction="Read More" />
      </div>
      <Image
        src={imageSrc}
        alt="Image that is shown on the news article"
        className="flex w-full md:w-[50%]"
      />
    </div>
  );
};

export default NewsArcticle;
