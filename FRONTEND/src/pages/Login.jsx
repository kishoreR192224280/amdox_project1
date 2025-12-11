const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-12 py-12">

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-gray-900 leading-snug mb-10">
            Over 1,11,111 candidates <br />
            waiting for good employees.
          </h1>

          {/* Stats */}
          <div className="flex items-center gap-10">

            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="border-4 border-teal-600 p-2 rounded-xl rotate-45 flex-item-center justify-center-safe">
                <img src="/image/Building.svg" alt="company" className="w-10 -rotate-45" />
              </div>
              <p className="font-bold mt-2">Companies</p>
              <p className="text-teal-600 font-semibold">10 +</p>
            </div>

            {/* Stat 2 */}
          
            <div className="flex flex-col items-center">
              <div className="border-4 border-teal-600 p-2 rounded-xl rotate-45 flex items-center justify-center">
                <img src="/image/search.svg" alt="candidate" className="w-10 -rotate-45" />
              </div>
              <p className="font-bold mt-2">Candidates</p>
              <p className="text-teal-600 font-semibold">100 +</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="border-4 border-teal-600 p-2 rounded-xl rotate-45 flex-item-center justify-center-safe">
                <img src="/image/job.svg" alt="job" className="w-10 -rotate-45" />
              </div>
              <p className="font-bold mt-2">New Jobs</p>
              <p className="text-teal-600 font-semibold">10 +</p>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-gray-100 p-10 w-full">
          <h2 className="text-3xl text-teal-600 font-semibold mb-3">Log in</h2>

          <p className="text-sm text-gray-700 font-medium mb-6">
            Don’t have account{" "}
            <span className="text-teal-600 cursor-pointer hover:underline">
              Create Account
            </span>
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-4 border border-gray-300 placeholder-gray-400 bg-white text-gray-600 px-4 py-3 rounded-lg focus:outline-none"
          />

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-2 border border-gray-300 placeholder-gray-400 bg-white text-gray-600 px-4 py-3 rounded-lg focus:outline-none"
            />
            <span className="absolute right-4 top-3 cursor-pointer text-gray-500">
              👁
            </span>
          </div>

          {/* Remember me */}
          <div className="flex justify-between items-center mt-2 mb-6">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" />
              Remember Me
            </label>

            <span className="text-sm text-teal-600 cursor-pointer hover:underline">
              Forget password
            </span>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-2">
            login →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;
