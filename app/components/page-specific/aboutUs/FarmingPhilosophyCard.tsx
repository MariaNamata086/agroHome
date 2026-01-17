import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface farmingPhilosophyProps {
  icon: any;
  heading: string;
  content: string;
}
const FarmingPhilosophyCard = ({
  icon,
  heading,
  content,
}: farmingPhilosophyProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <span className="flex">
          <FontAwesomeIcon icon={icon} size="lg" color="#" />
        </span>
        <h2 className="">{heading}</h2>
      </div>
      <p className="">{content}</p>
    </div>
  );
};

export default FarmingPhilosophyCard;
