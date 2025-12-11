const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">

      {/* Back Icon */}
      <div className="absolute top-10 left-10 text-blue-600 cursor-pointer text-2xl">
        «
      </div>

      <div className="max-w-lg w-full">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          Reset Password
        </h1>

        {/* New Password */}
        <div className="relative mb-5">
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
          <span className="absolute right-4 top-3 cursor-pointer text-gray-500">
            👁
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-6">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
          <span className="absolute right-4 top-3 cursor-pointer text-gray-500">
            👁
          </span>
        </div>

        {/* Reset Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
          Reset Password →
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
