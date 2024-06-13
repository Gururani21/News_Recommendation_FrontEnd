import React from "react";
import Badge from "../Badge/Badge";
import { NewsDataType } from "@/types/news";
import Link from 'next/link';


export interface CardWithLeftSideTextPropType{
  news:NewsDataType

}
const renderBadge = (res:string[])=>{
  return res.map(x=>  <Badge text= {x.toLowerCase()} />)
}
const CardWithLeftSideText = ({news}:CardWithLeftSideTextPropType) => {
  return (
    <div className = 'h-full w-full'>
    <Link 
    href={"/news/" + news.news_id} 
    passHref
    >
    <div className='w-full lg:max-w-full lg:flex rounded-md hover:cursor-pointer'>
      <div
        className='min-h-fit lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
        style={{
          backgroundImage:
            `url("${news.image_url}")`,
        }}
        title='Forest'
      ></div>
      <div className='border-r border-b border-l   rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col justify-between leading-normal py-4'>
        <div>
         {renderBadge(news.category)}
        </div>
        <div className='font-bold text-xl'>
       {news.title}
        </div>
        <div className='flex justify-normal gap-4 text-xs font-extralight'>
          <span>{news.creator} </span>
          <span>{news.pubDate}</span>
        </div>
      </div>
    </div>
    </Link>
    </div>
  );
};

export default CardWithLeftSideText;
