import { NavLink } from "react-router-dom";

export default function sidebar() {
  return (
    <aside className="w-64 bg-gray-950 border-r border-gray-800 text-gray-300 p-6">
      
      <h2 className="text-xs uppercase text-gray-500 mb-6 tracking-widest">
        Navigation
      </h2>

      <div className="flex flex-col gap-4 text-sm">
        
        <navLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`
          }
        >
          🏠 Home
        </navLink>

        <NavLink
          to="/learn"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`
          }
        >
          🔬 Learn Mode
        </NavLink>

        <NavLink
          to="/simulate"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`
          }
        >
          🎛 Simulate Mode
        </NavLink>

        <NavLink
          to="/training"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`
          }
        >
          🎮 Training Mode
        </NavLink>

        <NavLink
          to="/analyzer"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`
          }
        >
          📈 Stability Analyzer
        </NavLink>

      </div>
    </aside>
  );
}