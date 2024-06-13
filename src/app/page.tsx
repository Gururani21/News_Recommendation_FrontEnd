"use client";

import Header from "@/components/common/header/index";
import DivSeprater from "@/components/ui/DivSeprater/DivSeprater";
import HeroSection from "@/components/ui/HeroSection/index";
import { BentoGridPost } from "@/components/ui/Post/BenotGrid";
import Post from "@/components/ui/Post/Post";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useTheme } from "./context/ThemeContext";


export default function Home() {

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  // const [font, setFont] = useState('font-inter');
  const fonts = [
    { name: 'Inter', class: 'font-inter' },
    // { name: 'Sans', class: 'font-sans' },
    { name: 'Serif', class: 'font-serif' },
    { name: 'Mono', class: 'font-mono' },
    { name: 'Courier', class: 'font-courier' },
  ];
  // const handleFontChange = (fontClass:any) => {
  //   setFont(fontClass);
  // };

  const [selectedPalette, setSelectedPalette] = useState('default');


  const { font, backgroundColor, textColor } = useTheme();

  return (
    <div className={`${font} ${backgroundColor} ${textColor} min-h-screen px-6 sm:px-6 md:px-12`}>
      <div className={`${font} ${textColor} ${backgroundColor}`}>

        <main>
        <Header />
          <HeroSection />
          <DivSeprater />
          <BentoGridPost  postheader={{title:"Sports", link:""}} />
          <DivSeprater />
          <Post />
        </main>
      </div>

    </div>
  );
}
