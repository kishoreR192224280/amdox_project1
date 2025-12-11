import { useState } from "react";


export default function AdvanceFilter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white p-5 rounded-xl shadow">
      {/* TOP FILTER BAR */}
      <div className="flex items-center gap-4">
        
        {/* Job Title */}
        <div className="flex-1 bg-white border rounded-lg px-5 py-3 flex items-center gap-3 shadow-sm">
          <FaSearch className="text-blue-500" />
          <input
            type="text"
            placeholder="Job title, Keyword..."
            className="w-full outline-none"
          />
        </div>

        {/* Location */}
        <div className="flex-1 bg-white border rounded-lg px-5 py-3 flex items-center gap-3 shadow-sm">
          <FaMapMarkerAlt className="text-blue-500" />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none"
          />
        </div>

        {/* Category */}
        <div className="flex-1 bg-white border rounded-lg px-5 py-3 flex items-center justify-between shadow-sm cursor-pointer">
          <span>Select Category</span>
          <FaChevronDown />
        </div>

        {/* Advance Filter Toggle */}
        <button
          className="px-4 py-3 border rounded-lg flex items-center gap-2 hover:bg-blue-50 transition"
          onClick={() => setOpen(!open)}
        >
          Advance Filter
          <FaChevronDown
            className={`transition ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Find Job Button */}
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Find Job
        </button>
      </div>

      {/* ADVANCE FILTER DROPDOWN */}
      {open && (
        <div className="mt-6 bg-white p-6 rounded-xl shadow-lg border">
          <div className="grid grid-cols-5 gap-10">

            {/* Experience */}
            <FilterColumn title="Experience" options={[
              "Freshers", "1 - 2 Years", "2 - 4 Years", "4 - 6 Years",
              "6 - 8 Years", "8 - 10 Years", "10 - 15 Years", "15+ Years"
            ]} type="radio" />

            {/* Salary */}
            <FilterColumn title="Salary" options={[
              "$50 - $1000", "$1000 - $2000", "$3000 - $4000", "$4000 - $6000",
              "$6000 - $8000", "$8000 - $10000", "$10000 - $15000", "$15000+"
            ]} type="radio" />

            {/* Job Type */}
            <FilterColumn title="Job Type" options={[
              "All", "Full Time", "Part Time", "Internship",
              "Remote", "Temporary", "Contract Base"
            ]} type="checkbox" />

            {/* Education */}
            <FilterColumn title="Education" options={[
              "All", "High School", "Intermediate",
              "Graduation", "Master Degree", "Bachelor Degree"
            ]} type="checkbox" />

            {/* Job Level */}
            <FilterColumn title="Job Level" options={[
              "Entry Level", "Mid Level", "Expert Level",
            ]} type="radio" />

          </div>
        </div>
      )}
    </div>
  );
}

function FilterColumn({ title, options, type }) {
  return (
    <div className="border-r last:border-none pr-4">
      <h3 className="font-semibold mb-3 text-lg">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((opt, i) => (
          <label key={i} className="flex items-center gap-2 text-gray-700 cursor-pointer">
            <input type={type} name={title} className="accent-blue-600" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
