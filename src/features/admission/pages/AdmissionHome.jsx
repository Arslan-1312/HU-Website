import React from 'react';
import { Link } from 'react-router-dom';
import { admissionCategories } from '../data/admissionData';

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
                        <Link to="/admissions/login" className="text-blue-700 font-bold mx-1 hover:underline">(Apply Online)</Link>.
                        For Queries Click <Link to="/admissions/helpdesk" className="text-red-600 font-bold mx-1 hover:underline">(Help Desk)</Link>.
                        
                    </p>
                    <p className="mt-3 font-bold text-red-600 m-0 leading-tight">
                        Entry Test Results for MS/M.Phil/M.Sc (Hons)/Ph.D Programs Phase I (Admissions Spring 2026).
                        <Link to="/OnlineResult" className="block sm:inline sm:ml-1 hover:underline text-blue-800"> Click Here for Results.</Link>
                    </p>
                </div>
 
                {/* Grid - Adjusted to be perfectly centered and static on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="bg-white border rounded-lg overflow-hidden shadow-md border-green-100 flex flex-col h-full w-full mx-auto group hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Card Header */}
                            <div className="bg-green-800 text-white py-3 text-center font-bold tracking-wide uppercase text-xs md:text-sm z-10 relative">
                                {cat.title}
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-video bg-gray-100 overflow-hidden">
                                {cat.isYoutube ? (
                                    (() => {
                                        // Dynamically extract ID from various YouTube URL formats
                                        const urlStr = cat.videoUrl || '';
                                        let extractedId = '';
                                        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                                        const match = urlStr.match(regExp);
                                        if (match && match[2].length === 11) {
                                            extractedId = match[2];
                                        }

                                        return (
                                            <a 
                                                href={cat.videoUrl || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full h-full flex items-center justify-center bg-black relative cursor-pointer block group/video"
                                            >
                                                {extractedId ? (
                                                    <img
                                                        src={`https://img.youtube.com/vi/${extractedId}/hqdefault.jpg`}
                                                        alt="Tutorial"
                                                        className="w-full h-full object-cover opacity-60 group-hover/video:scale-105 transition-transform duration-700 ease-out"
                                                        loading={idx < 3 ? "eager" : "lazy"}
                                                        fetchpriority={idx === 0 ? "high" : "auto"}
                                                        decoding="async"
                                                    />
                                                ) : (
                                                    // Fallback solid color if the parsing fails or URL is empty
                                                    <div className="w-full h-full bg-gray-800 opacity-60"></div>
                                                )}
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover/video:scale-110 group-hover/video:bg-red-700 transition-all duration-300">
                                                        <i className="fas fa-play text-white text-2xl ml-1"></i>
                                                    </div>
                                                </div>
                                            </a>
                                        );
                                    })()
                                ) : (
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        loading={idx < 3 ? "eager" : "lazy"}
                                        fetchpriority={idx === 0 ? "high" : "auto"}
                                        decoding="async"
                                    />
                                )}
                            </div>

                            {/* Links / Description Section */}
                            <div className="p-4 flex-grow flex items-center justify-center">
                                {cat.description ? (
                                    <p className="text-gray-600 text-[13px] leading-relaxed text-center font-medium px-4">
                                        {cat.description}
                                    </p>
                                ) : (
                                    <ul className="space-y-3 w-full">
                                        {cat.links.map((link, lIdx) => (
                                            <li key={lIdx} className="border-b border-dashed border-gray-200 pb-2 last:border-0 flex items-start group/link">
                                                <i className="fas fa-play text-green-700 text-[10px] mt-1.5 mr-3 group-hover/link:translate-x-1 transition-transform"></i>
                                                <Link to={link.path} className="text-gray-700 font-semibold text-[13px] transition-colors leading-tight hover:text-green-800">
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdmissionHome;
