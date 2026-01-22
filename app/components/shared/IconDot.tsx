import React from 'react';

function IconDot({
  icon,
  containerDimensions,
  circleDimensions,
  iconSize,
}: {
  icon: any;
  containerDimensions?: string;
  circleDimensions?: string;
  iconSize: string;
}) {
  return (
    <div
      className={`flex justify-center items-center  relative ${containerDimensions} text-slate-800 bg-slate-100 rounded-full`}
    >
      <span className={`${iconSize} z-10`}>{icon}</span>
      <span
        className={`absolute ${circleDimensions} bg-primary mt-8 -mr-8 rounded-full`}
      />
    </div>
  );
}

export default IconDot;
