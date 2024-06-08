import React from "react";
import Badge from "../Badge/Badge";
import { NewsDataType } from "@/types/news";


export interface CardWithBgImgPropType {
  news: NewsDataType
}
const CardWithBgImg = ({news}:CardWithBgImgPropType) => {
  if(!news)return;
  return (
    <div className=' relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full   text-white'>
        <div className='absolute bottom-4 right-4 left-4'>
          <div>
            {/* <span className='inline-flex items-center gap-x-1.5 py-1 rounded-full text-xs font-extralight px-4 bg-[color:var(--ast-global-color-3)] text-white'>
              Badge
            </span> */}
            <Badge text='Health' />
          </div>
          <div className='font-bold text-2xl'>
          {news.title}
          </div>
          <div className='flex justify-normal gap-4 text-xs font-extralight'>
            <span>{news.creator} </span>
            <span>{news.pubDate}</span>
          </div>
        </div>
      </div>
      <img
        className='  min-h-[450px] w-full object-cover shadow-md rounded-sm'
        src={
        news.image_url||  "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-1.jpg"
        }
        alt='/'
      />
    </div>
  );
};

export default CardWithBgImg;
