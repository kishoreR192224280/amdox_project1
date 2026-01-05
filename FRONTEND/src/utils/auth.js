// Check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  // both token & user must exist
  return Boolean(token && user);
};

// Get logged-in user safely
export const getUser = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (err) {
    // corrupted user data → logout
    logout();
    return null;
  }
};

// Logout user (clear session)
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/Login";
  
};

export default isAuthenticated