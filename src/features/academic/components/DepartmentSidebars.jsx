import React from 'react';
import { Link } from 'react-router-dom';

export const NewsEventsSidebar = ({ newsEvents }) => {
    if (!newsEvents) return null;
    
    return (
        /* Fixed height h-[450px] ensures the container never expands or pushes content below it */
        <div className="bg-white rounded overflow-hidden border border-gray-200 shadow-sm flex flex-col h-[450px] w-full">
            <div className="bg-primary-green text-white font-bold p-3 uppercase flex justify-between items-center text-sm tracking-wider z-10 relative flex-shrink-0">
                <span>{newsEvents.title || "News & Events"}</span>
                <Link to="#" className="text-[10px] font-normal bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition-colors no-underline text-white">VIEW ALL</Link>
            </div>

            <div className="relative flex-1 overflow-hidden bg-gray-50/50 group">
                <style>
                    {`
                    @keyframes scrollDeptNews {
                        0% { top: 100%; transform: translateY(0); }
                        100% { top: 0; transform: translateY(-100%); }
                    }
                    .animate-dept-news-scroll {
                        animation: scrollDeptNews 25s linear infinite;
                    }
                    .animate-dept-news-scroll:hover {
                        animation-play-state: paused;
                    }
                    `}
                </style>

                <div className="absolute w-full p-4 animate-dept-news-scroll">
                    <ul className="space-y-4">
                        {newsEvents.items.map((item, i) => {
                            const parts = item.date ? item.date.split(' ') : ['Jan', '01'];
                            const month = parts[0];
                            const day = parts[1] ? parts[1].replace(',', '') : '01';

                            return (
                                <li key={i} className="border-b border-dashed border-gray-200 pb-4 last:border-0">
                                    <Link to={item.link || "#"} className="no-underline flex gap-3 group/item items-start">
                                        {/* CALENDAR BOX */}
                                        <div className="flex-shrink-0 w-12 text-center rounded overflow-hidden border border-primary-green shadow-sm bg-white">
                                            <div className="bg-primary-green text-white text-[9px] font-bold py-0.5 uppercase">
                                                {month}
                                            </div>
                                            <div className="text-gray-800 text-lg font-black leading-tight py-1 uppercase">
                                                {day}
                                            </div>
                                        </div>

                                        {/* NEWS TEXT */}
                                        <div className="flex-1">
                                            <span className="text-[12px] font-medium text-gray-700 group-hover/item:text-primary-green leading-snug text-justify transition-colors line-clamp-3 block">
                                                {item.title}
                                                {item.isNew && (
                                                    <span className="ml-2 bg-red-500 text-white text-[8px] px-1 rounded uppercase font-bold italic animate-pulse">
                                                        New
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const AnnouncementsSidebar = ({ announcements }) => {
    if (!announcements) return null;
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md flex flex-col">
            <div className="bg-gradient-to-b from-[#2e9046] to-primary-green text-white font-bold p-4 uppercase text-center tracking-wider text-sm">
                {announcements.title || "Important Announcements"}
            </div>
            
            {announcements.image && (
                <div className="w-full flex flex-col">
                    <img 
                        src={announcements.image.startsWith('/') ? announcements.image.substring(1) : announcements.image} 
                        alt="Announcement Overview" 
                        className="w-full h-auto object-cover border-b border-gray-100"
                    />
                </div>
            )}

            {(announcements.items?.length > 0 || !announcements.image) && (
                <div className="p-1 px-4 bg-gray-50/50 mt-1">
                    <ul className="divide-y divide-gray-200">
                        {announcements.items?.length > 0 ? (
                            announcements.items.map((item, i) => (
                                <li key={i} className="py-3 px-2 transition-colors hover:bg-white rounded group">
                                    <Link
                                        to={item.link || "#"}
                                        className="flex items-start text-xs font-semibold text-gray-600 group-hover:text-primary-green no-underline"
                                    >
                                        <i className="fas fa-angle-right mt-0.5 mr-3 text-nav-green"></i>
                                        <span className="underline decoration-gray-300 group-hover:decoration-primary-green">{item.title}</span>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="py-3 px-2 text-xs italic text-gray-400">No Announcement Found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export const ImportantLinksSidebar = ({ importantLinks }) => {
    if (!importantLinks) return null;
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
            <h2 className="text-xl font-semibold text-primary-green mb-6 border-b pb-2 italic">{importantLinks.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {importantLinks.columns.map((column, colIdx) => (
                    <ul key={colIdx} className="space-y-2">
                        {column.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center group">
                                <span className="text-gray-400 mr-2 group-hover:text-primary-green transition-colors">•</span>
                                <Link to={item.link} className="text-gray-700 hover:text-primary-green text-sm transition-colors no-underline">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};