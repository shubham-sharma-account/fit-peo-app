import React from "react";

const HealthGraph = () => {
  const healthData = [
    { id: 1, name: "Lungs", date: "26 Oct 2021", progress: 75, imageSrc:"../lungs.webp" },
    { id: 2, name: "Teeth", date: "27 Oct 2021", progress: 75, imageSrc:"../lungs.webp" },
    { id: 3, name: "Bone", date: "27 Oct 2021", progress: 100, imageSrc:"../lungs.webp" },
  ];
  return (
    <div className="w-4/12 mt-3 h-full flex flex-col justify-center">
      {healthData.map((data) => {
        return (
          <div className="bg-blue-50 h-28 mb-3 rounded-3xl p-4 text-sm">
            <div className="flex justify-start items-center mb-2">
              <img className="w-10" src={data.imageSrc} alt="health_image"/>
              <h2 className="ml-3 text-2xl font-semibold text-blue-950">
                {data.name}
              </h2>
            </div>
            <div className="text-blue-300">Date: {data.date}</div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: data.progress }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthGraph;
