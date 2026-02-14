import Image, { StaticImageData } from 'next/image';
import React from 'react';
import HeaderButtons from './HeaderButtons';
import Motion from './Motion';

function HeaderBanner({
  src,
  page,
  pageHeading,
}: {
  page: string;
  pageHeading: string;
  src: StaticImageData;
}) {
  return (
    <div className=" h-95 md:h-120 w-full relative">
      <div className="z-20 text-slate-800 h-full bg-linear-to-r from-black/90 md:from-white md:via-slate-300/40 via-black/65 to-transparent w-full absolute flex-col gap-10">
        <HeaderButtons pageName={page} />
        <Motion direction="up">
          <div className="flex items-center ">
            <span className="bg-primaryGreen h-2 w-2 rounded-full mt-2.5 ml-20 mr-3" />

            <span className="mb-7.5 text-lg md:text-[18px] mt-10 text-slate-100 tracking-wider md:tracking-widest md:text-forestGreen font-semibold leading-loose ">
              {pageHeading}
            </span>
          </div>
        </Motion>
      </div>
      <Image
        src={src}
        alt="Image of sustainable agriculture"
        className="flex h-full w-full"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}

export default HeaderBanner;
