'use client';

import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowTrendUp,
  faEgg,
  faGraduationCap,
  faMugHot,
  // faTree,
} from '@fortawesome/free-solid-svg-icons';
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
import Motion from './components/shared/Motion';

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
      name: 'G.O.U Agricultural Programs',
    },
  ];
  return (
    <main className="flex flex-col md:gap-5 items-center bg-white ">
      <HeroSection />
      <div className="flex flex-col gap-7 md:gap-13 p-5 md:px-12">
        <div className="flex gap-2.5 flex-row justify-between md:justify-around p-5 items-center">
          <CoreAreasSection
            icon={faEgg}
            heading="Poultry Farming"
            moreInfo="Advanced poultry layer production using battery cage system, supported by on-site feed processing."
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
        <div className=" flex flex-col gap-3 md:gap-10 bg-gray-100 p-6 md:p-10 rounded-b-xl tracking-wider leading-loose">
          <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[38px] md:text-5xl gap-3.5">
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              size="lg"
              className="animate-bounce"
            />
            <span>Our Impact</span>
          </h2>
          <div className="flex flex-col gap-3.5 md:gap-6">
            {impacthighlightsData.map((item, index) => {
              return (
                <Motion direction="left" key={index}>
                  <div className="flex items-center gap-4 md:gap-6 h-22 px-5 md:px-14 shadow-sm hover:scale-105 rounded-b-md">
                    <FontAwesomeIcon
                      icon={faHandPointRight}
                      size="xl"
                      color="#96CA2D"
                    />
                    <span className="text-gray-600 text-[15px] md:text-[18px]">
                      {item}
                    </span>
                  </div>
                </Motion>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8 relative mt-5 md:mt-9 w-full h-150 md:mb-5">
          <Image
            src={featuredInSectionImage}
            alt="Image of Mr. Lwevuze being interviewed by NTV Uganda"
            fill
            className="object-cover"
            priority
          />
          <h2 className="flex text-2xl md:text-4xl font-bold tracking-widest justify-center text-white z-20 mt-8 ">
            Heard / Read About Us &#128522;?
          </h2>
          <div className="grid grid-cols-2 absolute justify-center items-center md:gap-10 p-4 inset-0 md:p-16 bg-black/40  z-10 tracking-wider leading-loose">
            {featuredInData.map(({ logo, name }, index) => {
              return (
                <Motion direction="right" key={index}>
                  <Link
                    href={'/app/news'}
                    className="flex flex-col md:flex-row gap-5 mt-14 h-auto md:items-center p-5 md:px-8"
                  >
                    <Image
                      src={logo}
                      alt="Image showing partner logo"
                      className="w-30 h-30"
                    />
                    <span className="flex text-white font-semibold tracking-widest ">
                      {name}
                    </span>
                  </Link>
                </Motion>
              );
            })}
          </div>
        </div>
        <Motion direction="zoom">
          <div className="flex flex-col gap-3 px-10 text-center tracking-wider leading-loose md:gap-6 justify-center items-center text-stone-600 mb-5 md:mb-10">
            <p className="flext font-semibold text-md md:text-lg ">
              Want to learn modern farming techniques or partner with us?
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={'/contactUs'}
                className="hover:text-primaryGreen text-sm hover:scale-105"
              >
                Contact Us
              </Link>
              <span className="font-bold">|</span>
              <Link
                href={'/projects'}
                className="hover:text-primaryGreen text-sm hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </Motion>
      </div>
    </main>
  );
}
