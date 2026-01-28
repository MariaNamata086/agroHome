import Image from 'next/image';
import React from 'react';
import backgroundImage from '@assets/poultryCage2.webp';
import CallToActionButton from '../../shared/CallToActionButton';

const Different = () => {
  return (
    <section className="relative mt-5 md:mt-9 w-full h-87.5 md:h-125">
      <Image
        src={backgroundImage}
        alt="Deep litter poultry house"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col  justify-center px-5 md:px-16 gap-4 md:gap-8 text-center text-white">
        <h2 className="font-bold text-xl text-left md:text-4xl">
          Discover Modern Agriculture
        </h2>
        <p className="text-sm md:text-[17px] max-w-xl  text-left leading-relaxed">
          Malesuada elit laoreet quisque facilisi vivamus fringilla. Augue felis
          nostra posuere urna si mattis ultrices natoque nulla curabitur
          laoreet. Laculis ligula hendrerit millis eqestas vulputate inceptos
          hac massa.
        </p>
        <CallToActionButton callToAction="Discover More" href="/app/projects" />
      </div>
    </section>
  );
};

export default Different;
