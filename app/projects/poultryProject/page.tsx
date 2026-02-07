'use client';

import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import {
  faPumpMedical,
  faDroplet,
  faEgg,
  faShieldVirus,
  faBowlFood,
  faCheckDouble,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image, { StaticImageData } from 'next/image';
import { GiBirdCage, GiCctvCamera } from 'react-icons/gi';
import { TbClockStar } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer';
import Carousel from '@/app/components/shared/Carousel';
import HeaderBanner from '@/app/components/shared/HeaderBanner';
import Motion from '@/app/components/shared/Motion';
import PointCard from '@/app/components/shared/Pointcard';
import carouselImage8 from '@assets/assembledEmpty.png';
import carouselImage2 from '@assets/assembledEmpty2.png';
import carouselImage3 from '@assets/assembledEmpty3.png';
import cleanEggsPicture from '@assets/batteryCageEggs.jpg';
import poultryStagesImage from '@assets/broodingPipedWater.jpg';
import poultryFarmingHero from '@assets/cleanEggs2.png';
import carouselImage1 from '@assets/emptyCages.png';
import carouselImage4 from '@assets/henDrinking.png';
import carouselImage7 from '@assets/maizeSheller.png';
import carouselImage5 from '@assets/poultryHouse2.png';
import carouselImage9 from '@assets/poultryHouseConstruction.png';
import carouselImage6 from '@assets/waterSystem.png';

function PoultryProject() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const poultryProjectImages: StaticImageData[] = [
    cleanEggsPicture,
    carouselImage9,
    carouselImage1,
    carouselImage8,
    carouselImage2,
    carouselImage3,
    carouselImage6,
    carouselImage4,
    carouselImage5,
    carouselImage7,
  ];

  const whyBatteryCageSysytemData = [
    {
      advantage: 'Hygienic Feeding',
      icon: faPumpMedical,
      moreInfo:
        'There is no mixing of feed with droppings, which would result into spread of diseases.',
    },
    {
      advantage: '24/7 Water Access',
      icon: faDroplet,
      moreInfo:
        'Automated piped water system ensures round the clock hydration, especially crucial for peak and clean egg production',
    },
    {
      advantage: 'Cleaner Eggs',
      icon: faEgg,
      moreInfo:
        'Egges roll away from birds immediately after laying, reducing breakage, egg eating & surface contamination',
    },
    {
      advantage: 'Disease Control',
      icon: faShieldVirus,
      moreInfo: 'Reduced bird contact with waste minimises disease spread.',
    },
  ];

  const managementData = [
    {
      Point: 'Security',
      description: 'CCTV surveillance for round-the-clock monitoring',
      icon: <GiCctvCamera size={75} color="#1e293b" />,
    },
    {
      Point: 'Feeding',
      description: 'Structured feeding and immune boosting programs',
      icon: <FontAwesomeIcon icon={faBowlFood} />,
    },
    {
      Point: 'Egg Collection',
      description: 'Timely egg collection',
      icon: <TbClockStar size={75} color="#1e293b" />,
    },
  ];

  const poultryJourneyStepsData = [
    {
      heading: 'Day Old Chicks',
      moreInfo:
        'High-quality day-old chicks, controlled brooding and high grade early nutrition.',
    },
    {
      heading: 'Vaccination & Health Management',
      moreInfo:
        'Strict vaccination schedules and biosecurity protocols to ensure bird health.',
    },
    {
      heading: 'Deep Litter Rearing (Up to 3.5 Months)',
      moreInfo:
        'Optimal growth through proper space, feeding, and sanitation practices.',
    },
    {
      heading: 'Transition to Battery Cage System',
      moreInfo:
        'Birds are moved to larger cages as they attain egg laying age, with efficient feeding programs and improved hygiene.',
    },
    {
      heading: 'Feed Processing & Egg Production',
      moreInfo:
        'On-site feed milling and contentrate reconstitution using broken maize and quality control systems.',
    },
  ];

  const poultryProjectOutcomesData = [
    'High egg productivity rates',
    'Reduced feed costs',
    'Reduced disease prevalence',
    'Improved Soil Fertility',
    'Scalable and Sustainable Operations',
  ];
  return (
    <main className="flex flex-col gap-10">
      <HeaderBanner
        page="Poultry Project"
        pageHeading="From chick to crate - a complete poultry production journey . "
        src={poultryFarmingHero}
      />

      <div className="flex flex-col bg-white gap-20 p-10 md:p-20">
        <Motion direction="right">
          <div className="flex flex-col self-center gap-6 -mt-14 px-6 ">
            <h1 className="flex tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[28px] md:text-5xl gap-3.5">
              Project Overview
            </h1>
            <p className=" tracking-wider text-slate-700 leading-relaxed text-md md:text-[16px]">
              {' '}
              Our poultry project is the backbone of the farm. We specialize
              primarily in <b>layer birds,</b>reared using a{' '}
              <b>modern battery cage system</b>- a technology-driven approach
              that ensures efficiency, top-notch bird welfare and superior egg
              quality.
            </p>
            <p className="tracking-wider text-slate-700 leading-relaxed text-md md:text-[16px]">
              This system allows us to manage over <b>10,000 birds</b> with
              precision, consistency, and strict hygiene standards
            </p>
            <p className=" tracking-wider text-slate-700 leading-relaxed text-md md:text-[16px]">
              Our layer enterprise serves both as a commercial operation and a
              training model for farmers seeking to transition to efficient,
              hygienic and profitable poultry production.
            </p>
          </div>
        </Motion>

        <div className="flex relative h-250">
          <Image
            src={poultryStagesImage}
            alt="image showing poultry day old chicks in a brooder"
            style={{ objectFit: 'cover' }}
          />
          <div className=" absolute inset-0 bg-black/50 flex gap-2 flex-col items-center justify-center h-auto p-10 w-full tracking-wider leading-loose">
            <div className="flex flex-col  ">
              <h2 className="flex z-10 gap-4 text-primaryBrown font-semibold mb-4 text-xl md:text-4xl w-full md:w-[60%] text-center self-center leading-relaxed tracking-widest py-5">
                Let's take you through the poultry farming journey
              </h2>
              {poultryJourneyStepsData.map(({ heading, moreInfo }, index) => {
                return (
                  <div className="flex flex-col relative " key={index}>
                    <div className="flex items-center md:w-[70%] gap-5">
                      <span className="l-8 z-10">
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          color={
                            index === 0 || index === 1 || index === 2
                              ? '#96CA2D'
                              : '#d1d5db'
                          }
                          fontSize={40}
                        />
                      </span>
                      <div
                        className="flex flex-col gap-1.5 py-5 px-9 rounded-full h-28"
                        style={{
                          backgroundColor:
                            index === 0 || index === 1 || index === 2
                              ? 'white'
                              : 'oklch(92.9% 0.013 255.508)',
                        }}
                      >
                        <h3
                          style={{
                            color:
                              index === 0 || index === 1 || index === 2
                                ? 'black'
                                : 'oklch(55.4% 0.046 257.417)',
                          }}
                          className="text-[13px] font-medium tracking-widest text-center md:text-[15px] text-forestGreen"
                        >
                          {heading}
                        </h3>
                        <span
                          style={{
                            color:
                              index === 0 || index === 1 || index === 2
                                ? 'oklch(30.2% 0.056 229.695)'
                                : 'oklch(37.2% 0.044 257.287)',
                          }}
                          className="flex tracking-relaxed text-sm md:text-[14px] text-center leading-relaxed mb-2"
                        >
                          {moreInfo}
                        </span>
                      </div>
                    </div>
                    <span
                      className="flex -mt-8 w-0.5 h-14.25 md:h-20.25 bg-slate-200 ml-6"
                      style={{
                        backgroundColor:
                          index === 0 || index === 1 || index === 2
                            ? '#96CA2D'
                            : '#d1d5db',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-10 bg-gray-100 p-6 md:p-10 rounded-b-xl tracking-wider leading-loose">
          <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[28px] md:text-5xl gap-3.5">
            <GiBirdCage />
            <span>Why Battery Cage System?</span>
          </h2>
          <div ref={ref} className="grid md:grid-cols-2 gap-4 md:gap-6">
            {whyBatteryCageSysytemData.map(
              ({ advantage, icon, moreInfo }, index) => {
                return (
                  <div
                    className={`flex flex-col gap-4 py-2 px-3 md:px-6 shadow-lg rounded-md duration-1000 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} `}
                    key={index}
                  >
                    <div className="flex items-center gap-2.5 p-2">
                      <h3 className="font-semibold text-xl tracking-widest text-slate-700">
                        {advantage}
                      </h3>
                      <FontAwesomeIcon
                        icon={icon}
                        size="2xl"
                        color="oklch(37.3% 0.034 259.733)"
                      />
                    </div>
                    <p className="tracking-wider leading-loose">{moreInfo}</p>
                  </div>
                );
              },
            )}
          </div>
        </div>
        <section className="relative mb-1 w-full h-87.5 md:h-130">
          <Image
            src={cleanEggsPicture}
            alt="Image of faith, family and longterm thinking"
            fill
            className="object-fill"
            priority
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-5 gap-4 md:gap-10 text-center text-gray-300">
            <h2 className="font-semibold text-xl tracking-wider md:text-4xl">
              Project Deliverables
            </h2>
            <div
              className="flex flex-col text-sm md:text-[17px] text-center leading-loose
              transform transition-all duration-700 ease-in-out 
              gap-7"
            >
              {poultryProjectOutcomesData.map((item, index) => {
                return (
                  <Motion direction="up" key={index}>
                    <p className="flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheckDouble}
                        size="xl"
                        color="#96CA2D"
                      />
                      <span className="">{item}</span>
                    </p>
                  </Motion>
                );
              })}
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-3">
          <h1 className="flex tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[28px] md:text-5xl">
            Technology & Management
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-2 ">
            {managementData.map(({ Point, description, icon }, index) => {
              return (
                <PointCard
                  key={index}
                  point={Point}
                  description={description}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col  w-full h-[400px] md:h-[550px] relative">
          <Carousel images={poultryProjectImages} />
        </div>
      </div>
    </main>
  );
}

export default PoultryProject;
