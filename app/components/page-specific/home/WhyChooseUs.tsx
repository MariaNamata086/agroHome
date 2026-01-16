import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
  const whatMakesUsStandOutData = [
    'Advanced Farming Systems',
    'Organic nutrient recycling',
    'Government-recognised excellence',
    'CCTV- enabled farm management',
    'Passion for farmer education',
  ];
  return (
    <section className="flex flex-col md:flex-row-reverse md:items-center ">
      <div className="flex tracking-wider flex-col gap-2">
        <h4 className="flex items-center text-stone-400 gap-1.5">
          <span className="flex h-1 w-1.5 bg-primaryGreen rounded-full" />
          What Makes Us Stand Out
        </h4>
        <h1 className="font-bold">
          Why Farmers, Partners & Communities Trust Us
        </h1>
        <div className="flex flex-col gap-2">
          {whatMakesUsStandOutData.map((item, index) => {
            return (
              <div className="flex items-center gap-1" key={index}>
                {/* checked icon */}
                <span className="">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <Image src={} alt="an image showing what makes us stand out" />
    </section>
  );
};

export default WhyChooseUs;
