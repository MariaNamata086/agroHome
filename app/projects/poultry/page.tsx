import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import HeaderBanner from '@/app/components/shared/HeaderBanner';

function PoultryProject() {
  const whyBatteryCageSysytemData = [
    {
      advantage: 'Clean Feeding',
      icon: 'any',
      moreInfo:
        'There is no mixing of feed with droppings, which would result into spread of diseases.',
    },
    {
      advantage: '24/7 Water Access',
      icon: 'water drop',
      moreInfo:
        'Automated piped water system ensures round the clock hydration, especially crucial for peak and clean egg production',
    },
    {
      advantage: 'Cleaner Eggs',
      icon: 'egg',
      moreInfo:
        'Egges roll away from birds immediately after laying, reducing breakage, egg eating & surface contamination',
    },
    {
      advantage: 'Disease Control',
      icon: 'shield',
      moreInfo: 'Reduced bird contact with waste minimises disease spread.',
    },
  ];

  const managementData = [
    'CCTV surveillance for round-the-clock monitoring',
    'Strucutred feeding and lighting programs',
    'Timely egg collection',
  ];

  return (
    <main className="flex flex-col p-20">
      <HeaderBanner page="Poultry Project" pageHeading="ENTERPRISE" />
      {/* if header banner will not be necessary, we'll also remove the immediately following div container */}
      <div className="flex flex-col bg-white gap-20">
        <div className="relative h-auto flex ">
          <div className="">
            <Image
              src={}
              alt="picture of interiror of battery cage system"
              style={}
              priority
            />
          </div>
          <div className="absolute tracking-wider gap-10 text-white bg-black/20 flex flex-col z-10">
            <h1 className="">Advanced Layer Poultry Farming</h1>
            <p className="">
              Precision, hygiene, and productivity at commercial scale
            </p>
          </div>
        </div>
        <div className="flexex-col gap-6 md:gap-10">
          <h1 className="">Project Overview</h1>
          <p>
            {' '}
            Our poultry project is the backbone of the farm. We specialize
            primarily in <b>layer birds,</b>reared using a{' '}
            <b>modern battery cage system</b>- a technology-driven approach that
            ensures efficiency, top-notch bird welfare and superior egg quality.
          </p>
          <p className="mt-3">
            This system allows us to manage over <b>10,000 birds</b> with
            precision, consistency, and strict hygiene standards
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="">Why Battery Cage Sysytem?</h2>
          <div className="grid md:grid-col-2">
            {whyBatteryCageSysytemData.map(
              ({ advantage, icon, moreInfo }, index) => {
                return (
                  <div className="flex flex-col gap-4" key={index}>
                    <div className="flex items-center gap-1">
                      <h3 className="">{advantage}</h3>
                      <FontAwesomeIcon icon={icon} size="" />
                    </div>
                    <p className="tracking-wider leading-loose">{moreInfo}</p>
                  </div>
                );
              },
            )}
          </div>
        </div>
        {/* let's include the chicks brooding stage, and possibly a chronological order of the journey of the chicks from day one when they arrive at the firm to the point they enter the cages at 3 & 1/2 months */}
        <div className="relative h-auto flex ">
          <div className="">
            <Image
              src={}
              alt="picture of interiror of battery cage system"
              style={}
              priority
            />
          </div>
          <div className="absolute tracking-wider gap-10 text-white bg-black/20 flex flex-col z-10">
            <h1 className="">Technology & Management</h1>
            <ul className="gap-3 list-disc">
              {managementData.map((item, index) => {
                return (
                  <li className="" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PoultryProject;
