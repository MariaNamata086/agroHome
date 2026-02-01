import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons/faStarHalfStroke';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Suspense } from 'react';
import decemberRainArticleImage from '@assets/lwevuzeCoffeeRains.png';
import millionsFromCoffeeArticleImage from '@assets/millionsFromCoffee.png';
import coffeeMintingMoneyArticleImage from '@assets/mintingMoneyArticle.png';
import newsHeroImage from '@assets/newsHeroImage.png';
import papalKnightArticleImage from '@assets/papalKnight.png';
import poultryManureArticleImage from '@assets/poultryManure.png';
import NewsArcticle from '../components/page-specific/news/NewsArcticle';
import VideoComponent from '../components/page-specific/news/VideoComponent';
import ProjectHeroSection from '../components/shared/ProjectHeroSection';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function page() {
  const newsArticlesData = [
    {
      title:
        'Mid-December rain brings hope to farmers battered by November dry spells',
      articleExcerpt:
        'How resilience, irrigation, and soil regeneration protected farmers during climate stress.',
      publicationHouse: `Daily Monitor - National`,
      publicationDate: ` January 10, 2026`,
      link: 'https://www.monitor.co.ug/uganda/news/national/mid-december-rain-brings-hope-to-farmers-battered-by-november-dry-spells--5322458',
      imageSrc: decemberRainArticleImage,
    },
    {
      title: 'Poultry manure: The soil nutrient fixer',
      articleExcerpt:
        'Turning poultry waste into rich organic fertilizer for coffee and crops.',
      publicationHouse: `Daily Monitor - Farming`,
      publicationDate: 'January 11, 2025',
      link: 'https://www.monitor.co.ug/uganda/magazines/farming/poultry-manure-the-soil-nutrient-fixer-4885556#story',
      imageSrc: poultryManureArticleImage,
    },
    {
      title: 'How Lwevuze is minting money from coffee',
      articleExcerpt:
        'Solar-powered irrigation and smart farming strategies transforming coffee production.',
      publicationHouse: `Daily Monitor - National`,
      publicationDate: 'November 1, 2024',
      link: 'https://www.monitor.co.ug/uganda/news/national/how-lwevuze-is-minting-money-from-coffee-4807914',
      imageSrc: coffeeMintingMoneyArticleImage,
    },
    {
      title: 'Katikamu farmer bags millions from organic coffee, bananas',
      articleExcerpt:
        'Organic coffee and banana farming proving profitable and sustainable.',
      publicationHouse: `Daily Monitor - Farming`,
      publicationDate: 'October 5, 2018',
      link: 'https://www.monitor.co.ug/uganda/magazines/farming/katikamu-farmer-bags-millions-from-organic-coffee-bananas-1782266',
      imageSrc: millionsFromCoffeeArticleImage,
    },
    {
      title:
        'The Papal knight who has trained more then 4,000 farmers at his farm',
      articleExcerpt:
        'A legacy of faith-driven farming and farmer education across Uganda.',
      publicationHouse: `Daily Monitor - Farming`,
      publicationDate: 'December 1, 2015',
      link: 'https://www.monitor.co.ug/uganda/magazines/farming/the-papal-knight-who-has-trained-more-than-4-000-farmers-at-his-farm-1632668',
      imageSrc: papalKnightArticleImage,
    },
  ];

  const YoutubeVideosSrcData = [
    'https://www.youtube.com/embed/RBP2oZ_VGqs',
    'https://www.youtube.com/embed/sZN5qnW08eM',
    'https://www.youtube.com/embed/14QDc7Z8Zzg',
  ];

  return (
    <main className="flex flex-col md:gap-5 items-center bg-white ">
      <ProjectHeroSection
        heroImage={newsHeroImage}
        projectHeading="News & Media"
        projectTagline="Our journey, milestones, and national recognition"
      />
      <div className="flex flex-col gap-7 md:gap-13 p-5 md:px-20">
        <div className="flex flex-col  gap-8 md:gap-12 justify-center items-center tracking-wider leading-loose">
          <h1 className="flex tracking-widest leading-relaxed p-3 md:p-5 text-gray-700 justify-center w-full md:w-[65%] text-center font-bold text-[28px] md:text-4xl gap-3.5 md:gap-4">
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              size="lg"
              className="mt-3"
            />
            <span>Be inspired with the events going on at our farm</span>
          </h1>
          <p className="tracking-wider leading-loose text-center md:px-12">
            Our journey has not only transformed our farm — it has captured
            national attention. From organic coffee success to farmer training
            and climate-smart practices, our story has been featured by Uganda’s
            leading media houses. These stories offer a closer look at the
            people, passion, and practices behind the work. Dive into the
            articles below and discover how one farm’s commitment to excellence
            is creating ripples far beyond its fields.
          </p>
          <div className="flex flex-col gap-6 md:gap-10">
            {newsArticlesData.map(
              (
                {
                  title,
                  articleExcerpt,
                  publicationHouse,
                  publicationDate,
                  link,
                  imageSrc,
                },
                index,
              ) => {
                return (
                  <NewsArcticle
                    key={index}
                    title={title}
                    articleExcerpt={articleExcerpt}
                    publicationHouse={publicationHouse}
                    publicationDate={publicationDate}
                    link={link}
                    imageSrc={imageSrc}
                  />
                );
              },
            )}
          </div>
        </div>
        <section className="flex flex-col justify-center items-center gap-5 mb-10">
         <h1 className="flex tracking-widest leading-relaxed p-3 md:p-5 text-gray-700 justify-center items-center w-full md:w-[65%] text-center font-bold text-[28px] md:text-4xl gap-3.5 md:gap-4 ">
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              className="text-red-600"
            />
            <span>Check us out on YouTube</span>
          </h1>
          <p className="tracking-wider w-[60%] md:text-[25px] font-semibold text-center text-lg text-stone-600 leading-loose">
            We bring you a close up view of both what was and is happening at
            our farm.
          </p>
          <div className="grid grid-cols-1 w-full gap-4 md:gap-16">
            <Suspense
              fallback={
                <div className="flex bg-primaryGreen text-center text-white tracking-wider">
                  Loading video...
                </div>
              }
            >
              {YoutubeVideosSrcData.map((src, index) => {
                return <VideoComponent videoSrc={src} key={index} />;
              })}
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
}

export default page;
