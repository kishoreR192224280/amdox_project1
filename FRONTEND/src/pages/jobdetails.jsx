import Navbar from "../navigation/navbar";
import ApplyJobModal from "../components/applynowmodal";
import { useState } from "react";

export default function JobDetails() {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Top Navbar */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="text-right text-sm px-10 py-4 text-gray-500">
        Home <span className="text-gray-400">/</span> Find Job <span className="text-gray-400">/</span> Graphics & Design <span className="text-gray-400">/</span>
        <span className="text-gray-900 font-medium"> Job Details</span>
      </div>

      {/* Main Section */}
      <div className="px-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Job Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow">

            {/* Job Header */}
            <div className="flex justify-between items-start">

              {/* LEFT — Job Info */}
              <div className="flex items-start gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  className="w-20 h-20 rounded-full"
                />

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900">Senior UX Designer</h2>

                  <div className="flex gap-3 mt-2">

                    {/* Featured Badge */}
                    <span className="bg-[#FFEED2] text-[#D97B0E] px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>

                    {/* Full Time Badge */}
                    <span className="bg-[#E4EDFF] text-[#2667FF] px-3 py-1 rounded-full text-xs font-semibold">
                      Full Time
                    </span>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-6 mt-3 text-sm text-gray-600">
                    <a href="#" className="hover:text-blue-600 text-blue-600">https://instagram.com</a>
                    <span>(406) 555-0120</span>
                    <span className="text-gray-600">career@instagram.com</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — Apply */}
              <div className="flex flex-col items-end">

                <div className="flex items-center gap-3">

                  {/* Bookmark Button */}
                  <button className="p-3 rounded-lg border border-gray-300 hover:bg-blue-50 transition">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 5v16l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                    </svg>
                  </button>

                  {/* Apply Button */}
                  <button
                    onClick={() => setApplyOpen(true)}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                  >
                    Apply Now
                    <span className="text-xl">→</span>
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Job expire in: <span className="text-red-600 font-medium">March 30, 2025</span>
                </p>
              </div>
            </div>

            {/* Job Description */}
            <h3 className="text-xl font-semibold text-gray-900 mt-8">Job Description</h3>
            <p className="text-gray-600 mt-2 leading-7">
              We are looking for a highly skilled Senior UX Designer to join our team...
            </p>

            {/* Responsibilities */}
            <h3 className="text-xl font-semibold text-gray-900 mt-8">Responsibilities</h3>
            <ul className="mt-3 space-y-3 text-gray-700">
              {[
                "Lead the end-to-end UX design process, from research to final implementation.",
                "Conduct user research and usability testing.",
                "Create wireframes and prototypes.",
                "Develop user personas and UX documentation.",
                "Collaborate with cross-functional teams.",
                "Ensure accessibility and usability best practices.",
                "Stay updated with latest design trends."
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 text-lg">✔</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Share Section */}
            <div className="mt-8">
              <p className="text-gray-700 font-semibold mb-2">Share this job:</p>
              <div className="flex gap-4">
                <button className="text-blue-600 font-medium">Facebook</button>
                <button className="text-blue-500 font-medium">Twitter</button>
                <button className="text-red-500 font-medium">Pinterest</button>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* Job Overview */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Job Overview</h3>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <Overview label="Job Posted:" value="14 January, 2025" />
                <Overview label="Job Expire In:" value="30 March, 2025" />
                <Overview label="Salary:" value="$50k–80k/month" />
                <Overview label="Location:" value="New York, USA" />
                <Overview label="Education:" value="Graduation" />
                <Overview label="Job Type:" value="Full Time" />
                <Overview label="Experience:" value="10–15 Years" />
              </div>
            </div>

            {/* Company Details */}
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  className="w-14 h-14 rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Instagram</h3>
                  <p className="text-gray-500 text-sm">Social networking service</p>
                </div>
              </div>

              <div className="text-gray-700 text-sm space-y-2">
                <p><strong>Founded in:</strong> March 21, 2006</p>
                <p><strong>Organization type:</strong> Private Company</p>
                <p><strong>Company size:</strong> 120–300 Employees</p>
                <p><strong>Phone:</strong> (406) 555-0120</p>
                <p><strong>Email:</strong> twitter@gmail.com</p>
                <p><strong>Website:</strong> https://twitter.com</p>
              </div>

              <div className="flex gap-3 mt-4 text-blue-600 text-xl">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Related Jobs */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Jobs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RelatedJobCard name="Freepik" title="Visual Designer" type="Full Time" salary="$10k–$15k" />
            <RelatedJobCard name="Instagram" title="Front End Developer" type="Contract Base" salary="$50k–$80k" />
            <RelatedJobCard name="Upwork" title="Technical Support Specialist" type="Full Time" salary="$35k–$40k" />
            <RelatedJobCard name="Facebook" title="Software Engineer" type="Part Time" salary="$15k–$20k" />
            <RelatedJobCard name="Microsoft" title="Product Designer" type="Full Time" salary="$40k–$50k" />
            <RelatedJobCard name="Youtube" title="Interaction Designer" type="Full Time" salary="$20k–$25k" />
          </div>
        </div>

      </div>

      <ApplyJobModal open={applyOpen} onClose={() => setApplyOpen(false)} jobTitle="Senior UX Designer" />
    </div>
  );
}

/* --- Components --- */
function Overview({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function RelatedJobCard({ name, title, type, salary }) {
  return (
    <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition cursor-pointer">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500">{name}</p>
      <p className="mt-2 text-sm text-gray-600">{type}</p>
      <p className="font-semibold text-blue-700 mt-1">{salary}</p>
    </div>
  );
}
