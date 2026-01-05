import { useNavigate } from "react-router-dom";

export default function JobCard({
  id,
  logo,
  title,
  company,
  location,
  salary,
  type,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/jobs/${id}`)}
      className="
        group bg-blue-50 p-5 rounded-xl w-full
        shadow hover:shadow-lg transition 
        border border-transparent hover:border-blue-400 
        hover:bg-blue-600 cursor-pointer
      "
    >
      <div className="flex items-center gap-4 mb-3">
        <img
          src={logo}
          alt={company?.name || "Company"}
          className="h-12 w-12 rounded-xl object-contain"
        />

        <div>
          
          <p className="text-sm text-gray-600 group-hover:text-white">
            {company?.name}
          </p>

          <p className="text-xs text-gray-500 group-hover:text-white">
            {location}
          </p>
        </div>
      </div>

      <h3 className="font-semibold text-lg text-gray-800 group-hover:text-white">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mt-2 group-hover:text-white">
        {type}
      </p>

      <p className="text-blue-700 font-bold mt-1 group-hover:text-white">
        {salary}
      </p>
    </div>
  );
}
