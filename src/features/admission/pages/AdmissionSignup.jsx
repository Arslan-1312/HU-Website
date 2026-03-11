import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionSignup = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#f0f9eb]">
            {/* Left Side: Signup Form */}
            <div className="w-full lg:w-3/5 p-6 md:p-12 flex flex-col items-center">
                <div className="w-full max-w-lg">
                    <div className="flex flex-col items-center mb-6">
                        <img src="/assets/logo.png" alt="HU Logo" className="w-14 md:w-16 mb-2" loading="lazy" />
                        <h2 className="text-xl font-bold text-green-900 text-center">
                            Hazara University Mansehra<br />Online Admission Portal
                        </h2>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-center mb-4 uppercase tracking-wider">
                        Applicant Registration Form
                    </h3>

                    <p className="text-sm text-center mb-6">
                        Already have an Account?
                        <Link to="/admissions/login" className="text-green-700 font-bold ml-1 hover:underline">
                            Sign in
                        </Link>
                    </p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">
                                    Country <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full p-2.5 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white">
                                    <option>Pakistan</option>
                                    <option>International</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">
                                    Username CNIC <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Username (CNIC)"
                                    className="w-full p-2.5 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                                />
                                <p className="text-[9px] text-right text-gray-500 mt-1 uppercase">
                                    CNIC Number Format XXXXX-XXXXXXX-X
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">
                                    Call No <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Number With Country Code"
                                    className="w-full p-2.5 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                                />
                                <p className="text-[9px] text-right text-gray-500 mt-1 uppercase">
                                    Phone Number Format +92 345 410738732
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="w-full p-2.5 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        className="w-full p-2.5 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                                    />
                                    <i className="fas fa-eye-slash absolute right-3 top-3.5 text-gray-400 cursor-pointer"></i>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">
                                    Repeat Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        className="w-full p-2.5 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                                    />
                                    <i className="fas fa-eye-slash absolute right-3 top-3.5 text-gray-400 cursor-pointer"></i>
                                </div>
                            </div>
                        </div>

                        <div className="my-4 flex justify-center md:justify-start">
                            {/* Responsive Captcha Container */}
                            <div className="bg-gray-50 border border-gray-200 rounded p-4 flex items-center justify-between w-full max-w-[304px]">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 border-2 border-gray-300 rounded mr-3 bg-white"></div>
                                    <span className="text-sm">I'm not a robot</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" className="w-8 h-8 opacity-60" loading="lazy" />
                                    <span className="text-[10px] text-gray-400">reCAPTCHA</span>
                                    <div className="flex space-x-1 text-[8px] text-gray-400">
                                        <span>Privacy</span>
                                        <span>-</span>
                                        <span>Terms</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-green-800 text-white font-bold py-3 px-6 rounded hover:bg-green-900 transition-colors shadow shadow-green-900/40 text-lg"
                        >
                            Sign Up
                        </button>
                    </form>



                    <p className="text-center text-xs font-bold text-gray-600 mt-8 mb-8">
                        Developed by CS & IT Department, HU
                    </p>
                </div>
            </div>

            {/* Right Side: University Branding - Slimmer and responsive logo */}
            <div className="w-full lg:w-2/5 bg-green-800 text-white p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="relative z-10 text-center">
                    {/* Reduced size of logo */}
                    <img src="/assets/logo.png" alt="HU Big Logo" className="w-32 md:w-48 lg:w-64 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" loading="lazy" />
                </div>
                {/* Background Pattern - Fixed Scaling */}
                <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
                    <img src="/assets/logo.png" alt="BG Pattern" className="w-[100%] scale-150 grayscale" loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default AdmissionSignup;