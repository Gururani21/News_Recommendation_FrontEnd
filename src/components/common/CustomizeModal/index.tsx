import { useTheme } from '@/app/context/ThemeContext';
import React from 'react';
// import { useTheme } from '@/context/ThemeContext';
import { MdCancel } from "react-icons/md";

const fonts = ["font-sans", "font-serif", "font-mono", "font-fantasy"];
const backgroundColors = ["bg-white", "bg-gray-100", "bg-green-50", "bg-black", "bg-sky-50", "bg-amber-50"];
const textColors = ["black", "gray-800", "green-800", "white", "sky-800", "amber-800"]
const midColors = ["slate-500", "gray-500", "green-500", "slate-500", "sky-500", "amber-500"]
const darkClr = ["bg-black", "bg-gray-800", "bg-green-800", "bg-white", "bg-sky-800", "bg-amber-800"]

const index = ({ onClose }) => {
  const { handleFontChange, handleBackgroundColorChange, handleTextColorChange } = useTheme();

  return (
    // <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
    <div className = 'fixed right-0 top-16 h-full w-64 bg-gray-100 shadow-lg p-4 z-100'>
      <div className="bg-white p-3 rounded shadow-md absolute">
        <button onClick={onClose} className=" absolute right-4 top-4  text-black rounded-full">
          <MdCancel size = {25}/>
        </button>
        <h6 className=" mb-4">Customize </h6>
        <div className="mb-4">
          <h3 className="text-base mb-2">Try Other Fonts</h3>
          {fonts.map((font) => (
            <button
              key={font}
              onClick={() => handleFontChange(font)}
              className={`${font} px-2 py-1 m-1 border rounded`}
            >
              {font.replace("font-", "")} AA
            </button>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="text-base mb-2">Try Other Background Color</h3>
          <div className = 'flex flex-wrap gap-2 '>
            {backgroundColors.map((color, i) => {
              let textColor = `text-${textColors[i]}`
              // let midColor = `bg-${midColors[i]}`
              // console.log(textColor)

              return(
                <button
                  key={color}
                  onClick={() => {
                    handleBackgroundColorChange(color)
                    handleTextColorChange(textColor)
                  }
                  }
                  //   className={`${color} p-2 m-1 border rounded`}
                  className='p-2 m-1 rounded border my-2  flex gap-2 '
                  >
                    {/* {color.replace("bg-", "")} */}
                    <div className = {`${color} p-2 rounded-full`}> </div>
                    <div className = {`bg-${midColors[i]} p-2 rounded-full`}></div>
                    {/* <div className = {`bg-${textColors[i]} p-2 rounded-full`}></div> */}
                    <div className = {`${darkClr[i]} p-2 rounded-full`}></div>

              </button>

              )
            })}          
          </div>
        </div>
       
      </div>
     </div>
  );
};

export default index;





          // (
           
            // <button
            //   key={color}
            //   onClick={() => {
            //     handleBackgroundColorChange(color)
            //     handleTextColorChange({text-textColors[i]})
            //   }
            //   }
            // //   className={`${color} p-2 m-1 border rounded`}
            // className='p-2 m-1 rounded border my-2  flex gap-2 '
            // >
            //   {/* {color.replace("bg-", "")} */}
            //   <div className = {`${color} p-2 rounded-full`}></div>
            //   <div className = {`bg-${midColors[i]} p-2 rounded-full`}></div>
            //   <div className = {`bg-${textColors[i]} p-2 rounded-full`}></div>
             
            // </button>
          // ))}
