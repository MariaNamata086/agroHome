import Image from 'next/image';
import React from 'react';

interface ProjectHeroSectionProps {
  heroImage: any;
  projectHeading: string;
  projectTagline: string;
}

const ProjectHeroSection = ({
  heroImage,
  projectHeading,
  projectTagline,
}: ProjectHeroSectionProps) => {
  return (
    <div className="flex relative">
      <Image
        src={heroImage}
        alt="Project Hero Image"
        className="h-full w-full"
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-left p-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {projectHeading}
        </h1>
        <p className="text-lg md:text-2xl">{projectTagline}</p>
      </div>
    </div>
  );
};

export default ProjectHeroSection;
