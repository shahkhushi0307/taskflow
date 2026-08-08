export default function TaskStats({ total, completed, pending }) {
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  const statCards = [
    {
      label: "Total Tasks",
      value: total,
      color: "text-gray-900",
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-1.5 3h1.5m-3.5-6a9 9 0 11-9 9 9 9 0 019-9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
          />
        </svg>
      ),
    },
    {
      label: "Completed",
      value: completed,
      color: "text-teal-600",
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-teal-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15.75 9.75m-1.5-.562v6.96a.75.75 0 01-1.5 0v-6.96"
          />
        </svg>
      ),
    },
    {
      label: "Pending",
      value: pending,
      color: "text-amber-600",
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-2 flex justify-center">{stat.icon}</div>
              <dt className="text-sm font-medium text-gray-500">
                {stat.label}
              </dt>
              <dd className={`mt-1 text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </dd>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Completion Progress</span>
            <span className="font-medium text-gray-900">{progress}%</span>
          </div>

          <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-teal-600 to-indigo-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
