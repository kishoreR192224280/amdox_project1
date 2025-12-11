export default function FavoriteJobs() {
  const jobs = [
    {
      logo: "/google.png",
      title: "Technical Support Specialist",
      type: "Full Time",
      location: "Idaho, USA",
      salary: "$15K-$20K",
      status: "expired",
      remaining: "Job Expire",
    },
    {
      logo: "/dribbble.png",
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Minnesota, USA",
      salary: "$10K-$15K",
      status: "active",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/microsoft.png",
      title: "Senior UX Designer",
      type: "Full Time",
      location: "United Kingdom of Great Britain",
      salary: "$30K-$35K",
      status: "active",
      remaining: "4 Days Remaining",
      highlight: true,
    },
    {
      logo: "/facebook.png",
      title: "Junior Graphic Designer",
      type: "Full Time",
      location: "Mymensingh, Bangladesh",
      salary: "$40K-$50K",
      status: "active",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/google.png",
      title: "Technical Support Specialist",
      type: "Full Time",
      location: "Idaho, USA",
      salary: "$15K-$20K",
      status: "expired",
      remaining: "Job Expire",
    },
    {
      logo: "/twitter.png",
      title: "Product Designer",
      type: "Full Time",
      location: "Sivas, Turkey",
      salary: "$50K-$70K",
      status: "active",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/dribbble.png",
      title: "Project Manager",
      type: "Full Time",
      location: "Ohio, USA",
      salary: "$50K-$80K",
      status: "active",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/google.png",
      title: "Technical Support Specialist",
      type: "Full Time",
      location: "Idaho, USA",
      salary: "$15K-$20K",
      status: "expired",
      remaining: "Job Expire",
    },
    {
      logo: "/google.png",
      title: "Technical Support Specialist",
      type: "Full Time",
      location: "Idaho, USA",
      salary: "$15K-$20K",
      status: "expired",
      remaining: "Job Expire",
    },
    {
      logo: "/microsoft.png",
      title: "Marketing Manager",
      type: "Temporary",
      location: "Konya, Turkey",
      salary: "$20K-$25K",
      status: "active",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/apple.png",
      title: "Visual Designer",
      type: "Part Time",
      location: "Washington, USA",
      salary: "$10K-$15K",
      status: "active",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/dribbble.png",
      title: "Interaction Designer",
      type: "Remote",
      location: "Penn, USA",
      salary: "$35K-$40K",
      status: "active",
      remaining: "4 Days Remaining",
    },
    {
      logo: "/upwork.png",
      title: "Senior UX Designer",
      type: "Contract Base",
      location: "Sylhet, Bangladesh",
      salary: "$30K-$35K",
      status: "active",
      remaining: "4 Days Remaining",
    },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-6">
        Favorite Jobs <span className="text-gray-500">(17)</span>
      </h2>

      <div className="space-y-4">

        {jobs.map((job, i) => (
          <div
            key={i}
            className={`flex justify-between items-center p-5 rounded-xl border bg-white 
              transition-all duration-300
              ${job.highlight ? "border-blue-500 shadow-[0_0_20px_rgba(0,115,255,0.4)]" : "border-gray-200"}
            `}
          >
            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">
              <img src={job.logo} className="w-12 h-12 rounded-lg" />

              <div>
                <h4 className="font-semibold text-gray-900">{job.title}</h4>

                <div className="flex items-center gap-4 text-gray-500 text-sm mt-1">
                  {/* Location */}
                  <span className="flex items-center gap-1">
                    <svg width="14" height="14" stroke="currentColor" fill="none">
                      <path d="M12 6a4 4 0 10-8 0c0 4 4 7 4 7s4-3 4-7z" />
                    </svg>
                    {job.location}
                  </span>

                  {/* Salary */}
                  <span className="flex items-center gap-1">
                    <svg width="15" height="15" fill="none" stroke="currentColor">
                      <path d="M3 8h10M3 8a3 3 0 116 0 3 3 0 01-6 0z" />
                    </svg>
                    {job.salary}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  {/* Job Type */}
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-lg">
                    {job.type}
                  </span>

                  {/* Remaining Or Expired */}
                  {job.status === "expired" ? (
                    <span className="text-red-500 text-xs flex items-center gap-1">
                      <svg width="14" height="14" fill="none" stroke="currentColor">
                        <circle cx="7" cy="7" r="6" />
                        <line x1="7" y1="4" x2="7" y2="8" />
                        <circle cx="7" cy="10" r="1" />
                      </svg>
                      Job Expire
                    </span>
                  ) : (
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <svg width="14" height="14" fill="none" stroke="currentColor">
                        <circle cx="7" cy="7" r="6" />
                        <path d="M7 4v3l2 2" />
                      </svg>
                      {job.remaining}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-6">

              {/* Bookmark Icon */}
              <button className="text-gray-500 hover:text-gray-900 transition">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M6 3h8v14l-4-3-4 3z" />
                </svg>
              </button>

              {/* Buttons */}
              {job.status === "expired" ? (
                <button className="px-5 py-2 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed">
                  Deadline Expired
                </button>
              ) : (
                <button
                  className={`px-6 py-2 rounded-lg flex items-center gap-2 
                    ${job.highlight
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"}
                  `}
                >
                  Apply Now →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-3 mt-10">
        <button className="p-2 text-gray-500">←</button>

        {[1, 2, 3, 4, 5].map((p) => (
          <button
            key={p}
            className={`w-10 h-10 flex items-center justify-center rounded-full 
              ${p === 1 ? "bg-blue-600 text-white" : "bg-white border"}
            `}
          >
            {p.toString().padStart(2, "0")}
          </button>
        ))}

        <button className="p-2 text-gray-500">→</button>
      </div>
    </div>
  );
}
