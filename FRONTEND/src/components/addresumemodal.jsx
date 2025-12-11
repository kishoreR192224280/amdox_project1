export default function AddResumeModal({ open, onClose, onAdd }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[480px] rounded-xl shadow-lg p-6 relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 bg-white shadow w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Add Cv/Resume</h2>

        {/* Resume Name */}
        <label className="text-gray-600 font-medium">Cv/Resume Name</label>
        <input
          type="text"
          className="w-full border rounded-lg px-4 py-2 mt-1 mb-4"
          placeholder="Enter CV/Resume Name"
        />

        {/* Upload Section */}
        <label className="text-gray-600 font-medium">Upload your Cv/Resume</label>

        <div className="mt-1 border-2 border-dashed rounded-xl px-4 py-6 flex flex-col items-center text-center text-gray-500">
          <span className="text-3xl mb-2">↻</span>
          <p className="font-medium">Browse File or drop here</p>
          <p className="text-xs mt-1">Only PDF format available. Max file size 12 MB.</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onAdd}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Cv/Resume
          </button>
        </div>
      </div>
    </div>
  );
}
