
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthGuard } from "./components/AuthGaurd";
import { GuestGuard } from "./components/GuestGaurd";

import Signup from "./pages/Signup";
import Loginpage from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";
import ForgetPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Home from "./pages/Home";
import Findjob from "./pages/findjob";
import Singlejob from "./pages/jobdetail";
import EmployersPage from "./pages/Employer";
import SingleEmployerPage from "./pages/SingleEmployer";
import DashboardPage from "./pages/Dashboard";
import AppliedJobs from "./components/aplliedjobs";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        {/* ================= GUEST ROUTES ================= */}
        <Route
          path="/"
          element={
            <GuestGuard>
              <Signup />
            </GuestGuard>
          }
        />

        <Route
          path="/Login"
          element={
            <GuestGuard>
              <Loginpage />
            </GuestGuard>
          }
        />

        <Route path="/Signup/EmailVerification" element={<EmailVerification />} />
        <Route path="/Login/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ForgetPassword/ResetPassword" element={<ResetPassword />} />

        {/* ================= PROTECTED ROUTES ================= */}
        <Route
          path="/Home"
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        />

        <Route
          path="/findjob"
          element={
            <AuthGuard>
              <Findjob />
            </AuthGuard>
          }
        />

        <Route
          path="/jobs/:id"
          element={
            <AuthGuard>
              <Singlejob />
            </AuthGuard>
          }
        />

        <Route
          path="/EmployersPage"
          element={
            <AuthGuard>
              <EmployersPage />
            </AuthGuard>
          }
        />

        <Route
          path="/SingleEmployerPage"
          element={
            <AuthGuard>
              <SingleEmployerPage />
            </AuthGuard>
          }
        />

        <Route
          path="/DashboardPage"
          element={
            <AuthGuard>
              <DashboardPage />
            </AuthGuard>
          }
        />

        <Route
          path="/appliedjobs"
          element={
            <AuthGuard>
              <AppliedJobs />
            </AuthGuard>
          }
        />
      </Routes>
    </>
  );
};

export default App;