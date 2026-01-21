import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ImageBg from '@/app/components/shared/ImageBg';
import ProjectHeroSection from '@/app/components/shared/ProjectHeroSection';
import coffeeHeroImage from '@/public/assets/coffeeHarvesting.jpg';

const CoffeeProject = () => {
  // const organicbyDesignData = [
  //   {
  //     designPoint: 'Natural Fertilization',
  //     icon: 'Plant',
  //     moreInfo: 'Poultry manure provides nitrogen-rich nutrients',
  //   },
  //   {
  //     designPoint: 'Soil Health Improvement',
  //     icon: 'worm',
  //     moreInfo: 'Composting enhances soil structure and microbial activity',
  //   },
  //   {
  //     designPoint: 'Environmentally Protection',
  //     icon: 'earth shield?',
  //     moreInfo: 'Zero chemical runoff into surrounding land',
  //   },
  //   {
  //     designPoint: 'Alternative Waste Management',
  //     icon: 'recycle',
  //     moreInfo: 'Waste from poultry farms is effectively repurposed',
  //   },
  // ];

  const featuresSectionData = [
    {
      point: 'Land & Crop Profile',
      icon: 'icon',
      moreInfo: 'Coffee intercropped with bananas and shade trees',
    },
    {
      point: 'Irrigation & Infrastructure',
      icon: 'icon',
      moreInfo: 'Solar-powered irrigation systems and high-horsepower',
    },
    {
      point: 'Organic Soil Management',
      icon: 'icon',
      moreInfo: 'Fermented poultry manure, mulching, and composting',
    },
    {
      point: 'Harvesting & Post-Harvest Handling',
      icon: 'icon',
      moreInfo: 'Hand-picking, proper drying and quality control',
    },
  ];

  const projectOutComesData = [
    'Up to 100 bags of coffee per season',
    'Earnings of 40-50 million per season',
    'Regenerated soil health',
    'Strong market demand',
  ];
  return (
    <main className="flex flex-col gap-15 p-20 bg-white">
      <ProjectHeroSection
        heroImage={coffeeHeroImage}
        projectHeading="Organic Coffee Farming"
        projectTagline="From soil to cup -- profitable, organic, and sustainable"
      />
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 md:gap-8 tracking-wider leading-loose">
          <h1 className="text-3xl md:text-5xl font-bold">Project Overview</h1>
          <p className="">
            Our coffee project demonstrates how organic, irrigated, and
            well-managed coffee farming can generate consistent income while
            restoring soil health and supporting rural livelihoods.
          </p>
          {/* <p className="text-lg md:text-xl">
            Our coffee project is dedicated to cultivating{' '}
            <b>high-quality, Robusta Coffee,</b>grown organically using
            nutrient-rich poultry manure from our poultry farming
            operations.{' '}
          </p> */}
          <p className="">
            Our farming approach not only enhances the flavor and aroma of the
            coffee beans but also, eliminates the need and cost for chemical
            fertiliser inputs, while producing strong resilient coffee plants.
          </p>
          <div className="flex flex-col gap-8">
            <h2 className="">Why Robusta Coffee?</h2>
            <p className="">
              We specialise in Robusta coffee because it is more resilient to
              climate changes, has a higher caffeine content, and offers a
              distinct bold flavor profile that appeals to a wide range of
              consumers.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="">Our way of farming</h2>
            <div className="grid md:grid-cols-2"></div>{' '}
            {featuresSectionData.map(({ point, icon, moreInfo }, index) => {
              return (
                <div className="flex flex-col gap-4" key={index}>
                  <div className="flex items-center gap-1">
                    <h3 className="">{point}</h3>
                    <FontAwesomeIcon icon={icon} size="" />
                  </div>
                  <p className="tracking-wider leading-loose">{moreInfo}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <ImageBg
          src=""
          alt="a picture of the project background"
          componentContent={projectOutComesData}
          componentHeading="Project Outcomes"
        />
      </section>
    </main>
  );
};

export default CoffeeProject;
