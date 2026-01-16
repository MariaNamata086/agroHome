import Image from 'next/image';
import React from 'react';
import CallToActionButton from '../../shared/CallToActionButton';

const Different = () => {
  return (
    <div className="flex relative w-ful h-auto ">
      <Image src={} alt="" className="w-full" fill />
      <div className="absolute w-full z-10 bg-black/20 flex py-3 md:py-10 tracking-wider">
        <h2 className="font-bold text-lg md:text-2xl"></h2>
        <p className="tracking-wider"></p>
        <span className="mt-2">
          <CallToActionButton
            callToAction="Discover More"
            href="/app/projects"
          />{' '}
        </span>
      </div>
    </div>
  );
};

export default Different;
