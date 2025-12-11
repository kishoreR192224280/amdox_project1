import SmallSearchBar from "../components/smallsearchbar";
import Home from '../pages/Home'
import Findjob from '../pages/findjob'
import EmployersPage from '../pages/Employer'
import DashboardPage from '../pages/Dashboard'
export default function Navbar() {
  return (
    <div className="w-full bg-white shadow">

      {/* TOP BLUE MENU BAR */}
      <div className="w-full bg-blue-600 px-10 py-4 flex items-center justify-center">

        {/* LEFT — Logo */}

        {/* CENTER — Menu Links */}
        <div className="flex items-center gap-16 text-lg font-medium text-white ">
          <a href="/Home">Home</a>
          <a href="/findjob">FindJob</a>
          <a href="/EmployersPage">Employers</a>
          <a href="/DashboardPage" className="border-b-2 border-blue-700 pb-1">Dashboard</a>
          <a href="/support">Customer Support</a>
        </div>

        {/* RIGHT — Notification + Profile */}
        <div className="flex items-center gap-6">
          
        </div>
      </div>

      {/* SECOND ROW — SEARCH BAR */}
      <div className="flex justify-center py-4">
        <SmallSearchBar />
      </div>
    </div>
  );
}
