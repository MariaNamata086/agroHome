import Image from 'next/image';
import React from 'react';
import bananaProjectPicture from '@assets/banana.jpeg';
import poultryProjectPicture from '@assets/poultryCage1.jpeg';
import CallToActionButton from '../../shared/CallToActionButton';

const AboutUsBrief = () => {
  return (
    <section className="flex flex-col md:flex-row md: gap-1.5 px-1 py-2">
      <div className="flex flex-col w-1/2 md:flex-row md:gao-1.5 gap-1">
        <div className="relative w-full md:w-1/2 flex flex-col">
          <Image
            src={poultryProjectPicture}
            alt="battery cage poultry farming picture"
            className="mt-0 md:-mt-1.5"
          />
          <div className="absolute flex flex-col z-5 w-1/2 h-8 rounded-full bg-primaryGreen text-white -mt-5 -ml-7">
            <span className="text-xl">25+</span>
            <span className="text-[14px]">Years Of Experience</span>
          </div>
        </div>
        <Image
          src={bananaProjectPicture}
          alt="a picture of a banana farm project"
        />
      </div>
      <div className="flex flex-col gap-3 tracking-wider">
       
        <h2 className="font-bold text-black">
          Rooted in Diversity and Sustainability{' '}
        </h2>
        <p className="leading-loose">
          We are a diversified commercial agricultural enterprise based in
          Luwero District, Uganda, specializing in layer poultry production,
          Robusta coffe farming, banana farming and plantation forestry. Our
          work blends <b>modern techology</b>, <b>organic farming principles</b>{' '}
          and a deep cpmmitment to <b>educating fellow farmers</b> on
          modern,sustainable and productive agricultural methods.{' '}
        </p>
      </div>
      <CallToActionButton callToAction="More About Us" href="/app/aboutUs" />
    </section>
  );
};

export default AboutUsBrief;
