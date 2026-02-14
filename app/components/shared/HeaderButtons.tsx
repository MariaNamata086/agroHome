import Link from 'next/link';
// import { usePathname } from 'next/navigation';

function HeaderButtons({ pageName }: { pageName: string }) {
  return (
    <div className="flex items-center gap-5 mt-50 ml-20">
      <Link
        href="/"
        className="flex font-semibold text-[14px] md:text-[16px] text-white hover:text-primaryGreen md:text-forestGreen tracking-widest hover:scale-105"
      >
        Home
      </Link>
      <span className="flex h-1.75 w-1.75 rounded-full bg-primaryGreen" />
      <span className="flex text-[13px] md:text-[15px] font-semibold text-slate-100 md:text-forestGreen tracking-widest cursor-not-allowed">
        {pageName}
      </span>
    </div>
  );
}

export default HeaderButtons;
