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
import footerBackground from '@/public/assets/coffeeBag.jpg';
import Logo from '@assets/logo.svg';

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
    { icon: faLocationPin, contactInfo: 'Katikamu-Luweero' },
    { icon: faEnvelope, contactInfo: 'hello@stjosephfarm.com' },
    { icon: faPhone, contactInfo: '+256772628600' },
  ];

  return (
    <div className="relative flex flex-col mb-2">
      <Image
        src={footerBackground}
        alt="footer background image"
        className="absolute top-0 left-0 object-cover h-full w-full "
      />
      <div className="relative flex flex-col h-full z-10 inset-0 bg-black/60 text-white  p-8 md:px-10 md:py-12 justify-center md:justify-around tracking-wider">
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <section className="flex flex-col md:w-1/3 gap-6 ">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={Logo}
                alt="StJosephFarms Logo"
                className="w-23 h-23 rounded-full"
              />
              <p className="text-2xl font-semibold">
                St Joseph <b>Farms</b>
              </p>
            </div>

            <div className="tracking-wider text-left text-[11px] md:text-[12.5px] leading-loose">
              St. Joseph Ntangala Agricultural Training Centre is a model
              integrated farm and training hub in Luweero District, Uganda,
              dedicated to advancing modern, sustainable, and profitable
              agriculture while empowering farmers and communities.
            </div>
            <p className="text-lime-300 text-xl font-semibold tracking-widest">
              'Enkulakulana Ejja Lwampaka'{' '}
            </p>
            <div className="flex flex-col gap-4">
              {footerContactDetails.map(({ icon, contactInfo }, index) => {
                return (
                  <div className="flex items-center gap-4" key={index}>
                    {
                      <>
                        <FontAwesomeIcon
                          icon={icon}
                          className="text-[#96CA2D]"
                        />
                        <span className="text-[11px] md:text-[12px]">
                          {contactInfo}
                        </span>
                      </>
                    }
                  </div>
                );
              })}
            </div>
          </section>

          <div className="flex flex-col gap-3 md:gap-4 tracking-wider">
            <h3 className="text-md md:text-[15px] font-semibold">
              Quick Links
            </h3>
            <div className="flex flex-col gap-1 md:gap-3 align-left">
              {footerPagesLinksData.map(({ href, name }, index) => {
                return (
                  <Link
                    href={href}
                    key={index}
                    className="hover:text-sky-500 text-[13px] hover:scale-105 hover:underline"
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 ">
            <h3 className="font-semibold tracking-wider text-md md:text-[15px]">
              Our Projects
            </h3>
            <div className="flex flex-col gap-1 md:gap-2 align-left">
              {footerProjectsPagesLinksData.map(({ href, name }, index) => {
                return (
                  <Link
                    href={href}
                    key={index}
                    className="hover:text-sky-500 text-[13px] hover:scale-105 hover:underline"
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-4  justify-center md:-ml-7 items-center">
            <span className="text-md md:text-[15px] tracking-wider font-semibold">
              Contact Us
            </span>
            <p className="flex gap-3 md:gap-5 items-center justify-around">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                fontSize={24}
                className="text-[#96CA2D]"
              />
              <span className="flex text-[13px]">
                Ntangala Village, Katikamu Sub-county <br /> Luweero District,
                Uganda
              </span>
            </p>
            <p className="flex gap-3 items-center ">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                fontSize={24}
                className="text-[#96CA2D]"
              />
              <span className="flex text-[13px]">
                +256772628600 | +256741327070
              </span>
            </p>
            <p className="flex gap-3 items-center ">
              <FontAwesomeIcon
                icon={faEnvelope}
                fontSize={26}
                className="text-[#96CA2D]"
              />
              <span className="flex text-[13px]">
                stjosephfarms086@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="h-px bg-white rounded-full mt-8 z-20" />
        <div className="flex w-full items-center justify-center text-sm text-gray-200 mt-4 -mb-4">
          &#169; 2026 &nbsp; StJoseph Farms. {''} All rights reserved.
        </div>
      </div>
    </div>
  );
}
