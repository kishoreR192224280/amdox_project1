export default function CandidateDashboardSidebar({ activePage, setActivePage }) {
  return (
    <div className="w-64 bg-white border-r hidden lg:block p-6">

      {/* HEADER */}
      <h3 className="text-gray-400 text-xs font-medium tracking-wide mb-6">
        CANDIDATE DASHBOARD
      </h3>

      {/* MENU ITEMS */}
      <div className="space-y-1">

        {/* Overview */}
        <button
          onClick={() => setActivePage("overview")}
          className={`w-full flex items-center gap-3 py-3 px-3 rounded-lg relative
            ${activePage === "overview"
              ? "bg-blue-50 text-blue-600 font-medium"
              : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          {activePage === "overview" && (
            <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r"></span>
          )}

          {/* Overview Icon */}
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 3h12v4H4zM4 9h12v4H4zM4 15h12v2H4z" />
          </svg>

          Overview
        </button>

        {/* Applied Jobs */}
        <button
          onClick={() => setActivePage("applied")}
          className={`w-full flex items-center gap-3 py-3 px-3 rounded-lg relative
            ${activePage === "applied"
              ? "bg-blue-50 text-blue-600 font-medium"
              : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          {activePage === "applied" && (
            <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r"></span>
          )}

          {/* Briefcase Icon */}
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 7h14v10H3z" />
            <path d="M7 7V5h6v2" />
          </svg>

          Applied Jobs
        </button>

        {/* Favorite Jobs */}
        <button
          onClick={() => setActivePage("favorites")}
          className={`w-full flex items-center gap-3 py-3 px-3 rounded-lg relative
            ${activePage === "favorites"
              ? "bg-blue-50 text-blue-600 font-medium"
              : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          {activePage === "favorites" && (
            <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r"></span>
          )}

          {/* Bookmark Icon */}
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 3h8v14l-4-3-4 3z" />
          </svg>

          Favorite Jobs
        </button>

        {/* Job Alert */}
        <button
          onClick={() => setActivePage("alerts")}
          className={`w-full flex items-center justify-between py-3 px-3 rounded-lg relative
            ${activePage === "alerts"
              ? "bg-blue-50 text-blue-600 font-medium"
              : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          <div className="flex items-center gap-3">
            {activePage === "alerts" && (
              <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r"></span>
            )}

            {/* Bell Icon */}
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M10 18c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2z" />
              <path d="M4 14h12l-1-2V9a5 5 0 10-10 0v3l-1 2z" />
            </svg>

            Job Alert
          </div>

          {/* Badge */}
          <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-lg font-medium">
            09
          </span>
        </button>

        {/* Settings */}
        <button
          onClick={() => setActivePage("settings")}
          className={`w-full flex items-center gap-3 py-3 px-3 rounded-lg relative
            ${activePage === "settings"
              ? "bg-blue-50 text-blue-600 font-medium"
              : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          {activePage === "settings" && (
            <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r"></span>
          )}

          {/* Settings Icon */}
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M10 13a3 3 0 110-6 3 3 0 010 6z" />
            <path d="M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" />
          </svg>

          Settings
        </button>
      </div>

      {/* LOGOUT */}
      <button className="mt-14 flex items-center gap-3 text-gray-500 hover:text-red-500 px-3">
        {/* Logout Icon */}
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 3H5v14h4" />
          <path d="M15 12l-3-3 3-3" />
          <path d="M12 9h8" />
        </svg>

        Log-out
      </button>
    </div>
  );
}
