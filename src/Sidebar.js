import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-2/12 h-full rounded-l-3xl py-14 px-16">
      <h1 className="text-3xl font-bold font-sans text-blue-300">
        Health<span className="text-blue-950">care.</span>
      </h1>
      <ul className="mt-10 space-y-4">
        <h6 className="text-blue-300 text-sm">General</h6>
        <li className="text-blue-950 text-sm font-semibold hover:text-blue-950 cursor-pointer">
          <i className="mr-2 fas fa-th-large"> </i> Dashboard
        </li>
        <li className="text-gray-400 text-sm font-semibold hover:text-blue-950 cursor-pointer">
          <i className="mr-2 fas fa-history"> </i> History
        </li>
        <li className="text-gray-400 text-sm font-semibold hover:text-blue-950 cursor-pointer">
          <i className="mr-2 fas fa-calendar-alt"> </i> Calender
        </li>
        <li className="text-gray-400 text-sm font-semibold hover:text-blue-950 cursor-pointer">
          <i className="mr-2 fas fa-notes-medical"> </i> Appointments
        </li>
        <li className="text-gray-400 text-sm font-semibold hover:text-blue-950 cursor-pointer">
          <i className="mr-2 fas fa-chart-bar"> </i> Statistics
        </li>
      </ul>
      <ul className="mt-10 space-y-4">
        <h6 className="text-blue-300 text-sm">Tools</h6>
        <li className="text-gray-400 text-sm font-semibold hover:text-blue-950 cursor-pointer">
          <i className="mr-2 fas fa-comments"> </i> Chat
        </li>
        <li className="text-gray-400 text-sm font-semibold hover:text-blue-950 cursor-pointer">
          <i className="mr-2 fas fa-phone"> </i> Support
        </li>
      </ul>
      <ul className="mt-48">
        <li className="text-gray-400 text-sm font-semibold hover:text-blue-950 cursor-pointer">
          <i className="mr-2 fas fa-cog"> </i>Setting
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
