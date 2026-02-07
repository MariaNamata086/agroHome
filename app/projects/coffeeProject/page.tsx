import {
  faLeaf,
  faSeedling,
  faWater,
  faBoxOpen,
  faHandPointRight,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiCoffeeBeans } from 'react-icons/gi';
import HeaderBanner from '@/app/components/shared/HeaderBanner';
import Motion from '@/app/components/shared/Motion';
import coffeeHeroImage from '@/public/assets/coffeeHarvesting.jpg';
import wayOfFarmingImage from '@assets/bananaCoffeeIntercropping.png';
import coffeeImage from '@assets/coffeePlantManure.png';

const CoffeeProject = () => {
  const featuresSectionData = [
    {
      point: 'Land & Crop Profile',
      icon: faSeedling,
      moreInfo: 'Coffee intercropped with bananas and shade trees',
    },
    {
      point: 'Irrigation & Infrastructure',
      icon: faWater,
      moreInfo: 'Solar-powered irrigation systems and high-horsepower',
    },
    {
      point: 'Organic Soil Management',
      icon: faLeaf,
      moreInfo: 'Fermented poultry manure, mulching, and composting',
    },
    {
      point: 'Harvesting & Post-Harvest Handling',
      icon: faBoxOpen,
      moreInfo: 'Hand-picking, proper drying and quality control',
    },
  ];

  const projectOutComesData = [
    'Up to 100 bags of coffee per season',
    'Regenerated soil health',
    'Strong market demand',
  ];
  return (
    <main className="flex flex-col gap-15 bg-white">
      <HeaderBanner
        src={coffeeHeroImage}
        page="Coffee Project"
        pageHeading="From soil to cup &#8212; profitable, organic, and sustainable"
      />
      <div className="flex flex-col gap-20 p-5 md:px-20 w-full">
        <section className="flex flex-col gap-4 md:gap-10 md:flex-row">
          <Image
            src={coffeeImage}
            alt="Image of a young coffee plant surrounded by poultry manure "
            className="w-full md:w-1/2 h-auto rounded-md md:h-150 shadow-md"
          />
          <Motion direction="right">
            <div className="flex flex-col  gap-2.55 md:gap-3.5 tracking-wider leading-loose ">
              <h1 className="flex text-slate-700 font-bold justify-self-start tracking-widest text-2xl leading-loose md:text-5xl ">
                Project Overview
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold"></h1>
              <p className="tracking-wider  leading-relaxed md:leading-10 text-gray-700 text-sm md:text-[15px]">
                Our coffee project demonstrates how organic, irrigated, and well
                managed coffee farming can generate consistent income while
                restoring soil health and supporting rural livelihoods.
              </p>
              <p className="tracking-wider  leading-relaxed md:leading-10 text-gray-700 text-sm md:text-[15px]">
                According to
                <Link
                  href={
                    'https://www.farmafrica.org/our-work/specific-expertise/sustainable-coffee-production/'
                  }
                  className="text-primaryGreen mx-2"
                >
                  Farm Africa,
                </Link>
                many coffee farmers in Eastern Africa live in poverty despite
                the crop's profit-making potential.They lack the tools and
                training needed to grow enough coffee and sell it for a fair
                price. Additionally, climate change and unpredictable prices add
                further pressure.
              </p>

              <p className="tracking-wider  leading-relaxed md:leading-10 text-gray-700 text-sm md:text-[15px]">
                Our farming approach not only enhances the flavor and aroma of
                the coffee beans but also, eliminates the need and cost for
                chemical fertiliser inputs, while producing high-yielding strong
                resilient coffee plants.
              </p>
            </div>
          </Motion>
        </section>
        <div className="flex flex-col p-4 md:p-10 md:px-24 shadow-lg rounded-lg gap-3 md:gap-5 bg-stone-100">
          <Motion direction="zoom">
            <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[28px] md:text-5xl gap-3.5">
              <GiCoffeeBeans />
              <span> Why Robusta Coffee?</span>
            </h2>
          </Motion>
          <Motion direction="down">
            <div className="flex flex-col gap-3">
              <p className="tracking-wider  leading-relaxed md:leading-10 text-gray-700 text-sm md:text-[16px]">
                We specialise in Robusta coffee
                <i className="ml-2 underline">(Coffea </i>
                <i className="mx-2 underline">canephora)</i>
                because it thrives in tropical climates at low altitudes,
                requiring temperatures of 18-27 degrees celsius and
                well-deistributed rainfall annually.
              </p>

              <p className="tracking-wider  leading-relaxed md:leading-10 text-gray-700 text-sm md:text-[16px]">
                The variety is more resilient to climate changes, has lower
                acidity, a higher caffeine content, and offers a distinct bold
                flavor profile that appeals to a wide range of consumers.
              </p>
            </div>
          </Motion>
        </div>
        <div className="relative mt-5 md:mt-9 w-full h-87.5 md:h-140 bg-amber-200">
          <Image
            src={wayOfFarmingImage}
            alt="image of a banana-coffee intercropped garden"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-5 md:px-16 gap-4 md:gap-8 text-center text-white">
            <h2 className=" tracking-widest p-3 text-slate-200 md:p-5 justify-center font-bold text-[28px] md:text-6xl">
              Our way of farming
            </h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {featuresSectionData.map(({ point, icon, moreInfo }, index) => {
                return (
                  <Motion direction="up" key={index}>
                    <div className="flex flex-col gap-2.5 shadow-lg rounded-lg py-2 px-3 md:px-8 h-40 justify-center items-center border-b-3 bg-white border-primaryGreen hover:scale-105">
                      <div className="flex flex-row-reverse items-center gap-2.5 p-2">
                        <h3 className="font-semibold text-xl tracking-widest text-slate-700">
                          {point}
                        </h3>
                        <FontAwesomeIcon
                          icon={icon}
                          size="2xl"
                          className="flex self-start text-slate-700"
                        />
                      </div>
                      <p className="tracking-wider leading-loose w-[80%] text-gray-600">
                        {moreInfo}
                      </p>
                    </div>
                  </Motion>
                );
              })}
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-3 bg-gray-100 p-6 md:p-10 rounded-b-xl tracking-wider leading-loose">
          <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[28px] md:text-5xl gap-3.5 md:gap-6">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              size="lg"
              className="animate-pulse text-primaryGreen"
            />
            <span>What you can expect</span>
          </h2>
          {projectOutComesData.map((item, index) => {
            return (
              <Motion direction="up" key={index}>
                <div className="flex items-center gap-4 md:gap-6 h-26 px-5 md:px-14 shadow-sm rounded-b-md">
                  <FontAwesomeIcon
                    icon={faHandPointRight}
                    size="xl"
                    color="#96CA2D"
                    className="animate-bounce"
                  />
                  <span className="text-gray-600 text-[14px] md:text-[18px]">
                    {item}
                  </span>
                </div>
              </Motion>
            );
          })}
        </section>
        <div className="flex flex-col gap-3 md:gap-6 justify-center items-center text-stone-600 mb-5 md:mb-10">
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
      </div>
    </main>
  );
};

export default CoffeeProject;
