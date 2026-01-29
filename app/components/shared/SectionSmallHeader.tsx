import React from 'react';

function SectionSmallHeader({ headingContent }: { headingContent: string }) {
  return (
    <h4 className="flex items-center font-gochi text-sm tracking-widest text-slate-600 gap-2">
      <span className="flex h-1 w-14  bg-primaryGreen rounded-full" />
      {headingContent}
    </h4>
  );
}

export default SectionSmallHeader;
