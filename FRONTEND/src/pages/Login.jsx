import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = email.trim() && password.trim();

  const handleLogin = async () => {
    if (!isFormValid || loading) return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful 🎉");

      setTimeout(() => {
        navigate("/Home"); // home route
      }, 1500);

      setLoading(false);

    } catch (error) {
      console.error(error);
      toast.error("Server error. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-12 py-12">
      <Toaster position="top-right" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-gray-900 leading-snug mb-10">
            Over 1,11,111 candidates <br />
            waiting for good employees.
          </h1>

          <div className="flex items-center gap-10">

            {[
              { img: "/image/Building.svg", label: "Companies", count: "10 +" },
              { img: "/image/search.svg", label: "Candidates", count: "100 +" },
              { img: "/image/job.svg", label: "New Jobs", count: "10 +" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="border-4 border-teal-600 p-2 rounded-xl rotate-45 flex items-center justify-center">
                  <img src={item.img} alt={item.label} className="w-10 -rotate-45" />
                </div>
                <p className="font-bold mt-2">{item.label}</p>
                <p className="text-teal-600 font-semibold">{item.count}</p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-gray-100 p-10 w-full">
          <h2 className="text-3xl text-teal-600 font-semibold mb-3">Log in</h2>

          <p className="text-sm text-gray-700 font-medium mb-6">
            Don’t have an account?{" "}
            <span className="text-teal-600 cursor-pointer hover:underline">
              Create Account
            </span>
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-4 border border-gray-300 placeholder-gray-400 bg-white text-gray-600 px-4 py-3 rounded-lg focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full mb-2 border border-gray-300 placeholder-gray-400 bg-white text-gray-600 px-4 py-3 rounded-lg focus:outline-none pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-4 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          {/* Remember / Forgot */}
          <div className="flex justify-between items-center mt-2 mb-6">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" />
              Remember Me
            </label>

            <span className="text-sm text-teal-600 cursor-pointer hover:underline">
              Forget password
            </span>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded-lg transition-all flex items-center justify-center gap-2
            ${loading || !isFormValid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700 text-white"
              }`}
          >
            {loading ? "Logging in..." : "Login →"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;
