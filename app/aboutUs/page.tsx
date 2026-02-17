'use client';

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowTrendUp,
  faGears,
  faGraduationCap,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import familyFaithImage from '@assets/faithFamily.jpg';
import farmingPhilosophyImage from '@assets/farmingPhilosophy.png';
import proprietorImage from '@assets/lwevuzePortrait.jpg';
import headerBannerImage from '@assets/Sustainable-Agriculture.png';
import WayOfFarmingCard from '../components/page-specific/aboutUs/FarmingPhilosophyCard';
import HeaderBanner from '../components/shared/HeaderBanner';
import ImageBg from '../components/shared/ImageBg';
import Motion from '../components/shared/Motion';
import SectionSmallHeader from '../components/shared/SectionSmallHeader';

const Aboutus = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const farmingPhilosophyData = [
    {
      icon: faGears,
      heading: 'Innovation',
      content: 'Using battery cage systems, CCTV monitoring, and mechanisation',
    },
    {
      icon: faRecycle,
      heading: 'Sustainability',
      content:
        'Recycling poultry waste directly into crop manure, use of corp produce to procure poultry feed',
    },
    {
      icon: faGraduationCap,
      heading: 'Education',
      content:
        'Training and mentoring farmers on advanced agricultural methods',
    },
  ];

  const ourImpactData = [
    {
      point: 'Institutional Partnerships',
      item: 'Working with Caritas Uganda and Uganda Joint Christian Council',
    },
    {
      point: '4000+ Farmers Trained',
      item: 'Across multiple districts through hands-on training',
    },

    {
      point: 'Government Support',
      item: ' Irrigation and mechanisation initiatives',
    },
    {
      point: 'National Recognition',
      item: 'Featured in Daily Monitor and on NTV Uganda',
    },
  ];

  return (
    <main className="flex flex-col gap-10 text-black bg-white">
      <HeaderBanner
        src={headerBannerImage}
        page="About Us"
        pageHeading="Building a legacy of profitable, sustainable farming &mdash; and sharing it. "
      />
      <div className="flex flex-col-reverse gap-10 justify-center md:flex-row md:justify-between md:items-start md:mt-10  bg-slate-50 p-10 sm:w-full mx-auto">
        <div className="flex w-full max-w-[420px]  md:mt-20 ">
          <Motion direction="up">
            <div className="flex flex-col h-102.5 md:h-130 rounded-full group bg-primaryGreen place-self-center ">
              <Image
                src={proprietorImage}
                alt=""
                className="object-cover h-full mt-5 z-10 rounded-full "
                priority
              />
            </div>
          </Motion>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 md:w-[55%]">
          <p className="flex items-center justify-end gap-2 mt-7.5">
            <SectionSmallHeader headingContent="Our Story" />
          </p>
          <p className="tracking-wider md:text-slate-600 text-justify text-[15px] md:text-[16px] leading-loose md:text-right">
            I welcome you to this world of development and competition. I
            believe we were created to make this world a better place, and
            wherever we are, we must work to bring positive change.{' '}
            <span className="flex h-2" />
            Progress requires persistence — if you cannot run, walk; if you
            cannot walk, crawl — but always keep moving. Our local saying,{' '}
            <b>“Enkulakulana ejja lwa mpaka,” </b> reminds us that there is no
            development without persistence and perseverance.
          </p>
          <p className="md:text-right tracking-wider text-justify leading-loose md:text-[16px] md:text-slate-600 text-[15px]">
            Back in school, difficult questions earned more marks than simple
            ones — and life is no different. Without hard work, risk-taking, and
            perseverance, we should not expect meaningful results. If we do not
            create positive change in ourselves and in others, then our
            existence loses its meaning.
          </p>
          <Motion direction="up">
            <p className="md:text-slate-600 text-justify leading-loose tracking-wider text-[15px] md:text-[16px] md:text-right ">
              Strengthen unity. Never be prejudiced. Differences will always
              exist, but when handled well, they can become a source of strength
              rather than division. Unity, humility, and service to others
              strengthen communities, while giving time to others’ benefit
              enriches our own lives. Trust God, avoid comfort zones, work hard,
              and walk your journey with purpose and integrity.
            </p>
          </Motion>
          <i className="font-semibold text-lg md:text-xl tracking-widest text-forestGreen animate-pulse">
            'Together In Development'
          </i>
        </div>
      </div>
      <section className="flex flex-col gap-3 md:gap-10 bg-gray-100 p-6 md:p-10 rounded-b-xl tracking-wider leading-loose">
        <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[28px] md:text-5xl gap-3.5">
          <FontAwesomeIcon icon={faArrowTrendUp} size="lg" />
          <span>Our Legacy & Impact</span>
        </h2>
        <div className="flex flex-col gap-3.5 md:gap-6">
          {ourImpactData.map(({ item, point }, index) => {
            return (
              <Motion direction="left" key={index}>
                <p className="flex items-center gap-4 md:gap-6 md:h-18 p-5 md:px-14 shadow-sm rounded-b-lg ">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    color="#96CA2D"
                    className="animate-bounce"
                  />
                  <p className="text-gray-600 text-[14px] md:text-[18px]">
                    <b>{point} &mdash;</b>
                    {item}
                  </p>
                </p>
              </Motion>
            );
          })}
        </div>
      </section>
      <ImageBg
        src={farmingPhilosophyImage}
        componentHeading="Our Philosophy"
        componentMoreInfo="Every technique taught at the farm is first proven on the farm. We believe farming should be evidence-based, sustainable, profitable, and shared for the benefit of communities."
        alt="Image related to farming philosophy"
        quote='"I practice what I teach"'
      />
      <div className="flex flex-col gap-3.5 md:gap-10 p-10 md:px-20 bg-gray-100">
        <h1 className="flex items-center tracking-widest text-gray-700 font-bold text-[28px] md:text-5xl gap-3.5">
          Our Way of Farming
        </h1>
        <div className="grid md:grid-cols-2 gap-8 md:gap-15">
          {farmingPhilosophyData.map(({ icon, heading, content }, index) => {
            return (
              <Motion direction="up" key={index}>
                {' '}
                <WayOfFarmingCard
                  heading={heading}
                  icon={icon}
                  content={content}
                />
              </Motion>
            );
          })}
        </div>
      </div>
      <section className="relative mb-1 w-full h-87.5 md:h-110">
        <Image
          src={familyFaithImage}
          alt="Image of faith, family and longterm thinking"
          fill
          className="object-fill"
          priority
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-5 md:px-16 gap-4 md:gap-8 text-center text-white">
          <h2 className="font-semibold text-xl tracking-wider md:text-4xl">
            Family, Faith & Long-term Thinking
          </h2>
          <p
            ref={ref}
            className={`text-sm md:text-[17px] max-w-xl text-center leading-loose
              transform transition-all duration-1500 ease-in-out 
              ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
            `}
          >
            The success of the farm is anchored in family commitment,
            faith-driven values, and long-term planning. Every project is
            designed not only to generate income today, but to create lasting
            value for generations to come.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
