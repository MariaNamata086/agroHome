import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import bananasProjectImage from '@assets/bananasHero.webp';
import coffeeProjectImage from '@assets/coffeeHarvesting.jpg';
import poultryProjectImage from '@assets/deeplitterHouse.jpeg';
import plantationForestryImage from '@assets/eucalyptusTrees.jpg';
import headerBannerImage from '@assets/poultryCage2.webp';
import ProjectCard from '../components/page-specific/projects/ProjectCard';
import HeaderBanner from '../components/shared/HeaderBanner';
import Motion from '../components/shared/Motion';
import ProjectHeroSection from '../components/shared/ProjectHeroSection';

function OurProjects() {
  const projectsData = [
    {
      projectName: 'Coffee Farming',
      shortDescription:
        'Organic Robusta coffee grown using farm nurtured cutting seedlings and poultry manure ',
      image: coffeeProjectImage,
      alt: 'picture of coffee farm project',
      href: '/projects/coffeeProject',
    },
    {
      projectName: 'Bananas Farming',
      shortDescription:
        'Medium scale cooking bananas farming, interspersed with Juice, Gonja and Ndiizi bananas',
      image: bananasProjectImage,
      alt: 'picture of bananas farm project',
      href: '/projects/bananasProject',
    },
    {
      projectName: 'Poultry Production',
      shortDescription:
        'Large-scale Layer poultry production using both deep litter and advanced battery cage systems',
      image: poultryProjectImage,
      alt: 'picture of battery poultry house',
      href: '/projects/poultryProject',
    },
    {
      projectName: 'Plantation Forestry',
      shortDescription:
        'Commercial Eucalyptus forestry for pole and timber production',
      image: plantationForestryImage,
      alt: 'picture of the eucalptus garden project',
      href: '/projects/platationForestry',
    },
  ];

  return (
    <main className="flex flex-col gap-10 ">
      <div className="hidden md:flex">
        <HeaderBanner
          page="Our projects"
          pageHeading="Integrated farming systems designed for productivity, sustainability, and farmer education"
          src={headerBannerImage}
        />
      </div>
      <div className="flex md:hidden">
        <ProjectHeroSection
          heroImage={headerBannerImage}
          projectHeading="Our projects"
          projectTagline="Integrated farming systems designed for productivity and sustainability"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-10 p-6 md:px-20 tracking-wider leading-loose bg-slate-100">
        <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center gap-3.5">
          <FontAwesomeIcon icon={faScrewdriverWrench} size="2xl" />
          <span className="font-bold text-[35px] md:text-5xl ">
            Our Projects
          </span>
        </h2>
        <Motion direction="right">
          <p className="flex w-full md:w-[75%] items-center tracking-widest leading-loose font-medium text-center md:ml-30 md:text-xl text-slate-800 justify-center">
            {' '}
            Our projects reflect our commitment to excellence, sustainability,
            and innovation across Uganda's agricultural value chain.
          </p>
        </Motion>
        <div className="grid md:grid-cols-2 p-3 gap-12 md:gap-8">
          {projectsData.map(
            ({ projectName, shortDescription, image, alt, href }, index) => {
              return (
                <Motion direction="up" key={index}>
                  <ProjectCard
                    projectName={projectName}
                    shortDescription={shortDescription}
                    alt={alt}
                    image={image}
                    href={href}
                  />
                </Motion>
              );
            },
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-6 justify-center items-center text-stone-600 mb-5 px-10 md:mb-10">
        <p className="flext font-semibold text-center leading-loose text-md md:text-lg ">
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
    </main>
  );
}

export default OurProjects;
