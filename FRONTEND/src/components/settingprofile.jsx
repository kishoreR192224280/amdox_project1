export default function SettingsProfile() {
  return (
    <div className="w-full">

      {/* Title */}
      <h3 className="text-lg font-semibold mb-6">Profile</h3>

      {/* FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Nationality */}
        <div>
          <label className="text-sm text-gray-600">Nationality</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-gray-700">
            <option>Select...</option>
          </select>
        </div>

        {/* DOB */}
        <div>
          <label className="text-sm text-gray-600">Date of Birth</label>
          <div className="relative mt-1">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
            />
            <span className="absolute right-3 top-[14px] text-gray-400 text-sm">
              📅
            </span>
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="text-sm text-gray-600">Gender</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-gray-700">
            <option>Select...</option>
          </select>
        </div>

        {/* Marital Status */}
        <div>
          <label className="text-sm text-gray-600">Marital Status</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-gray-700">
            <option>Select...</option>
          </select>
        </div>

        {/* Education */}
        <div>
          <label className="text-sm text-gray-600">Education</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-gray-700">
            <option>Select...</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="text-sm text-gray-600">Experience</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-gray-700">
            <option>Select...</option>
          </select>
        </div>
      </div>

      {/* BIOGRAPHY */}
      <div className="mt-6">
        <label className="text-sm text-gray-600">Biography</label>

        {/* TOP TOOLBAR */}
        <div className="flex items-center gap-3 border border-gray-300 rounded-t-lg px-3 py-2 mt-1 bg-gray-50 text-gray-600 text-sm">

          <button className="hover:text-blue-600 font-semibold">B</button>
          <button className="hover:text-blue-600 italic">I</button>
          <button className="hover:text-blue-600 underline">U</button>

          <span className="text-gray-300 select-none">|</span>

          <button className="hover:text-blue-600">🔗</button>
          <button className="hover:text-blue-600">• List</button>
          <button className="hover:text-blue-600">1. List</button>
          <button className="hover:text-blue-600">↦</button>
        </div>

        {/* TEXTAREA */}
        <textarea
          className="w-full border border-gray-300 rounded-b-lg px-4 py-3 h-40 outline-none text-gray-700"
          placeholder="Write down your biography here. Let the employers know who you are..."
        />
      </div>

      {/* SAVE BUTTON */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Save Changes
      </button>

    </div>
  );
}
