export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 border-t border-gray-800 pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <span className="text-sm text-gray-500">
              &copy; {currentYear} TaskFlow. Stay productive!
            </span>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-teal-400"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-teal-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-teal-400"
              >
                Cookies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-teal-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
