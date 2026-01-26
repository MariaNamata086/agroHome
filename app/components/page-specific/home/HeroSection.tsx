import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { GiThreeLeaves } from 'react-icons/gi';
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
      <div className="flex h-full items-center px-3 py-6 z-10 absolute bg-linear-to-r from-white/10 via-white/60 to-transparent">
        <div className="relative z-20 h-full flex flex-col gap-2">
          <div className="flex justify-between w-[1/3] items-center">
            <GiThreeLeaves color="#96CA2D" />
            <span className="flex text-[12px] md:text-[16px] text-black ">
              Established since 1992
            </span>
          </div>
          <h1 className="font-bold text-xl md:text-2xl text-[#384D48]">
            Growing Food. Training Farmers, Building Legacies
          </h1>
          <p className="text-[#384D48] text-sm md:text-md">
            A model farm and training center in Luweero District, Uganda &mdash;
            transforming agricluture through innovation, intehrity, and impact.
          </p>
          <CallToActionButton
            callToAction="Explore Our Work"
            href="/app/projects"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
