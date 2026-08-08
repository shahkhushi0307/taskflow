export default function FeaturesSection() {
  const features = [
    {
      title: "Add Tasks",
      description: "Create tasks with title, description, and priority levels.",
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5H4.5"
          />
        </svg>
      ),
    },
    {
      title: "Track Progress",
      description: "Toggle tasks between pending and completed.",
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15.75 9.75M11 4.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
          />
        </svg>
      ),
    },
    {
      title: "Always Saved",
      description: "Tasks are saved to localStorage and survive browser refreshes.",
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5 9 3v10.5m0 0 6-5.25M9 13.5V3"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Features for productivity
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to stay organised and get things done.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-7 text-center shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-teal-50 p-3 text-teal-700">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
