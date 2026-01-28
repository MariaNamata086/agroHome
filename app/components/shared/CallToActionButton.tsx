import Link from 'next/link';
import React from 'react';

type CallToActionButtonProps = {
  callToAction: string;
  href: string;
};

const CallToActionButton = ({
  callToAction,
  href,
}: CallToActionButtonProps) => {
  return (
    <button className="flex p-2.5 bg-amber-300 w-45 md:px-6.5 py-2 md:py-4  bg-primaryBrown hover:bg-gray-700  text-black hover:text-white rounded-full">
      <Link
        href={href}
        className="flex text-sm font-semibold justify-center  items-center"
      >
        {callToAction}
      </Link>
    </button>
  );
};

export default CallToActionButton;
