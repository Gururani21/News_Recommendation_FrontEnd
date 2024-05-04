import { cn } from "@/utils/cn";
import React from "react";
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
import PostHeaders from "./PostHeaders";

export function BentoGridPost() {
  return (
    <>
      <PostHeaders />
      <BentoGrid className=' '>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div style={{ width: "100%", height: "100%", position: "relative" }}>
    <Image alt='Mountains' src='/image-1.jpg' layout='fill' objectFit='Cover' />
  </div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Badge text='Health' />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <Badge text='Health' />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <Badge text='Health' />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <Badge text='Health' />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <Badge text='Health' />,
  },
];
