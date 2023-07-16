import React from "react";

const Navbar: React.FC = () => {
  const userEmail = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    window.location.href = "/";
};
  return (
    <nav className="bg-gray-800 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="text-white text-lg font-semibold hover:text-gray-200"
            >
              Breath-Book
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/books"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  All Books
                </a>
              </li>

              {userEmail ? (
                <li
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-sm font-medium "
                >
                  Logout
                </li>
              ) : (
                <li>
                  <a
                    href="/login"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </a>
                </li>
              )}

              <li>
                <a
                  href="/sign-up"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </a>
              </li>
              <li className="text-gray-100 hover:text-white px-3 py-1 rounded-md text-sm  font-bold">{userEmail}</li>

              {/* Add more navigation items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
