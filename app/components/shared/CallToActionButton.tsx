import Link from 'next/link';
import React from 'react';

type CallToActionButtonProps = {
  callToAction: string;
};

const CallToActionButton = ({ callToAction }: CallToActionButtonProps) => {
  return (
    <button className='flex px-2.5 md:px-2 py-2 md:py-2.5 w-5 bg-primaryBrown hover:bg-[#6E7271]  text-black hover:text-white rounded-full'>
      <Link href='/app/projects'>{callToAction}</Link>
    </button>
  );
};

export default CallToActionButton;
