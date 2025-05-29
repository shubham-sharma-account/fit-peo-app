import React from "react";

const ActivityBar = ({ data }) => {

  return (
    <div className="flex justify-between items-center w-12">
      <div
        className="w-1 bg-blue-200 rounded-full"
        style={{ height: `${data.h1}px` }}
      ></div>
      <div
        className="w-1 bg-blue-400 rounded-full"
        style={{ height: `${data.h2}px` }}
      ></div>
      <div
        className="w-1 bg-blue-300 rounded-full"
        style={{ height: `${data.h3}px` }}
      ></div>
      <div
        className="w-1 bg-blue-500 rounded-full"
        style={{ height: `${data.h4}px` }}
      ></div>
    </div>
  );
};

export default ActivityBar;
