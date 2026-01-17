import Image from 'next/image';
import React from 'react';
import HeaderButtons from './HeaderButtons';

function HeaderBanner({
  page,
  pageHeading,
}: {
  page: string;
  pageHeading: string;
}) {
  return (
    <div className=" h-87.5 md:h-100 w-full relative">
      <div className="z-20 text-slate-800 h-full bg-slate-400/20 w-full absolute flex-col gap-10">
        <HeaderButtons pageName={page} />
        <div className="flex items-center">
          <span className="bg-primary h-2 w-2 rounded-full mt-2.5 ml-20 mr-3" />
          <span className="mb-7.5 text-md md:text-xl mt-10">{pageHeading}</span>
        </div>
      </div>
      <Image
        src={}
        alt="Image of sustainable agriculture"
        className="flex h-full w-full"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

export default HeaderBanner;
