import Navbar from "../navigation/navbar";
import SearchFilters from "../components/searchfilter";
export default function SingleEmployerPage() {
  const positions = [
    {
      logo: "/freepik.png",
      name: "Freepik",
      country: "China",
      title: "Visual Designer",
      type: "Full Time",
      salary: "$10K-$15K",
      featured: true,
    },
    {
      logo: "/instagram.png",
      name: "Instagram",
      country: "Australia",
      title: "Front End Developer",
      type: "Contract Base",
      salary: "$50K-$80K",
    },
    {
      logo: "/upwork.png",
      name: "Upwork",
      country: "France",
      title: "Technical Support Specialist",
      type: "Full Time",
      salary: "$35K-$40K",
    },
    {
      logo: "/facebook.png",
      name: "Facebook",
      country: "United Kingdom of Great Britain",
      title: "Software Engineer",
      type: "Part Time",
      salary: "$15K-$20K",
    },
    {
      logo: "/microsoft.png",
      name: "Microsoft",
      country: "Australia",
      title: "Product Designer",
      type: "Full Time",
      salary: "$40K-$50K",
    },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-20">
      <Navbar/>
      <SearchFilters/>
      {/* TOP BANNER */}
      <div className="w-full h-56">
        <img
          src="/image/background.svg"
          className="w-full h-full object-cover rounded-none"
        />
      </div>

      {/* EMPLOYER HEADER CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 -mt-20 flex justify-between items-center">

        {/* Logo + Info */}
        <div className="flex items-center gap-5">
          <img src="/twitter.png" className="w-16 h-16 rounded-lg" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Twitter</h2>
            <p className="text-gray-500">Information Technology (IT)</p>
          </div>
        </div>

        {/* Button */}
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
          View Open Position →
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE CONTENT */}
        <div className="lg:col-span-2">

          {/* Description */}
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Description</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a leading IT solutions provider committed to innovation...
          </p>

          {/* Company Benefits */}
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Company Benefits</h3>
          <ul className="text-gray-600 space-y-2 mb-6 text-sm">
            <li>✔ Competitive Salary...</li>
            <li>✔ Flexible Work Environment...</li>
            <li>✔ Health & Wellness...</li>
            <li>✔ Career Growth...</li>
            <li>✔ Employee Recognition...</li>
            <li>✔ Inclusive Culture...</li>
          </ul>

          {/* Company Vision */}
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Company Vision</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Empowering businesses with innovative technology...
          </p>

          {/* SHARE */}
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">Share profile:</span>
            <button className="px-3 py-1 rounded-lg bg-blue-100 text-blue-600">Facebook</button>
            <button className="px-3 py-1 rounded-lg bg-blue-100 text-blue-600">Twitter</button>
            <button className="px-3 py-1 rounded-lg bg-red-100 text-red-600">Pinterest</button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Company Details */}
          <div className="bg-white shadow rounded-xl p-6 space-y-6 text-sm">

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">📅</span>
              <div>
                <p className="text-gray-500">Founded In:</p>
                <p className="font-semibold text-gray-900">14 June, 2023</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">🏢</span>
              <div>
                <p className="text-gray-500">Organization Type:</p>
                <p className="font-semibold text-gray-900">Private Company</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">👥</span>
              <div>
                <p className="text-gray-500">Team Size:</p>
                <p className="font-semibold text-gray-900">120–300 Candidates</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">💼</span>
              <div>
                <p className="text-gray-500">Industry Type:</p>
                <p className="font-semibold text-gray-900">Technology</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow rounded-xl p-6 space-y-4 text-sm">

            <h3 className="font-semibold text-lg text-gray-900">Contact Information</h3>

            <div>
              <p className="text-gray-500">Website</p>
              <p className="font-semibold text-gray-900">www.estherhoward.com</p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-semibold text-gray-900">+1-202-555-0141</p>
            </div>

            <div>
              <p className="text-gray-500">Email Address</p>
              <p className="font-semibold text-gray-900">esther.howard@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Open Position (05)</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {positions.map((job, i) => (
            <div
              key={i}
              className="bg-blue-50 p-5 rounded-xl border border-blue-100 hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <img src={job.logo} className="w-12 h-12 rounded-lg" />
                <div>
                  <h4 className="font-semibold text-gray-900">{job.name}</h4>
                  <p className="text-gray-500 text-sm">{job.country}</p>
                </div>
              </div>

              {job.featured && (
                <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded-lg mb-2">
                  Featured
                </span>
              )}

              {/* Details */}
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{job.title}</h3>
              <p className="text-gray-500">{job.type}</p>
              <p className="font-semibold text-gray-900 mt-1">{job.salary}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
