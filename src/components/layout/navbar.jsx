import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      
      {/* Logo */}
      <div className="text-xl font-semibold text-white tracking-wide">
        USAC Virtual Lab
      </div>

      {/* Top Navigation */}
      <div className="hidden md:flex gap-6 text-sm text-gray-300">
        <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
        <NavLink to="/learn" className="hover:text-blue-400">Learn</NavLink>
        <NavLink to="/simulate" className="hover:text-blue-400">Simulate</NavLink>
        <NavLink to="/training" className="hover:text-blue-400">Training</NavLink>
        <NavLink to="/analyzer" className="hover:text-blue-400">Analyzer</NavLink>
      </div>

      {/* Status */}
      <div className="text-green-400 text-sm">
        ● System Ready
      </div>

    </nav>
  );
}