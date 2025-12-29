import { NavLink } from "react-router-dom";
import SmallSearchBar from "../components/smallsearchbar";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `pb-1 transition ${
      isActive
        ? "border-b-2 border-white"
        : "hover:border-b-2 hover:border-blue-300"
    }`;

  return (
    <div className="w-full bg-white shadow">

      {/* TOP BLUE MENU BAR */}
      <div className="w-full bg-blue-600 px-10 py-4 flex items-center justify-center">
        <div className="flex items-center gap-16 text-lg font-medium text-white">

          <NavLink to="/Home" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/findjob" className={linkClass}>
            Find Job
          </NavLink>

          <NavLink to="/EmployersPage" className={linkClass}>
            Employer
          </NavLink>

          <NavLink to="/DashboardPage" className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/support" className={linkClass}>
            Customer Support
          </NavLink>

        </div>
      </div>

      {/* SECOND ROW — SEARCH BAR */}
      <div className="flex justify-center py-4">
        <SmallSearchBar />
      </div>
    </div>
  );
}
