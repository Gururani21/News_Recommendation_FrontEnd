import React from "react";

export type BadgeType = {
  text: string;
};
const Badge = ({ text }: BadgeType) => {
  return (
    <span className='inline-flex items-center gap-x-1.5 py-0.5 rounded-full text-xs font-extralight px-4 bg-[#d7923c] text-white'>
      {text}
    </span>
  );
};

export default Badge;
