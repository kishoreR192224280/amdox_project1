import { useEffect, useState } from "react";

import Navbar from "../navigation/navbar";
import SearchFilters from "../components/searchfilter";
import JobCard from "../components/jobcard";
import Pagination from "../components/pagination";
import FilterBar from "../components/filterpage";

export default function FindJob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
  keyword: "",
  location: "",
  jobType: "",
  salaryMin: "",
  salaryMax: "",
  experience: ""
});


  
  const fetchJobs = async () => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams(filters).toString();

      const res = await fetch(
        `http://localhost:5000/api/jobs?${params}`
      );

      if (!res.ok) throw new Error("Failed to fetch jobs");

      const data = await res.json();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 🔍 Search Filters */}
        <SearchFilters
          filters={filters}
          setFilters={setFilters}
          onSearch={fetchJobs}
        />

        {/* Selected Filters (UI only for now) */}
        <div className="flex flex-wrap gap-2 mt-6">
          {filters.keyword && (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {filters.keyword} ×
            </span>
          )}
          {filters.location && (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {filters.location} ×
            </span>
          )}
          {filters.jobType && (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {filters.jobType} ×
            </span>
          )}
        </div>

        {/* Filter Bar */}
        <div className="flex justify-end mt-4">
          <FilterBar />
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500 mt-10">
            Loading jobs...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 mt-10">
            {error}
          </p>
        )}

        {/* Job Cards */}
        {!loading && !error && (
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-6 
              mt-6
            "
          >
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <JobCard
                  key={job._id}
                  logo={job.logo}
                  company={job.company}
                  title={job.jobTitle}
                  location={job.location}
                  salary={job.salary.display}
                  type={job.jobType}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No jobs found
              </p>
            )}
          </div>
        )}

        {/* Pagination (UI only) */}
        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
