'use client';

import {
  faBars,
  faEnvelopeOpenText,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PiCaretUp, PiCaretDown } from 'react-icons/pi';
import logo from '@assets/logo.svg';

function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);
  const [mobileProjectsVisible, setMobileProjectsVisible] =
    useState<boolean>(false);

  const [projectsVisible, setProjectsVisible] = useState<boolean>(false);

  const pathName = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutUs' },
    { name: 'Contact us', href: '/contactUs' },
    { name: 'News', href: '/news' },
  ];
  return (
    <nav className="flex justify-between align-center sticky top-0 z-50 bg-white px-10 py-4 h-30 shadow-md text-black">
      <div className="flex gap-1 items-center">
        <Link href="/" className="w-36 rounded-full ">
          <Image
            src={logo}
            alt="company logo"
            style={{ objectFit: 'cover' }}
            className="rounded-full bg-white"
          />
        </Link>
        <span className="text-x md:text-[20px] tracking-wider">
          St Joseph <b>Farms</b>
        </span>
      </div>
      <div className="hidden md:flex justify-between gap-10 items-center">
        <div className=" flex items-center justify-between gap-12 font-semibold ">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;

            return (
              <Link
                onMouseEnter={() => {
                  setProjectsVisible(false);
                }}
                key={link.href}
                href={link.href}
                className={`${isActive ? 'text-primaryGreen' : 'text-slate-700'} text-md hover:text-primaryGreen`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col font-medium relative group">
          <Link
            href={'/projects'}
            className={`${pathName === '/projects' ? 'text-primaryGreen' : 'text-slate-700'} font-semibold hover:text-primaryGreen`}
            onMouseEnter={() => {
              setProjectsVisible(true);
            }}
          >
            Our Projects
          </Link>
          <div
            className={`${
              projectsVisible ? 'flex ' : 'hidden'
            } bg-white absolute  justify-center items-center  w-50 h-50  flex-col -ml-10 gap-4 text-slate-700 text-[14px] tracking-wider mt-10 rounded-lg shadow-2xl`}
            onMouseLeave={() => {
              setProjectsVisible(false);
            }}
          >
            <Link
              className={
                ' hover:bg-primaryGreen w-full text-center p-2 hover:text-white py-2.5'
              }
              href="/projects/coffeeProject"
            >
              Coffee Farming
            </Link>
            <Link
              className={
                ' hover:bg-primaryGreen w-full text-center p-2 py-2.5 hover:text-white'
              }
              href="/projects/poultryProject"
            >
              Poultry Farming
            </Link>
            <Link
              className={
                ' hover:bg-primaryGreen w-full text-center p-2 hover:text-white py-2.5'
              }
              href="/projects/bananasProject"
            >
              Bananas project
            </Link>
          </div>
        </div>
        {/* our projects */}
        <Link
          href={'/app/contact-us'}
          className="flex items-center text-black gap-2 hover:text-white justify-around p-3.5 rounded-full w-[1/4] bg-amber-300 hover:bg-stone-500"
        >
          <span className="text-sm">Get in touch</span>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </Link>
      </div>

      <div className="flex md:hidden flex-col gap-3 p-2.5 ">
        <button
          type="button"
          className="text-4xl px-10"
          onClick={() => {
            setMobileMenuVisible(!mobileMenuVisible);
          }}
        >
          {mobileMenuVisible ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-gray-700 hover:text-primaryGreen"
            />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <div
          className={`${
            mobileMenuVisible ? 'flex' : 'hidden'
          } flex-col gap-5 bg-white shadow-md shadow-sky-200 w-[65%] self-end h-auto text-black p-8 rounded-xl -mt-5`}
        >
          <Link href={'/aboutUs'} className="flex hover:text-primaryGreen">
            About us
          </Link>
          <div className="flex flex-col font-medium relative group text-[13px]">
            <div
              className="flex items-center justify-between "
              onClick={() => setMobileProjectsVisible(!mobileProjectsVisible)}
            >
              <button type="button" className=" hover:text-primary text-start">
                Projects
              </button>
              <span>
                {mobileProjectsVisible ? <PiCaretUp /> : <PiCaretDown />}
              </span>
            </div>
            <div
              className={`${
                mobileProjectsVisible ? 'flex ' : 'hidden'
              } flex-col w-full p-3 justify-start gap-4 text-[11px] tracking-wider mt-3 bg-slate-100 `}
            >
              <Link
                href={'/app/projects'}
                className="flex hover:text-primaryGreen"
              >
                Our Projects
              </Link>
              <Link
                href={'/app/projects/bananasProject'}
                className="flex hover:text-primaryGreen"
              >
                Bananas project
              </Link>
              <Link
                href={'/app/projects/poultryProject'}
                className="flex hover:text-primaryGreen"
              >
                Poultry project
              </Link>
              <Link
                href={'/app/projects/coffeeProject'}
                className="flex hover:text-primaryGreen"
              >
                Coffee project
              </Link>
            </div>
          </div>
          <Link href={'/app/news'} className="flex hover:text-primaryGreen">
            Read about Us
          </Link>
          <Link
            href={'/app/contact-us'}
            className="flex hover:text-primaryGreen"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
