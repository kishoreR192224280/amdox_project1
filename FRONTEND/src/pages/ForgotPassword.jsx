const ForgetPassword = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 w-full max-w-xl">
            <div className="absolute top-10 left-10 text-teal-600 cursor-pointer text-2xl">
                «
            </div>


            {/* Outer centered card */}
            <div className="w-full max-w-xl p-8 rounded-xl relative">

                {/* Title */}
                <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                    Forget Password
                </h1>
                <div className="mb-6">
                    {/* Links */}
                    <p className="text-gray-700 text-left mb-2">
                        Go back to
                        <span className="text-teal-600 cursor-pointer font-medium ml-1 hover:underline">Login</span>
                    </p>

                    <p className="text-gray-700 mb-2 text-left">
                        Don’t have account
                        <span className="text-teal-600 cursor-pointer font-medium ml-1 hover:underline">
                            Create Account
                        </span>
                    </p>
                </div>

                {/* Email Input */}
                <input
                    type="email"
                    placeholder="Email address"
                    className="border w-full max-w-xl p-3 rounded-md border-gray-300 bg-white text-teal-900
                    placeholder-gray-400 focus:outline-none focus:border-teal-600 mb-6"
                />

                {/* Reset Button */}
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition flex items-center justify-center gap-2">
                    Reset Password →
                </button>

            </div>
        </div>
    );
};
export default ForgetPassword;
