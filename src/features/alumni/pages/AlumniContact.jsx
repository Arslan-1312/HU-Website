import React from 'react';

/**
 * Alumni Contact Us Page
 * Features a contact form with CAPTCHA and the university advancement cell details.
 */
const AlumniContact = () => {
    return (
        <div className="mx-4 md:mx-12 py-10 flex flex-col lg:flex-row gap-10">
            
            {/* Left Side: Contact Form */}
            <div className="lg:w-2/3">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-4xl font-bold text-primary-green mb-4">
                        Alumni Contact Us
                    </h2>
                    <p className="text-gray-600 text-sm mb-8">
                        Please fill out this form carefully. Fields with ( * ) are necessary.
                    </p>

                    <form className="space-y-6 max-w-xl">
                        {/* Name Field */}
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label className="md:w-32 text-gray-700 font-medium">Your Name : *</label>
                            <input 
                                type="text" 
                                className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-primary-green outline-none"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label className="md:w-32 text-gray-700 font-medium">Your Email : *</label>
                            <input 
                                type="email" 
                                className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-primary-green outline-none"
                            />
                        </div>

                        {/* Messages Field */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="md:w-32 text-gray-700 font-medium pt-2">Your Msgs : *</label>
                            <textarea 
                                rows="6"
                                className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-primary-green outline-none"
                            ></textarea>
                        </div>

                        {/* CAPTCHA Section */}
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label className="md:w-32 text-gray-700 font-medium">Below Code</label>
                            <div className="flex-1 space-y-3">
                                <input 
                                    type="text" 
                                    className="w-full border border-gray-300 rounded-md p-2 outline-none"
                                />
                                <div className="inline-block bg-[#8B5E3C] text-white px-4 py-2 font-mono text-xl tracking-widest italic rounded">
                                    43f74
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="md:ml-36">
                            <button className="w-full bg-primary-green hover:bg-dark-green text-white font-bold py-3 rounded-md transition-colors text-lg">
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Footer Contact Details */}
                    <div className="mt-10 pt-6 border-t border-gray-100 text-sm text-gray-600 space-y-1">
                        <p>You can also contact us on the following Contact Details:</p>
                        <p className="font-medium">University Advancement Cell , University of Haripur Hattar Road KPK Pakistan.</p>
                        <p>• Email: <span className="text-primary-green italic">alumni@hu.edu.pk</span></p>
                        <p>• Tel # +92-995-2442333</p>
                    </div>
                </div>
            </div>
                {/* Right Side: Login Panel */}
                <div className="lg:w-1/3">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                        <div className="bg-gradient-to-r from-primary-green to-dark-green text-white text-center py-4 rounded-xl mb-8 font-black uppercase tracking-tighter">
                            Login / Register
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-green focus:bg-white outline-none transition-all text-sm"
                                    placeholder="yourname@alumni.hu.edu.pk"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-green focus:bg-white outline-none transition-all text-sm"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="flex justify-between items-center text-xs font-bold px-1">
                                <a href="#" className="text-primary-green hover:underline">Sign Up Now</a>
                                <a href="#" className="text-gray-400 hover:text-gray-600 no-underline">Forgot Password?</a>
                            </div>

                            <button className="w-full bg-dark-green hover:bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-primary-green/20 mt-4">
                                Sign In
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Help? 0995-123456</span>
                        </div>
                    </div>
                </div>

            </div>    );
};

export default AlumniContact;
