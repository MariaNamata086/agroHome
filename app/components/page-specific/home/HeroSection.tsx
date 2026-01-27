import Image from 'next/image';
import { GiThreeLeaves } from 'react-icons/gi';
import heroImage from '@assets/coffeeCherriesBeans.jpeg';
import CallToActionButton from '../../shared/CallToActionButton';

const HeroSection = () => {
  return (
    <section className="flex relative h-auto w-full tracking-wider mt-2">
      <Image
        src={heroImage}
        alt="hero image"
        className="h-full w-full object-cover"
        priority
      />
      <div className="flex h-full items-center px-8 md:px-14 py-10 md:py-20 z-10 absolute bg-linear-to-r from-white via-white/70 to-transparent">
        <div className="relative z-20 h-full flex flex-col md:mt-14 w-full md:w-[50%] gap-4 md:gap-6 tracking-wider leading-loose">
          <div className="flex gap-3 w-1/2 items-center">
            <GiThreeLeaves color="#96CA2D" size={30} />
            <span className="flex text-[12px] md:text-[16px] font-gochi text-black ">
              Established since 2005
            </span>
          </div>
          <h1 className="font-bold text-xl md:text-5xl text-[#384D48] leading-relaxed">
            Growing Food. Training Farmers, Building Legacies
          </h1>
          <p className="text-[#384D48] text-md md:text-lg">
            A model farm and training center in Luweero District, Uganda &mdash;
            transforming agricluture through innovation, integrity, and impact.
          </p>
          <CallToActionButton
            callToAction="Explore Our Work"
            href="/app/projects"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
