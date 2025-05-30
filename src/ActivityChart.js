import React from "react";
import ActivityBar from "./ActivityBar";

const ActivityChart = () => {
  const weeks = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const data = {
    h1: 50,
    h2: 60,
    h3: 45,
    h4: 55,
  };
  return (
    <div className="mt-2 bg-blue-50 py-3 px-4 h- rounded-3xl">
      <div className="mb-2 flex justify-between">
        <h1 className="text-blue-950 text-md font-bold font-sans">Activity</h1>
        <div className="text-blue-300">3 appointment on this week </div>
      </div>
      <div className="flex justify-between">
        {new Array(8).fill(1).map((_, i) => (
          <ActivityBar data={data} />
        ))}
      </div>
      <div className="mt-1 flex justify-evenly">
        {weeks.map((day, index) => (
          <div key={index} className="text-blue-300">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
