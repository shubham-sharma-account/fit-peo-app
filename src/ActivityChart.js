import React from "react";
import ActivityBar from "./ActivityBar";

const ActivityChart = () => {
  return (
    <div className="mt-2 bg-blue-50 py-3 px-4 h- rounded-3xl">
      <div className="mb-2 flex justify-between">
        <h1 className="text-blue-950 text-md font-bold font-sans">Activity</h1>
        <div className="text-blue-300">3 appointment on this week </div>
      </div>
      <div className="flex justify-between">
        {new Array(8).fill(1).map((_, i) => (
          <ActivityBar data={{ h1: 16, h2: 16, h3: 20, h4: 16 }} />
        ))}
      </div>
      <div className="mt-1 flex justify-evenly">
        <div className="text-blue-300">Mon</div>
        <div className="text-blue-300">Tues</div>
        <div className="text-blue-300">Wed</div>
        <div className="text-blue-300">Thurs</div>
        <div className="text-blue-300">Fri</div>
        <div className="text-blue-300">Sat</div>
        <div className="text-blue-300">Sun</div>
      </div>
    </div>
  );
};

export default ActivityChart;
