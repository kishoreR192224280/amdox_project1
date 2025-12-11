import { useState } from "react";

export default function SearchFilters() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-200 w-full py-6 mt-8 rounded-xl">

      {/* Top Search Bar */}
      <div className="flex flex-wrap gap-4 items-center px-6">

        <input
          type="text"
          placeholder="Job title, Keyword…"
          className="flex-1 border rounded-lg px-5 py-3 bg-white placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Location"
          className="flex-1 border rounded-lg px-5 py-3 bg-white placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          className="flex-1 border rounded-lg px-5 py-3 bg-white text-gray-600
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Select Category</option>
        </select>

        {/* Advance Filter Button */}
        <button
          onClick={() => setOpen(!open)}
          className="px-6 py-3 bg-white border rounded-lg flex items-center gap-2 
                     hover:bg-blue-50 transition shadow-sm"
        >
          Advanced Filter
          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </button>

        {/* Find Job Button */}
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow 
                           hover:bg-blue-600 transition">
          Find Job
        </button>
      </div>

      {/* Advance Filter Dropdown */}
      {open && (
        <div
          className="
            mt-6 mx-6 bg-white p-6 rounded-xl shadow-lg border 
            animate-[fadeIn_0.3s_ease-out]
          "
        >
          <div
            className="
              grid gap-10
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            "
          >
            <FilterColumn
              title="Experience"
              type="radio"
              options={[
                "Freshers",
                "1 - 2 Years",
                "2 - 4 Years",
                "4 - 6 Years",
                "6 - 8 Years",
                "8 - 10 Years",
                "10 - 15 Years",
                "15+ Years",
              ]}
            />

            <FilterColumn
              title="Salary"
              type="radio"
              options={[
                "$50 - $1000",
                "$1000 - $2000",
                "$3000 - $4000",
                "$4000 - $6000",
                "$6000 - $8000",
                "$8000 - $10000",
                "$10000 - $15000",
                "$15000+",
              ]}
            />

            <FilterColumn
              title="Job Type"
              type="checkbox"
              options={[
                "All",
                "Full Time",
                "Part Time",
                "Internship",
                "Remote",
                "Temporary",
                "Contract Base",
              ]}
            />

            <FilterColumn
              title="Education"
              type="checkbox"
              options={[
                "All",
                "High School",
                "Intermediate",
                "Graduation",
                "Master Degree",
                "Bachelor Degree",
              ]}
            />

            <FilterColumn
              title="Job Level"
              type="radio"
              options={["Entry Level", "Mid Level", "Expert Level"]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* Reusable Column Component */
function FilterColumn({ title, options, type }) {
  return (
    <div className="border-r pr-4 last:border-none">
      <h3 className="font-semibold mb-3 text-lg text-gray-800">{title}</h3>

      <div className="flex flex-col gap-2">
        {options.map((opt, i) => (
          <label
            key={i}
            className="flex items-center gap-2 text-gray-700 cursor-pointer"
          >
            <input type={type} name={title} className="accent-blue-600" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

