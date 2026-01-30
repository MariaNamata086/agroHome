'use client';

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowTrendUp,
  faGears,
  faGraduationCap,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import familyFaithImage from '@assets/faithFamily.jpg';
import farmingPhilosophyImage from '@assets/farmingPhilosophy.png';
import proprietorImage from '@assets/lwevuzePortrait.jpg';
import headerBannerImage from '@assets/Sustainable-Agriculture.png';
import WayOfFarmingCard from '../components/page-specific/aboutUs/FarmingPhilosophyCard';
import HeaderBanner from '../components/shared/HeaderBanner';
import ImageBg from '../components/shared/ImageBg';
import SectionSmallHeader from '../components/shared/SectionSmallHeader';

const Aboutus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const farmingPhilosophyData = [
    {
      icon: faGears,
      heading: 'Innovation',
      content: 'Using battery cage systems, CCTV monitoring, and mechanisation',
    },
    {
      icon: faRecycle,
      heading: 'Sustainability',
      content:
        'Recycling poultry waste directly into crop manure, use of corp produce to procure poultry feed',
    },
    {
      icon: faGraduationCap,
      heading: 'Education',
      content:
        'Training and mentoring farmers on advanced agricultural methods',
    },
  ];

  const ourImpactData = [
    {
      point: 'Institutional Partnerships',
      item: 'Working with Caritas Uganda and Uganda Joint Christian Coouncil',
    },
    {
      point: '4000+ Farmers Trained',
      item: 'Across multiple districts through hands-on training',
    },

    {
      point: 'Government Support',
      item: ' Irrigation and mechanisation initiatives',
    },
    {
      point: 'National Recognition',
      item: 'Featured in Daily Monitor and on NTV Uganda',
    },
  ];

  return (
    <main className="flex flex-col gap-10 text-black bg-white">
      <HeaderBanner
        src={headerBannerImage}
        page="About Us"
        pageHeading="Building a legacy of profitable, sustainable farming &mdash; and sharing it. "
      />
      <div className="flex flex-col gap-10 justify-center md:flex-row md:justify-between md:items-center   bg-slate-50 p-10 sm:w-full mx-auto">
        <div className="flex flex-col h-80 w-[320px] md:w-[40%] md:h-118 rounded-full group bg-primaryGreen place-self-center mt-5 md:mt-0">
          <Image
            src={proprietorImage}
            alt=""
            className="object-cover h-full mt-5 z-10 rounded-full "
            priority
          />
        </div>
        <div className="flex flex-col gap-10 p-8 md:w-[60%]">
          <p className="flex items-center justify-end gap-2 mt-7.5">
            <SectionSmallHeader headingContent="Our Story" />
          </p>
          <p className="tracking-wider text-slate-600 text-md md:text-[16px] leading-loose text-right">
            From Ntangala village in Katikamu Sub-county, Luweero District,
            Joseph Lwevuze has built more than a farm. He has built a model of
            modern agriculture, a training institution, and a lasting legacy
            rooted in discipline, innovation, and service.
          </p>
          <p className="flex text-left tracking-wider leading-loose md:text-[16px] text-slate-600 text-[12px]">
            What began as a family farming effort has grown into one of Uganda’s
            most respected integrated farming and training centres — proving
            that agriculture can be both profitable and sustainable when guided
            by knowledge and integrity.
          </p>
          <i className="text-forestGreen tracking-wider font-semibold">
            Enkulakulana Ejja Lwampaka
          </i>
        </div>
      </div>
      <section className="flex flex-col gap-3 md:gap-10 bg-gray-100 p-6 md:p-10 rounded-b-xl tracking-wider leading-loose">
        <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[28px] md:text-5xl gap-3.5">
          <FontAwesomeIcon icon={faArrowTrendUp} size="lg" />
          <span>Our Legacy & Impact</span>
        </h2>
        <div className="flex flex-col gap-3.5 md:gap-6">
          {ourImpactData.map(({ item, point }, index) => {
            return (
              <p
                className="flex items-center gap-4 md:gap-6 h-18 px-5 md:px-14 shadow-sm rounded-b-lg "
                key={index}
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  color="#96CA2D"
                />
                <p className="text-gray-600 text-[14px] md:text-[18px]">
                  <b>{point} &mdash;</b>
                  {item}
                </p>
              </p>
            );
          })}
        </div>
      </section>
      <ImageBg
        src={farmingPhilosophyImage}
        componentHeading="Our Philosophy"
        componentMoreInfo="Every technique taught at the farm is first proven on the farm. We believe farming should be evidence-based, sustainable, profitable, and shared for the benefit of communities."
        alt="Image related to farming philosophy"
        quote='"I practice what I teach"'
      />
      <div className="flex flex-col gap-3.5 md:gap-10 p-10 md:px-20 bg-gray-100">
        <h1 className="flex items-center tracking-widest text-gray-700 font-bold text-[28px] md:text-5xl gap-3.5">
          Our Way of Farming
        </h1>
        <div className="grid md:grid-cols-2 md:gap-15">
          {farmingPhilosophyData.map(({ icon, heading, content }, index) => {
            return (
              <WayOfFarmingCard
                key={index}
                heading={heading}
                icon={icon}
                content={content}
              />
            );
          })}
        </div>
      </div>
      <section className="relative mb-1 w-full h-87.5 md:h-110">
        <Image
          src={familyFaithImage}
          alt="Image of faith, family and longterm thinking"
          fill
          className="object-fill"
          priority
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-5 md:px-16 gap-4 md:gap-8 text-center text-white">
          <h2 className="font-semibold text-xl tracking-wider md:text-4xl">
            Family, Faith & Long-term Thinking
          </h2>
          <p
            ref={ref}
            className={`text-sm md:text-[17px] max-w-xl text-center leading-loose
              transform transition-all duration-700 ease-in-out
              ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
            `}
          >
            The success of the farm is anchored in family commitment,
            faith-driven values, and long-term planning. Every project is
            designed not only to generate income today, but to create lasting
            value for generations to come.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
