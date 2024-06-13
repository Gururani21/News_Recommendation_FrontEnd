"use client";
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [font, setFont] = useState("font-sans");
  const [backgroundColor, setBackgroundColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-black")

  const handleFontChange = (newFont: string) => setFont(newFont);
  const handleBackgroundColorChange = (newColor: string) => setBackgroundColor(newColor);
  const handleTextColorChange = (newTextColor : string) => setTextColor(newTextColor);
 
  return (
    <ThemeContext.Provider value={{ font, backgroundColor, textColor, handleFontChange, handleBackgroundColorChange, handleTextColorChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
