export default function TrendingJobCard({ img, title, count }) {
  return (
    <div className="min-w-[230px] rounded-2xl p-6 bg-gradient-to-br from-amber-50 via-white to-amber-100 border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ">
      <div className="h-24 w-24 mx-auto flex items-center justify-center rounded-2xl bg-amber-600 shadow-lg shadow-amber-500/30 transition-transform duration-300 hover:scale-110">
        <img src={img} alt={title} className="w-12 h-12 brightness-0 invert opacity-90 saturate-0" />

      </div>

      <h3 className="text-xl font-bold text-center mt-6 text-gray-800">
        {title}
      </h3>

      <p className="text-lg font-semibold text-center mt-2 text-amber-600">
        {count} Jobs
      </p>
    </div>
  );
}
