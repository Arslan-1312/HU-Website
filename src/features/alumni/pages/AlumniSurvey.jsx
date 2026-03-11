import React from 'react';
import { alumniSurveyData } from '../../../data/alumniData';

/**
 * Alumni Portal Page
 * * Features a login/registration panel and information about the
 * University Advancement Cell's connection with graduates.
 */
const AlumniSurvey = () => {
    const data = alumniSurveyData;

    return (
        <>
            {/* Main Content Area */}
            <div className="mx-4 md:mx-12 py-10 flex flex-col lg:flex-row gap-10">

                {/* Left Side: Student Employment Statistics Report */}
                <div className="lg:w-2/3">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-3xl font-black text-primary-green mb-2">
                            {data.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6">
                            {data.subtitle}
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary-green text-white text-sm">
                                        {data.headers.map((header, i) => (
                                            <th key={i} className={`p-2 border border-gray-200 ${header === 'S.No' ? 'w-16' : ''}`}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-gray-700">
                                    {data.rows.map((row) => (
                                        <tr key={row.id}>
                                            <td className="p-2 border border-gray-200 text-center">{row.id}</td>
                                            <td className="p-2 border border-gray-200">{row.title}</td>
                                            <td className="p-2 border border-gray-200">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Right Side: Login Panel */}
                <div className="lg:w-1/3">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                        <div className="bg-gradient-to-r from-primary-green to-dark-green text-white text-center py-4 rounded-xl mb-8 font-black uppercase tracking-tighter">
                            {data.loginTitle}
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
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{data.helpText}</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AlumniSurvey;
