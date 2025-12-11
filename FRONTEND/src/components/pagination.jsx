export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Prevent invalid navigation
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center gap-3 py-10">

      {/* Previous Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          w-10 h-10 flex items-center justify-center rounded-full transition
          ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white"
          }
        `}
      >
        {'<'}
      </button>

      {/* Page Numbers */}
      {pages.map((n) => (
        <button
          key={n}
          onClick={() => goToPage(n)}
          className={`
            w-10 h-10 flex items-center justify-center rounded-full font-medium transition
            ${
              currentPage === n
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white"
            }
          `}
        >
          {n}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          w-10 h-10 flex items-center justify-center rounded-full transition
          ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white"
          }
        `}
      >
        {'>'}
      </button>
    </div>
  );
}
