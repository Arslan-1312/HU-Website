import React from 'react';
import { Link } from 'react-router-dom';
import { admissionCategories } from '../../../data/admissionData';

const AdmissionHome = () => {
    const categories = admissionCategories;

    return (
        /* FIX APPLIED: 
           - 'w-full' and 'overflow-x-hidden' prevents the horizontal "wobble".
           - 'touch-none' is NOT used because we want vertical scrolling, 
             instead we use 'selection:bg-green-100' for better mobile feel.
        */
        <div className="bg-white py-4 md:py-8 w-full overflow-x-hidden min-h-screen">
            <div className="container mx-auto px-4 max-w-full">

                {/* Notice Bar - Fixed for mobile overflow */}
                <div className="bg-gray-50 border-l-4 border-green-600 p-4 mb-6 md:mb-8 text-[11px] sm:text-[12px] md:text-[13px] shadow-sm break-words">
                    <p className="m-0 leading-relaxed text-gray-800">
                        <span className="font-bold">Note:</span> For Online Application Instructions Click
                        <Link to="/admissions/how-to-apply" className="text-red-600 font-bold mx-1 hover:underline">(How To Apply)</Link>.
                        To <span className="text-red-600 font-bold uppercase">Apply Online</span> Please Click
                        <Link to="/admissions/signup" className="text-blue-700 font-bold mx-1 hover:underline">(Apply Online)</Link>.
                        For Queries Click <Link to="/admissions/help-desk" className="text-red-600 font-bold mx-1 hover:underline">(Help Desk)</Link>.
                        Also For Online Application Instructions <Link to="/admissions/how-to-apply" className="text-red-600 font-bold mx-1 hover:underline">(Click Here for Video Tutorial)</Link>
                    </p>
                    <p className="mt-3 font-bold text-red-600 m-0 leading-tight">
                        Entry Test Results for MS/M.Phil/M.Sc (Hons)/Ph.D Programs Phase I (Admissions Spring 2026).
                        <Link to="/OnlineResult" className="block sm:inline sm:ml-1 hover:underline text-blue-800">Click Here for Results.</Link>
                    </p>
                </div>

                {/* Grid - Adjusted to be perfectly centered and static on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="bg-white border rounded-lg overflow-hidden shadow-md border-green-100 flex flex-col h-full w-full mx-auto"
                        >
                            {/* Card Header */}
                            <div className="bg-green-800 text-white py-3 text-center font-bold tracking-wide uppercase text-xs md:text-sm">
                                {cat.title}
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-video bg-gray-100 overflow-hidden">
                                {cat.isYoutube ? (
                                    <div className="w-full h-full flex items-center justify-center bg-black relative group cursor-pointer">
                                        <img
                                            src={`https://img.youtube.com/vi/${cat.embedId}/maxresdefault.jpg`}
                                            alt="Tutorial"
                                            className="w-full h-full object-cover opacity-60"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <i className="fab fa-youtube text-white text-5xl group-hover:scale-110 transition-transform"></i>
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                )}
                            </div>

                            {/* Links Section */}
                            <div className="p-4 flex-grow">
                                <ul className="space-y-3">
                                    {cat.links.map((link, lIdx) => (
                                        <li key={lIdx} className="border-b border-dashed border-gray-200 pb-2 last:border-0 flex items-start">
                                            <i className="fas fa-play text-green-700 text-[10px] mt-1.5 mr-3"></i>
                                            <Link to="#" className="text-gray-700 font-semibold text-[13px] transition-colors leading-tight">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdmissionHome;