import Navbar from "../navigation/navbar";
import ApplyJobModal from "../components/ApplyJobModel";
import { useEffect, useState } from "react";
import JobCard from "../components/jobcard";
import { useParams } from "react-router-dom";

export default function JobDetails() {
  const [job, setJob] = useState(null);
  const { id } = useParams();
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [jobLoading, setJobLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [applyOpen, setApplyOpen] = useState(false);
  const shareUrl = window.location.href;
  const shareText = `${job?.title || "Job Opening"} at ${job?.company?.name || "Company"}`;


  useEffect(() => {
    const fetchJobData = async () => {
      try {
        setJobLoading(true);

        const jobRes = await fetch(
          `http://localhost:5000/api/jobs/${id}`
        );

        if (!jobRes.ok) throw new Error("Failed to fetch job");

        const jobData = await jobRes.json();
        setJob(jobData);
      } catch (error) {
        console.error("Job fetch error:", error);
      } finally {
        setJobLoading(false);
      }
    };

    if (id) {
      fetchJobData();
    }
  }, [id]);



  useEffect(() => {
    const fetchRelatedJobs = async () => {
      try {
        setRelatedLoading(true);

        const res = await fetch("http://localhost:5000/api/jobs");

        if (!res.ok) throw new Error("Failed to fetch jobs");

        const data = await res.json();
        setRelatedJobs(data);
      } catch (error) {
        console.error("Related jobs fetch error:", error);
      } finally {
        setRelatedLoading(false);
      }
    };

    fetchRelatedJobs();
  }, []);

  useEffect(() => {
    console.log("Related jobs fetched:", relatedJobs);
  }, [relatedJobs]);

  if (jobLoading) {
    return (
      <p className="text-center mt-20 text-gray-500">
        Loading job details...
      </p>
    );
  }

  if (!job) {
    return (
      <p className="text-center mt-20 text-red-500">
        Job not found
      </p>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= BREADCRUMB ================= */}
      <div className="bg-gray-100 px-10 py-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Job Details</h1>

        <div className="text-sm text-gray-500">
          Home <span className="mx-1">/</span>
          Find Job <span className="mx-1">/</span>
          Graphics & Design <span className="mx-1">/</span>
          <span className="text-gray-900 font-medium">Job Details</span>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="px-10 mt-8">

        {/* ================= FULL WIDTH JOB HEADER ================= */}
        <div className="bg-white p-8 mb-8">
          <div className="flex justify-between items-start">

            {/* LEFT — JOB INFO */}
            <div className="flex items-start gap-4">
              <img
                src={job?.logo}
                alt={job?.company?.name}
                className="w-20 h-20 rounded-full text-black"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {job?.company?.name}
                </h2>

                <div className="flex gap-6 mt-3 text-sm text-gray-600">

                  {job?.company?.contact?.website && (
                    <a
                      href={job.company.contact.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <img src="../image/link.svg" />
                      {job.company.contact.website}
                    </a>
                  )}

                  {job?.company?.contact?.phone && (
                    <span className="flex items-center gap-2">
                      <img src="../image/phone.svg" />
                      {job.company.contact.phone}
                    </span>
                  )}

                  {job?.company?.contact?.email && (
                    <span className="flex items-center gap-2">
                      <img src="../image/mail.svg" />
                      {job.company.contact.email}
                    </span>
                  )}

                </div>
              </div>
            </div>

            {/* RIGHT — APPLY */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-3">

                {/* Bookmark */}
                <button className="p-3 rounded-md bg-blue-100 hover:bg-blue-300 transition">
                  <img src="../image/save.svg" />
                </button>

                {/* Apply */}
                <button
                  onClick={() => setApplyOpen(true)}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md flex items-center gap-2 hover:bg-blue-700 transition"
                >
                  Apply Now →
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Job expire in:
                <span className="text-red-600 font-medium"> March 30, 2025</span>
              </p>
            </div>

          </div>
        </div>

        {/* ================= GRID CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ========== LEFT CONTENT ========== */}
          <div className="lg:col-span-2 bg-white p-8  ">

            {/* Job Description */}
            <h3 className="text-xl font-semibold text-gray-900">Job Description</h3>
            <p className="text-gray-600 mt-3 leading-7">
              We are looking for a highly skilled Senior UX Designer to join our team and lead the design of user-centered digital experiences. In this role, you will collaborate with product managers, developers, and other designers to create intuitive and visually appealing interfaces. You will drive UX strategies, conduct research, and ensure seamless user experiences across web and mobile platforms.
            </p>

            {/* Responsibilities */}
            <h3 className="text-xl font-semibold text-gray-900 mt-8">
              Responsibilities
            </h3>

            <ul className="mt-4 text-gray-500">
              {job?.responsibilities?.length > 0 ? (
                job.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span>✅</span>
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-400">
                  No responsibilities listed for this job.
                </li>
              )}
            </ul>

            {/* Share */}
            <div className="mt-8 flex items-center gap-4">
              <p className="font-semibold text-gray-700">Share this job:</p>
              <div className=" flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm text-blue-600 font-medium hover:bg-gray-50 transition"
                >
                  <img src="../image/facebook.svg" className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm text-blue-600 font-medium hover:bg-gray-50 transition"
                >
                  <img src="../image/twitter.svg" className="w-4 h-4" />
                  Twitter
                </a>

                <a
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm text-blue-600 font-medium hover:bg-gray-50 transition"
                >
                  <img src="../image/pinterest.svg" className="w-4 h-4" />
                  Pinterest
                </a>

              </div>
            </div>
          </div>

          {/* ========== RIGHT SIDEBAR ========== */}
          <div className="space-y-6">

            {/* Job Overview */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl text-black font-semibold mb-4">
                Job Overview
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                <Overview
                  icon="../image/calendar.svg"
                  label="Job Posted"
                  value={
                    job?.jobPosted
                      ? new Date(job.jobPosted).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                      : "—"
                  }
                />

                <Overview
                  icon="../image/expire.svg"
                  label="Job Expire In"
                  value="30 Mar, 2025"
                />

                <Overview
                  icon="../image/Livejob.svg"
                  label="Education"
                  value={job?.education || "Graduation"}
                />

                <Overview
                  icon="../image/purse.svg"
                  label="Salary"
                  value={job?.salary?.display || "—"}
                />

                <Overview
                  icon="../image/map.svg"
                  label="Location"
                  value={job?.location || "—"}
                />

                <Overview
                  icon="../image/Livejob.svg"
                  label="Job Type"
                  value={job?.jobType || "—"}
                />

                <Overview
                  icon="../image/Livejob.svg"
                  label="Experience"
                  value={job?.experience || "—"}
                />
              </div>
            </div>


            {/* Company Info */}
            <div className="bg-white text-gray-300 p-6 rounded-2xl border border-gray-100">

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={job?.company?.logo || job?.logo}
                  className="w-14 h-14 rounded-xl"
                  alt={job?.company?.name || "Company"}
                />
                <div>
                  <h3 className="text-xl font-semibold text-black">{job?.company?.name || "Company"}</h3>
                  <p className="text-sm text-gray-400">{job?.company?.shortInfo || "Company information not available"}</p>
                </div>
              </div>

              {/* Info rows */}
              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-400">Founded in:</span>
                  <span className="text-black">{job?.company?.founded || "—"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Organization type:</span>
                  <span className="text-black">{job?.company?.organizationType || "—"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Company size:</span>
                  <span className="text-black">{job?.company?.size || "—"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Phone:</span>
                  <span className="text-black">{job?.company?.contact?.phone || "—"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-black">{job?.company?.contact?.email || "—"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Website:</span>
                  <span className="text-black">{job?.company?.contact?.website || "—"}</span>
                </div>

              </div>

              {/* Social icons */}
              <div className="flex gap-4 mt-6">

                {job?.company?.contact?.socialLinks?.facebook && (
                  <a
                    href={job.company.contact.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="group w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <img
                      src="../image/facebook.svg"
                      className="w-5 h-5 transition duration-300 group-hover:invert"
                      alt="Facebook"
                    />
                  </a>
                )}

                {job?.company?.contact?.socialLinks?.twitter && (
                  <a
                    href={job.company.contact.socialLinks.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="group w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
                  >
                    <img
                      src="../image/twitter.svg"
                      className="w-5 h-5 transition duration-300 group-hover:invert"
                      alt="Twitter"
                    />
                  </a>
                )}

                {job?.company?.contact?.socialLinks?.instagram && (
                  <a
                    href={job.company.contact.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="group w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <img
                      src="../image/insta.svg"
                      className="w-5 h-5 transition duration-300 group-hover:invert"
                      alt="Instagram"
                    />
                  </a>
                )}

                {job?.company?.contact?.socialLinks?.youtube && (
                  <a
                    href={job.company.contact.socialLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="group w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <img
                      src="../image/youtube.svg"
                      className="w-5 h-5 transition duration-300 group-hover:invert"
                      alt="YouTube"
                    />
                  </a>
                )}

              </div>


            </div>

          </div>
        </div>

        {/* ================= RELATED JOBS ================= */}
        <div className="mt-12">
          <h2 className="text-2xl text-black font-bold mb-6">
            Related Jobs
          </h2>

          {relatedLoading ? (
            <p className="text-gray-500">Loading related jobs...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedJobs
                .filter((job) =>
                  job.jobTitle?.toLowerCase().includes("designer")
                ).slice(0, 6).map((job) => (
                  <JobCard
                    key={job._id}
                    id={job._id}
                    logo={job.logo}
                    title={job.jobTitle}
                    company={job.company?.name || job.company}
                    location={job.location}
                    type={job.jobType}
                    salary={job.salary?.display}
                  />

                ))}
            </div>
          )}
        </div>

      </div>

      {/* ================= APPLY MODAL ================= */}
      <ApplyJobModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        jobTitle="Senior UX Designer"
      />
    </div>
  );
}

/* --- Components --- */
function Overview({ icon, label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <img src={icon} className="w-6 h-6" alt={label} />
      <p className="text-xs text-gray-500 uppercase">{label}</p>
      <p className="font-semibold text-black">{value}</p>
    </div>
  );
}

function RelatedJobCard({
  company,
  logo,
  title,
  type,
  salary,
  location,
  featured
}) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition relative">
      {featured && (
        <span className="absolute top-3 right-3 bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
          Featured
        </span>
      )}

      <div className="flex items-center gap-3 mb-3">
        <img src={logo} className="w-10 h-10 rounded-lg" alt={company} />
        <div>
          <p className="font-semibold">{company}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>

      <h3 className="font-semibold text-lg text-black">{title}</h3>
      <p className="text-sm text-gray-600">{type}</p>
      <p className="font-semibold text-blue-700 mt-2">{salary}</p>
    </div>
  );
}