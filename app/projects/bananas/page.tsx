import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import ImageBg from '@/app/components/shared/ImageBg';
import ProjectHeroSection from '@/app/components/shared/ProjectHeroSection';

function BananaFarmingProject() {
  const bananaVarieties = [
    {
      name: 'Cooking Bananas (Matooke)',
      moreInfo1:
        'We grow multiple high-performing cooking banana varieties adapted to central Uganda’s soils and climate.',
      moreInfo2:
        'These form the backbone of household nutrition and commercial supply',
      image: '',
    },
    {
      name: 'Dessert Bananas',
      variety1: 'Cavendish (Bogoya)',
      variety2: 'Apple Bananas (Ndiizi)',
      moreInfo1:
        'Sweet, yellow bananas popular for fresh consumption and urban markets.',

      moreInfo2:
        'Aromatic, small-sized bananas prized for their unique flavor and high market value.',
      image: '',
    },
    {
      name: 'Plantains',
      moreInfo1:
        'Plantains are grown for both domestic use and market sales, offering versatility for roasting, frying, and processing.',

      image: '',
    },
  ];
  return (
    <main className="flex flex-col gap-15 md:gap-20">
      <ProjectHeroSection
        heroImage={}
        projectHeading="Banana Farming"
        projectTagline="Growing Nutrition, Income and Food Security &#8212; Sustainability"
      />
      <div className="flex flex-col gap-20 p-5 md:px-20 tracking-wider leading-loose">
        <section className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col gap-2.5 md:gap-3">
            <h1 className=""></h1>
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
            src={}
            alt="Image of banana plantation"
            className="md:w-1/2 h-auto rounded-md shadow-md"
          />
        </section>
        <div className="flex flex-col gap-2 md:gap-3 p-3">
          <h2 className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={} size="sm" />
            <span>Banana Varieties We Grow</span>
          </h2>
          <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-3"></div>
        </div>
        <ImageBg src={} alt="Image of a section of the banana plantation" />
        <div className=""></div>
      </div>
    </main>
  );
}

export default BananaFarmingProject;
