import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import sectionImage from '@assets/newsHeroImage.png';
import CallToActionButton from '../../shared/CallToActionButton';

const OurExcellence = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center gap-2 md:justify-between">
      <div className="flex w-full md:w-1/2 tracking-wider">
        <h1 className=""></h1>
        <p className=""></p>
        <p className=""></p>
        <CallToActionButton callToAction="Discover More" href="" />
      </div>
      <div className="relative flex flex-col">
        <Image src={sectionImage} alt="" className="" />
        <div className="flex p-1 -mr-1 absolute z-10 -mb-2 itema-center rounded-l-lg">
          <FontAwesomeIcon icon={faStar} />
          <span className="">Agricultural Leader</span>
        </div>
      </div>
    </section>
  );
};

export default OurExcellence;
