import React from 'react';

function SectionSmallHeader({ headingContent }: { headingContent: string }) {
  return (
    <h4 className="flex items-center  text-stone-400 gap-1.5">
      <span className="flex h-1 w-1.5 bg-primaryGreen rounded-full" />
      {headingContent}
    </h4>
  );
}

export default SectionSmallHeader;
