'use client';

import Image from 'next/image';
import { GiThreeLeaves } from 'react-icons/gi';
import { useInView } from 'react-intersection-observer';
import heroImage from '@assets/coffeeCherriesBeans.png';
import CallToActionButton from '../../shared/CallToActionButton';

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <section className="flex relative bg-lime-200 h-auto md:h-170 w-full tracking-wider mt-2">
      <Image
        src={heroImage}
        alt="hero image"
        className="h-full w-full object-cover"
        priority
      />
      <div
        ref={ref}
        className="flex h-full items-center px-10 py-4 md:py-10 md:px-20 z-10 absolute bg-linear-to-r from-white via-white/70 to-transparent"
      >
        <div className="relative z-20 h-full flex flex-col md:mt-20 w-full md:w-[55%] gap-10 md:gap-14">
          <div
            className={`flex gap-3 w-1/2  items-center  ${inView ? 'translate-y-8 opacity-100' : '-translate-y-7 opacity-0'} transform transition-transform ease-in duration-1500 delay-0`}
          >
            <GiThreeLeaves color="#96CA2D" size={30} />
            <span className="flex text-[12px] md:text-[15px] font-gochi text-forestGreen tracking-widest">
              Established since 1980
            </span>
          </div>
          <h1
            className={`font-bold text-2xl md:text-5xl text-forestGreen leading-relaxed ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} transform transition-transform ease-in-out duration-1500 delay-0`}
          >
            Growing Food. Training Farmers, Building Legacies
          </h1>
          <p
            className={`text-forestGreen text-[14px] leading-loose md:leading-10 md:text-lg ${inView ? '-translate-y-5 opacity-100' : 'translate-y-6 opacity-0'} transform transition-transform ease-in duration-1500 delay-0`}
          >
            A model farm and training center in Luweero District, Uganda;
            transforming agricluture through innovation, integrity, and impact.
          </p>
          <div className="-mt-12">
            <CallToActionButton
              callToAction="Explore Our Work"
              href="/app/projects"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
