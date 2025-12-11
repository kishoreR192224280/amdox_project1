export default function ApplyJobModal({ open, onClose, jobTitle }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      {/* Modal Box */}
      <div className="bg-white w-[650px] rounded-2xl shadow-xl p-7 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 w-9 h-9 flex items-center justify-center 
                   rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Apply Job: <span className="text-blue-600">{jobTitle}</span>
        </h2>

        {/* Resume Selector */}
        <div className="mb-5">
          <label className="text-gray-700 font-medium">Choose Resume</label>

          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2
                         text-gray-800 bg-white appearance-none focus:ring-blue-400 focus:border-blue-400"
            >
              <option className="text-gray-400">Select...</option>
              <option>Resume 1.pdf</option>
              <option>Resume 2.pdf</option>
            </select>

            {/* Dropdown Icon */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 
                             border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500">
            </span>
          </div>
        </div>

        {/* Cover Letter */}
        <div className="mb-5">
          <label className="text-gray-700 font-medium">Cover Letter</label>

          <textarea
            placeholder="Write down your biography here. Let the employers know who you are..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 h-36 
                       text-gray-700 placeholder-gray-400 outline-none focus:ring-1 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-7">
          {/* Cancel */}
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border text-blue-600 font-medium
                       hover:bg-blue-50 transition"
          >
            Cancel
          </button>

          {/* Apply Now */}
          <button className="px-7 py-2 bg-blue-600 text-white font-semibold rounded-lg 
                             flex items-center gap-2 hover:bg-blue-700 transition">
            Apply Now <span className="text-lg">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}
