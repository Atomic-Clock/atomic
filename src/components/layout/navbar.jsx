// import { NavLink } from "react-router-dom";

// export default function navbar() {
//   return (
//     <nav className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      
//       {/* Logo */}
//       <div className="text-xl font-semibold text-white tracking-wide">
//         USAC Virtual Lab
//       </div>

//       {/* Top Navigation
//       <div className="hidden md:flex gap-6 text-sm text-gray-300">
//         <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
//         <NavLink to="/learn" className="hover:text-blue-400">Learn</NavLink>
//         <NavLink to="/simulate" className="hover:text-blue-400">Simulate</NavLink>
//         <NavLink to="/training" className="hover:text-blue-400">Training</NavLink>
//         <NavLink to="/analyzer" className="hover:text-blue-400">Analyzer</NavLink>
//       </div> */}

//       {/* Status */}
//       <div className="text-green-400 text-sm">
//         ● System Ready
//       </div>

//     </nav>
//   );
// }

// import { NavLink } from "react-router-dom";

// export default function navbar() {
//   return (
//     <nav className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">

//       {/* Logo + Title */}
//       <div className="flex items-center gap-4">

//         <img
//           src="/Images/Logo.png"
//           alt="USAC Logo"
//           className="h-14 w-auto"
//         />

//         {/* <span className="text-xl font-semibold text-white tracking-wide">
//           USAC Virtual Lab
//         </span> */}

//       </div>

//       {/* Status */}
//       <div className="text-green-400 text-sm">
//         ● System Ready
//       </div>

//     </nav>
//   );
// }



// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
//       <div className="flex items-center gap-4">
//         <img
//           src="/Images/Logo.png"
//           alt="USAC Logo"
//           className="h-14 w-auto"
//         />
//       </div>

//       <NavLink
//         to="/chatbot"
//         className={({ isActive }) =>
//           `px-4 py-2 rounded-lg text-sm font-semibold transition ${
//             isActive
//               ? "bg-cyan-400 text-gray-950"
//               : "bg-gray-800 text-cyan-300 hover:bg-gray-700 hover:text-white"
//           }`
//         }
//       >
//         Chatbot
//       </NavLink>
//     </nav>
//   );
// }





import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <img
          src="/Images/logo_front.png"
          alt="USAC Logo"
          className="h-16 w-auto"
        />
      </div>

      <NavLink
        to="/chatbot"
        className={({ isActive }) =>
          `group inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition duration-200 ${
            isActive
              ? "border-cyan-300 bg-cyan-300 text-gray-950 shadow-lg shadow-cyan-500/20"
              : "border-cyan-400/30 bg-gray-800/80 text-cyan-200 hover:border-cyan-300 hover:bg-cyan-400 hover:text-gray-950 hover:shadow-lg hover:shadow-cyan-500/20"
          }`
        }
      >
        <span className="h-2 w-2 rounded-full bg-current opacity-80"></span>
        Ask Assistant
      </NavLink>
    </nav>
  );
}
