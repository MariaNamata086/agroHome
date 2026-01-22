import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faPhone,
  faLocationPin,
  faPhoneVolume,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '@assets/logo.svg';

import footerBackground from '@/public/poultryCage2.webp';

interface FooterContactDetails {
  icon: IconDefinition;
  contactInfo: string;
}

export default function Footer() {
  const footerPagesLinksData = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/app/aboutUs' },
    { name: 'Our Projects', href: '/app/projects' },
    { name: 'Contact us', href: '/app/contact-us' },
    { name: 'News', href: '/app/news' },
  ];

  const footerProjectsPagesLinksData = [
    { name: 'Poultry Farming', href: '/app/projects/poultry' },
    { name: 'Coffee Farming', href: '/app/projects/coffee' },
    { name: 'Bananas', href: '/app/projects/bananas' },
    { name: 'Plantation Forestry', href: '/app/projects/plantationForestry' },
  ];

  const footerContactDetails: FooterContactDetails[] = [
    { icon: faLocationPin, contactInfo: '' },
    { icon: faEnvelope, contactInfo: 'hello@stjosephfarm.com' },
    { icon: faPhone, contactInfo: '+256772628600' },
  ];

  return (
    <div className="relative flex flex-col h-auto bg-local">
      <Image
        src={footerBackground}
        alt="footer background image"
        className="absolute top-0 left-0 object-cover h-full w-full "
      />
      <div className="relative flex flex-col h-full z-10 bg-black/30 text-white  p-2 md:p-4 justify-center md:justify-between tracking-wider">
        <div className="flex flex-col md:flex-row md:items-center">
          <section className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={Logo}
                alt="StJosephFarms Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl">
                StJoseph<b>Farms</b>
              </span>
            </div>
            <p className="">Enkulakulana Ejja Lwampaka </p>
            <div className="flex flex-col gap-1.5">
              {footerContactDetails.map(({ icon, contactInfo }, index) => {
                return (
                  <div className="flex items-center gap-1" key={index}>
                    {
                      <>
                        <FontAwesomeIcon icon={icon} className="" />
                        <span className="">{contactInfo}</span>
                      </>
                    }
                  </div>
                );
              })}
            </div>
          </section>
          <div className="tracking-wider text-left text-[11px] leading-relaxed">
            St. Joseph Ntangala Agricultural Training Centre is a model
            integrated farm and training hub in Luweero District, Uganda,
            dedicated to advancing modern, sustainable, and profitable
            agriculture while empowering farmers and communities.
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-1 md:gap-2 align-left">
              {footerPagesLinksData.map(({ href, name }, index) => {
                return (
                  <Link href={href} key={index} className="">
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Our Projects</h3>
            <div className="flex flex-col gap-1 md:gap-2 align-left">
              {footerProjectsPagesLinksData.map(({ href, name }, index) => {
                return (
                  <Link href={href} key={index} className="">
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6.25">
            <span className="text-md lg:text-[15px] tracking-wider font-semibold">
              Contact Us
            </span>
            <p className="flex gap-3 items-center justify-around w-[60%]">
              <FontAwesomeIcon icon={faMapLocationDot} fontSize={15} />
              <span className="flex text-[11.5px]">
                Ntangala Village, Katikamu Sub-county <br /> Luweero District,
                Uganda
              </span>
            </p>
            <p className="flex gap-3 items-center  w-[60%]">
              <FontAwesomeIcon icon={faPhoneVolume} fontSize={15} />
              <span className="flex text-[11.5px]">
                +256772628600 | +256741327070
              </span>
            </p>
            <p className="flex gap-3 items-center w-[60%]">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="flex text-[11.5px]">
                stjosephfarms086@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="h-1 bg-primarygreen md:mt-2" />
        <div className="flex flex-col md:flex-row mb-2 md:justify-between">
          <Link href={'/app/contact-us'} className="flex md:hidden">
            {/* icon of phone */}
            <span className="">Call us today!</span>
          </Link>
          <div className="flex w-full items-center justify-center -mt-5 md:mt-0">
            &#169; 2026 &nbsp; StJoseph Farms. {''} All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
