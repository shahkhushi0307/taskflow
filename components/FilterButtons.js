const filters = ["All", "Pending", "Completed"];

export default function FilterButtons({ activeFilter, onFilterChange }) {
  return (
    <nav className="px-4 py-6 sm:px-6 lg:px-8" aria-label="Filter tasks">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <div className="inline-flex gap-2 rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filter)}
                className={`
                  relative rounded-md px-5 py-2 text-sm font-medium
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1
                  ${
                    activeFilter === filter
                      ? "bg-teal-600 text-white shadow hover:bg-teal-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
