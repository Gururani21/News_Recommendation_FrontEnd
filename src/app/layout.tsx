import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import Footer from "@/components/common/Footer/index";

// import { ThemeProvider } from '@/context/ThemeContext';
import CustomizeButton from '@/components/common/CustomizeButton/index';
import { ThemeProvider, useTheme } from "./context/ThemeContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {


  return (
    <html lang='en'>
      <body>
     
      <ThemeProvider>
        <div className=' mt-0 '>
        <CustomizeButton />
          <main>{children}</main>
        </div>
        <div className=' bg-gray-900'>
          <Footer />
        </div>
        
        </ThemeProvider>

          
  
      </body>
    </html>
  );
}
