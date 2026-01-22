import React, { Suspense } from 'react';
import decemberRainArticleImage from '../../../public/assets/lwevuzeCoffeeRains.png';
import millionsFromCoffeeArticleImage from '../../../public/assets/millionsFromCoffee.png';
import coffeeMintingMoneyArticleImage from '../../../public/assets/mintingMoneyArticleImage.png';
import newsHeroImage from '../../../public/assets/newsHeroImage.png';
import papalKnightArticleImage from '../../../public/assets/papalKnight.png';
import poultryManureArticleImage from '../../../public/assets/poultryManure.png';
import NewsArcticle from '../components/page-specific/news/NewsArcticle';
import VideoComponent from '../components/page-specific/news/VideoComponent';
import ProjectHeroSection from '../components/shared/ProjectHeroSection';

function page() {
  const newsArticlesData = [
    {
      title:
        'Mid-December rain brings hope to farmers battered by November dry spells',
      articleExcerpt:
        'Farmers also expect to pick some grains from sections of gardens where crops had stunted and got stressed by the intense sun heat, which could yield some fruit.',
      publicationHouse: `Daily Monitor + ${''} - National`,
      publicationDate: ` January 10,$nbsp; 2026`,
      link: 'https://www.monitor.co.ug/uganda/news/national/mid-december-rain-brings-hope-to-farmers-battered-by-november-dry-spells--5322458',
      imageSrc: decemberRainArticleImage,
    },
    {
      title: 'Poultry manure: The soil nutrient fixer',
      articleExcerpt:
        'Poultry farmers out to diversify on their respective incomes with crop cultivation are now finding good soil nutrient fixers from the chicken droppings fermented at the garden manure pits',
      publicationHouse: `Daily Monitor + ${''} - Farming`,
      publicationDate: 'January 11,$nbsp; 2025',
      link: 'https://www.monitor.co.ug/uganda/magazines/farming/poultry-manure-the-soil-nutrient-fixer-4885556#story',
      imageSrc: poultryManureArticleImage,
    },
    {
      title: 'How Lwevuze is minting money from coffee',
      articleExcerpt:
        'The farmer recently acquired a solar-powered irrigation system and a high-horsepower generatoe to enhance irrigation on his 10-acre coffee farm.',
      publicationHouse: `Daily Monitor + ${''} - National`,
      publicationDate: 'November 1,$nbsp;2024',
      link: 'https://www.monitor.co.ug/uganda/news/national/how-lwevuze-is-minting-money-from-coffee-4807914',
      imageSrc: coffeeMintingMoneyArticleImage,
    },
    {
      title: 'Katikamu farmer bags millions from organic coffee, bananas',
      articleExcerpt:
        'Lwevuze harvests 100 bags of coffee weighing 80kg per season. Simple mathematics put his earnings between Shs 40M and Shs 50M per season.',
      publicationHouse: `Daily Monitor + ${''} - Farming`,
      publicationDate: 'October 5,$nbsp;2018',
      link: 'https://www.monitor.co.ug/uganda/magazines/farming/katikamu-farmer-bags-millions-from-organic-coffee-bananas-1782266',
      imageSrc: millionsFromCoffeeArticleImage,
    },
    {
      title:
        'The Papal knight who has trained more then 4,000 farmers at his farm',
      articleExcerpt:
        'From his farm in Ntangala village in Katikamu Sub-county, Luweero District, Joseph Lwevuze has not only used modern farming practices, but also taught them to other farmers.',
      publicationHouse: `Daily Monitor + ${''} - Farming`,
      publicationDate: 'December 1,$nbsp;2015',
      link: 'https://www.monitor.co.ug/uganda/magazines/farming/the-papal-knight-who-has-trained-more-than-4-000-farmers-at-his-farm-1632668',
      imageSrc: papalKnightArticleImage,
    },
  ];

  const YoutubeVideosSrcData = [
    'https://youtu.be/RBP2oZ_VGqs?si=SqFV1dHGZyn3DZ0H',
    'https://youtu.be/sZN5qnW08eM?si=r6-YVmbcsC_dbred',
    'https://youtu.be/14QDc7Z8Zzg?si=_gCUkG9IpQLrTBS7',
  ];
  return (
    <main className="flex flex-col gap-15 md:gap-20 p-20">
      <ProjectHeroSection
        heroImage={newsHeroImage}
        projectHeading="News & Media"
        projectTagline="Our journey, milestones, and national recognition"
      />
      <div className="flex flex-col gap-10 tracking-wider leading-loose">
        <h1 className="">Be inspired with the events going on at our farm </h1>
        <p className="">Intro text here</p>
        <div className="flex flex-col gap-6">
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
      <section className="flex flex-col gap-2">
        <h3 className="text-xl font-bold tracking-wider">
          Check us out on YouTube
        </h3>
        <p className="tracking-wider leading-loose">
          We bring you a close up view of both what was and is happening at our
          farm.
        </p>
        <div className="flex">
          <Suspense
            fallback={
              <div className="flex bg-green-300 text-center text-white tracking-wider">
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
    </main>
  );
}

export default page;
