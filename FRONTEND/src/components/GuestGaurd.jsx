import { Navigate } from "react-router-dom";

export function GuestGuard({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/DashBoardPage" replace />;
  }

  return children;
}
