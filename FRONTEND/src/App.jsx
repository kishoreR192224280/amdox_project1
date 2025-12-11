import React from 'react'
import {Routes,Route} from 'react-router'
import Signup from './pages/Signup'
import Loginpage from "./pages/Login"
import EmailVerification from './pages/EmailVerification'
import ForgetPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Home from './pages/Home'
import Findjob from './pages/findjob'
import Singlejob from './pages/jobdetails'
import EmployersPage from './pages/Employer'
import SingleEmployerPage from './pages/SingleEmployer'
import DashboardPage from './pages/Dashboard'
import AppliedJobs from "./components/aplliedjobs";
import Navbar from './navigation/navbar'
import Toast, { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-12 py-12">
    
      <Routes>
        <Route path="/" element = {<Signup/>}/>
        <Route path="/Login" element = {<Loginpage/>}/>
        <Route path="/Signup/EmailVerification" element = {<EmailVerification/>}/>
        <Route path="/Login/ForgetPassword" element = {<ForgetPassword/>}/>
        <Route path="/ForgetPassword/ResetPassword" element = {<ResetPassword/>}/>
        <Route path="/findjob" element = {<Findjob/>}/>
        <Route path="/Home" element = {<Home/>}/>
        <Route path="/singlejob" element={<Singlejob/>}/>
        <Route path="/EmployersPage" element={<EmployersPage/>}/>
        <Route path="/SingleEmployerPage" element={<SingleEmployerPage/>}/>
        <Route path="/DashboardPage" element={<DashboardPage/>}/>
        <Route path="/appliedjobs" element={<AppliedJobs />} />       
      </Routes>
    </div>
  )
}

export default App
