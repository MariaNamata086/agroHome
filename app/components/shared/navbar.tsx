'useClient';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathName = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact us', href: '/contactUs' },
  ];
  return (
    <nav className='flex justify-between align-center bg-white px-2 py-4 h-auto shadow-sm'>
      <div className='flex w-[1/4] justify-between align-center'>
        {/* logo picture */}
        {/* <button ><Link href={'/'}>Logo</Link></button> */}
        <div className='flex gap-1 items-center'>
          <span className=''>
            St Joseph <b>Farms</b>
          </span>
        </div>
        <div className='flex ites-center justify-between'>
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
        <div className='flex items-center text-black hover:text-white justify-around p-1 rounded-full w-[1/4] by-amber-300 hover:bg-stone-500'>
          <span className=''>Get in touch</span>
          {/* messaging icon */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
