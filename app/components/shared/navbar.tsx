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
import logo from '@assets/logo3.png';

function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);
  const [mobileProjectsVisible, setMobileProjectsVisible] =
    useState<boolean>(false);

  const [projectsVisible, setProjectsVisible] = useState<boolean>(false);

  const pathName = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutUs' },
    { name: 'In the Media', href: '/news' },
  ];
  return (
    <nav className="flex justify-between items-center align-center sticky top-0 z-50 bg-white md:px-10 md:py-4 h-30 shadow-md text-black">
      <div className="flex gap-2 ml-4 md:ml-0 md:gap-1 items-center">
        <Link href="/" className="w-25 rounded-full ">
          <Image
            src={logo}
            alt="company logo"
            style={{ objectFit: 'cover' }}
            className="rounded-full bg-white"
          />
        </Link>
        <div className="flex flex-col justify-start ">
          <span className="text-lg md:text-[22px] md:text-slate-800 tracking-wider">
            St Joseph
          </span>
          <span className="text-lg md:text-[22px] md:text-slate-800 font-semibold tracking-wider">
            Agricultural Farm
          </span>
        </div>
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
        <Link
          href={'/contactUs'}
          className="flex items-center text-black gap-2 hover:text-white justify-around p-3.5 rounded-full w-[1/4] bg-amber-300 hover:bg-stone-500"
        >
          <span className="text-sm font-semibold">Contact Us</span>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </Link>
      </div>

      <div className="flex flex-col relative md:hidden  py-3  ">
        <button
          type="button"
          className="flex text-3xl place-self-center px-10"
          onClick={() => {
            setMobileMenuVisible(!mobileMenuVisible);
          }}
        >
          {mobileMenuVisible ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-gray-800 hover:text-primaryGreen
             "
              size="sm"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="text-gray-800 hover:text-primaryGreen"
            />
          )}
        </button>
        <div
          className={`${
            mobileMenuVisible ? 'flex' : 'hidden'
          } flex-col gap-5 bg-white absolute top-full left-0 w-50 -ml-20 mt-3  h-auto text-black p-8 shadow-sm shadow-primaryGreen rounded-lg `}
        >
          <Link
            href={'/'}
            className="flex hover:text-primaryGreen text-slate-700 text-[14px] tracking-widest"
            onClick={() => {
              setMobileMenuVisible(false);
            }}
          >
            Home
          </Link>
          <Link
            href={'/aboutUs'}
            className="flex hover:text-primaryGreen text-slate-700 text-[14px] tracking-widest"
            onClick={() => {
              setMobileMenuVisible(false);
            }}
          >
            About us
          </Link>
          <div className="flex flex-col relative group text-[13px]">
            <div
              className="flex items-center justify-between "
              onClick={() => setMobileProjectsVisible(!mobileProjectsVisible)}
            >
              <button
                type="button"
                className=" hover:text-primaryGreen text-slate-700 text-[14px] text-start"
              >
                Our Projects
              </button>
              <span>
                {mobileProjectsVisible ? <PiCaretUp /> : <PiCaretDown />}
              </span>
            </div>
            <div
              className={`${
                mobileProjectsVisible ? 'flex ' : 'hidden'
              } flex-col w-full py-3 px-4.5 justify-start gap-4 text-[11px] tracking-wider mt-3  bg-slate-100 `}
            >
              <Link
                href={'/projects'}
                className="flex hover:text-primaryGreen text-slate-700"
                onClick={() => {
                  setMobileMenuVisible(false);
                }}
              >
                Projects Overview
              </Link>
              <Link
                href={'/projects/bananasProject'}
                className="flex hover:text-primaryGreen text-slate-700"
                onClick={() => {
                  setMobileMenuVisible(false);
                }}
              >
                Bananas project
              </Link>
              <Link
                href={'/projects/poultryProject'}
                className="flex hover:text-primaryGreen text-slate-700"
                onClick={() => {
                  setMobileMenuVisible(false);
                }}
              >
                Poultry project
              </Link>
              <Link
                href={'/projects/coffeeProject'}
                className="flex hover:text-primaryGreen text-slate-700"
                onClick={() => {
                  setMobileMenuVisible(false);
                }}
              >
                Coffee project
              </Link>
            </div>
          </div>
          <Link
            href={'/news'}
            className="flex hover:text-primaryGreen text-[14px] text-slate-700"
            onClick={() => {
              setMobileMenuVisible(false);
            }}
          >
            Read about Us
          </Link>
          <Link
            href={'/contactUs'}
            className="flex hover:text-primaryGreen text-[14px] text-slate-700"
            onClick={() => {
              setMobileMenuVisible(false);
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
