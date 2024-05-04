import React from "react";
import Badge from "../Badge/Badge";

const CardWithLeftSideText = () => {
  return (
    <div className='w-full lg:max-w-full lg:flex rounded-md'>
      <div
        className='min-h-fit lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
        style={{
          backgroundImage:
            'url("https://v1.tailwindcss.com/img/card-left.jpg")',
        }}
        title='Forest'
      ></div>
      <div className='border-r border-b border-l   rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col justify-between leading-normal py-4'>
        <div>
          <Badge text='Health' />
        </div>
        <div className='font-bold text-xl'>
          15 Shocking Elon Musk Tweets About Stock Market
        </div>
        <div className='flex justify-normal gap-4 text-xs font-extralight'>
          <span>akbarh </span>
          <span>June 28, 2021</span>
        </div>
      </div>
    </div>
  );
};

export default CardWithLeftSideText;
