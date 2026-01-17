import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import FarmingPhilosophyCard from '../components/page-specific/aboutUs/FarmingPhilosophyCard';
import HeaderBanner from '../components/shared/HeaderBanner';

const Aboutus = () => {
  const farmingPhilosophyData = [
    {
      icon: 'gear',
      heading: 'Innovation',
      content: 'Using battery cage systems, CCTV monitoring, and mechanisation',
    },
    {
      icon: 'recycling',
      heading: 'Sustainability',
      content: 'Recycling poultry waste directly into crop manure',
    },
    {
      icon: 'grad cap',
      heading: 'Education',
      content:
        'Training and mentoring farmers on advanced agricultural methods',
    },
  ];

  const ourImpactData = [
    '10,000+ layer birds',
    'Multiple agricultural sectors integrated',
    'Government-supported farmer',
    'Hundreds of farmers educated',
  ];

  return (
    <main className="flex flex-col gap-20 text-black bg-white">
      <HeaderBanner
        page="About Us"
        pageHeading="Building the Future of Farming Through innovation "
      />
      <div className="flex flex-col gap-10 justify-center md:flex-row md:justify-between md:items-center   bg-slate-100 p-0 sm:w-137.5 md:w-[90%] mx-auto">
        <div className="flex flex-col h-80 w-[320px] md:w-450 md:h-100 rounded-full group bg-cyan-200 place-self-center mt-5 md:mt-0">
          <Image
            // find a suitable image, prolly mzee's image
            src={}
            alt=""
            className="object-cover h-full mt-3 z-10 rounded-full "
            priority
          />
        </div>
        <div className="flex flex-col gap-10 p-8">
          <p className="flex items-center justify-end gap-2 mt-7.5">
            <span className="flex h-1.75 w-[7px] rounded-full bg-primary" />
            <span className="flex text-[11px] md:text-[15px] text-slate-600 ">
              Our Story
            </span>
          </p>
          <p className="tracking-wider font-medium text-md md:text-[23px] text-right">
            Founded by a passionate commercial farmer, our enterprise grew from
            a single vision:
            <span className="text-primaryGreen">
              to farm better, smarter, and sustainably.
            </span>
            Over the years, we have expanded into poultry, coffee and forestry-,
            each reinforcing the other through integrated, organic practices.
          </p>
          <span className="flex text-left tracking-wider leading-loose text-slate-600 text-[12px]">
            We believe farming should be profitable, environmentally
            responsible, and knowledge driven.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 p-3 md:p-5">
        <h1 className="text-xl md:text-2xl">Our Farming Philosophy</h1>
        <div className="grid md:grid-cols-2 md:gap-2">
          {farmingPhilosophyData.map(({ icon, heading, content }, index) => {
            return (
              <FarmingPhilosophyCard
                key={index}
                heading={heading}
                icon={icon}
                content={content}
              />
            );
          })}
        </div>
      </div>
      <section className="flex flex-col gap-1.5 md:gap-2">
        <h2 className="text-[16px] md:text-[19px]">Our Impact</h2>
        <div className="flex flex-col gap-2 md:gap-2.75">
          {ourImpactData.map((item, index) => {
            return (
              <p className="w-full flex gap-4 items-center " key={index}>
                <FontAwesomeIcon icon={faCircleCheck} color="" fontSize={14} />
                <span className="text-[11.5px]">{item}</span>
              </p>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
