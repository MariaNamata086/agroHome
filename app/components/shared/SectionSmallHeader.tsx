import React from 'react';

function SectionSmallHeader({ headingContent }: { headingContent: string }) {
  return (
    <h4 className="flex items-center font-gochi text-sm  text-gray-600 gap-2">
      <span className="flex h-1 w-8  bg-[#96CA2D] rounded-full" />
      {headingContent}
    </h4>
  );
}

export default SectionSmallHeader;
