import React from "react";
import BodyGraph from "./BodyGraph";
import HealthGraph from "./HealthGraph";
import ActivityChart from "./ActivityChart";

const Dashboard = () => {
  return (
    <div className="bg-white h-full w-5/12 py-10 px-6">
      <div className="">
        <i className="p-3 border-t-2 border-l-2 border-b-2 rounded-l-md fas fa-search cursor-pointer"></i>
        <input
          className="p-2 border-t-2 border-b-2 w-5/6"
          type="text"
          placeholder="Serach"
        />
        <i className="p-3 border-t-2 border-r-2 border-b-2 rounded-r-md fas fa-bell cursor-pointer"></i>
      </div>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-blue-950 text-2xl font-bold font-sans">
          Dashboard
        </h1>
        <h1 className="text-blue-950 text-xs cursor-pointer">
          This Week <i className="fas fa-chevron-down"></i>
        </h1>
      </div>
      <div className="flex justify-between">
        <BodyGraph />
        <HealthGraph />
      </div>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-blue-950 text-3xl font-bold font-sans">
          {/* Dashboard */}
        </h1>
        <h1 className="text-blue-950 text-xs cursor-pointer">
          Details <i className="fas fa-arrow-right"></i>
        </h1>
      </div>
      <ActivityChart />
    </div>
  );
};

export default Dashboard;
