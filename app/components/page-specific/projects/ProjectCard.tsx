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
    <Link href={href}>
      <div className="flex flex-col gap-2.5 md:gap-5">
        <h1 className="">{projectName}</h1>
        <p className="">{shortDescription}</p>
        <Image src={image} alt={alt} style={{ objectFit: 'cover' }} />{' '}
      </div>
      <CallToActionButton href="href" callToAction="View Project" />
    </Link>
  );
};

export default ProjectCard;
