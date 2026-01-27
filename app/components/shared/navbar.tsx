'useClient';

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
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [mobileProjectsVisible, setMobileProjectsVisible] =
    useState<boolean>(false);

  const pathName = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact us', href: '/contactUs' },
    { name: 'News', href: '/news' },
  ];
  return (
    <nav className="flex justify-between align-center bg-white px-2 py-4 h-auto shadow-sm">
      <div className="flex gap-1 items-center">
        <Link
          href="/"
          className="w-22.5 h-22 mt-5 ml-10 bg-white rounded-full mb-2"
        >
          <Image
            src={logo}
            alt="company logo"
            style={{ objectFit: 'cover' }}
            className="rounded-full"
          />
        </Link>
        <span className="">
          St Joseph <b>Farms</b>
        </span>
      </div>
      <div className="hidden md:flex justify-between items-center">
        <div className=" items-center justify-between">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive ? 'text-emerald-400' : 'black'} text-sm`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <Link
          href={'/app/contact-us'}
          className="flex items-center text-black hover:text-white justify-around p-1 rounded-full w-[1/4] by-amber-300 hover:bg-stone-500"
        >
          <span className="">Get in touch</span>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </Link>
      </div>
      <div className="flex md:hidden flex-col gap-2.5 p-2 ">
        <button
          type="button"
          className="text-4xl px-10"
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          {menuVisible ? (
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
            menuVisible ? 'flex' : 'hidden'
          } flex-col gap-5 bg-white shadow-md shadow-sky-200 w-[65%] self-end h-auto text-black p-8 rounded-xl -mt-5`}
        >
          <Link href={'/app/aboutUs'} className="flex hover:text-primaryGreen">
            About us
          </Link>
          <div className="flex flex-col font-medium relative group text-[13px]">
            <div
              className="flex items-center justify-between "
              onClick={() => setMobileProjectsVisible(!mobileProjectsVisible)}
            >
              <button type="button" className=" hover:text-primary text-start">
                Our Services
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
                href={'/app/projects/bananas'}
                className="flex hover:text-primaryGreen"
              >
                Bananas project
              </Link>
              <Link
                href={'/app/projects/poultry'}
                className="flex hover:text-primaryGreen"
              >
                Poulrty project
              </Link>
              <Link
                href={'/app/projects/coffee'}
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
