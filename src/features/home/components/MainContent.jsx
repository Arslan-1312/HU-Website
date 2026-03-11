import React from 'react';
import { Link } from 'react-router-dom';
import { vcMessage, importantHighlights, newsEvents } from '../../../data/homeData';
/**
 * MainContent grid containing the Vice Chancellor's message,
 * important university highlights, and latest news & events.
 */
const MainContent = () => {
    return (
        <section className="container mx-auto px-4 mb-16">
            {/* ✅ Tablet should not be 3 columns (too narrow). Use 2 columns on md, 3 on lg. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Vice Chancellor's Message */}
                {/* ✅ VC spans full width on tablet for professional readable text */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md md:col-span-2 lg:col-span-1">
                    <div className="bg-gradient-to-b from-[#2e9046] to-primary-green text-white font-bold p-4 uppercase text-center tracking-wider">
                        Vice Chancellor
                    </div>

                    <div className="p-6 bg-gray-50/50">
                        {/* ✅ FINAL VC LAYOUT:
                           - All screens: Image top (center), text full width bottom
                           - No wrapping under image, no narrow text, professional spacing
                        */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={vcMessage.image}
                                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 border-2 border-white shadow-sm rounded object-cover"
                                alt="Vice Chancellor"
                                loading="lazy"
                            />

                            {/* Text full width under image */}
                            <div className="w-full mt-5 text-left">
                                <p className="text-sm text-gray-700 leading-relaxed whitespace-normanl break-words">
                                    {vcMessage.paragraphs[0]}
                                </p>

                                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal break-words mt-4">
                                    {vcMessage.paragraphs[1]}
                                </p>

                                <Link
                                    to="/vc-message"
                                    className="
                                        inline-flex items-center justify-center
                                        w-full sm:w-auto
                                        px-4 py-2
                                        rounded-md
                                        border border-primary-green/30
                                        bg-white
                                        text-primary-green font-semibold text-sm
                                        hover:bg-primary-green hover:text-white
                                        hover:border-primary-green
                                        transition-colors
                                        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/40
                                        no-underline
                                        mt-6
                                    "
                                >
                                    Read More <i className="fas fa-arrow-right ml-2 text-xs"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Highlights */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
                    <div className="bg-gradient-to-b from-[#2e9046] to-primary-green text-white font-bold p-4 uppercase text-center tracking-wider">
                        Important Highlights
                    </div>
                    <div className="p-1 px-4 bg-gray-50/50 h-full">
                        <ul className="divide-y divide-gray-200">
                            {importantHighlights.map((item, i) => (
                                <li key={i} className="py-3 px-2 transition-colors hover:bg-white rounded group">
                                    <Link
                                        to={item.path}
                                        className="flex items-start text-xs font-semibold text-gray-600 group-hover:text-primary-green no-underline"
                                    >
                                        <i className="fas fa-angle-right mt-0.5 mr-3 text-nav-green"></i>
                                        <span className="underline decoration-gray-300 group-hover:decoration-primary-green">{item.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* News & Events Widget */}
                <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-200">
                    <div className="bg-primary-green text-white font-bold p-3 uppercase flex justify-between items-center text-sm tracking-wider z-10 relative">
                        <span>News & Events</span>
                        <a href="#" className="text-[10px] font-normal bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition-colors no-underline">VIEW ALL</a>
                    </div>

                    {/* SCROLLING CONTAINER */}
                    <div className="relative h-[320px] overflow-hidden bg-gray-50/50 group">
                        <style>
                            {`
                @keyframes scrollNews {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-news-scroll {
                    animation: scrollNews 25s linear infinite;
                }
                .animate-news-scroll:hover {
                    animation-play-state: paused;
                }
            `}
                        </style>

                        <div className="p-4 animate-news-scroll">
                            <ul className="space-y-4">
                                {newsEvents.concat(newsEvents).map((item, i) => (
                                    <li key={i} className="border-b border-dashed border-gray-200 pb-4 last:border-0">
                                        <a href="#" className="no-underline flex gap-3 group/item items-start">

                                            {/* CALENDAR BOX */}
                                            <div className="flex-shrink-0 w-12 text-center rounded overflow-hidden border border-primary-green shadow-sm bg-white">
                                                <div className="bg-primary-green text-white text-[9px] font-bold py-0.5 uppercase">
                                                    {item.month}
                                                </div>
                                                <div className="text-gray-800 text-lg font-black leading-tight py-1">
                                                    {item.day}
                                                </div>
                                            </div>

                                            {/* NEWS TEXT */}
                                            <div className="flex-1">
                                                <span className="text-[12px] font-medium text-gray-700 group-hover/item:text-primary-green leading-snug text-justify transition-colors line-clamp-3 block">
                                                    {item.text}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default React.memo(MainContent);