import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import heroImage from '@assets/coffeeCherriesBeans.jpeg';
import CallToActionButton from '../../shared/CallToActionButton';

const HeroSection = () => {
  return (
    <section className="flex relative h-auto w-full p-2 tracking-wider">
      <Image
        src={heroImage}
        alt="hero image"
        className="h-full w-full object-cover abosulte"
      />
      <div className="flex h-full items-center px-3 py-6 z-10 absolute bg-gradient-to-r from-white/10 via-white/60 to-transparent">
        <div className="relative z-20 h-full flex flex-col gap-2">
          <div className="flex justify-between w-[1/3] items-center">
            {/* a leaves icon*/}
            <span className="flex text-[12px] md:text-[16px] ">
              Established since 1992
            </span>
          </div>
          <h1 className="font-bold text-xl md:text-2xl">
            Modern, Sustainable Farming Rooted in Purpose
          </h1>
          <p className="">
            Commercial poultry, coffee, and plantation forestry driven by
            innovation, organic practives, and farmer education in Uganda
          </p>
          <CallToActionButton callToAction="Explore Our projects" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
