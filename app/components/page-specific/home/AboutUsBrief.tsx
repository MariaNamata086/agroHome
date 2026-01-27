import Image from 'next/image';
import React from 'react';
import bananaProjectPicture from '@assets/banana.jpeg';
import poultryProjectPicture from '@assets/poultryPortrait.jpeg';
import CallToActionButton from '../../shared/CallToActionButton';
import SectionSmallHeader from '../../shared/SectionSmallHeader';

const AboutUsBrief = () => {
  return (
    <section className="flex flex-col md:flex-row md:gap-12">
      <div className="flex flex-col w-full md:w-1/2 md:flex-row md:gap-4 gap-1">
        <div className="relative w-full md:w-1/2 flex flex-col">
          <Image
            src={poultryProjectPicture}
            alt="battery cage poultry farming picture"
            className="mt-0 md:-mt-1.5 object-cover"
          />
          <div className="absolute flex flex-col z-5 w-1/2 h-16 p-14 items-center justify-center rounded-full bg-[rgb(150,202,45)] text-white -mt-1 ">
            <span className="text-4xl font-bold">40+</span>
            <span className="text-[12px] font-semibold">
              Years Of Experience
            </span>
          </div>
        </div>
        <Image
          src={bananaProjectPicture}
          alt="a picture of a banana farm project"
          className="mt-10 object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 md:gap-6 md:w-1/2 ">
        <SectionSmallHeader headingContent="Who We Are" />
        <h2 className="font-bold text-black text-[20px] md:text-[25px] tracking-wider">
          Rooted in Diversity and Sustainability{' '}
        </h2>
        <p className="text-[16px] md:text-[14px] tracking-wider leading-loose">
          We are a diversified commercial agricultural enterprise based in
          Luweero District, Uganda, specializing in layer poultry production,
          Robusta coffee farming, banana farming and plantation forestry. Our
          work blends <b>modern techology</b>, <b>organic farming principles</b>{' '}
          and a deep commitment to <b>educating fellow farmers</b> on modern,
          sustainable and productive agricultural methods.{' '}
        </p>
        <CallToActionButton callToAction="More About Us" href="/app/aboutUs" />
      </div>
    </section>
  );
};

export default AboutUsBrief;
