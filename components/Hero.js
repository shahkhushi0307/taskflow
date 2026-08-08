"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-indigo-900 py-16 sm:py-20"
    >
      <div className="absolute inset-0">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <linearGradient
              id="hero-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
            <pattern
              id="hero-pattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50 50 50 50 0"
                fill="url(#hero-gradient)"
                fillOpacity="0.12"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-10 -z-0 h-2 w-2 rounded-full bg-teal-300 opacity-40 sm:h-3 sm:w-3" />
      <div className="absolute top-1/3 right-16 -z-0 h-1.5 w-1.5 rounded-full bg-indigo-300 opacity-30" />
      <div className="absolute bottom-1/4 left-1/3 -z-0 h-2.5 w-2.5 rounded-full bg-teal-200 opacity-25" />
      <div className="absolute bottom-1/3 right-1/4 -z-0 h-1.5 w-1.5 rounded-full bg-indigo-200 opacity-35" />

      <div className="relative z-10 mx-auto flex min-h-[50vh] w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-teal-100 ring-1 ring-inset ring-white/20">
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6v12l-3-3m0 0 3-3"
              />
            </svg>
            Stay organised. Track everything.
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Task <span className="text-teal-200">Flow</span>
          </h1>

            <p className="mt-5 max-w-xl text-pretty text-lg text-teal-50 sm:text-xl/relaxed lg:text-xl">
            Take control of your day with a smarter way to organize, track,
            and complete every task that matters.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row">
            <a
              href="#add-task"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-300 bg-white px-7 py-3.5 text-sm font-semibold text-teal-800 shadow-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            >
              <svg
                className="-ml-1 h-5 w-5"
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
              Get Started
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-300/40 px-7 py-3.5 text-sm font-medium text-teal-100 transition-all duration-200 hover:bg-teal-600/25 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.023 7.5 7.5 0 0 -1 3.165 2.928.75.75 0 0 1-.91.987.75.75 0 0 1-.02-.015 5.5 5.5 0 0 0-3.287-1.745.75.75 0 0 0-.07.001 .75.75 0 0 0-.02.015l.041.02a.75.75 0 0 0-.023 1.063v1.5a.75.75 0 0 0 1.5 0V9.875a.75.75 0 0 0-.75-.75H8.25a.75.75 0 0 0 0 1.5h2.197a6.036 6.036 0 0 1-.447 1.475l.041.02a.75.75 0 0 0 .658 1.302 7.5 7.5 0 0 0 3.165-2.928.75.75 0 0 1 1.063-.023Z"
                />
              </svg>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
