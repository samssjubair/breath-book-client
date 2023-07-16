import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className="text-white text-lg font-semibold hover:text-gray-200"
            >
              Breath-Book
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Authors
                </a>
              </li>
              {/* Add more navigation items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
