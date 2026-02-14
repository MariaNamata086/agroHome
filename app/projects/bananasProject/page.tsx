import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import {
  faBasketShopping,
  faCheckDouble,
  faEarthAmerica,
  faRecycle,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { FaClipboardList } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import BananaVarietyCard from '@/app/components/page-specific/bananas/BananaVarietyCard';
import CallToActionButton from '@/app/components/shared/CallToActionButton';
import HeaderBanner from '@/app/components/shared/HeaderBanner';
import ImageBg from '@/app/components/shared/ImageBg';
import Motion from '@/app/components/shared/Motion';
import bananaArtImage from '@assets/bananaArt.jpeg';
import bananasProjectHero from '@assets/bananasHero.webp';
import cavendishBananasImage from '@assets/bogoyaImage.jpg';
import projectImpactImage from '@assets/kivuuvuImage.jpg';
import cookingBananasImage from '@assets/matookeImage.jpg';
import plantainBananasImage from '@assets/plantainImage.jpg';
import projectIntroImage from '@assets/provisionalBanana.jpeg';

function BananaFarmingProject() {
  const bananaVarieties = [
    {
      name: 'Cooking Bananas (Matooke)',
      moreInfo1:
        'We grow multiple high-performing cooking banana varieties adapted to central Uganda’s soils and climate.',
      // moreInfo2:
      //   'These form the backbone of household nutrition and commercial supply',
      image: cookingBananasImage,
    },
    {
      name: 'Dessert Bananas',
      variety1: 'Cavendish (Bogoya)',
      variety2: 'Apple Bananas (Ndiizi)',
      moreInfo1:
        'Sweet, yellow bananas popular for fresh consumption and urban markets. Bogoya and Apple banana (Ndiizi) varieties prized for their unique flavor and high market value.',

      image: cavendishBananasImage,
    },
    {
      name: 'Plantains',
      moreInfo1:
        'Plantains are grown for both domestic use and market sales, offering versatility for roasting, frying, and processing.',

      image: plantainBananasImage,
    },
  ];
  const howWeWorkData = [
    {
      practice: 'Regular Pruning',
      description:
        ': Improves air circulation and reduces pest and disease pressure.',
    },
    {
      practice: 'Desuckering',
      description:
        ': Maintains optimal plant populations and directs energy to fruiting stems.',
    },
    {
      practice: 'Thinning',
      description: ': Ensures adequate spacing and uniform bunch development.',
    },
    {
      practice: 'Proper Spacing',
      description:
        ': Minimizes competition for nutrients, water, and sunlight.',
    },
    {
      practice: 'Responsible Harvesting',
      description:
        ': Ensures maximum fruit quality, shelf life, and market value.',
    },
    {
      practice: 'Quality Propagation Material',
      description: ': Only top-grade, disease-free planting material is used.',
    },
  ];

  const projectImpactData = [
    'Higher yields per acre',
    'Improved fruit quality and consistency',
    'Healthier soils and long-term land productivity',
    'Practical learning opportunities for farmers',
  ];
  const philosophyData = [
    {
      point: 'Productive',
      explanation: '— generating reliable yields and income',
    },
    {
      point: 'Sustainable',
      explanation: '— restoring soil and ecosystems',
    },
    {
      point: 'Educational',
      explanation: '— passing knowledge to the next generation',
    },
    {
      point: 'Resilient ',
      explanation: '— adapting to climate and market challenges',
    },
  ];
  return (
    <main className="flex flex-col gap-15 md:gap-20">
      <HeaderBanner
        page="Bananas Project"
        pageHeading="Growing Nutrition, Income and Food Security Sustainably"
        src={bananasProjectHero}
      />
      <div className="flex flex-col gap-10 md:gap-20 p-5 md:px-20 ">
        <section className="flex flex-col gap-4 -mt-8 md:mt-0  md:flex-row">
          <Motion direction="down">
            <div className="flex flex-col gap-2.5 md:gap-4">
              <h1 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center gap-3.5">
                <GiOpenBook className="text-5xl" />
                <span className="font-bold text-[40px] md:text-5xl ">
                  Our Project Story
                </span>
              </h1>
              <p className="tracking-wider px-3 md:px-0 text-justify leading-8 md:leading-10 text-gray-700 text-[15px] md:text-[16px]">
                At the heart of our farm is a thriving banana enterprise that
                blends indigenous knowledge, modern agronomy, and circular
                farming practices. Our banana gardens supply both local markets
                and household consumption, while serving as a learning ground
                for farmers seeking to improve yields, soil health, and
                profitability.
              </p>
              <p className="tracking-wider px-3 md:px-0 text-justify leading-8 md:leading-10 text-gray-700 text-[15px] md:text-[16px]">
                We cultivate a diverse range of banana varieties, carefully
                selected for nutrition, resilience, market demand, and taste,
                ensuring both commercial success and food security for the
                community.
              </p>
            </div>
          </Motion>
          <Image
            src={projectIntroImage}
            alt="Image of banana plantation"
            className="md:w-1/2 h-120 rounded-md md:h-170 shadow-md"
          />
        </section>
        <div className="flex flex-col gap-2 md:gap-12 p-3 ">
          <Motion direction="right">
            <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[32px] md:text-5xl gap-3.5">
              <FontAwesomeIcon
                icon={faBasketShopping}
                size="xl"
                className="animate-bounce"
              />
              <span className="text-center">Banana Varieties We Grow</span>
            </h2>
          </Motion>
          <div className="grid md:grid-cols-3 gap-5">
            {bananaVarieties.map(({ name, moreInfo1, image }, index) => {
              return (
                <BananaVarietyCard
                  key={index}
                  varietyImage={image}
                  name={name}
                  moreInfo1={moreInfo1}
                  // moreInfo2={moreInfo2}
                />
              );
            })}
          </div>
        </div>
        <section className="flex flex-col gap-3 md:gap-4 bg-slate-100 py-6 px-8 md:px-16">
          <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[38px] md:text-5xl gap-3.5 md:gap-6">
            <FaClipboardList />
            <span>How we work</span>
          </h2>
          <Motion direction="zoom">
            <p className="font-semibold text-md md:text-2xl tracking-widest leading-loose text-center text-slate-700">
              Our banana gardens are maintained through disciplined,
              science-based agricultural practices:
            </p>
          </Motion>
          <div className="flex flex-col gap-4 md:gap-4.5 mb-3 md:mb-8 text-gray-700 ">
            {howWeWorkData.map(({ practice, description }, index) => {
              return (
                <div
                  className="flex items-center gap-3 md:gap-2.5 "
                  key={index}
                >
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    size="lg"
                    className="text-primaryGreen self-start md:self-center animate-bounce"
                  />
                  <p className="flex text-[12px] md:text-md tracking-wider">
                    <b className="hidden md:flex">{practice}</b>
                    {''}
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        <div className="flex flex-col gap-3.5 md:gap-4.5 tracking-wider leading-loose shadow-xl px-8 md:px-16 py-5 -mt-6 ">
          <h2 className="flex items-center tracking-widest p-3 md:p-5 text-gray-700 justify-center font-bold text-[38px] md:text-5xl gap-3.5 md:gap-6">
            <FontAwesomeIcon
              icon={faRecycle}
              color="limegreen"
              size="lg"
              className="animate-spin"
            />
            <span>Sustainability</span>
          </h2>
          <p className="text-[15px] md:text-[17.5px] text-center font-semibold tracking-widest text-slate-700">
            Banana production is powered by a <b>closed-loop farming system </b>
            , where waste from one enterprise fuels productivity in another.
          </p>
          <Motion direction="left">
            <div className="flex items-center text-gray-700 tracking-wider gap-5.5 p-1">
              <FontAwesomeIcon
                icon={faHandPointRight}
                size="xl"
                className="animate-bounce"
              />
              <p className="text-[14px] md:text-md text-justify">
                <b>Poultry manure </b>is composted and applied to banana gardens
                to restore soil nutrients, improve structure, and increase
                moisture retention.
              </p>
            </div>
          </Motion>
          <Motion direction="right">
            <div className="flex items-center text-gray-700  gap-5.5 p-1 mb-5">
              <FontAwesomeIcon
                icon={faHandPointRight}
                size="xl"
                className="animate-bounce"
              />
              <p className="text-[14px] md:text-md text-justify">
                This organic fertilization approach reduces reliance on chemical
                inputs while improving long-term soil health and productivity.
              </p>
            </div>
          </Motion>
        </div>
        <ImageBg
          src={projectImpactImage}
          alt="image showing results section"
          componentHeading="Project impact"
          componentContent={projectImpactData}
          icon={faArrowTrendUp}
        />
        <div className="flex flex-col  p-6 gap-5 md:py-8 md:px-18 shadow-xl bg-slate-100 rounded-xl border-b-4 hover:border-b-primaryGreen">
          <h2 className="flex items-center p-3 md:p-5 text-gray-700 justify-center animate-bounce font-bold text-[34px] md:text-5xl gap-3.5 md:gap-6">
            <FontAwesomeIcon icon={faEarthAmerica} color="green" size="lg" />
            <span className="tracking-widest">Our Philosophy</span>
          </h2>
          <p className="font-semibold text-[17px] md:text-4xl tracking-widest leading-loose text-center text-slate-700">
            We believe banana farming should be:
          </p>
          <ol className="flex flex-col gap-3.5 list-decimal text-slate-700">
            {philosophyData.map(({ point, explanation }, index) => {
              return (
                <li key={index} className="flex tracking-wider text-[14px]">
                  <b>{point}</b>
                  {explanation}
                </li>
              );
            })}
          </ol>
          <Motion direction="up">
            <p className="text-slate-700 flex tracking-widest text-[14px] text-justify md:text-[17.5px] leading-loose">
              Through disciplined management and responsible farming, we are
              growing more than bananas — we are growing livelihoods, skills,
              and future farmers.
            </p>
          </Motion>
        </div>
        <div className="  flex w-full relative h-80 shadow-lg ">
          <Image
            src={bananaArtImage}
            alt="an image of bananas drwn using pencil art"
            style={{ objectFit: 'contain' }}
            className="flex h-full w-full"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col px-8 md:px-18 py-6 gap-4 md:gap-8 justify-center items-center z-10">
            <h3 className="font-semibold tracking-widest text-slate-100 text-lg text-center leading-loose md:text-3xl">
              Learn from Our Banana Farming Success Story
            </h3>
            <Motion direction="down">
              <p className="flex text-center text-white tracking-widest text-[14px] md:text-[18px] leading-loose">
                Visit our farm, attend a training session, or partner with us to
                grow productive, profitable, and sustainable banana enterprises.
              </p>
            </Motion>
            <CallToActionButton
              callToAction="Contact Us"
              href="/app/contact-us"
            />
          </div>
        </div>
        {/* <ImageBg src={} alt="Image of a section of the banana plantation" />
        <div className=""></div> */}
      </div>
    </main>
  );
}

export default BananaFarmingProject;
