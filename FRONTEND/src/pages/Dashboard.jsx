import { useState } from "react";
import CandidateDashboardSidebar from "../components/candidatedashboard";
import AppliedJobs from "../components/aplliedjobs";
import FavoriteJobs from "../components/favouritejob";
import JobAlert from "../components/jobalert";
import Settings from "../components/settings";
import Navbar from "../navigation/navbar";
import SearchFilters from "../components/searchfilter";
export default function DashboardPage() {
  const [activePage, setActivePage] = useState("overview");

  const appliedJobs = [
    {
      logo: "/upwork.png",
      title: "Networking Engineer",
      type: "Remote",
      location: "Washington",
      salary: "$50k-80k/month",
      date: "Feb 2, 2024 19:28",
      status: "Active",
    },
    {
      logo: "/dribbble.png",
      title: "Product Designer",
      type: "Full Time",
      location: "Dhaka",
      salary: "$50k-80k/month",
      date: "Dec 7, 2024 23:26",
      status: "Active",
    },
    {
      logo: "/apple.png",
      title: "Junior Graphic Designer",
      type: "Temporary",
      location: "Brazil",
      salary: "$50k-80k/month",
      date: "Feb 2, 2024 19:28",
      status: "Active",
    },
    {
      logo: "/microsoft.png",
      title: "Visual Designer",
      type: "Contract Base",
      location: "Wisconsin",
      salary: "$50k-80k/month",
      date: "Dec 7, 2024 23:26",
      status: "Active",
    },
  ];

  return (
  <div className="w-full min-h-screen bg-gray-50">

    {/* NAVBAR */}
    <Navbar />

    {/* MAIN WRAPPER */}
    <div className="flex w-full min-h-screen">

      {/* SIDEBAR */}
      <CandidateDashboardSidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* PAGE CONTENT */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8">

        {/* -------- Overview Page -------- */}
        {activePage === "overview" && (
          <>
            {/* Greeting */}
            <h1 className="text-2xl font-semibold text-gray-900">
              Hello, Esther Howard
            </h1>
            <p className="text-gray-500 mb-8">
              Here is your daily activities and job alerts
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-gray-500 text-sm">Applied jobs</p>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">589</h2>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-gray-500 text-sm">Favorite jobs</p>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">238</h2>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-gray-500 text-sm">Job Alerts</p>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">574</h2>
              </div>
            </div>

            {/* Profile Warning */}
            <div className="bg-red-500 text-white rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
              <div>
                <h3 className="text-lg font-semibold">
                  Your profile editing is not completed.
                </h3>
                <p className="text-sm opacity-90">
                  Complete your profile editing & build your custom Resume
                </p>
              </div>

              <button className="px-5 py-2 bg-white text-red-600 rounded-lg font-medium shadow hover:bg-gray-100 transition">
                Edit Profile →
              </button>
            </div>

            {/* Recently Applied */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

              <div className="flex justify-between items-center mb-5">
                <h3 className="font-semibold text-lg text-gray-900">Recently Applied</h3>
                <button className="text-blue-600 hover:underline text-sm">
                  View all →
                </button>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-4 py-3 text-gray-500 text-sm border-b bg-blue-50 rounded-md">
                <p className="pl-2">Job</p>
                <p>Date Applied</p>
                <p>Status</p>
                <p>Action</p>
              </div>

              {/* Job Rows */}
              {appliedJobs.map((job, i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 py-4 items-center border-b last:border-b-0"
                >
                  {/* Job Info */}
                  <div className="flex items-center gap-3">
                    <img src={job.logo} className="w-10 h-10 rounded-lg" />
                    <div>
                      <h4 className="font-medium text-gray-900">{job.title}</h4>
                      <p className="text-gray-500 text-sm">
                        {job.location} • {job.salary}
                      </p>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md mt-1 inline-block">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Date */}
                  <p className="text-gray-500 text-sm">{job.date}</p>

                  {/* Status */}
                  <p className="text-green-600 font-medium text-sm">✔ Active</p>

                  {/* Action */}
                  <button className="text-blue-600 font-medium hover:underline text-sm">
                    View Details
                  </button>
                </div>
              ))}

            </div>
          </>
        )}

        {/* Other Pages */}
        {activePage === "applied" && <AppliedJobs />}
        {activePage === "favorites" && <FavoriteJobs />}
        {activePage === "alerts" && <JobAlert />}
        {activePage === "settings" && <Settings />}
      </div>
    </div>
  </div>
);
}
