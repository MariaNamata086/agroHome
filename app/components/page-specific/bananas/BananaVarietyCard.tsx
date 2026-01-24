import React from 'react';

interface BananaVarietyCardProps {
  name: string;
  varietyImage: any;
  moreInfo1: string;
  moreInfo2?: string;
  varietyDetails1?: string;
  varietyDetails2?: string;
}

const BananaVarietyCard = () => {
  return (
    <div>
      Banana varieties
      {
        // varietyDetails1 && <p><b>{varietyDetails1}</b>{moreInfo1}</p>
      }
    </div>
  );
};

export default BananaVarietyCard;
