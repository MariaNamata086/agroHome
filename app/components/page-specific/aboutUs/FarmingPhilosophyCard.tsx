import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface wayOfFarmingProps {
  icon: any;
  heading: string;
  content: string;
}
const WayOfFarmingCard = ({ icon, heading, content }: wayOfFarmingProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 rounded-b-4xl shadow-md p-5 px-7">
      <div className="flex items-center gap-4  ">
        <span className="flex">
          <FontAwesomeIcon
            icon={icon}
            size="2xl"
            className="text-primaryGreen"
          />
        </span>
        <h2 className="text-gray-700 font-semibold text-lg md:text-xl tracking-wider">
          {heading}
        </h2>
      </div>
      <p className="text-stone-700">{content}</p>
    </div>
  );
};

export default WayOfFarmingCard;
