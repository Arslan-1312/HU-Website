import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const AdmissionSignup = () => {
    const navigate = useNavigate();
    const [isInternational, setIsInternational] = React.useState('No');
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    return (
        /* Changed flex-col to flex-col-reverse so Branding appears first on mobile */
        <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-[#f0f9eb] relative">
            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 bg-[#1A5C3D] text-white px-4 py-2 rounded shadow hover:bg-green-700 transition z-20"
            >
                &larr; Back
            </button>
            {/* Left Side: Signup Form */}
            <div className="w-full lg:w-3/5 p-6 md:p-12 flex flex-col items-center">
                <div className="w-full max-w-4xl">
                    <div className="flex flex-col items-center mb-6">
                        <img src={logo} alt="HU Logo" className="w-14 md:w-16 mb-2" loading="lazy" />
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

                    <form className="space-y-6">
                        {/* Row 1: Admission Applying For */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Admission Applying For <span className="text-red-500">*</span>
                            </label>
                            <select name="program" className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white transition-shadow shadow-sm">
                                <option value="">Admission Applying For</option>
                                <option value="Diploma & Certificates Spring 2026">Diploma & Certificates Spring 2026</option>
                                <option value="BS Admissions Spring 2026 Limited Seats">BS Admissions Spring 2026 Limited Seats</option>
                                <option value="Weekend (MS/MPhil & PhD) Admissions Spring 2026">Weekend (MS/MPhil & PhD) Admissions Spring 2026</option>
                            </select>
                        </div>

                        {/* Row 2: First Name, Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-shadow shadow-sm"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-shadow shadow-sm"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        {/* Row 3: International Student, Country/CNIC */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    International Student <span className="text-red-500">*</span>
                                </label>
                                <select 
                                    name="internationalStudent" 
                                    value={isInternational}
                                    onChange={(e) => setIsInternational(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white transition-shadow shadow-sm"
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            
                            {isInternational === 'Yes' ? (
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Country <span className="text-red-500">*</span>
                                    </label>
                                    <select name="country" className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white transition-shadow shadow-sm">
                                        <option value="">Select Country</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Pakistan">Pakistan</option>
                                        {/* ... other options ... */}
                                    </select>
                                </div>
                            ) : (
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        CNIC <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="cnic"
                                        placeholder="_____-_______-_"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-shadow shadow-sm"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Row 4: Email, Mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-shadow shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Mobile <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="mobile"
                                    placeholder="03XX-XXXXXXX"
                                    className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-shadow shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Row 5: Password, Confirm Password */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-shadow shadow-sm pr-10"
                                    />
                                    <div 
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-green-600 transition-colors z-10"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Confirm Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-shadow shadow-sm pr-10"
                                    />
                                    <div 
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-green-600 transition-colors z-10"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        <i className={`fas ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 6: Gender */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Gender <span className="text-red-500">*</span>
                                </label>
                                <select name="gender" className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white transition-shadow shadow-sm">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        
                        <button
                            type="button"
                            className="w-full mt-4 bg-green-800 text-white font-extrabold py-3.5 px-6 rounded-lg hover:bg-green-900 transition-all shadow-md shadow-green-900/30 text-lg uppercase tracking-wide transform hover:-translate-y-0.5"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-xs font-bold text-gray-600 mt-8 mb-8">
                        Developed by CS & IT Department, HU
                    </p>
                </div>
            </div>

            {/* Right Side: Branding (Now shows at the top on Mobile) */}
            <div className="w-full lg:w-2/5 bg-green-800 text-white p-12 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="relative z-10 text-center">
                    <img src={logo} alt="HU Big Logo" className="w-24 md:w-48 lg:w-64 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" loading="lazy" />
                </div>
                <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
                    <img src={logo} alt="BG Pattern" className="w-[100%] scale-150 grayscale" loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default AdmissionSignup;