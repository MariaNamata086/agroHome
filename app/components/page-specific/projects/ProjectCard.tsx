import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CallToActionButton from '../../shared/CallToActionButton';

interface ProjectCardProps {
  projectName: string;
  shortDescription: string;
  image: any;
  alt: string;
  href: string;
}

const ProjectCard = ({
  projectName,
  shortDescription,
  image,
  alt,
  href,
}: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col justify-center items-center border-b-4 border-b-forestGreen bg-white hover:border-b-primaryGreen gap-3 shadow-md h-120"
    >
      <Image
        src={image}
        alt={alt}
        style={{ objectFit: 'cover' }}
        className="h-[65%] -mt-12"
      />{' '}
      <div className="flex flex-col gap-4 justify-center items-center  w-[90%] z-10 p-2.5 md:px-4 -mt-22 bg-white">
        <h1 className="font-semibold tracking-widest text-lg md:text-[20px] text-stone-800">
          {projectName}
        </h1>
        <p className="text-center text-gray-600 text-[14px] md:text-[16px] tracking-wider">
          {shortDescription}
        </p>
        <CallToActionButton href="href" callToAction="View Project" />
      </div>
    </Link>
  );
};

export default ProjectCard;
