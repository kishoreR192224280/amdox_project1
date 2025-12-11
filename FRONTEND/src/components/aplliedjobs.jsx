import Navbar from "../navigation/navbar";
import Pagination from "./pagination";
export default function AppliedJobs() {
  const jobs = [
    {
      logo: "/dribbble.png",
      title: "Marketing Manager",
      type1: "Featured",
      type2: "Remote",
      location: "New Mexico, USA",
      salary: "$50k–80k/month",
      days: "4 Days Remaining",
    },
    {
      logo: "/apple.png",
      title: "Project Manager",
      type1: "Featured",
      type2: "Full Time",
      location: "Dhaka, Bangladesh",
      salary: "$50k–80k/month",
      days: "4 Days Remaining",
    },
    {
      logo: "/figma.png",
      title: "Interaction Designer",
      type1: "Featured",
      type2: "Full Time",
      location: "New York, USA",
      salary: "$50k–80k/month",
      days: "4 Days Remaining",
    },
    {
      logo: "/upwork.png",
      title: "Junior Graphic Designer",
      type2: "Full Time",
      location: "Natore, Bangladesh",
      salary: "$30k–35k",
      days: "4 Days Remaining",
      highlight: true,
    },
    {
      logo: "/facebook.png",
      title: "Software Engineer",
      type2: "Part Time",
      location: "Montana, USA",
      salary: "$30k–35k",
      days: "4 Days Remaining",
    },
    {
      logo: "/slack.png",
      title: "Technical Support Specialist",
      type2: "Full Time",
      location: "Chattogram, Bangladesh",
      salary: "$30k–35k",
      days: "4 Days Remaining",
    },
    {
      logo: "/instagram.png",
      title: "Visual Designer",
      type2: "Full Time",
      location: "Konya, Turkey",
      salary: "$30k–35k",
      days: "4 Days Remaining",
    },
    {
      logo: "/google.png",
      title: "Senior UX Designer",
      type2: "Full Time",
      location: "Mymensingh, Bangladesh",
      salary: "$50k–80k/month",
      days: "4 Days Remaining",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-20">

      {/* NAVBAR */}
      {/* <Navbar /> */}
      {/* JOB LIST */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col gap-5">

        {jobs.map((job, i) => (
          <div
            key={i}
            className={`
              p-6 rounded-xl border flex justify-between items-center transition-all duration-300
              ${job.highlight
                ? "bg-white border-blue-500 shadow-xl scale-[1.01]"
                : "bg-blue-50 border-blue-100 hover:shadow-md hover:-translate-y-1 hover:bg-blue-100"}
            `}
          >
            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">
              <img
                src={job.logo}
                className="w-14 h-14 rounded-lg transition-transform duration-300 group-hover:scale-110"
              />

              <div>
                <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>

                <div className="flex items-center gap-2 mt-1">
                  {job.type1 && (
                    <span className="bg-red-100 text-red-600 px-2 py-1 text-xs rounded-lg">
                      {job.type1}
                    </span>
                  )}
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-lg">
                    {job.type2}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-500 text-sm mt-2">
                  <span>📍 {job.location}</span>
                  <span>💲 {job.salary}</span>
                  <span>🕒 {job.days}</span>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">

              {/* Bookmark */}
              <button className="p-2 border rounded-lg bg-white hover:bg-gray-100">
                <svg width="18" height="18" fill="none" stroke="currentColor">
                  <path d="M6 3h8v14l-4-3-4 3z" />
                </svg>
              </button>

              {/* BUTTON */}
              <button
                className={`
                  px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300
                  ${job.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"}
                `}
              >
                Apply Now →
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination/>
    </div>
  );
}
