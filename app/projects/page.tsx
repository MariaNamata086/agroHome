import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import headerBannerImage from '@assets/poultryCage2.webp';
import ProjectCard from '../components/page-specific/projects/ProjectCard';
import HeaderBanner from '../components/shared/HeaderBanner';

function OurProjects() {
  const projectsData = [
    {
      projectName: 'Coffee Farming',
      shortDescription:
        'Organic robusta coffee grown using farm nurtured cuttings seedlings and poultry manure ',
      image: '',
      alt: 'picture of coffee farm project',
      href: '/app/projects/coffee',
    },
    {
      projectName: 'Bananas Farming',
      shortDescription:
        'Medium scale cooking bananas farming, interspersed with Juice, Gonja and Ndiizi bananas',
      image: '',
      alt: 'picture of bananas farm project',
      href: '/app/projects/bananas',
    },
    {
      projectName: 'Poultry Production',
      shortDescription:
        'Large-scale layers production using advanced battery cage systems',
      image: '',
      alt: 'picture of poultry house',
      href: '/app/projects/poultry',
    },
    {
      projectName: 'Plantation Forestry',
      shortDescription:
        'Commercial Eucalyptus forestry for pole and timber production',
      image: '',
      alt: 'picture of the eucalptus garden project',
      href: '/app/projects/plantationForestry',
    },
  ];

  return (
    <main className="flex flex-col gap-10 ">
      <HeaderBanner
        page="Our projects"
        pageHeading="Integrated farming systems designed for productivity, sustainability, and farmer education"
        src={headerBannerImage}
      />
      <div className="flex flex-col gap-6 md:gap-10 p-6 md:px-20 tracking-wider leading-loose bg-slate-100">
        <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[14px] md:text-5xl gap-3.5">
          <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" />
          <span>Our Projects</span>
        </h2>
        <p className="flex w-full md:w-[75%] items-center tracking-widest leading-loose font-medium text-center md:ml-30 md:text-xl text-slate-800 justify-center">
          {' '}
          Our projects reflect our commitment to excellence, sustainability, and
          innovation across Uganda's agricultural value chain.
        </p>
        <div className="flex flex-col gap-3">
          {projectsData.map(
            ({ projectName, shortDescription, image, alt, href }, index) => {
              return (
                <ProjectCard
                  key={index}
                  projectName={projectName}
                  shortDescription={shortDescription}
                  alt={alt}
                  image={image}
                  href={href}
                />
              );
            },
          )}
        </div>
      </div>
    </main>
  );
}

export default OurProjects;
