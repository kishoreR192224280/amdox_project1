import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // ❌ Not logged in → Login page
  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  // ✅ Logged in → Dashboard
  return <Navigate to="/DashBoardPage" replace />;
}
