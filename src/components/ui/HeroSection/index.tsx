import React from "react";
import CardWithBgImg from "../Card/CardWithBgImg";
import CardWithLeftSideText from "../Card/CardWithLeftSideText";

const HeroSection = () => {
  return (
    <div className='my-8'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='h-full'>
          <CardWithBgImg />
        </div>
        <div className='grid gap-4'>
          <CardWithLeftSideText />
          <CardWithLeftSideText />
          <CardWithLeftSideText />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
