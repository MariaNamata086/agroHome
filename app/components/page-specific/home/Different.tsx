'use client';

import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '@assets/poultryCage2.webp';
import CallToActionButton from '../../shared/CallToActionButton';

const Different = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <section
      className="relative mt-5 md:mt-9 w-full min-h-190 md:min-h-120
"
    >
      <Image
        src={backgroundImage}
        alt="Image of  modern battery cage poultry house"
        fill
        style={{ objectFit: 'cover' }}
      />

      <div className="absolute inset-0 bg-black/60 flex flex-col  justify-center px-5 md:px-16 gap-5 md:gap-8 text-center text-white">
        <h2 className="font-bold text-2xl text-left md:text-4xl">
          Discover Modern Agriculture
        </h2>
        <p
          ref={ref}
          className={`text-lg md:text-[17px] md:w-[85%] text-left  leading-9 md:leading-12 tracking-widest 
        transform transition-all duration-700 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
        >
          Unlike traditional agriculture,modern agriculture focuses on
          scientific knowledge and technology to increase efficiency and
          productivity. With a population that is growing exponentially,
          advanced techniques are essential in meeting the increased demand for
          food and ensuring that it is produced sustainably. That is our
          specialty.
        </p>
        <CallToActionButton callToAction="Discover More" href="/app/projects" />
      </div>
    </section>
  );
};

export default Different;
