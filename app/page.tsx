'use client';

import {
  faArrowTrendUp,
  faEgg,
  faGraduationCap,
  faMugHot,
  faTree,
} from '@fortawesome/free-solid-svg-icons';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons/faHandPointLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import caritasLogo from '@assets/caritaslogo.png';
import dailyMonitorLogo from '@assets/dailyMonitorLogo.jpeg';
import MAAIFLogo from '@assets/MAAIFLogo.jpeg';
import featuredInSectionImage from '@assets/newsHeroImage.png';
import ntvLogo from '@assets/ntvLogo.png';
import AboutUsBrief from './components/page-specific/home/AboutUsBrief';
import CoreAreasSection from './components/page-specific/home/CoreAreasSection';
import Different from './components/page-specific/home/Different';
import HeroSection from './components/page-specific/home/HeroSection';
import HorizontalLine from './components/shared/HorizontalLine';

export default function Home() {
  const impacthighlightsData = [
    'Over 4,000 farmers trained',
    'National Media recognition',
    'Government-supported mechanisation',
    'Sustainable integrated farming model',
  ];

  const featuredInData = [
    {
      logo: dailyMonitorLogo,
      name: 'Daily Monitor',
    },
    {
      logo: ntvLogo,
      name: 'NTV Uganda',
    },
    {
      logo: caritasLogo,
      name: 'Caritas Uganda',
    },
    {
      logo: MAAIFLogo,
      name: 'Government of Uganda Agricultural Programs',
    },
  ];
  return (
    <main className="flex flex-col md:gap-5 items-center bg-white ">
      <HeroSection />
      <div className="flex flex-col gap-7 md:gap-13 p-5 md:px-12">
        <div className="flex flex-col gap-2.5 md:flex-row md:justify-between p-5 md:px-15 md:items-center">
          <CoreAreasSection
            icon={faEgg}
            heading="Poultry Farming"
            moreInfo="Advanced layer production using battery cage system, supported by on-site feed processing."
          />
          <CoreAreasSection
            icon={faMugHot}
            heading="Coffee Farming"
            moreInfo="Organic Robusta coffee nourished by poultry manure"
          />
          {/* <CoreAreasSection
            icon={faTree}
            heading="Plantation Forestry"
            moreInfo="Eucsalyptus grown for commercial and environmental value"
          /> */}
          <CoreAreasSection
            icon={faGraduationCap}
            heading="Farmer Training"
            moreInfo="Hands-on training for thousands of farmers through demonstrations, study tours , and institutional partnerships"
          />
        </div>
        <HorizontalLine />
        <AboutUsBrief />
        <Different />
        <div className=" flex flex-col gap-3 md:gap-5 tracking-wider leading-loose">
          <h2 className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faArrowTrendUp} size="sm" />
            <span>Our Impact</span>
          </h2>
          <div className="flex flex-col gap-2.5">
            {impacthighlightsData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-1 h-auto shadow-sm rounded-md"
                >
                  <FontAwesomeIcon
                    icon={faHandPointLeft}
                    size="lg"
                    color="#96CA2D"
                  />
                  <span className="text-gray-600 text-[14px] md:text-[18px]">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="flex text-[20px]">Heard / Read About Us &128522;?</h2>
          <div className="flex flex-col gap-2 bg-black/30 absolute z-10 tracking-wider leading-loose">
            {featuredInData.map(({ logo, name }, index) => {
              return (
                <div
                  className="flex flex-col md:flex-row h-auto md:items-center p-2"
                  key={index}
                >
                  <Image
                    src={logo}
                    alt="Image showing partner logo"
                    className="w-1/2"
                    fill
                  />
                  <span className="flex text-black ">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="flext font-semibold text-xl md:text-2xl">
            Want to learn modern farming techniques or partner with us?
          </p>
          <div className="flex itmes-center gap-1">
            <Link
              href={'/contactUs'}
              className="text-blck hover:text-primaryGreen hover:scale-105"
            >
              Contact Us
            </Link>
            <span className="font-bold">|</span>
            <Link
              href={'/projects'}
              className="text-blck hover:text-primaryGreen hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
