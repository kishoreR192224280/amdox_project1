import { useState } from "react";

export default function SettingsAccount() {
  const [profilePublic, setProfilePublic] = useState(true);
  const [resumePublic, setResumePublic] = useState(false);

  return (
    <div className="w-full">

      {/* MAIN HEADER */}
      <h3 className="text-lg font-semibold mb-6">Account Setting</h3>

      {/* ---------------- CONTACT INFO ---------------- */}
      <h4 className="text-md font-medium mb-3">Contact Info</h4>

      {/* MAP LOCATION */}
      <label className="text-sm text-gray-500">Map Location</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 mb-4"
      />

      {/* PHONE */}
      <label className="text-sm text-gray-500">Phone</label>
      <div className="grid grid-cols-12 gap-3 mt-1 mb-4">
        <select className="col-span-3 border border-gray-300 rounded-lg px-4 py-2">
          <option>+880</option>
        </select>

        <input
          type="text"
          placeholder="Phone number.."
          className="col-span-9 border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* EMAIL */}
      <label className="text-sm text-gray-500">Email</label>
      <div className="relative mt-1 mb-6">
        <span className="absolute left-4 top-[11px] text-gray-400 text-lg">✉️</span>
        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 rounded-lg pl-12 py-2"
        />
      </div>

      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg mb-12 shadow-sm">
        Save Changes
      </button>

      {/* ---------------- NOTIFICATION SETTINGS ---------------- */}
      <h4 className="text-md font-medium mb-4">Notification</h4>

      <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-12 text-sm text-gray-700">

        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked />
          Notify me when employers shortlisted me
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Notify me when employers saved my profile
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Notify me when my applied jobs are expire
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked />
          Notify me when employers rejected me
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Notify me when I have up to 5 job alerts
        </label>
      </div>

      {/* ---------------- JOB ALERTS ---------------- */}
      <h4 className="text-md font-medium mb-4">Job Alerts</h4>

      <div className="grid grid-cols-2 gap-6 mb-6">

        {/* Role */}
        <div>
          <label className="text-sm text-gray-500">Role</label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-3 text-gray-400 text-lg">💼</span>
            <input
              type="text"
              placeholder="Your job roles"
              className="w-full border border-gray-300 rounded-lg pl-10 py-2"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="text-sm text-gray-500">Location</label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-3 text-gray-400 text-lg">📍</span>
            <input
              type="text"
              placeholder="City, state, country name"
              className="w-full border border-gray-300 rounded-lg pl-10 py-2"
            />
          </div>
        </div>
      </div>

      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg mb-12 shadow-sm">
        Save Changes
      </button>

      {/* ---------------- PRIVACY SETTINGS ---------------- */}
      <h4 className="text-md font-medium mb-3">Profile Privacy</h4>

      <div className="flex items-center gap-4 mb-1">
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium text-white 
            ${profilePublic ? "bg-blue-600" : "bg-gray-300"}`}
          onClick={() => setProfilePublic(true)}
        >
          YES
        </button>

        <button
          className={`px-6 py-2 rounded-full text-sm font-medium border
            ${!profilePublic ? "border-blue-600 text-blue-600" : "border-gray-300 text-gray-600"}`}
          onClick={() => setProfilePublic(false)}
        >
          NO
        </button>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        {profilePublic ? "Your profile is public now" : "Your profile is private now"}
      </p>

      {/* Resume Privacy */}
      <h4 className="text-md font-medium mb-3">Resume Privacy</h4>

      <div className="flex items-center gap-4 mb-1">
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium border
            ${resumePublic ? "border-blue-600 text-blue-600" : "border-gray-300 text-gray-600"}`}
          onClick={() => setResumePublic(true)}
        >
          YES
        </button>

        <button
          className={`px-6 py-2 rounded-full text-sm font-medium text-white 
            ${!resumePublic ? "bg-red-500" : "bg-gray-300"}`}
          onClick={() => setResumePublic(false)}
        >
          NO
        </button>
      </div>

      <p className="text-xs text-gray-500 mb-12">
        {resumePublic ? "Your resume is public now" : "Your resume is private now"}
      </p>

      {/* ---------------- CHANGE PASSWORD ---------------- */}
      <h4 className="text-md font-medium mb-3">Change Password</h4>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <input
          type="password"
          placeholder="Current Password"
          className="border border-gray-300 rounded-lg px-4 py-2"
        />

        <input
          type="password"
          placeholder="New Password"
          className="border border-gray-300 rounded-lg px-4 py-2"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg mb-10 shadow-sm">
        Save Changes
      </button>

      {/* ---------------- DELETE ACCOUNT ---------------- */}
      <h4 className="text-md font-medium mb-3">Delete Your Account</h4>

      <p className="text-sm text-gray-500 mb-4 leading-6">
        If you delete your Jobpilot account, you will no longer be able to get information
        about matched jobs, employers, job alerts and others…
      </p>

      <button className="text-red-600 font-medium">
        ⛔ Close Account
      </button>

    </div>
  );
}
