import { useState } from "react";
import EmployerFilter from "../components/employerfilter";
import Navbar from "../navigation/navbar";
import Pagination from "../components/pagination";

export default function EmployersPage() {
  const [showFilter, setShowFilter] = useState(false);

  const employers = [
    { name: "Dribbble", logo: "/dribbble.png", country: "United States" },
    { name: "Udemy", logo: "/udemy.png", country: "China" },
    { name: "Figma", logo: "/figma.png", country: "United States" },
    { name: "Google", logo: "/google.png", country: "Australia" },
    { name: "Microsoft", logo: "/microsoft.png", country: "Australia" },
    { name: "Twitter", logo: "/twitter.png", country: "Australia" },
    { name: "Instagram", logo: "/instagram.png", country: "Australia" },
    { name: "Youtube", logo: "/youtube.png", country: "Canada" },
    { name: "Apple", logo: "/apple.png", country: "United States" },
    { name: "Slack", logo: "/slack.png", country: "Germany" },
    { name: "Reddit", logo: "/reddit.png", country: "France" },
    { name: "Upwork", logo: "/upwork.png", country: "China" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
    {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto flex gap-6 px-4 sm:px-6 py-6">

        {/* DESKTOP FILTER SIDEBAR */}
        <div className="hidden lg:block w-64">
          <EmployerFilter />
        </div>

        {/* MOBILE FILTER DRAWER */}
        {showFilter && (
          <div className="fixed inset-0 bg-black/40 z-40 lg:hidden">

            {/* Slide Panel */}
            <div
              className="
              absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-5
              transition-transform duration-300 
              translate-x-0
            "
            >
              {/* Close Button */}
              <button
                onClick={() => setShowFilter(false)}
                className="mb-4 text-gray-700 font-semibold"
              >
                ✕ Close
              </button>

              <EmployerFilter />
            </div>
          </div>
        )}

        {/* RIGHT CONTENT */}
        <div className="flex-1">

          {/* === TOP CONTROLS === */}
          <div className="flex justify-between items-center mb-6">

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilter(true)}
              className="lg:hidden px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700"
            >
              Filter
            </button>

            {/* Sorting / Page Size / View Toggle */}
            <div className="flex items-center gap-4">

              {/* Sort */}
              <select className="border border-gray-300 bg-white rounded-lg px-3 py-2 text-gray-600 text-sm">
                <option>Latest</option>
                <option>Oldest</option>
                <option>A–Z</option>
              </select>

              {/* Per Page */}
              <select className="border border-gray-300 bg-white rounded-lg px-3 py-2 text-gray-600 text-sm">
                <option>12 per page</option>
                <option>24 per page</option>
                <option>48 per page</option>
              </select>

              {/* View Toggle */}
              <div className="flex gap-2">
                <button className="p-2 border rounded-lg bg-white hover:bg-gray-100">
                  <img src="/grid-icon.png" className="w-4" />
                </button>
                <button className="p-2 border rounded-lg bg-white hover:bg-gray-100">
                  <img src="/list-icon.png" className="w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* === EMPLOYERS LIST === */}
          <div className="flex flex-col gap-4">

            {employers.map((emp, i) => (
              <div
                key={i}
                className="
                bg-blue-50 border border-blue-100 rounded-xl p-6 
                flex justify-between items-center 
                hover:shadow-md transition
              "
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  <img src={emp.logo} className="w-12 h-12 rounded-lg" />

                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {emp.name}
                    </h3>

                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="text-blue-500 text-base">📍</span>
                      {emp.country}
                      <span>•</span>
                      {emp.openJobs} open jobs
                    </p>
                  </div>
                </div>

                {/* RIGHT BUTTON */}
                <button className="
                px-5 py-2 bg-blue-500 text-white rounded-lg 
                flex items-center gap-2 hover:bg-blue-600 transition
              ">
                  Open Position →
                </button>
              </div>
            ))}

          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10">
            <Pagination />
          </div>

        </div>
      </div>
    </div>
  );
}
