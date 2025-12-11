const EmailVerification = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
      
      <div className="text-center max-w-xl w-full">

        {/* Back Icon */}
        <div className="absolute top-10 left-10 text-teal-600 cursor-pointer text-2xl">
          «
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-7 ">
          Email Verification
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 [word-spacing:4px]">
          We've sent a verification to 
          <span className="font-semibold"> AMDOX0007@gmail.com </span> 
          to verify your email address and activate your account.
        </p>

        {/* Input */}
        <input
          type="text"
          placeholder="Verification Code"
          className="w-full px-4 py-3 border bg-white border-gray-300 text-teal-900 placeholder-gray-400 rounded-lg focus:outline-none focus:border-teal-600 mb-6"
        />

        {/* Verify Button */}
        <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2">
          Verify My Account →
        </button>

        {/* Resend Text */}
        <p className="text-sm text-gray-600 mt-6">
          Didn’t receive any code?{" "}
          <span className="text-teal-600 cursor-pointer font-medium">
            Resend
          </span>
        </p>

      </div>
    </div>
  );
};

export default EmailVerification;
