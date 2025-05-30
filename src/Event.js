import React from "react";

const Event = () => {
  const calendarData = [
    {
      day: "Mon",
      date: "26",
      t1: { time: "08:00", selected: false },
      t2: { time: "10:30", selected: false },
      t3: { time: "13:15", selected: false },
      selected: false,
    },
    {
      day: "Tues",
      date: "27",
      t1: { time: "08:45", selected: false },
      t2: { time: "11:00", selected: true },
      t3: { time: "15:30", selected: false },
      selected: true,
    },
    {
      day: "Wed",
      date: "28",
      t1: { time: "09:00", selected: false },
      t2: { time: "------", selected: false },
      t3: { time: "12:45", selected: false },
      selected: false,
    },
    {
      day: "Thurs",
      date: "29",
      t1: { time: "08:15", selected: false },
      t2: { time: "09:30", selected: true },
      t3: { time: "------", selected: false },
      selected: false,
    },
    {
      day: "Fri",
      date: "30",
      t1: { time: "------", selected: false },
      t2: { time: "12:00", selected: false },
      t3: { time: "16:15", selected: false },
      selected: false,
    },
    {
      day: "Sat",
      date: "31",
      t1: { time: "09:00", selected: true },
      t2: { time: "11:45", selected: false },
      t3: { time: "14:30", selected: false },
      selected: false,
    },
    {
      day: "Sun",
      date: "01",
      t1: { time: "08:45", selected: false },
      t2: { time: "12:15", selected: false },
      t3: { time: "15:45", selected: false },
      selected: false,
    },
  ];

  return (
    <div className="bg-gray-50 w-5/12 h-full rounded-r-3xl py-10 px-8">
      <div className="flex justify-end">
        <img
          className="h-11 w-11 mr-2 rounded-xl cursor-pointer"
          src="../profile.jpg"
        />

        <i className="p-3 border-2 fas fa-plus cursor-pointer rounded-xl text-white bg-blue-800"></i>
      </div>
      <div className="flex justify-between mt-1">
        <div className="text-blue-950 font-semibold text-xl mb-2">
          October 2021
        </div>
        <div>
          <i class="fas fa-arrow-left mr-2"></i>
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>

      {/* Calender */}
      <div className="h-40 w-full p-0 flex justify-evenly text-blue-950 mb-2">
        {calendarData.map((data, index) => (
          <div
            key={index}
            className="h-full flex flex-col justify-center rounded-2xl  px-2 place-items-center"
            style={{ backgroundColor: `${data.selected && "#DBEAFE"}` }}
          >
            <div className="mt-2">
              <div className="text-sm">{data.day}</div>
              <div className="text-3xl font-semibold">{data.date}</div>
            </div>
            <div>
              <div
                className="m-2 text-sm py-1 px-2 rounded-xl"
                style={{
                  backgroundColor: `${
                    data.t1.selected ? "#1e40af" : "transparent"
                  }`,
                  color: `${data.t1.selected ? "white" : "black"}`,
                }}
              >
                {data.t1.time}
              </div>
              <div
                className="m-2 text-sm py-1 px-2 rounded-xl"
                style={{
                  backgroundColor: `${
                    data.t2.selected ? "#1e40af" : "transparent"
                  }`,
                  color: `${data.t2.selected ? "white" : "black"}`,
                }}
              >
                {data.t2.time}
              </div>
              <div
                className="m-2 text-sm py-1 px-2 rounded-xl"
                style={{
                  backgroundColor: `${
                    data.t3.selected ? "#1e40af" : "transparent"
                  }`,
                  color: `${data.t3.selected ? "white" : "black"}`,
                }}
              >
                {data.t3.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments */}
      <div className="h-24 w-full flex justify-start">
        <div className="w-4/12 mt-3 h-full flex flex-col justify-center mr-3">
          <div className="bg-blue-800 h-28 mb-3 rounded-3xl text-sm p-3">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-semibold text-white">Dentiest</h2>
              <img className="w-4" src="../lungs.webp" alt="health_image" />
            </div>
            <div className="text-blue-300">09:00-11:00 </div>
            <div className="text-blue-300">Dr. Cameron Williamson</div>
          </div>
        </div>
        <div className="w-6/12 mt-3 h-full flex flex-col justify-center">
          <div className="bg-blue-100 h-28 mb-3 rounded-3xl text-sm p-3">
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

      {/* The Upcoming schedules */}
      <div className="text-xl font-semibold mt-4 mb-1">
        The Upcoming Schedules
      </div>
      <div className=" text-gray-400 font-semibold">On Thursday</div>
      <div className="h-24 w-full mb-2">
        <div className="h-24 w-full mb-2 flex justify-start">
          <div className="w-6/12 mt-3 h-full flex flex-col justify-center mr-3">
            <div className="bg-blue-100 h-28 mb-3 rounded-3xl text-sm p-3">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-blue-950">Health Checkup complete</h2>
                <img className="w-4" src="../lungs.webp" alt="health_image" />
              </div>
              <div className="text-blue-950">11:00 AM </div>
            </div>
          </div>
          <div className="w-5/12 mt-3 h-full flex flex-col justify-center">
            <div className="bg-blue-100 h-28 mb-3 rounded-3xl text-sm p-3">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-blue-950">
                  Ophthalmologist
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
            <div className="bg-blue-100 h-28 mb-3 rounded-3xl text-sm p-3">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-blue-950">
                  Cardiologist
                </h2>
                <img className="w-4" src="../lungs.webp" alt="health_image" />
              </div>
              <div className="text-blue-950">12:00 AM </div>
            </div>
          </div>
          <div className="w-5/12 mt-3 h-full flex flex-col justify-center">
            <div className="bg-blue-100 h-28 mb-3 rounded-3xl text-sm p-3">
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
