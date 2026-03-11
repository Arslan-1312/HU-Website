import React from 'react';

/**
 * Sidebar component for supplemental pages.
 * Contains "News & Events" and "Important Highlights" widgets.
 */
const Sidebar = () => {
    return (
        <div className="space-y-8">
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
                {[
                    { month: "OCT", day: "24", text: "Final match of Intervarsity Zone C Volleyball Championship was played between Abdul Wali Khan University Mardan..." },
                    { month: "OCT", day: "20", text: "Visit of Honorable Vice Chancellor Hazara University Prof. Dr. Ikramullah Khan to the site..." },
                    { month: "OCT", day: "15", text: "Hazara University announces the commencement of Fall Semester examinations from next month..." },
                    { month: "OCT", day: "12", text: "A seminar on 'Modern Research Methodologies' was organized by the Department of CS & IT..." },
                    { month: "OCT", day: "08", text: "The University library has added 500+ new research journals to the digital repository..." }
                ].concat([ // Duplicating for seamless loop
                    { month: "OCT", day: "24", text: "Final match of Intervarsity Zone C Volleyball Championship was played between Abdul Wali Khan University Mardan..." },
                    { month: "OCT", day: "20", text: "Visit of Honorable Vice Chancellor Hazara University Prof. Dr. Ikramullah Khan to the site..." },
                    { month: "OCT", day: "15", text: "Hazara University announces the commencement of Fall Semester examinations from next month..." },
                    { month: "OCT", day: "12", text: "A seminar on 'Modern Research Methodologies' was organized by the Department of CS & IT..." },
                    { month: "OCT", day: "08", text: "The University library has added 500+ new research journals to the digital repository..." }
                ]).map((item, i) => (
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
            {/* Important Highlights Widget */}
            <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-200">
                <div className="bg-dark-green text-white font-bold p-3 uppercase text-sm tracking-wider text-center">
                    Important Highlights
                </div>
                <div className="p-1 px-4 bg-gray-50/50">
                    <ul className="divide-y divide-gray-100">
                        {[
                            "FIFTH SUSTAINABILITY REPORT, HAZARA UNIVERSITY 2025",
                            "Hazara University Job Portal",
                            "Hazara University Directorate of Academic",
                            "Hazara University Controller of Examinations",
                            "Hazara University Directorate of Student Affairs",
                            "HEC Digital Library",
                            "Hazara University Student Service Center"
                        ].map((item, i) => (
                            <li key={i} className="py-2.5 transition-colors hover:bg-white rounded-sm group">
                                <a href="#" className="flex items-start text-xs font-semibold text-gray-600 group-hover:text-primary-green no-underline">
                                    <i className="fas fa-chevron-right mt-0.5 mr-3 text-nav-green text-[9px]"></i>
                                    <span className="underline decoration-gray-200 group-hover:decoration-primary-green">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
