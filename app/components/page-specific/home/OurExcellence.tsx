import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import CallToActionButton from '../../shared/CallToActionButton';

const OurExcellence = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center gap-2 md:justify-between">
      <div className="flex w-full md:w-1/2 tracking-wider">
        <h1 className=""></h1>
        <p className=""></p>
        <p className=""></p>
        <CallToActionButton callToAction="Discover More" href="" />
      </div>
      <div className="relative flex flex-col">
        <Image src={} alt="" className="" />
        <div className="flex p-1 -mr-1 absolute z-10 -mb-2 itema-center rounded-l-lg">
          <FontAwesomeIcon icon={} />
          <span className="">Agricultural Leader</span>
        </div>
      </div>
    </section>
  );
};

export default OurExcellence;
