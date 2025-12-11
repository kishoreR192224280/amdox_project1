export default function SmallSearchBar() {
  return (
    <div className="flex items-center justify-between w-full px-5">

      {/* Left — Logo + Search Bar */}
      <div className="flex items-center w-[70%] gap-5">
        {/* Search Bar */}
        <div className="flex items-center bg-white border rounded-lg px-5 py-3 shadow-sm w-full">

          {/* Country Selector */}
          <div className="flex items-center gap-2 border-r pr-4">
            <img
              src="https://flagcdn.com/w20/in.png"
              className="w-5 h-4"
            />
            <span className="text-gray-700 text-sm">India</span>

            {/* ▼ icon */}
            <span className="inline-block border-l-4 border-r-4 border-t-6 border-transparent border-t-gray-500"></span>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-3 pl-4 w-full">
            <span className="text-blue-600 text-lg">🔍</span>

            <input
              type="text"
              placeholder="Job title, keyword, company"
              className="w-full outline-none text-gray-600 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Right — Notification + Profile */}
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
          <span className="text-2xl text-gray-800">🔔</span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>

        <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
      </div>
    </div>
  );
}
