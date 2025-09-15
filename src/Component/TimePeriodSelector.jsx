// src/components/TimePeriodSelector.jsx
import React, { useState } from "react";
import { MdCalendarToday } from "react-icons/md";
import { GiCrownedHeart } from "react-icons/gi";

const TimePeriodSelector = () => {
  const [activePeriod, setActivePeriod] = useState("3Months");

  const periods = [
    { id: "1Month", label: "1 Month" },
    { id: "3Months", label: "3 Months" },
    { id: "1Year", label: "1 Year", icon: <GiCrownedHeart className="inline-block ml-1 text-purple-600" /> },
  ];

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 mt-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-gray-500 font-semibold">Time Period</h4>
        <span className="text-gray-400 text-sm">dd:mm:yyyy - dd:mm:yyyy</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => setActivePeriod(period.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              activePeriod === period.id
                ? "bg-purple-100 text-purple-600 border-purple-300"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {period.label}
            {period.icon && period.icon}
          </button>
        ))}
      </div>
      <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 flex items-center justify-center w-full">
        <MdCalendarToday className="mr-1 text-lg" />
        Custom
      </button>
    </div>
  );
};

export default TimePeriodSelector;

