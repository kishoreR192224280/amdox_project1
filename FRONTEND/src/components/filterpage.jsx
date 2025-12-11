import { useState } from "react";

export default function FilterBar() {
  const [sortOpen, setSortOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);

  return (
    <div className="flex items-center justify-end gap-4">

      {/* SORT — Latest */}
      <div
        className="relative"
        onClick={() => {
          setSortOpen(!sortOpen);
          setPageOpen(false);
        }}
      >
        <div className="flex items-center border  px-4 py-3 bg-white shadow-sm cursor-pointer">
          <span className="text-gray-600 text-sm">Latest</span>
          <span className="ml-2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500"></span>
        </div>

        {/* Dropdown */}
        {sortOpen && (
          <div className="absolute right-0  bg-white shadow-lg border mt-2 w-40 z-20">
            {["Latest", "Oldest", "Featured", "Popular"].map((item, i) => (
              <p
                key={i}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* PER PAGE — 12 per page */}
      <div
        className="relative"
        onClick={() => {
          setPageOpen(!pageOpen);
          setSortOpen(false);
        }}
      >
        <div className="flex items-center border px-4 py-3 bg-white shadow-sm cursor-pointer">
          <span className="text-gray-600 text-sm">12 per page</span>
          <span className="ml-2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500"></span>
        </div>

        {/* Dropdown */}
        {pageOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg border  w-40 z-20">
            {[12, 24, 36, 48].map((num, i) => (
              <p
                key={i}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
              >
                {num} per page
              </p>
            ))}
          </div>
        )}
      </div>
      {/* VIEW SWITCH — Grid/List */}
      <div className="flex items-center gap-3 border px-4 py-3 bg-white shadow-sm cursor-pointer">
        {/* Grid Icon */}
        <div className="p-2 rounded-lg bg-gray-100 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 3h4v4H3V3zm5 0h4v4H8V3zm5 0h4v4h-4V3zM3 8h4v4H3V8zm5 0h4v4H8V8zm5 0h4v4h-4V8zM3 13h4v4H3v-4zm5 0h4v4H8v-4zm5 0h4v4h-4v-4z" />
          </svg>
        </div>

        {/* List Icon */}
        <div className="p-2 rounded-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M4 6h12v2H4V6zm0 4h12v2H4v-2zm0 4h12v2H4v-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
