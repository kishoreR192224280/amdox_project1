import { useState } from "react";
import AddResumeModal from "./addresumemodal";
import SettingsProfile from "./settingprofile";
import SettingsSocialLinks from "./settingsociallinks";
import SettingsAccount from "./accountsetting";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("personal");
  const [menuOpen, setMenuOpen] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const resumes = [
    { name: "Professional Resume", size: "3.5 MB" },
    { name: "Product Designer", size: "4.7 MB" },
    { name: "Visual Designer", size: "1.3 MB" },
  ];

  return (
    <div className="w-full">

      {/* PAGE TITLE */}
      <h2 className="text-xl font-semibold mb-6">Setting</h2>

      {/* TABS */}
      <div className="flex items-center gap-10 border-b pb-3 mb-8">
        {[
          { id: "personal", label: "Personal" },
          { id: "profile", label: "Profile" },
          { id: "social", label: "Social Links" },
          { id: "account", label: "Account Setting" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 border-b-2 text-sm font-medium transition
              ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* -------- PERSONAL TAB -------- */}
      {activeTab === "personal" && (
        <>
          {/* BASIC INFORMATION */}
          <h3 className="text-lg font-semibold mb-4">Basic Information</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Profile Picture Upload */}
            <div>
              <div className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center text-center text-gray-500">
                <span className="text-3xl mb-2">⬆️</span>
                <p className="font-medium">Browse photo or drop here</p>
                <p className="text-xs mt-1">
                  Best size larger than 400px. Max 5MB.
                </p>
              </div>
            </div>

            {/* Inputs */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Title / Headline</label>
                <input className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Experience</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1">
                  <option>Select...</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">Education</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1">
                  <option>Select...</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-gray-600">Personal Website</label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-3 text-gray-400">🔗</span>
                  <input
                    placeholder="Website url..."
                    className="w-full border border-gray-300 rounded-lg pl-10 py-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-sm">
            Save Changes
          </button>

          {/* Resume Section */}
          <h3 className="text-lg font-semibold mt-10 mb-4">Your CV/Resume</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {resumes.map((resume, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-xl p-4 relative"
              >
                <p className="font-medium text-gray-900">{resume.name}</p>
                <p className="text-gray-500 text-sm">{resume.size}</p>

                {/* Menu Button */}
                <button
                  onClick={() =>
                    setMenuOpen(menuOpen === index ? null : index)
                  }
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                  ⋮
                </button>

                {/* Dropdown */}
                {menuOpen === index && (
                  <div className="absolute right-3 top-10 bg-white shadow-lg border rounded-lg w-32 py-2 text-sm z-50">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      ✏️ Edit Resume
                    </button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                      🗑 Delete
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Add CV Box */}
            <div
              onClick={() => setShowModal(true)}
              className="border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 text-center"
            >
              <span className="text-3xl">+</span>
              <p className="font-medium">Add CV/Resume</p>
              <p className="text-xs mt-1">Browse file or drop here. Only PDF</p>
            </div>
          </div>

          <AddResumeModal open={showModal} onClose={() => setShowModal(false)} />
        </>
      )}

      {/* -------- OTHER TABS -------- */}

      {activeTab === "profile" && <SettingsProfile />}
      {activeTab === "social" && <SettingsSocialLinks />}
      {activeTab === "account" && <SettingsAccount />}
    </div>
  );
}
