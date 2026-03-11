import React from 'react';
import { alumniHomeData } from '../../../data/alumniData';

/**
 * Alumni Portal Page
 * 
 * Features a login/registration panel and information about the
 * University Advancement Cell's connection with graduates.
 */
const AlumniHome = () => {
    const data = alumniHomeData;

    return (
        <>
            {/* Main Content Area */}
            <div className="mx-4 md:mx-12 py-10 flex flex-col lg:flex-row gap-10">

                {/* Left Side: Welcome & Information */}
                <div className="lg:w-2/3">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-black text-primary-green mb-8 flex items-center">
                            <i className="fas fa-handshake mr-4"></i>
                            {data.welcomeTitle}
                        </h3>

                        <div className="flex flex-col md:flex-row gap-8 mb-10">
                            <div className="md:w-1/3 shrink-0">
                                <img src="/assets/banner 3.png" className="w-full rounded-xl shadow-md border-4 border-white" alt="Alumni" loading="lazy" />
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-700 leading-relaxed text-justify mb-6 font-medium">
                                    {data.welcomeText}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                    {data.subText}
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                            <h5 className="font-bold text-dark-green mb-6 flex items-center uppercase tracking-wide text-sm">
                                <i className="fas fa-bullseye mr-3 text-primary-green"></i>
                                {data.goalsTitle}
                            </h5>
                            <ul className="space-y-4 m-0 p-0">
                                {data.goals.map((goal, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center mr-4 shrink-0 mt-0.5">
                                            <i className="fas fa-check text-[10px] text-primary-green"></i>
                                        </div>
                                        <span className="font-medium">{goal}</span>
                                    </li>
                                ))}
                            </ul>
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

            </div>

        </>
    );
};

export default AlumniHome;
