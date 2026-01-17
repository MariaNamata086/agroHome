import React from 'react';
import ProjectCard from '../components/page-specific/projects/ProjectCard';
import HeaderBanner from '../components/shared/HeaderBanner';

function OurProjects() {
  const projectsData = [
    {
      projectName: 'Poultry Production',
      shortDescription:
        'Large-scale layers production using advanced battery cage systems',
      image: '',
      alt: 'picture of poultry house',
      href: '/app/projects/poultry',
    },
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
      projectName: 'Plantation Forestry',
      shortDescription:
        'Commercial Eucalyptus forestry for pole and timber production',
      image: '',
      alt: 'picture of the eucalptus garden project',
      href: '/app/projects/plantationForestry',
    },
  ];

  return (
    <main className="flex flex-col gap-10 p-20">
      <HeaderBanner page="Our projects" pageHeading="ENTERPRISE" />
      <div className="flex flex-col gap-2 tracking-wider leading-loose">
        <h1 className="">Our Projects</h1>
        <p className="">
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
