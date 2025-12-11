export default function JobAlert() {
  const jobs = [
    {
      logo: "/google.png",
      title: "Technical Support Specialist",
      type: "Full Time",
      location: "Idaho, USA",
      salary: "$15K-$20K",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/youtube.png",
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Minnesota, USA",
      salary: "$10K-$15K",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/upwork.png",
      title: "Front End Developer",
      type: "Internship",
      location: "Mymensingh, Bangladesh",
      salary: "$10K-$15K",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/twitter.png",
      title: "Marketing Officer",
      type: "Full Time",
      location: "Montana, USA",
      salary: "$50K-$60K",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/upwork.png",
      title: "Networking Engineer",
      type: "Full Time",
      location: "Michigan, USA",
      salary: "$5K-$10K",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/microsoft.png",
      title: "Senior UX Designer",
      type: "Full Time",
      location: "United Kingdom of Great Britain",
      salary: "$30K-$35K",
      remaining: "4 Days Remaining",
      highlight: true,
    },
    {
      logo: "/facebook.png",
      title: "Junior Graphic Designer",
      type: "Full Time",
      location: "Mymensingh, Bangladesh",
      salary: "$40K-$50K",
      remaining: "4 Days Remaining",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Job Alerts <span className="text-gray-500">(9 new jobs)</span>
        </h2>

        <button className="text-blue-600 hover:underline text-sm">
          Edit Job Alerts
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div
            key={i}
            className={`flex justify-between items-center p-5 rounded-xl border bg-white
              transition-all duration-300
              ${
                job.highlight
                  ? "border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                  : "border-gray-200"
              }
            `}
          >
            {/* LEFT SECTION */}
            <div className="flex items-center gap-3">
              <img src={job.logo} className="w-12 h-12 rounded-lg" />

              <div>
                <h4 className="font-semibold text-gray-900">{job.title}</h4>

                {/* LOCATION + SALARY */}
                <div className="flex items-center gap-4 text-gray-500 text-sm mt-1">
                  <span className="flex items-center gap-1">
                    📍 {job.location}
                  </span>

                  <span className="flex items-center gap-1">
                    💲 {job.salary}
                  </span>
                </div>

                {/* TYPE + REMAINING */}
                <div className="flex items-center gap-4 text-sm mt-1">
                  <span className="text-xs px-2 py-1 rounded-lg bg-blue-100 text-blue-600">
                    {job.type}
                  </span>

                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    ⏳ {job.remaining}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-6">
              {/* BOOKMARK */}
              <button className="text-gray-500 hover:text-gray-700">
                <svg width="18" height="18" fill="none" stroke="currentColor">
                  <path d="M6 3h8v14l-4-3-4 3z" />
                </svg>
              </button>

              {/* APPLY BUTTON */}
              <button
                className={`px-6 py-2 rounded-lg flex items-center gap-2 font-medium transition
                ${
                  job.highlight
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                Apply Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
