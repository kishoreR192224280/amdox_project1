import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import useAutoCounter from "../hooks/useAutoCounter";
import useTitleSwitcher from "../hooks/useTitleSwitcher";
import Odometer from "../components/Odometer";
// import { useNavigate } from "react-router-dom";


const Signup = () => {
  // const navigate = useNavigate();

  const count = useAutoCounter(111111);
  const navigate = useNavigate();

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // 🔥 Auto switching title
  const title = useTitleSwitcher(
    ["Create Account", "Sign Up >>", "Join Us Today", "Start Your Journey"],
    2000
  );

  // 🔥 Title animation trigger
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timeout);
  }, [title]);
  const validateForm = () => {
    if (fullName.trim().length < 3) {
      toast.error("Full name must be at least 3 characters");
      return false;
    }

    if (username.trim().length < 4 || username.includes(" ")) {
      toast.error("Username must be 4+ characters with no spaces");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (!passwordRegex.test(password)) {
      toast.error("Password must be 8+ characters and include a number");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    if (!termsAccepted) {
      toast.error("You must accept the Terms of Service");
      return false;
    }

    return true;
  };

  const passwordsMatch = password === confirmPassword && password !== "";

  const isFormValid =
    fullName.trim() &&
    username.trim() &&
    email.trim() &&
    password.trim() &&
    confirmPassword.trim() &&
    passwordsMatch;

  // ✅ REAL BACKEND SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Submit clicked"); // TEST 1

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, email, password }),
      });

      toast.success("Response received"); // TEST 2

      const data = await res.json();
      console.log(res.status, data);

      if (!res.ok) {
        toast.error(data.message || "Signup failed");
        return;
      }

      toast.success("Account created successfully 🎉");

      setTimeout(() => {
        navigate("/Login");
      }, 1500);
    } catch (err) {
      toast.error("Fetch failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-10 py-10">
      <Toaster position="top-right" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">

        {/* LEFT SECTION */}
        <div className="flex flex-col mr-5">

          {/* Animated Title */}
          <h1
            key={title}
            className={`text-4xl text-black font-semibold mb-3 transition-all duration-500 
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            {title}
          </h1>

          <p className="text-sm text-black mb-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/Login")}
              className="text-teal-600 cursor-pointer hover:underline"
            >
              Log In
            </span>
          </p>

          <div className="flex flex-col gap-6">

            {/* Full Name & Username */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter your full name"
                className="input-base"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Create your username"
                className="input-base"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email"
              className="input-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input-base pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                className="input-base pr-12"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>

            {!passwordsMatch && confirmPassword && (
              <p className="text-sm text-red-500">Passwords do not match</p>
            )}

            {/* Terms */}
            <label className="flex items-center gap-2 text-xs text-black cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              I agree to the{" "}
              <span className="text-teal-700">Terms of Service</span>
            </label>


            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid || loading}
              className={`btn w-full h-14 text-base font-semibold rounded-md transition-all
              ${loading || !isFormValid
                  ? "opacity-60 cursor-not-allowed"
                  : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
            >
              {loading ? "Creating Account..." : "Create Account →"}
            </button>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-center px-10">

          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            Over <Odometer value={count} /> candidates
            <span className="block text-4xl">waiting for good employers.</span>
          </h2>

          <div className="grid grid-cols-3 gap-12">
            {[
              { img: "/image/Building.svg", label: "Companies" },
              { img: "/image/search.svg", label: "Candidates" },
              { img: "/image/job.svg", label: "New Jobs" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="border-4 border-teal-600 h-16 w-16 p-2 rounded-xl rotate-45 flex items-center justify-center hover:scale-125 transition">
                  <img src={item.img} alt="" className="-rotate-45 h-8 w-8" />
                </div>
                <p className="font-bold text-gray-800">{item.label}</p>
                <p className="font-semibold text-teal-600">10 +</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
