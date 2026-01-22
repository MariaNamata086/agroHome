import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import {
  faPumpMedical,
  faDroplet,
  faEgg,
  faShieldVirus,
  faBowlFood,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { GiCctvCamera } from 'react-icons/gi';
import { TbClockStar } from 'react-icons/tb';
import HeaderBanner from '@/app/components/shared/HeaderBanner';
import ImageBg from '@/app/components/shared/ImageBg';
import PointCard from '@/app/components/shared/Pointcard';
import cleanEggsPicture from '@assets/batteryCageEggs.jpg';
import poultryStagesImage from '@assets/broodingPipedWater.jpg';
import poultryFarmingHero from '@assets/poultryCage2.webp';

function PoultryProject() {
  const whyBatteryCageSysytemData = [
    {
      advantage: 'Clean Feeding',
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
    <main className="flex flex-col p-20">
      <HeaderBanner page="Poultry Project" pageHeading="ENTERPRISE" />
      <ImageBg
        src={poultryFarmingHero}
        alt="picture of interiror of battery cage system"
        componentHeading="Poultry Farming"
        componentSubheading="From chick yo crate - a complete poultry production journey"
      />
      {/* if header banner will not be necessary, we'll also remove the immediately following div container */}
      <div className="flex flex-col bg-white gap-20">
        <div className="relative h-auto flex ">
          <div className="">
            <Image
              src={poultryFarmingHero}
              alt="picture of interiror of battery cage system"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div className="absolute tracking-wider gap-10 text-white bg-black/20 flex flex-col z-10">
            <h1 className="">Advanced Layer Poultry Farming</h1>
            <p className="">
              Precision, hygiene, and productivity at commercial scale
            </p>
          </div>
        </div>
        {/* might need to remove this upper div */}
        <div className="flexex-col gap-6 md:gap-10">
          <h1 className="">Project Overview</h1>
          <p>
            {' '}
            Our poultry project is the backbone of the farm. We specialize
            primarily in <b>layer birds,</b>reared using a{' '}
            <b>modern battery cage system</b>- a technology-driven approach that
            ensures efficiency, top-notch bird welfare and superior egg quality.
          </p>
          <p className="mt-3">
            This system allows us to manage over <b>10,000 birds</b> with
            precision, consistency, and strict hygiene standards
          </p>
          <p className="">
            Our layer enterprise serves both as a commercial operation and a
            training model for farmers seeking to transition to efficient,
            hygienic and profitable poultry production.
          </p>
        </div>

        <div className="flex relative">
          <Image
            src={poultryStagesImage}
            alt="image showing poultry day old chicks in a brooder"
            style={{ objectFit: 'cover' }}
          />
          <div className="inset-0 bg-black/70 flex gap-2 flex-col items-center justify-center text-white p-10 w-full tracking-wider leading-loose">
            <h2 className="">
              Let's take you through the poultry farming journey
            </h2>
            <div className="flex absolute  ">
              {poultryJourneyStepsData.map(({ heading, moreInfo }, index) => {
                return (
                  <div className="flex flex-col relative" key={index}>
                    <div className="flex items-center gap-5">
                      <span className="l-8 z-10">
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          color={
                            index === 0 || index === 1 || index === 2
                              ? '#96CA2D'
                              : '#d1d5db'
                          }
                          fontSize={30}
                        />
                      </span>
                      <div className="flex flex-col gap-1.5 bg-slate-400 p-2 rounded-full">
                        <h3
                          style={{
                            color:
                              index === 0 || index === 1 || index === 2
                                ? '#1e293b'
                                : 'oklch(55.4% 0.046 257.417)',
                          }}
                          className="text-[13px] md:text-[18px]"
                        >
                          {heading}
                        </h3>
                        <span className="flex text-sm md:text-md">
                          {moreInfo}
                        </span>
                      </div>
                    </div>
                    <span
                      className="-mt-2 w-0.5 h-11.25 md:h-16.25 bg-slate-300 ml-3"
                      style={{
                        backgroundColor:
                          index === 0 || index === 1
                            ? '#96CA2D'
                            : 'oklch(55.4% 0.046 257.417)',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="">Why Battery Cage Sysytem?</h2>
          <div className="grid md:grid-col-2">
            {whyBatteryCageSysytemData.map(
              ({ advantage, icon, moreInfo }, index) => {
                return (
                  <div className="flex flex-col gap-4" key={index}>
                    <div className="flex items-center gap-1">
                      <h3 className="">{advantage}</h3>
                      <FontAwesomeIcon icon={icon} size="" />
                    </div>
                    <p className="tracking-wider leading-loose">{moreInfo}</p>
                  </div>
                );
              },
            )}
          </div>
        </div>
        <ImageBg
          src={cleanEggsPicture}
          alt="a picture ashowing clean healthy eggs from the battery cage system"
          componentHeading="Project Outcomes"
          componentContent={poultryProjectOutcomesData}
        />

        <div className="h-auto flex ">
          <div className="flex flex-col gap-3">
            <h1 className="">Technology & Management</h1>
            <div className="flex flex-col md:flex-row md:items-center md:gap-2 ">
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
        </div>
      </div>
    </main>
  );
}

export default PoultryProject;
