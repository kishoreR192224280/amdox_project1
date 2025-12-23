import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { createRipple } from "../hooks/ripple";
import useAutoCounter from "../hooks/useAutoCounter";
import useTitleSwitcher from "../hooks/useTitleSwitcher";
import Odometer from "../components/Odometer";
const Signup = () => {
  const count = useAutoCounter(111111);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const formatIndian = (num) => {
    return new Intl.NumberFormat("en-IN").format(num);
  };
  // 🔥 Auto switching title
  const title = useTitleSwitcher(
    ["Create Account", "Sign Up>>", "Join Us Today", "Start Your Journey"],
    2000 // switch every 2 sec
  );

  // 🔥 Trigger animation every time title changes
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 3000);
    return () => clearTimeout(timeout);
  }, [title]);

  const passwordsMatch = password === confirmPassword && password !== "";

  const isFormValid =
    fullName.trim() &&
    username.trim() &&
    email.trim() &&
    password.trim() &&
    confirmPassword.trim() &&
    passwordsMatch;

  const handleSubmit = (e) => {
    createRipple(e);
    setLoading(true);

    toast.success("Creating account...");

    setTimeout(() => {
      setLoading(false);
      toast.success("Account created successfully!");
    }, 7000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-10 py-10">
      <Toaster position="top-right" />

      {/* 2-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">

        {/* LEFT SECTION */}
        <div className="flex flex-col mr-5">

          {/* 🔥 Animated Title */}
          <h1
            key={title}
            className={`text-4xl text-black font-semibold mb-3 transition-all duration-500 
            opacity-0 ${animate ? "fade-switch" : ""}`}
          >
            {title}
          </h1>

          <p className="text-sm text-black mb-6">
            Already have an account?{" "}
            <span className="text-teal-600 cursor-pointer hover:underline">Log In</span>
          </p>

          <div className="flex flex-col gap-6">

            {/* Full Name + Username */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input-base"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} />
              </div>

              <div>

                <input
                  type="text"
                  placeholder="Create your username"
                  className="input-base"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-xs btn-ghost"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>

              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className={`
  block w-full
  h-14
  rounded-md
  bg-white
  px-4 pr-12
  text-base text-black
  border
  ${confirmPassword && !passwordsMatch ? "border-red-500" : "border-gray-300"}
  placeholder:text-gray-500
  leading-normal
  shadow-sm
  transition-shadow duration-200
  focus:outline-none
  focus:ring-2
  ${confirmPassword && !passwordsMatch
                      ? "focus:ring-red-500 shadow-red-200"
                      : "focus:ring-teal-600 focus:shadow-md"}
`}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-xs btn-ghost"
                >
                  {showConfirm ? "Hide" : "Show"}
                </button>
              </div>

              {!passwordsMatch && confirmPassword && (
                <p className="text-sm text-red-500 mt-1">Passwords do not match.</p>
              )}
            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-2xs text-black cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm border-black"
              />
              I've read and agree with your{" "}
              <span className="text-teal-700 cursor-pointer">Terms of Services</span>
            </label>

            {/* Submit Button */}
            <button
              onClick={(e) => handleSubmit(e)}
              disabled={!isFormValid || loading}
              className={`
  btn w-full
  h-14
  text-base font-semibold
  rounded-md
  relative overflow-hidden
  transition-all duration-200
  active:scale-95
  ${!isFormValid || loading ? "btn-disabled opacity-70 cursor-not-allowed" : "bg-teal-600 text-white border border-teal-600 hover:bg-teal-700 hover:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"}`}>
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Processing...
                </>
              ) : (
                "Create Account →"
              )}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-center px-10 h-90 w-2xl">

          {/* Heading with auto counter */}
          <h2 className="text-3xl font-semibold text-gray-800 leading-snug mb-10">
            Over <Odometer value={count} /> candidates
            <span className="block text-4xl">waiting for good employees.</span>
          </h2>
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-12">

            {/* Companies */}
            <div className="flex flex-col items-center gap-4">
              <div className="border-4 border-teal-600 h-17 w-17 p-2 rounded-xl rotate-45 flex items-center justify-center
                transition-all duration-300 hover:scale-125 hover:border-teal-500 hover:bg-teal-100">
                <img src="/image/Building.svg" alt="" className="-rotate-45 h-10 w-10" />
              </div>
              <p className="font-bold text-gray-800 mt-1 text-2xl">Companies</p>
              <p className="font-semibold text-teal-600 text-2xl">10 +</p>
            </div>

            {/* Candidates */}
            <div className="flex flex-col items-center gap-4">
              <div className="border-4 border-teal-600 h-17 w-17 p-2 rounded-xl rotate-45 flex items-center justify-center
                transition-all duration-300 hover:scale-125 hover:border-teal-500 hover:bg-teal-100">
                <img src="/image/search.svg" alt="" className="-rotate-45 h-10 w-10" />
              </div>
              <p className="font-bold text-gray-800 mt-1 text-2xl">Candidates</p>
              <p className="font-semibold text-teal-600 text-2xl">10 +</p>
            </div>

            {/* Jobs */}
            <div className="flex flex-col items-center gap-4">
              <div className="border-4 border-teal-600 h-17 w-17 p-2 rounded-xl rotate-45 flex items-center justify-center
                transition-all duration-300 hover:scale-125 hover:border-teal-500 hover:bg-teal-100">
                <img src="/image/job.svg" alt="" className="-rotate-45 h-10 w-10" />
              </div>
              <p className="font-bold text-gray-800 mt-1 text-2xl">New Jobs</p>
              <p className="font-semibold text-teal-600 text-2xl">10 +</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
