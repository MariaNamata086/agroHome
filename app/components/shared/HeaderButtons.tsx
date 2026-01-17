import Link from 'next/link';
// import { usePathname } from 'next/navigation';

function HeaderButtons({ pageName }: { pageName: string }) {
  return (
    <div className="flex items-center gap-5 mt-50 ml-20">
      <Link
        href="/"
        className="flex text-[11px] md:text-[15px] text-black hover:text-primaryGreen"
      >
        Home
      </Link>
      <span className="flex h-1.75 w-1.75 rounded-full bg-primaryGreen" />
      <span className="flex text-[11px] md:text-[15px] text-slate-600 cursor-not-allowed">
        {pageName}
      </span>
    </div>
  );
}

export default HeaderButtons;
