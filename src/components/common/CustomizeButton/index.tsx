"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import CustomizeModal from '../CustomizeModal/index';
import { IoIosColorPalette } from "react-icons/io";


// const CustomizeModal = dynamic(() => import('./CustomizeModal'), { ssr: false });

const index = () => {
  const [showCustomize, setShowCustomize] = useState(false);

  const handleCustomizeClick = () => setShowCustomize(!showCustomize);

  return (
    <>
      <div className="fixed  top-1/2 right-0 transform -translate-y-1/2 z-100">
        <button onClick={handleCustomizeClick} className=" flex gap-1 items-center border-2 border-[#d7923c] bg-[#d7923c] text-white px-3 py-2   rounded">
            <IoIosColorPalette/> 
             <span>CUSTOMIZE</span>
        </button>
      </div>
      {showCustomize && <CustomizeModal onClose={handleCustomizeClick} />}
    </>
  );
};

export default index;
