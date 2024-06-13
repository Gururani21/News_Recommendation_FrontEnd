"use client";
import { useTheme } from "@/app/context/ThemeContext";
import Header from "@/components/common/header/index";
import Badge from "@/components/ui/Badge/Badge";
import CardWithTopImg from "@/components/ui/Card/CardWithTopImg";
import Loader from "@/components/ui/Loader/index";
import { NewsDataType } from "@/types/news";
import appconfig from "@/utils/config";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


const NewsArticle = () => {
  const { font, backgroundColor, textColor } = useTheme();
  const [data, setdata] = useState<NewsDataType>();
  const params = useParams();
  const renderMustReadCards = () => {
    return Array.from(Array(5).keys()).map((item, i) => (
      <CardWithTopImg key={i} />
    ));
  };
  const getNewsData = async () => {
    const id = params["newsid"];
    const res = (await axios.get(appconfig.url + "/getNews/" + id)).data;
    console.log(res);
    if (res.data != null) {
      setdata(res.data[0]);
    }
  };
  useEffect(() => {
    getNewsData();
    return () => {};
  }, []);

  if (data == null) {
    return <>
    <Loader />
    </>;
  }
  const rendercontent = (content: string[]) => {
    return content.map((x) => (
      <p className='text-sm text-[color:var(--ast-global-color-3)] my-4'>{x}</p>
    ));
  };
  const renderKeywords = (keywords: string[]) => {
    if (keywords == null) return;
    return keywords.map((x) => <Badge text={x}></Badge>);
  };
  return (
    <>
    <Header />
    {
    data && (
      <div className = {`${font} ${backgroundColor} ${textColor}`}>
        <div className='px-6 md:px-12 pb-8'>
          <div className='max-w-3xl mx-auto  pb-12'>
            <div className='w-4/5 mx-auto'>
              <div className=' h-full  mx-auto  my-8'>
                <img
                  src={
                    data.image_url
                      ? data.image_url
                      : "https://www.nhf.gov.gh/assets/images/default-news.jpg"
                  }
                  className='rounded-sm'
                />
              </div>

              <div className=''>
                <h2 className='text-xl  font-semibold'>{data.title}</h2>

                <span className='text-xs text-[color:var(--ast-global-color-0)] '>
                  Leave a Comment / Editors Pick, Politics / By akbarh
                </span>

                <div className=''>{renderKeywords(data.keywords)}</div>

                <div className='my-8'>{rendercontent(data.content)}</div>
              </div>
            </div>
          </div>
          <div className='max-w-3xl mx-auto bg-[color:var(--ast-global-color-4)] mt-12'>
            <h2 className='text-2xl font-bold  text-[color:var(--ast-global-color-0)] my-8'>
              Must Read
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {renderMustReadCards()}
            </div>
          </div>
        </div>
      </div>
      
    )
   }
    </>
  );
};

export default NewsArticle;
