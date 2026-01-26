import Image from 'next/image';
import React from 'react';
import backgroundImage from '@assets/deeplitterHouse.jpeg';
import CallToActionButton from '../../shared/CallToActionButton';

const Different = () => {
  return (
    <div className="flex relative w-full h-auto ">
      <Image
        src={backgroundImage}
        alt="image of deep litter poultry house"
        className="w-full"
        fill
      />
      <div className="absolute w-full z-10 bg-black/20 bg-linear-to-r flex py-3 md:py-10 tracking-wider">
        <h2 className="font-bold text-lg md:text-2xl text-white">
          Discover Modern Agriculture
        </h2>
        <p className="tracking-wider">
          Malesuada elit laoreet quisque facilisi vivamus fringilla. Augue felis
          nostra posuere urna si mattis ultrices natoque nulla curabitur
          laoreet. Laculis ligula hendrerit millis eqestas vulputate inceptos
          hac massa
        </p>
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
