// import { createBrowserRouter } from "react-router-dom";
// //import dashboardLayout from "app\layout\dashboardlayout.jsx";
// import dashboardlayout from "./layout/dashboardlayout";
// //import Home from "../pages/Home/Home";
// //import LearnMode from "../pages/LearnMode/LearnMode";
// //import SimulateMode from "../pages/SimulateMode/SimulateMode";
// //import TrainingMode from "../pages/TrainingMode/TrainingMode";
// //import StabilityAnalyzer from "../pages/StabilityAnalyzer/StabilityAnalyzer";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <dashboardlayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "learn", element: <LearnMode /> },
//       { path: "simulate", element: <SimulateMode /> },
//       { path: "training", element: <TrainingMode /> },
//       { path: "analyzer", element: <StabilityAnalyzer /> },
//     ],
//   },
// ]);


// import { createBrowserRouter } from "react-router-dom";
// import dashboardlayout from "./layout/dashboardlayout"; 
// function Home() {
//   return <h1 className="text-white text-3xl">Home Page Working ✅</h1>;
// }

// export const router = createBrowserRouter([
//   {

//     path: "/",
//     element: <dashboardlayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//     ],
//   },
//  ]);


import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layout/dashboardlayout";  // Capital D

function Home() {
  return (
    <h1 className="text-white text-3xl">
      Home Page Working ✅
    </h1>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,   // Capital here also
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);