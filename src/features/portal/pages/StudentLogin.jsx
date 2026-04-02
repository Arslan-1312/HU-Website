import React from 'react';
import logo from '../../admission/assets/logo.png';

const StudentLogin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2e7d32] to-[#0a4f22] font-roboto px-4">
            <div className="w-full max-w-sm h-auto bg-white rounded-xl shadow-2xl overflow-hidden">

                {/* Header Section - Height and internal element sizes increased */}
                <div className="bg-[#06402b] py-2  flex items-center justify-center gap-5 ">
                    <div className="shrink-0">
                        <img
                            src={logo}
                            alt="Hazara University Logo"
                            className="h-24 w-auto drop-shadow-lg" // Increased from h-16 to h-24
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-white tracking-tighter leading-none text-left ">
                            Hazara <br />University
                        </h1>
                    </div>
                </div>

                {/* Login Form Section - Unchanged to keep the overall card size stable */}
                <div className="p-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl font-extrabold text-gray-800">Student Portal Login</h2>
                        <p className="text-sm text-green-700 font-bold">Sign in to start your session</p>
                    </div>

                    <form className="space-y-5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded text-base focus:ring-2 focus:ring-primary-green outline-none transition-all shadow-sm"
                            />
                            <div className="absolute inset-y-0 right-0 pr-0 flex items-center pointer-events-none">
                                <i className="fas fa-envelope text-gray-400 text-sm bg-gray-100 p-3.5 rounded-r border-l border-gray-300"></i>
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded text-base focus:ring-2 focus:ring-primary-green outline-none transition-all shadow-sm"
                            />
                            <div className="absolute inset-y-0 right-0 pr-0 flex items-center pointer-events-none">
                                <i className="fas fa-lock text-gray-400 text-sm bg-gray-100 p-3.5 rounded-r border-l border-gray-300"></i>
                            </div>
                        </div>

                        <div className="flex justify-center pt-2">
                            <button
                                type="submit"
                                className="w-2/3 bg-[#1b75d0] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors shadow-md text-sm uppercase tracking-widest text-center"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-xs font-bold text-gray-600 hover:text-primary-green transition-colors uppercase">
                            forgot your password ?
                        </a>
                        <p className="text-[10px] text-gray-400 mt-1">(Contact Administrator)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;
