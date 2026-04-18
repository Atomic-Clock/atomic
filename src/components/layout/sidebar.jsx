// import { NavLink } from "react-router-dom";

// export default function sidebar() {
//   return (
//     <aside className="w-64 bg-gray-950 border-r border-gray-800 text-gray-300 p-6">
      
//       <h2 className="text-xs uppercase text-gray-500 mb-6 tracking-widest">
//         Navigation
//       </h2>

//       <div className="flex flex-col gap-4 text-sm">
        
//         <navLink
//           to="/"
//           className={({ isActive }) =>
//             `p-2 rounded transition ${
//               isActive
//                 ? "bg-blue-600 text-white"
//                 : "hover:bg-gray-800"
//             }`
//           }
//         >
//           🏠 Home
//         </navLink>

//         <NavLink
//           to="/learn"
//           className={({ isActive }) =>
//             `p-2 rounded transition ${
//               isActive
//                 ? "bg-blue-600 text-white"
//                 : "hover:bg-gray-800"
//             }`
//           }
//         >
//           🔬 Learn Mode
//         </NavLink>

//         <NavLink
//           to="/simulate"
//           className={({ isActive }) =>
//             `p-2 rounded transition ${
//               isActive
//                 ? "bg-blue-600 text-white"
//                 : "hover:bg-gray-800"
//             }`
//           }
//         >
//           🎛 Simulate Mode
//         </NavLink>

//         <NavLink
//           to="/training"
//           className={({ isActive }) =>
//             `p-2 rounded transition ${
//               isActive
//                 ? "bg-blue-600 text-white"
//                 : "hover:bg-gray-800"
//             }`
//           }
//         >
//           🎮 Training Mode
//         </NavLink>

//         <NavLink
//           to="/analyzer"
//           className={({ isActive }) =>
//             `p-2 rounded transition ${
//               isActive
//                 ? "bg-blue-600 text-white"
//                 : "hover:bg-gray-800"
//             }`
//           }
//         >
//           📈 Stability Analyzer
//         </NavLink>

//       </div>
//     </aside>
//   );
// }

import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function Sidebar() {
const [open, setOpen] = useState(false);
  //const [open, setOpen] = useState(true);

  return (
    <aside
      className={`${
        open ? "w-64" : "w-16"
      } bg-gray-950 border-r border-gray-800 text-gray-300 p-4 transition-all duration-300 min-h-screen`}
    >
      
      {/* Toggle Button */}
<button
  onClick={() => setOpen(!open)}
  className={`text-white mb-6 text-xl w-full flex items-center ${
    open ? "justify-start" : "justify-center"
  }`}
>
  <span className="w-6 text-center">☰</span>
</button>

      <div className="flex flex-col gap-4 text-sm">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded transition flex items-center ${open ? "gap-3 justify-start" : "justify-center"} ${
              isActive ? "hover:bg-gray-800 text-white" : "hover:bg-gray-800"
            }`
          }
        >
          <span className="text-lg w-6 text-center">🏠</span>
          {/* <span>🏠</span> */}
          {open && "Home"}
        </NavLink>

        <NavLink
          to="/learn"
          className={({ isActive }) =>
            `p-2 rounded transition flex items-center ${open ? "gap-3 justify-start" : "justify-center"} ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`
          }
        >
          {/* <span>🔬</span> */}
          <span className="text-lg w-6 text-center">🔬</span>
          {open && "Learn Mode"}
        </NavLink>

        <NavLink
          to="/simulation"
          className={({ isActive }) =>
            `p-2 rounded transition flex items-center ${open ? "gap-3 justify-start" : "justify-center"} ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`
          }
        >
          {/* <span>🎛</span> */}
          <span className="text-lg w-6 text-center">🎛</span>
          {open && "Simulate Mode"}
        </NavLink>

        <NavLink
          to="/training"
          className={({ isActive }) =>
            `p-2 rounded transition flex items-center ${open ? "gap-3 justify-start" : "justify-center"} ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`
          }
        >
          {/* <span>🎮</span> */}
          <span className="text-lg w-6 text-center">🎮</span>
          {open && "Training Mode"}
        </NavLink>

        <NavLink
          to="/analyzer"
          className={({ isActive }) =>
            `p-2 rounded transition flex items-center ${open ? "gap-3 justify-start" : "justify-center"} ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`
          }
        >
          {/* <span>📈</span> */}
          <span className="text-lg w-6 text-center">📈</span>
          {open && "Stability Analyzer"}
        </NavLink>

      </div>
    </aside>
  );
}

