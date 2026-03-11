import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionLogin = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-[600px] bg-[#f0f9eb]">
            {/* Left Side: Login Form */}
            <div className="w-full lg:w-3/5 p-6 md:p-12 flex flex-col items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="flex flex-col items-center mb-8">
                        <img src="assets/logo.png" alt="HU Logo" className="w-16 md:w-20 mb-4" loading="lazy" />
                        <h2 className="text-xl md:text-2xl font-bold text-green-900 text-center">
                            Hazara University Mansehra<br />Online Admission Portal
                        </h2>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-center mb-6 uppercase tracking-wider">
                        Applicant Login Form
                    </h3>

                    <p className="text-sm text-center mb-6">
                        Don't Have an Account yet?
                        <Link to="/admissions/signup" className="text-green-700 font-bold ml-1 hover:underline block sm:inline">
                            Create New Account/ Signup
                        </Link>
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">
                                CNIC <span className="text-red-500">*</span>
                                <span className="ml-4 font-normal text-green-700">Passport *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Username (CNIC)"
                                className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                            />
                            <p className="text-[10px] text-right text-gray-500 mt-1">
                                CNIC Number Format XXXXX-XXXXXXX-X
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                            />
                        </div>

                        <div className="text-right">
                            <Link to="#" className="text-sm font-bold text-green-800 hover:underline">
                                Forget Password ?
                            </Link>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-green-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-900 transition-colors shadow-lg text-lg mt-6"
                        >
                            Sign in
                        </button>
                    </form>

                    <p className="text-center text-xs md:text-sm font-bold text-gray-600 mt-12 mb-8">
                        Developed by CS & IT Department, HU
                    </p>
                </div>
            </div>

            {/* Right Side: Instructions - Reduced width and logo size */}
            <div className="w-full lg:w-2/5 bg-green-800 text-white p-8 md:p-10 flex flex-col items-center justify-center">
                <div className="max-w-sm text-center">
                    {/* Reduced logo size here */}
                    <img src="assets/logo.png" alt="HU Logo Overlay" className="w-24 md:w-32 opacity-90 mx-auto mb-6 drop-shadow-2xl" loading="lazy" />

                    <h2 className="text-2xl md:text-4xl font-bold mb-6 tracking-wider">INSTRUCTIONS</h2>

                    <div className="space-y-4 text-sm md:text-base leading-relaxed text-left md:text-justify">
                        <p>
                            For new applicants, click on <span className="font-bold ">Create a New Account/Signup</span> and fill out the form.
                        </p>
                        <p>
                            Applicants who already created an account then log in through CNIC and password.
                        </p>
                        <p>
                            If you forgot your password, click on Forgot Password and fill out the form. You will receive a code through your registered email; enter that code in the box and reset your password.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionLogin;
