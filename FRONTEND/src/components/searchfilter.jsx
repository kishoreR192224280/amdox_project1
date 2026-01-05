import { useState } from "react";

export default function SearchFilters({
  mode = "job", // "job" | "employer"
  filters = {
    keyword: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    experience: ""
  },
  setFilters = () => { },
  onSearch = () => { }
}) {
  const [open, setOpen] = useState(false);
  const isEmployer = mode === "employer";
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
    <div className="w-full bg-white mt-8 rounded-xl shadow-md overflow-hidden">


      {/* ================= TOP SEARCH BAR ================= */}
      <div className="grid grid-cols-1 md:grid-cols-5 items-center px-4 py-4 gap-0">

        <div className="flex items-center gap-3 px-4 py-3 border-r">
          <img src="../image/search1.svg" className="w-5 h-5 opacity-70" />
          <input
            type="text"
            name="keyword"
            value={filters.keyword}
            onChange={handleChange}
            placeholder={
              isEmployer
                ? "Company name, keyword..."
                : "Job title, Keyword..."
            }
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />

        </div>


        <div className="flex items-center gap-3 px-4 py-3 border-r">
          <img src="../image/Location.svg" className="w-5 h-5 opacity-70" />
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <div className="flex items-center gap-3 px-4 py-3 border-r">
          <img src="../image/stack.svg" className="w-5 h-5 opacity-70" />
          <select
            name={isEmployer ? "industry" : "jobType"}
            value={isEmployer ? filters.industry : filters.jobType}
            onChange={handleChange}
            className="w-full outline-none text-gray-600 bg-transparent"
          >
            <option value="">
              {isEmployer ? "Select Industry" : "Select Category"}
            </option>

            {isEmployer ? (
              <>
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Education">Education</option>
                <option value="Marketing">Marketing</option>
              </>
            ) : (
              <>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
                <option value="Temporary">Temporary</option>
                <option value="Contract Base">Contract Base</option>
              </>
            )}
          </select>
        </div>


        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex items-center justify-center gap-2 px-4 py-3 border-r text-gray-600 font-medium"
        >
          Advance Filter
          <span
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
          >
            ▼
          </span>
        </button>

        <button
          type="button"
          onClick={onSearch}
          className="h-full px-6 bg-blue-600 text-white font-semibold rounded-lg ml-4 hover:bg-blue-700 transition"
        >
          {isEmployer ? "Find Employer" : "Find Job"}
        </button>
      </div>

      {/* ================= ADVANCED FILTER PANEL ================= */}
      {open && (
        <div className="border-t px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* ================= JOB FILTERS ================= */}
            {!isEmployer && (
              <>
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
                  {[
                    "Full Time",
                    "Part Time",
                    "Internship",
                    "Remote",
                    "Temporary",
                    "Contract Base"
                  ].map((type) => (
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

                {/* JOB LEVEL */}
                <FilterColumn title="Job Level">
                  <Radio label="Entry Level" />
                  <Radio label="Mid Level" />
                  <Radio label="Expert Level" />
                </FilterColumn>
              </>
            )}

            {/* ================= EMPLOYER FILTERS ================= */}
            {isEmployer && (
              <>
                {/* COMPANY SIZE */}
                <FilterColumn title="Company Size">
                  {["1-10", "11-50", "51-200", "201-500", "500+"].map((size) => (
                    <Radio
                      key={size}
                      label={size}
                      checked={filters.companySize === size}
                      onChange={() =>
                        setFilters((p) => ({ ...p, companySize: size }))
                      }
                    />
                  ))}
                </FilterColumn>

                {/* ORGANIZATION TYPE */}
                <FilterColumn title="Organization Type">
                  {["Private", "Public", "Startup", "Enterprise"].map((type) => (
                    <Checkbox
                      key={type}
                      label={type}
                      checked={filters.orgType === type}
                      onChange={() =>
                        setFilters((p) => ({ ...p, orgType: type }))
                      }
                    />
                  ))}
                </FilterColumn>

                {/* OPEN JOBS */}
                <FilterColumn title="Open Jobs">
                  {["1-5", "6-10", "10+"].map((jobs) => (
                    <Radio
                      key={jobs}
                      label={jobs}
                      checked={filters.openJobs === jobs}
                      onChange={() =>
                        setFilters((p) => ({ ...p, openJobs: jobs }))
                      }
                    />
                  ))}
                </FilterColumn>
              </>
            )}

            {/* ================= COMMON (UI ONLY) ================= */}
            <FilterColumn title="Education">
              {[
                "High School",
                "Intermediate",
                "Graduation",
                "Master Degree",
                "Bachelor Degree"
              ].map((e) => (
                <Checkbox key={e} label={e} />
              ))}
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
