import Image from 'next/image';
import React from 'react';
import HeaderButtons from './HeaderButtons';

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
    <div className="h-87.5 md:h-150 w-full relative">
      <Image
        src={heroImage}
        alt="Project Hero Image"
        className="h-full w-full"
        style={{ objectFit: 'fill' }}
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-white via-slate-300/40 to-transparent flex flex-col justify-center items-left p-10 text-center text-slate-800">
        <HeaderButtons pageName={projectHeading} />
        <div className="flex items-center">
          <span className="bg-primaryGreen h-2 w-2 rounded-full mt-2.5 ml-20 mr-3" />
          <span className="mb-7.5 text-md md:text-[18px] mt-10 text-forestGreen tracking-wider font-semibold leading-loose">
            {projectTagline}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeroSection;
