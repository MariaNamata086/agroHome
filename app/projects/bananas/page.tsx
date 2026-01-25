import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import {
  faBasketShopping,
  faCheckDouble,
  faEarthAmerica,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import BananaVarietyCard from '@/app/components/page-specific/bananas/BananaVarietyCard';
import CallToActionButton from '@/app/components/shared/CallToActionButton';
import ImageBg from '@/app/components/shared/ImageBg';
import ProjectHeroSection from '@/app/components/shared/ProjectHeroSection';
import cookingBananasImage from '@assets/banana.jpeg';
import banansProjectHero from '@assets/bananasHero.webp';
import cavendishBananasImage from '@assets/bogoyaImage.jpg';
import projectImpactImage from '@assets/kivuuvuImage.jpg';
import plantainBananasImage from '@assets/plantainImage.jpg';
import projectIntroImage from '@assets/provisionalBanana.jpeg';

function BananaFarmingProject() {
  const bananaVarieties = [
    {
      name: 'Cooking Bananas (Matooke)',
      moreInfo1:
        'We grow multiple high-performing cooking banana varieties adapted to central Uganda’s soils and climate.',
      moreInfo2:
        'These form the backbone of household nutrition and commercial supply',
      image: cookingBananasImage,
    },
    {
      name: 'Dessert Bananas',
      variety1: 'Cavendish (Bogoya)',
      variety2: 'Apple Bananas (Ndiizi)',
      moreInfo1:
        'Sweet, yellow bananas popular for fresh consumption and urban markets.',

      moreInfo2:
        'Aromatic, small-sized bananas prized for their unique flavor and high market value.',
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
      practice: 'Regular Pruning:',
      description:
        'Improves air circulation and reduces pest and disease pressure.',
    },
    {
      practice: 'Desuckering:',
      description:
        ' Maintains optimal plant populations and directs energy to fruiting stems.',
    },
    {
      practice: 'Thinning:',
      description: 'Ensures adequate spacing and uniform bunch development.',
    },
    {
      practice: 'Proper Spacing:',
      description: 'Minimizes competition for nutrients, water, and sunlight.',
    },
    {
      practice: 'Responsible Harvesting:',
      description:
        'Ensures maximum fruit quality, shelf life, and market value.',
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
    'Increased income stability for the farm',
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
      <ProjectHeroSection
        heroImage={banansProjectHero}
        projectHeading="Banana Farming"
        projectTagline="Growing Nutrition, Income and Food Security &#8212; Sustainability"
      />
      <div className="flex flex-col gap-20 p-5 md:px-20 tracking-wider leading-loose">
        <section className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col gap-2.5 md:gap-3">
            <h1 className="">Our Project Story</h1>
            <p className="">
              At the heart of our farm is a thriving banana enterprise that
              blends indigenous knowledge, modern agronomy, and circular farming
              practices. Our banana gardens supply both local markets and
              household consumption, while serving as a learning ground for
              farmers seeking to improve yields, soil health, and profitability.
              <p className="">
                We cultivate a diverse range of banana varieties, carefully
                selected for nutrition, resilience, market demand, and taste,
                ensuring both commercial success and food security for the
                community.
              </p>
            </p>
          </div>
          <Image
            src={projectIntroImage}
            alt="Image of banana plantation"
            className="md:w-1/2 h-auto rounded-md shadow-md"
          />
        </section>
        <div className="flex flex-col gap-2 md:gap-3 p-3">
          <h2 className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faBasketShopping} size="sm" />
            <span>Banana Varieties We Grow</span>
          </h2>
          <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-3">
            {bananaVarieties.map(
              ({ name, moreInfo1, moreInfo2, image }, index) => {
                return (
                  <BananaVarietyCard
                    key={index}
                    varietyImage={image}
                    name={name}
                    moreInfo1={moreInfo1}
                    moreInfo2={moreInfo2}
                  />
                );
              },
            )}
          </div>
        </div>
        <section className="flex flex-col gap-3 md:gap-4">
          <h2 className="flex items-center gap-1.5">
            <FaClipboardList />
            <span>How we work</span>
          </h2>
          <p className="">
            Our banana gardens are maintained through disciplined, science-based
            field management:
          </p>
          <ul className="">
            {howWeWorkData.map(({ practice, description }, index) => {
              return (
                <div className="flex items-center gap-1.5" key={index}>
                  <FontAwesomeIcon icon={faCheckDouble} size="lg" />
                  <p className="">
                    <b>{practice}</b>
                    {description}
                  </p>
                </div>
              );
            })}
          </ul>
        </section>
        <div className="flex flex-col gap-2.5 md:gap-3.5 tracking-wider leading-loose transition ease-in-out">
          <h2 className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faRecycle} color="limegreen" size="lg" />
            <span>Sustainability</span>
          </h2>
          <p className="text-md md:text-[17.5px]">
            Our banana production is powered by a{' '}
            <b>closed-loop farming system </b>, where waste from one enterprise
            fuels productivity in another.
          </p>
          <div className="flex items-center gap-1.5 p-1">
            <FontAwesomeIcon icon={faHandPointRight} size="sm" />
            <p className="">
              <b>Poultry manure </b>is composted and applied to banana gardens
              to restore soil nutrients, improve structure, and increase
              moisture retention.
            </p>
          </div>
          <div className="flex items-center gap-1.5 p-1">
            <FontAwesomeIcon icon={faHandPointRight} size="sm" />
            <p className="">
              This organic fertilization approach reduces reliance on chemical
              inputs while improving long-term soil health and productivity.
            </p>
          </div>
        </div>
        <ImageBg
          src={projectImpactImage}
          alt="image showing results section"
          componentHeading="Project impact"
          componentContent={projectImpactData}
        />
        <div className="flex flex-col gap-2.5 p-2 md:gap-2.5 md:p-3">
          <h2 className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faEarthAmerica} color="blue" size="lg" />
            <span>Our Philosophy</span>
            <p className="">We believe banana farming should be:</p>
          </h2>
          <ul className="">
            {philosophyData.map(({ point, explanation }, index) => {
              return (
                <li key={index} className="">
                  <b>{point}</b>
                  {explanation}
                </li>
              );
            })}
          </ul>
          <p className="">
            Through disciplined management and responsible farming, we are
            growing more than bananas — we are growing livelihoods, skills, and
            future farmers.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="">Learn from Our Banana Farming Success Story</h3>
          <p className="">
            Visit our farm, attend a training session, or partner with us to
            grow productive, profitable, and sustainable banana enterprises.
          </p>
          <CallToActionButton
            callToAction="Contact Us"
            href="/app/contact-us"
          />
        </div>
        {/* <ImageBg src={} alt="Image of a section of the banana plantation" />
        <div className=""></div> */}
      </div>
    </main>
  );
}

export default BananaFarmingProject;
