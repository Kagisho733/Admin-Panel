import {
  FaBell,
  FaMoon,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

export default function Topbar() {

  const { toggleTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm px-8 py-4 flex items-center justify-between">

      {/* Left Section */}
      <div>

        <h1 className="text-2xl font-bold text-slate-800">
          Books • Bots • Drones
        </h1>

        <p className="text-gray-500">
          Business Management Dashboard
        </p>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="relative hidden md:block">

          <FaSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Dark Mode Button */}
        <button
          onClick={toggleTheme}
          className="bg-slate-100 p-3 rounded-lg hover:bg-slate-200 transition"
          >
         <FaMoon />
        </button>

        {/* Notifications */}
        <button
          className="bg-slate-100 p-3 rounded-lg hover:bg-slate-200 transition relative"
        >
          <FaBell />

          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            3
          </span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-slate-700" />

          <div>

            <h3 className="font-semibold">
              Kagisho
            </h3>

            <p className="text-gray-500 text-sm">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}