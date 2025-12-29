import { useState } from "react";

export default function SearchFilters({
  filters = {
    keyword: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    experience: ""
  },
  setFilters = () => {},
  onSearch = () => {}
}) {
  const [open, setOpen] = useState(false);

  // Text & select handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Salary helper
  const setSalary = (min, max) => {
    setFilters((prev) => ({
      ...prev,
      salaryMin: min,
      salaryMax: max
    }));
  };

  return (
    <div className="w-full bg-white rounded-xl shadow border mt-8 overflow-hidden">

      {/* ================= TOP SEARCH BAR ================= */}
      <div className="flex flex-wrap items-center gap-4 px-6 py-5">

        <input
          type="text"
          name="keyword"
          value={filters.keyword}
          onChange={handleChange}
          placeholder="Job title, Keyword..."
          className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Location"
          className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="jobType"
          value={filters.jobType}
          onChange={handleChange}
          className="flex-1 px-4 py-3 border rounded-lg text-gray-600"
        >
          <option value="">Select Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
          <option value="Temporary">Temporary</option>
          <option value="Contract Base">Contract Base</option>
        </select>

        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex items-center gap-2 text-blue-600 font-medium"
        >
          Advance Filter
          <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
            ▲
          </span>
        </button>

        <button
          type="button"
          onClick={onSearch}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
        >
          Find Job
        </button>
      </div>

      {/* ================= ADVANCED FILTER PANEL ================= */}
      {open && (
        <div className="border-t px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* EXPERIENCE */}
            <FilterColumn title="Experience">
              {[
                ["Freshers", "0"],
                ["1 - 2 Years", "1-2"],
                ["2 - 4 Years", "2-4"],
                ["4 - 6 Years", "4-6"],
                ["6 - 8 Years", "6-8"],
                ["8 - 10 Years", "8-10"],
                ["10 - 15 Years", "10-15"],
                ["15+ Years", "15+"]
              ].map(([label, value]) => (
                <Radio
                  key={value}
                  label={label}
                  checked={filters.experience === value}
                  onChange={() =>
                    setFilters((p) => ({ ...p, experience: value }))
                  }
                />
              ))}
            </FilterColumn>

            {/* SALARY */}
            <FilterColumn title="Salary">
              <Radio label="$50 - $1000" onChange={() => setSalary(50, 1000)} />
              <Radio label="$1000 - $2000" onChange={() => setSalary(1000, 2000)} />
              <Radio label="$3000 - $4000" onChange={() => setSalary(3000, 4000)} />
              <Radio label="$4000 - $6000" onChange={() => setSalary(4000, 6000)} />
              <Radio label="$6000 - $8000" onChange={() => setSalary(6000, 8000)} />
              <Radio label="$8000 - $10000" onChange={() => setSalary(8000, 10000)} />
              <Radio label="$10000 - $15000" onChange={() => setSalary(10000, 15000)} />
              <Radio label="$15000+" onChange={() => setSalary(15000, 1000000)} />
            </FilterColumn>

            {/* JOB TYPE */}
            <FilterColumn title="Job Type">
              {["Full Time", "Part Time", "Internship", "Remote", "Temporary", "Contract Base"].map((type) => (
                <Checkbox
                  key={type}
                  label={type}
                  checked={filters.jobType === type}
                  onChange={() =>
                    setFilters((p) => ({ ...p, jobType: type }))
                  }
                />
              ))}
            </FilterColumn>

            {/* EDUCATION (UI ONLY FOR NOW) */}
            <FilterColumn title="Education">
              {["High School", "Intermediate", "Graduation", "Master Degree", "Bachelor Degree"].map((e) => (
                <Checkbox key={e} label={e} />
              ))}
            </FilterColumn>

            {/* JOB LEVEL (UI ONLY) */}
            <FilterColumn title="Job Level">
              <Radio label="Entry Level" />
              <Radio label="Mid Level" />
              <Radio label="Expert Level" />
            </FilterColumn>

          </div>
        </div>
      )}
    </div>
  );
}

/* ================= REUSABLE UI ================= */

function FilterColumn({ title, children }) {
  return (
    <div className="border-r last:border-none pr-6">
      <h3 className="font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function Radio({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer text-gray-700">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="accent-blue-600"
      />
      {label}
    </label>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer text-gray-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-blue-600"
      />
      {label}
    </label>
  );
}
