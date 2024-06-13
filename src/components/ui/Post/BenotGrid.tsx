"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Badge from "../Badge/Badge";
import Image from "next/image";
import PostHeaders, { PostHeadersPropsType } from "./PostHeaders";
import { NewsDataType } from "@/types/news";
import axios from "axios";
import appconfig from "@/utils/config";
import Loader from "../Loader";

export interface BenotGridPostPropTypes {
  postheader: PostHeadersPropsType;
  // newslst: NewsDataType[]
}
export function BentoGridPost({ postheader }: BenotGridPostPropTypes) {
  const [newslst, setnewslst] = useState<NewsDataType[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const renderBadge = (res: string[]) => {
    return res.map((x) => <Badge text={x.toLowerCase()} />);
  };

  const getNews = async () => {
    setisLoading(true);
    const res = (
      await axios.get(appconfig.url + "/getNews", {
        params: { image_url: true, category: "sports" },
      })
    ).data;
    console.log("from bentogrid", res.data);
    setnewslst(res.data);
    setisLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <PostHeaders title={postheader.title} link={postheader.link} />
      <BentoGrid className=''>
        {newslst.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header= {Skeleton(item.image_url)}
            icon={renderBadge(item.category)}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            news_id = {item.news_id}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = (img: string|null) => (

<div className=" w-full h-20">
    {/* <div className="relative w-full h-20"> */}


    <img src={img||'/image-1.jpg'} 
    alt="News Img" 
    // className=" w-full h-full object-cover absolute "
    className=" w-full h-20 "

    />

</div>

);
// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     icon: <Badge text='Health' />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     icon: <Badge text='Health' />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     icon: <Badge text='Health' />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     icon: <Badge text='Health' />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: <Skeleton />,
//     icon: <Badge text='Health' />,
//   },
// ];
