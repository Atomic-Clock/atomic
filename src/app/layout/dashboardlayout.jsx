// import navbar from "../../components/layout/navbar";
// import sidebar from "../../components/layout/sidebar";
// import footer from "../../components/layout/footer";
// import { Outlet } from "react-router-dom";

// export default function dashboardlayout() {
//   return (
//     <div className="flex flex-col h-screen bg-gray-950 text-white">
      
//       {/* Top */}
//       <navbar />

//       {/* Middle Section */}
//       <div className="flex flex-1 overflow-hidden">
        
//         {/* Left Sidebar */}
//         <sidebar />

//         {/* Page Content */}
//         <main className="flex-1 p-6 overflow-y-auto bg-gray-900">
//           <Outlet />
//         </main>

//       </div>

//       {/* Bottom */}
//       <footer />
//     </div>
//   );
// }

// import Navbar from "../../components/layout/Navbar";
// import Sidebar from "../../components/layout/sidebar";
// import Footer from "../../components/layout/footer";
// import { Outlet } from "react-router-dom";

// export default function DashboardLayout() {   // Capital D
//   return (
//     <div className="flex flex-col h-screen bg-gray-950 text-white">
      
//       {/* Top */}
//       <Navbar />

//       {/* Middle Section */}
//       <div className="flex flex-1 overflow-hidden">
        
//         {/* Left Sidebar */}
//         <Sidebar />

//         {/* Page Content */}
//         <main className="flex-1 p-6 overflow-y-auto bg-gray-900">
//           <Outlet />
//         </main>

//       </div>

//       {/* Bottom */}
//       <Footer />
//     </div>
//   );
// }



import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/sidebar";
import Footer from "../../components/layout/footer";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      
      {/* Top */}
      <Navbar />

      {/* Middle Section */}
      <div className="flex flex-1">
        
        {/* Left Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-900">
          <Outlet />
        </main>

      </div>

      {/* Bottom */}
      <Footer />
    </div>
  );
}