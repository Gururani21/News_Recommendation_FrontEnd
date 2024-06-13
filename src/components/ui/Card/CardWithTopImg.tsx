import React from "react";
import Badge from "../Badge/Badge";
import { NewsDataType } from "@/types/news";

type CardWithTopImgPropType = {
  news?: NewsDataType;
};
const defaultData =  {
  "_id": "663fa4adf3337c64974abdcb",
  "news_id": "a6ebc6b0-e596-4f90-962a-03e9896318aa",
  "title": "Independent Belarusian Filmmakers Condemn Russian Attack on Ukraine",
  "link": "https://www.hollywoodreporter.com/news/general-news/independent-belarus-filmmakers-condemn-russia-attack-ukraine-1235101741/",
  "keywords": [
      "General News",
      "News",
      "international",
      "Ukraine"
  ],
  "creator": [
      "Scott Roxborough"
  ],
  "description": "A group of Belarusian filmmakers, many of whom fled their authoritarian homeland to Ukraine in 2020, have published an open letter condemning the Russian invasion of Ukraine and demanding Russian troops leave the territories of both Ukraine and Belarus. “We are outraged that the Russian aggressor uses our territory for launching deadly missiles to Ukraine,” […]",
  "content": [
      "Many Belarusian filmmakers fled to Ukraine after the government crackdown in their home country in 2020, as depicted in the 2021 documentary 'Courage.'",
      "A group of Belarusian filmmakers, many of whom fled their authoritarian homeland to Ukraine in 2020, have published an open letter condemning the Russian invasion of Ukraine and demanding Russian troops leave the territories of both Ukraine and Belarus.",
      "“We are outraged that the Russian aggressor uses our territory for launching deadly missiles to Ukraine,” the group writes, in English, Belarusian and Russian. Russian troops currently advancing on the Ukraine capital Kyiv launched their attack from Ukraine’s border with Belarus in the north.",
      "Among the around 80 signatories of the letter are Volia Chajkouskaya, founder of the Northern Lights Film Festival, actress Anna Polupanova (Kupala) and director Aliaksei Paluyan, whose award-winning documentary Courage depicted the grassroots uprising against the Belarusian dictatorship in 2020. Ukraine welcomed many Belarusian artists and filmmakers who fled the dictatorship of Belarusian strongman Alexander Lukashenko.",
      "Dear Ukrainians, Dear international community, dear fellow filmmakers,We, Belarusian film community, strongly condemn the Russian military aggression againstUkraine. We are outraged that the Russian aggressor uses our territory for launching deadlymissiles to Ukraine.Many Belarusian filmmakers were welcomed and supported in Ukraine after the repressions wesuffered in 2020. We express our strong solidarity with the brave Ukrainian nation that fearlesslyfights for the freedom of their country. As art people we clearly see the difference between thegood and the evil. There is no place for evil in real life.We demand Russian troops to leave the territory of Ukraine and Belarus.We demand to stop the war immediately.Slava Ukraini!",
      "Sign up for THR news straight to your inbox every day",
      "Sign up for THR news straight to your inbox every day"
  ],
  "pubDate": "2022-03-01T08:23:11.000Z",
  "image_url": null,
  "source_id": "hollywoodreporter",
  "source_url": "hollywoodreporter",
  "language": "english",
  "country": [
      "united states of america"
  ],
  "category": [
      "top"
  ],
  "__v": 0
}
export const CardWithTopImg = ({ news=defaultData}: CardWithTopImgPropType) => {
  console.log(news);
  return (
    <div className=' border-b-[1px]  rounded-sm  bg-white  dark:bg-gray-500 dark:border-gray-700 '>
      <a href='#'>
        <img
          className='rounded-sm  h-40 w-full'
          src={
            news.image_url
              ? news.image_url
              : "https://www.nhf.gov.gh/assets/images/default-news.jpg"
          }
          alt=''
        />
      </a>

      <div className='p-5'>
        <Badge text={news.category} />
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {news.title}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4'>
          {news.description}
        </p>
        <a
          href={"/news/" + news.news_id}
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[color:var(--ast-global-color-0)] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Read more
          <svg
            className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardWithTopImg;
