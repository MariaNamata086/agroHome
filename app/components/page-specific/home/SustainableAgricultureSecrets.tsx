import Image from 'next/image';
import React from 'react';
import CallToActionButton from '../../shared/CallToActionButton';

const SustainableAgricultureSecrets = () => {
  return (
    <div className="relative flex h-auto w-full ">
      <Image
        src={}
        alt="a picture showing our sustainable agriculture implementation"
        fill
      />
      <div className="absolute flex flex-col px-5 md:px-9 py-4 md:py-7 bg-black/20 tracking-wider">
        <h1 className="font-bold text-xl md:text-2xl"></h1>
        <p className="flex text-center"></p>
        <CallToActionButton href="/app/aboutUs" callToAction="Discover More" />
      </div>
    </div>
  );
};

export default SustainableAgricultureSecrets;
