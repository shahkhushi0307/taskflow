"use client";

import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10 border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-teal-600">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" strokeWidth="2" stroke="currentColor" />
            <path
              d="M8 12l2.5 2.5L16 10"
              strokeWidth="2.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-bold">TaskFlow</span>
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li>
                <a
                  className="text-gray-600 transition-colors hover:text-teal-600"
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition-colors hover:text-teal-600"
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition-colors hover:text-teal-600"
                  href="#add-task"
                >
                  Tasks
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#add-task"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:scale-[1.03] hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Add Task
            </a>

            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                className="
                  flex items-center gap-2.5 rounded-lg bg-gray-200 px-3 py-1.5
                  text-sm font-medium text-gray-700
                  transition-colors hover:bg-gray-300
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
                "
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                  K
                </span>
                <span className="hidden sm:inline-block">Khushi Shah</span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {profileOpen && (
                <div
                  className="
                    absolute right-0 z-20 mt-2 w-44 rounded-lg
                    border border-gray-200 bg-white shadow-lg
                    origin-top-right transition-all duration-200
                  "
                >
                  <ul className="py-1.5 text-sm">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                      >
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 20.25a7.5 7.5 0 0 1 14.936 0"
                          />
                        </svg>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                      >
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
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
                        <span>Settings</span>
                      </a>
                    </li>
                    <li>
                      <div className="border-t border-gray-100 my-1"></div>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.257 3.207a9 9 0 1 1-4.518 2.326c.436-.877.975-1.674 1.6-2.369Z"
                          />
                        </svg>
                        <span>Sign Out</span>
                      </a>
                    </li>
                  </ul>
                </div>
             )}
           </div>

            <button
              type="button"
              className="block rounded-md bg-gray-100 p-2.5 text-gray-600 transition-colors hover:bg-gray-200 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
