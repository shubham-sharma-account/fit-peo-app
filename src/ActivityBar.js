import React from "react";

const ActivityBar = ({data}) => {
    console.log("h1, h2, h3, h4  ", data.h4); 
    
  return (
    <div className="flex justify-between items-center w-12">
      <div className={`w-1 bg-blue-200 h-${data.h1} rounded-full`}></div>
      <div className={`w-1 bg-blue-400 h-${data.h2} rounded-full`}></div>
      <div className={`w-1 bg-blue-300 h-${data.h3} rounded-full`}></div>
      <div className={`w-1 bg-blue-500 h-${data.h4} rounded-full`}></div>
    </div>
  );
};

export default ActivityBar;
