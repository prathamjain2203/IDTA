import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import "./assets/css/style.css";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
// import CourseInfo from "./screens/CourseInfo";
import About from "./screens/About";
import AboutTeam from "./screens/AboutTeam";
import Membership from "./screens/Membership";
import Services from "./screens/Services";
import Education from "./screens/Education";
import Careers from "./screens/Careers";
import JoinUs from "./screens/JoinUs";
import MemberForm from "./screens/MemberForm";

import Courses from "./screens/Courses";
import AdminLogin from "./screens/admin/AdminLogin";
import "./App.css";
import JobsApplications from "./screens/admin/JobsApplications";
import ContactForms from "./screens/admin/ContactForms";
import Payments from "./screens/admin/Payments";
import { ToastContainer } from "react-bootstrap";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Homepage />} />,
        <Route path="/about" element={<About />} />,
        <Route path="/aboutTeam" element={<AboutTeam />} />,
        <Route path="/membership" element={<Membership />} />,
        <Route path="/service" element={<Services />} />,
        <Route path="/education" element={<Education />} />,
        <Route path="/career" element={<Careers />} />,
        <Route path="/joinus" element={<JoinUs />} />,
        <Route path="/login" element={<Login />} />,
        <Route path="/signup" element={<SignUp />} />,
        <Route path="/courses" element={<Courses />} />,
        <Route path="/dashboard" element={<Dashboard />} />,
        <Route
          path="/membershipform/:membershipPackagePrimaryKey"
          element={<MemberForm />}
        />,
        <Route path="/adminLogin" element={<AdminLogin />} />,
        <Route path="/jobapplications" element={<JobsApplications />} />,
        <Route path="/contactforms" element={<ContactForms />} />,
        <Route path="/allPayments" element={<Payments />} />,
   ] )
);
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/aboutTeam" element={<AboutTeam />} />
//         <Route path="/membership" element={<Membership />} />
//         <Route path="/service" element={<Services />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/career" element={<Careers />} />
//         <Route path="/joinus" element={<JoinUs />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* <Route path="/course/:courseID" element={<CourseInfo />} /> */}
//         <Route
//           path="/membershipform/:membershipPackagePrimaryKey"
//           element={<MemberForm />}
//         />
//         <Route path="/adminLogin" element={<AdminLogin />} />
//         <Route path="/jobapplications" element={<JobsApplications />} />
//         <Route path="/contactforms" element={<ContactForms />} />
//         <Route path="/allPayments" element={<Payments />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
