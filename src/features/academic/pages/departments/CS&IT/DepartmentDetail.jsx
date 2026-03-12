import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { departmentData } from '../../../../../data/departmentData';
import { NewsEventsSidebar, AnnouncementsSidebar } from '../../../components/DepartmentSidebars';

const DepartmentDetail = () => {
    const { id } = useParams();
    const dept = departmentData[id] || departmentData['cs-it'];
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    if (!dept) return <div className="p-10 text-center">Department not found.</div>;

    // Formatting the introduction content into paragraphs
    const paragraphs = dept.introduction.content.split(/\s(?=\d\.\s|In Fall|Both|Graduate|Students|The department)/);

    return (
        <div className="bg-gray-50 pb-12 font-roboto overflow-hidden">
            {/* Page Header */}
            <div className="bg-white border-b px-4 py-8 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <Link to={`/department/${id}`} className="text-custom-green text-sm hover:underline mb-2 block">
                            <i className="fas fa-arrow-left mr-2"></i> Back to Department Page
                        </Link>
                        <h1 className="text-3xl font-bold text-custom-green border-b-2 border-custom-green pb-2 inline-block">
                            About {dept.name}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image Section */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                            <img 
                                src={dept.introduction.image.startsWith('/') ? dept.introduction.image.substring(1) : dept.introduction.image} 
                                alt={dept.name} 
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h2 className="text-2xl font-bold">Excellence in Computing</h2>
                                <p className="text-white/80">Established in 2002</p>
                            </div>
                        </div>

                        {/* Interactive Stats Section - VERTICAL AS REQUESTED */}
                        <div ref={ref} className="bg-gradient-to-br from-custom-green to-dark-green rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/20 rounded-full blur-2xl"></div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-center">
                                {dept.stats.map((stat, index) => (
                                    <div key={index} className="flex flex-col items-center group">
                                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all">
                                            <i className={`${stat.icon} text-2xl`}></i>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-black tabular-nums">
                                                {inView ? (
                                                    <CountUp start={0} end={stat.count} duration={2.5} separator="," />
                                                ) : "0"}
                                                {stat.suffix}
                                            </div>
                                            <div className="text-xs uppercase tracking-widest text-white/70 font-bold">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Text Section - Renamed to Introduction */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <i className="fas fa-info-circle text-custom-green mr-3"></i>
                                Introduction
                            </h2>
                            <div className="prose prose-green max-w-none text-gray-600 leading-relaxed space-y-6">
                                {paragraphs.map((p, i) => (
                                    <p key={i} className={p.trim().match(/^\d\./) ? "pl-4 border-l-2 border-custom-green italic" : ""}>
                                        {p.trim()}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area - Shows shared news/events here too */}
                    <div className="space-y-8">
                        <NewsEventsSidebar newsEvents={dept.newsEvents} />
                        <AnnouncementsSidebar announcements={dept.announcements} />
                        
                        {/* Highlights Box */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4 border-b pb-2 italic">Key Highlights</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-custom-green mt-1 mr-3 text-sm"></i>
                                    <span className="text-sm text-gray-600">Research oriented graduate programs</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-custom-green mt-1 mr-3 text-sm"></i>
                                    <span className="text-sm text-gray-600">State of the art computing labs</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-custom-green mt-1 mr-3 text-sm"></i>
                                    <span className="text-sm text-gray-600">Highly qualified faculty</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-custom-green mt-1 mr-3 text-sm"></i>
                                    <span className="text-sm text-gray-600">Strategic industry linkages</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetail;
