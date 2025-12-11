export default function SearchBar() {
  return (
    <div className="w-full bg-[#E5E5E5] py-8 px-10">
      <div className="flex items-center bg-white border rounded-full shadow-md px-8 py-4 w-full gap-6">

        {/* 🔍 Job Title */}
        <div className="flex items-center gap-3 text-gray-500 w-full">
          <span className="text-blue-600 text-xl">🔍</span>
          <input
            type="text"
            placeholder="Job title, Keyword..."
            className="outline-none w-full text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-300"></div>

        {/* 📍 Location */}
        <div className="flex items-center gap-3 text-gray-500 w-full">
          <span className="text-blue-600 text-xl">📍</span>
          <input
            type="text"
            placeholder="Location"
            className="outline-none w-full text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-300"></div>

        {/* 📦 Category */}
        <div className="flex items-center gap-3 text-gray-600 cursor-pointer">
          <span className="text-blue-600 text-xl">🗂️</span>
          <span className="text-gray-500">Select Category</span>
          <span className="ml-2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500"></span>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-300"></div>

        {/* ⚙️ Advance Filter */}
        <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
          <span className="text-gray-500">Advance Filter</span>
          <span className="border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500"></span>
        </div>

        {/* Find Job Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition">
          Find Job
        </button>
      </div>
    </div>
  );
}
