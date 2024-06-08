"use client";

import Header from "@/components/common/header/index";
import DivSeprater from "@/components/ui/DivSeprater/DivSeprater";
import HeroSection from "@/components/ui/HeroSection/index";
import { BentoGridPost } from "@/components/ui/Post/BenotGrid";
import Post from "@/components/ui/Post/Post";
import { useState } from "react";
import { MdCancel } from "react-icons/md";


export default function Home() {

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [font, setFont] = useState('font-inter');
  const fonts = [
    { name: 'Inter', class: 'font-inter' },
    // { name: 'Sans', class: 'font-sans' },
    { name: 'Serif', class: 'font-serif' },
    { name: 'Mono', class: 'font-mono' },
    { name: 'Courier', class: 'font-courier' },
  ];
  const handleFontChange = (fontClass:any) => {
    setFont(fontClass);
  };

  const [selectedPalette, setSelectedPalette] = useState('default');

  return (
    <div className={`${font}`}>
     <button
      
          className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded }`}
          onClick={() => setIsPanelOpen(!isPanelOpen)}
        >
          {/* {isPanelOpen ? 'CLOSE' : 'CUSTOMIZE'}       */}
          CUSTOMIZE
            </button>


        {isPanelOpen && (
          <div className="fixed right-0 top-16 h-full w-64 bg-gray-100 shadow-lg p-4">
             <div className = 'flex justify-between items-center mb-3'>
                <h2 className="text-lg font-bold ">Customize Theme</h2>
                <button
                onClick={() => setIsPanelOpen(false) }>
                  <MdCancel/>
                </button>
            </div>
               <h6>Try Other Fonts</h6>
           
           
            
              
            <div className="space-y-2 mb-5">
              {fonts.map((fontItem) => {
                            //  let   v = {fontItem.class}
          return(
                <button
                  key={fontItem.name}
                  className= {`w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded ${fontItem.class}`}
                  onClick={() => handleFontChange(fontItem.class)}
                  // style={{font : v}}
                >
                  {fontItem.name} Aa
                </button>
)
})}
            </div>

            {/* for colro themes */}
            <h6>Try Other Colors</h6>

          </div>
        )}




      <main>
      <Header />
        <HeroSection />
        <DivSeprater />
        <BentoGridPost  postheader={{title:"Sports", link:""}} />
        <DivSeprater />
        <Post />
      </main>
    </div>
  );
}
