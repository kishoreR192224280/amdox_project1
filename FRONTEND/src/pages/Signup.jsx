import React from 'react'
import { toast, Toaster } from 'react-hot-toast'

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">

        <div>
          <h1 className="text-4xl text-black font-semibold mb-3">Create account.</h1>
          <p className="text-sm text-black mb-6">
            Already have an account?{" "}
            <span className="text-teal-600 cursor-pointer hover:underline">
              Log In
            </span>
          </p>

          <div className="flex flex-col gap-4">

            <div className="flex gap-4 text-gray-500 my-1.5">
              <input
                type="text"
                placeholder="Full Name"
                className="border w-full p-3 rounded-md border-gray-300 placeholder-gray-400 bg-white"
              />
              <input
                type="text"
                placeholder="Username"
                className="border w-full p-3 rounded-md border-gray-300 placeholder-gray-400 bg-white"
              />
            </div>

            <div className='text-gray-500 my-1.5'>
              <input
                type="email"
                placeholder="Email address"
                color='gray-300'
                className="border w-full p-3 rounded-md bg-white placeholder-gray-400 border-gray-300"
              />
            </div>

            <div className="relative text-gray-500 my-1.5">
              <input
                type="password"
                placeholder="Password"
                className="border w-full p-3 rounded-md border-gray-300  bg-white placeholder-gray-400"
              />
              <span className="absolute right-3 top-3 cursor-pointer text-gray-500 text-xl">👁</span>
            </div>

            <div className="relative text-gray-500 my-1.5">
              <input
                type="password"
                placeholder="Confirm Password"
                className="border w-full p-3 rounded-md border-gray-300  bg-white placeholder-gray-400"
              />
              <span className="absolute right-3 top-3 cursor-pointer text-gray-300 text-xl">👁</span>
            </div>

            <label className="flex items-center gap-3 my-1.5 text-sm text-black">
              <input type="checkbox" />
              I've read and agree with your{" "}
              <span className="text-blue-600 cursor-pointer">Terms of Services</span>
            </label>

            <button className="bg-teal-600 text-white py-3 my-6 rounded-md text-center text-lg hover:bg-teal-700 transition">
              Create Account →
            </button>
          </div>
        </div>

        {/* RIGHT STATS SECTION */}
        <div className="flex flex-col justify-center px-5">
          <h2 className="text-3xl font-sans text-gray-800 leading-snug mb-10">
            Over 1,11,111 candidates <br /> waiting for good employees.
          </h2>

          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-5">
              <div className="border-4 border-teal-600 p-2 rounded-xl rotate-45 flex items-center justify-center">
                <img src="/image/Building.svg" alt="" className="-rotate-45" />
              </div>
              <p className="font-bold text-gray-800">Companies</p>
              <p className="font-semibold text-teal-600">10 +</p>
            </div>


            <div className="flex flex-col items-center gap-5">
              <div className="border-4 border-teal-600 p-2 rounded-xl rotate-45 flex items-center justify-center">
                <img src="/image/search.svg" alt="" className="-rotate-45" />
              </div>
              <p className="font-bold text-gray-800">Candidates</p>
              <p className="font-semibold text-teal-600">10 +</p>
            </div>


            <div className="flex flex-col items-center gap-5">
              <div className="border-4 border-teal-600 p-2 rounded-xl rotate-45 flex items-center justify-center">
                <img src="/image/job.svg" alt="" className="-rotate-45" />
              </div>
              <p className="font-bold text-gray-800">New Jobs</p>
              <p className="font-semibold text-teal-600">10 +</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup
