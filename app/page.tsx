import AboutUsBrief from './components/page-specific/home/AboutUsBrief';
import CoreAreasSection from './components/page-specific/home/CoreAreasSection';
import HeroSection from './components/page-specific/home/HeroSection';
import HorizontalLine from './components/shared/HorizontalLine';

export default function Home() {
  return (
    <main className="flex flex-col md:gap-5 items-center bg-white ">
      <div className="flex flex-col">
        <HeroSection />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <CoreAreasSection
            icon={'icon'}
            heading="Poultry Farning"
            moreInfo="Battery cage system for large-scale layer production"
          />
          <CoreAreasSection
            icon={'icon'}
            heading="Coffee Farming"
            moreInfo="Organic Robusta coffee nourished by poultry manure"
          />
          <CoreAreasSection
            icon={'icon'}
            heading="Plantation Forestry"
            moreInfo="Eucsalyptus grown for commercial and environmental value"
          />
          <HorizontalLine />
        </div>
      </div>
      <AboutUsBrief />
      {/* media and recognition section will contain a splide of 'partners' logos, and news teaser cards below' */}
    </main>
  );
}
