export default function TrendingJobCard({ img, title, count }) {
  return (
    <div
      className="min-w-[230px] bg-blue-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
      {/* Icon Box */}
      <div
        className="
          bg-blue-200 rounded-xl h-24 w-24 mx-auto flex items-center justify-center shadow-md"
      >
        <img src={img} alt={title} className="w-12 h-12" />
      </div>
      {/* Title */}
      <h3 className="text-xl font-bold text-center mt-6 text-gray-900">
        {title}
      </h3>

      {/* Count */}
      <p className="text-lg text-blue-700 font-semibold text-center mt-2">
        Jobs: {count}
      </p>
    </div>
  );
}
