import React from 'react';
import Sidebar from '../../components/Sidebar';

const FacultyProfile = () => {
    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-2xl font-extrabold text-primary-green mb-2">
                        Faculty Members Login OR Register (Hazara University)
                    </h2>
                    <p className="text-xs text-gray-600 mb-8 italic">
                        Note: Please Complete Below Forms Carefully. Fields With ( * ) Are Necessary. Only Official Email Addresses For Every Faculty Member Will Be Allowed For Registration And Login E.G (Example@Hu.Edu.Pk).
                    </p>

                    <div className="flex flex-col md:flex-row gap-6">
                        
                        {/* Registration Form */}
                        <div className="flex-1 bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
                            <div className="bg-primary-green text-white font-bold p-3 uppercase text-center text-sm tracking-wider">
                                Create An Account / Register
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="grid grid-cols-3 items-center gap-2">
                                    <label className="text-xs font-bold text-gray-700">Title: *</label>
                                    <select className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green">
                                        <option>Dr.</option>
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2">
                                    <label className="text-xs font-bold text-gray-700">Name: *</label>
                                    <input type="text" className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green" />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2">
                                    <label className="text-xs font-bold text-gray-700">Gender: *</label>
                                    <select className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2">
                                    <label className="text-xs font-bold text-gray-700">Designation: *</label>
                                    <input type="text" className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green" />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2">
                                    <label className="text-xs font-bold text-gray-700">Department: *</label>
                                    <select className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green">
                                        <option>CS & IT Department</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2">
                                    <label className="text-xs font-bold text-gray-700">Qualification: *</label>
                                    <input type="text" className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green" />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2">
                                    <label className="text-xs font-bold text-gray-700">Email: *</label>
                                    <input type="email" className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green" />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2">
                                    <label className="text-xs font-bold text-gray-700">Password: *</label>
                                    <input type="password" placeholder="Min 8 Characters" className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green" />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-2">
                                    <label className="text-xs font-bold text-gray-700">Enter Code: *</label>
                                    <div className="col-span-2 flex flex-col gap-2">
                                        <input type="text" className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green" />
                                        <div className="bg-orange-100 border border-orange-200 p-1 flex justify-center">
                                            <span className="font-serif italic font-bold text-gray-700 tracking-widest select-none">Oa7ab</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 flex justify-end">
                                    <button className="bg-gray-100 hover:bg-primary-green hover:text-white text-gray-700 font-bold py-1 px-4 rounded border border-gray-300 transition-all text-xs">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Login Form */}
                        <div className="flex-1">
                            <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden h-fit">
                                <div className="bg-dark-green text-white font-bold p-3 uppercase text-center text-sm tracking-wider">
                                    Existing Member
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="grid grid-cols-3 items-center gap-2">
                                        <label className="text-xs font-bold text-gray-700">Email: *</label>
                                        <input type="email" className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green" />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-2">
                                        <label className="text-xs font-bold text-gray-700">Password: *</label>
                                        <input type="password" title="Case Sensitive" className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-primary-green" />
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <a href="#" className="text-[10px] text-primary-green hover:underline font-bold">Forget Password</a>
                                        <button className="bg-gray-100 hover:bg-primary-green hover:text-white text-gray-700 font-bold py-1 px-6 rounded border border-gray-300 transition-all text-xs">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <Sidebar />
                </div>

            </div>
        </div>
    );
};

export default FacultyProfile;