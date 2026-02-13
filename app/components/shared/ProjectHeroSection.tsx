import Image from 'next/image';
import React from 'react';
import HeaderButtons from './HeaderButtons';
import Motion from './Motion';

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
    <div className="h-87.5 md:h-130 w-full relative">
      <Image
        src={heroImage}
        alt="Project Hero Image"
        className="h-full w-full"
        style={{ objectFit: 'fill' }}
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-white via-slate-300/40 to-transparent flex flex-col justify-center items-left px-6 gap-10 w-full text-slate-800 ">
        <HeaderButtons pageName={projectHeading} />
        <Motion direction="up">
          <div className="flex items-start mb-8 md:px-18 gap-3 ">
            <span className="bg-primaryGreen h-2 mt-2.5 w-2 rounded-full" />
            <span className="md:mb-7.5  text-md md:text-[18px] text-forestGreen tracking-wider font-semibold leading-loose">
              {projectTagline}
            </span>
          </div>
        </Motion>
      </div>
    </div>
  );
};

export default ProjectHeroSection;
