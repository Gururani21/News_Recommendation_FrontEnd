"use client";
import { useTheme } from "@/app/context/ThemeContext";
import Header from "@/components/common/header/index";
import CardWithTopImg from "@/components/ui/Card/CardWithTopImg";
import DivSeprater from "@/components/ui/DivSeprater/DivSeprater";
import { NewsDataType } from "@/types/news";
import appconfig from "@/utils/config";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryPages = () => {
  const { font, backgroundColor, textColor } = useTheme();

  const params = useParams();
  const [data, setdata] = useState<NewsDataType[]>([]);
  const renderCategoryName = () => {
    return (
      <div className='pt-16 px-8'>
        <h2 className='text-3xl font-bold  text-[color:var(--ast-global-color-0)]'>
          {params.slug}
        </h2>
        <div className='border-b-2  my-8'></div>
      </div>
    );
  };
  const getNewsData = async () => {
    const res = (
      await axios.get(appconfig.url + "/getNews", {
        params: { image_url: true, category: params.slug.toString().toLowerCase() },
      })
    ).data;
    console.log(res);
    if (res.data != null) {
      setdata(res.data);
    }
  };
  useEffect(() => {
    getNewsData();

    return () => {};
  }, []);

  const renderCardsList = () => {
    return data.map((item, i) => (
      <CardWithTopImg key={i}  news={item}/>
    ));
  };

  const renderRecentlyViewed = () => {
    return Array.from(Array(5).keys()).map((item, i) => (
      <Link
        // href={"/politics"}
        // href={`/${category}`}
         href={""}
        className='text-[color:var(--ast-global-color-0)] text-xs'
        key={i}
      >
        The Frightening Affect of Climate Change on Government
      </Link>
    ));
  };
  return (
    <div>
      <Header />
      <div className={`${font} ${textColor} ${backgroundColor} mt-3 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8`}>
        <div className='col-span-3 pr-0 md:pr-12 border-r-0 md:border-r-2 '>
          <div className=''>{renderCategoryName()}</div>
          <div className=''>
            <div className='grid grid-cols-1 gap-8 pr-0 md:pr-12 '>
              {renderCardsList()}
            </div>
          </div>
        </div>
        <div className='my-4'>
          <div className=''>
            <div className=''>
              <h2 className='text-xl font-bold  text-[color:var(--ast-global-color-3)]'>
                Recently Viewed
              </h2>
            </div>

            <div className='my-4 grid gap-2'>{renderRecentlyViewed()}</div>
            <div className='border-b-2  my-8'></div>
          </div>
          <div className=''>
            <div className=''>
              <h2 className='text-xl font-bold  text-[color:var(--ast-global-color-3)]'>
                Trending News
              </h2>
            </div>

            <div className='my-4 grid gap-2'>{renderRecentlyViewed()}</div>
            <div className='border-b-2  my-8'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPages;
