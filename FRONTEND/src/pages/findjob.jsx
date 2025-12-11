import Navbar from "../navigation/navbar";
import SearchFilters from "../components/searchfilter";
import JobCard from "../components/jobcard";
import Pagination from "../components/pagination";
import FilterBar from "../components/filterpage";


export default function FindJob() {
  const jobs = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/2111/2111589.png",
      company: "Reddit",
      title: "Marketing Officer",
      location: "United Kingdom",
      salary: "$30K-$35K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Dribbble",
      title: "Senior UX Designer",
      location: "California",
      salary: "$50K-$80K",
      type: "Full Time"
    }
  ];

 return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Search Filters */}
        <SearchFilters />

        {/* Selected Filters */}
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Design ×</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">New York ×</span>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-end mt-4">
          <FilterBar />
        </div>

        {/* Job Cards Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          mt-6
        ">
          {jobs.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10">
          <Pagination />
        </div>

      </div>
    </div>
  );
}