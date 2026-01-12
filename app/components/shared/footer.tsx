import React from 'react';
import footerBackground from '@/public/poultryCage2.webp';
import Image from 'next/image';
import Link from 'next/link';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
interface FooterContactDetails {
  icon: IconDefinition;
  contactInfo: string;
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface FooterContactDetails {
  icon: IconDefinition;
  contactInfo: string;
}

export default function Footer() {
  const footerLinksData = [
    {
      name: 'About Us',
      href: '/app/aboutUs',
    },
    { name: 'Our Projects', href: '/app/projects' },
    { name: 'Contact us', href: '/app/contact-us' },
    { name: 'News', href: '/app/news' },
  ];

  const footerContactDetails: FooterContactDetails[] = [
    { icon: faLocationPin, contactInfo: '' },
    { icon: faEnvelope, contactInfo: 'hello@stjosephfarm.com' },
    { icon: faPhone, contactInfo: '+256772628600' },
  ];

  return (
    <div className='relative flex flex-col h-auto bg-local'>
      <Image
        src={footerBackground}
        alt='footer background image'
        className='absolute top-0 left-0 object-cover h-full w-full '
      />
      <div className='relative flex flex-col h-full z-10 bg-black/30 text-white  p-2 md:p-4 justify-center md:justify-between tracking-wider'>
        <div className='flex flex-col md:flex-row md:items-center'>
          <section className='flex flex-col gap-2 '>
            <div className='flex items-center gap-2 md:gap-3'>
              {/* logo */}
              <span className='text-2xl'>
                StJoseph<b>Farms</b>
              </span>
            </div>
            <p className=''>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </p>
            <div className='flex flex-col gap-1.5'>
              {footerContactDetails.map(({ icon, contactInfo }, index) => {
                return (
                  <div className='flex items-center gap-1' key={index}>
                    {
                      <>
                        <FontAwesomeIcon icon={icon} className='' />
                        <span className=''>{contactInfo}</span>
                      </>
                    }
                  </div>
                );
              })}
            </div>
          </section>
          <div className='tracking-wider text-left text-[11px] leading-relaxed'>
            St Joseph Farm is a commercial farm in Luwero District, Uganda,
            managed by an experienced farmer who integrates poultry, coffee and
            eucalyptus forestry. The operation houses up to 10,000 layer birds
            in advanced battery‑cage systems, supplemented by broilers, and
            converts poultry manure into organic fertilizer for premium Arabica
            coffee plantations. Recent government support provided a maize
            sheller for on‑site feed production. The farm also offers farmer
            education and employs CCTV surveillance. The website will feature
            Home, About Us, Projects (Poultry, Coffee Farming, Plantation
            Forestry), News, and Contact pages, with suggested icons of
            chickens, coffee beans, trees, and surveillance cameras.
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='font-semibold'>Quick Links</h3>
            <div className='flex flex-col gap-1 md:gap-2 align-left'>
              {footerLinksData.map(({ href, name }, index) => {
                return (
                  <Link href={href} key={index} className=''>
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className='h-1 bg-primarygreen md:mt-2' />
        <div className='flex flex-col md:flex-row mb-2 md:justify-between'>
          <Link href={'/app/contact-us'} className='flex md:hidden'>
            {/* icon of phone */}
            <span className=''>Call us today!</span>
          </Link>
          <div className='flex w-full items-center justify-center -mt-5 md:mt-0'>
            Copyright &#169; 2025 &nbsp; StJosephFarms. {''} All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
