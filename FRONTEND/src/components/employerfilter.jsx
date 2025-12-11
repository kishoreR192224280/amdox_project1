import { useState } from "react";

export default function EmployerFilter() {
  const [radius, setRadius] = useState(32);
  const [openRadius, setOpenRadius] = useState(true);
  const [openOrg, setOpenOrg] = useState(true);

  return (
    <div className="w-full bg-white shadow rounded-xl p-5 space-y-6">

      {/* LOCATION RADIUS */}
      <div className="border-b pb-4">
        <button
          onClick={() => setOpenRadius(!openRadius)}
          className="w-full flex justify-between items-center text-gray-800 font-semibold hover:text-blue-600 transition"
        >
          <span>Location Radius</span>
          <span className="text-blue-600">{radius} miles</span>
        </button>

        {/* Collapsible Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openRadius ? "max-h-40 mt-4" : "max-h-0"
          }`}
        >
          <input
            type="range"
            min="1"
            max="100"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>
      </div>

      {/* ORGANIZATION TYPE */}
      <div>
        <button
          onClick={() => setOpenOrg(!openOrg)}
          className="w-full flex justify-between items-center text-gray-800 font-semibold hover:text-blue-600 transition"
        >
          <span>Organization Type</span>
        </button>

        {/* Collapsible Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openOrg ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 text-gray-700 text-sm">
            {[
              "Government",
              "Semi Government",
              "NGO",
              "Private Company",
              "International Agencies",
              "Others",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
