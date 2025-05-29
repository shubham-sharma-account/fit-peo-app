import React from "react";

const Event = () => {
  return (
    <div className="bg-gray-100 w-5/12 h-full rounded-r-3xl py-10 px-8">
      <div className="flex justify-end">
        <img
          className="h-11 w-11 mr-2 rounded-xl cursor-pointer"
          src="../profile.jpg"
        />

        <i className="p-3 border-2 fas fa-plus cursor-pointer rounded-xl text-white bg-blue-950"></i>
      </div>
      <div className="flex justify-between mt-1">
        <div className="text-blue-950 font-semibold">October 2021</div>
        <div>
          <i class="fas fa-arrow-left mr-2"></i>
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
      <div className="h-40 w-full bg-white mb-2">Calender</div>
      <div className="h-24 w-full mb-2 flex justify-start">
        <div className="w-4/12 mt-3 h-full flex flex-col justify-center mr-3">
          <div className="bg-blue-950 h-28 mb-3 rounded-2xl text-sm p-3">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-semibold text-white">Dental</h2>
              <img className="w-4" src="../lungs.webp" alt="health_image" />
            </div>
            <div className="text-blue-300">09:00-11:00 </div>
            <div className="text-blue-300">Dr. Cameron Williamson</div>
          </div>
        </div>
        <div className="w-6/12 mt-3 h-full flex flex-col justify-center">
          <div className="bg-blue-100 h-28 mb-3 rounded-2xl text-sm p-3">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-semibold text-blue-950">
                Physiotherapy Appointment
              </h2>
              <img className="w-4" src="../lungs.webp" alt="health_image" />
            </div>
            <div className="text-blue-950">11:00-12:00 </div>
            <div className="text-blue-950">Dr. Kevin Djones</div>
          </div>
        </div>
      </div>
      <div className="text-2xl font-semibold mt-4">The Upcoming Schedules</div>
      <div className=" text-gray-400 font-semibold">On Thursday</div>
      <div className="h-24 w-full mb-2">
        <div className="h-24 w-full mb-2 flex justify-start">
          <div className="w-6/12 mt-3 h-full flex flex-col justify-center mr-3">
            <div className="bg-blue-100 h-28 mb-3 rounded-2xl text-sm p-3">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-blue-950">Dental</h2>
                <img className="w-4" src="../lungs.webp" alt="health_image" />
              </div>
              <div className="text-blue-950">11:00 AM </div>
            </div>
          </div>
          <div className="w-5/12 mt-3 h-full flex flex-col justify-center">
            <div className="bg-blue-100 h-28 mb-3 rounded-2xl text-sm p-3">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-blue-950">
                  Physiotherapy Appointment
                </h2>
                <img className="w-4" src="../lungs.webp" alt="health_image" />
              </div>
              <div className="text-blue-950">14:00 PM </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  text-gray-400 font-semibold">On Saturday</div>
      <div className="h-24 w-full">
        <div className="h-24 w-full mb-2 flex justify-start">
          <div className="w-6/12 mt-3 h-full flex flex-col justify-center mr-3">
            <div className="bg-blue-100 h-28 mb-3 rounded-2xl text-sm p-3">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-blue-950">Cardiologist</h2>
                <img className="w-4" src="../lungs.webp" alt="health_image" />
              </div>
              <div className="text-blue-950">12:00 AM </div>
            </div>
          </div>
          <div className="w-5/12 mt-3 h-full flex flex-col justify-center">
            <div className="bg-blue-100 h-28 mb-3 rounded-2xl text-sm p-3">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-blue-950">
                  Neurologist
                </h2>
                <img className="w-4" src="../lungs.webp" alt="health_image" />
              </div>
              <div className="text-blue-950">16:00 PM </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
