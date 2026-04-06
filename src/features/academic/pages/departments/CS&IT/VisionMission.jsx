import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { departmentData } from './departmentData';
import { NewsEventsSidebar, AnnouncementsSidebar } from '../../../components/DepartmentSidebars';

const VisionMission = () => {
    const { id } = useParams();
    const dept = departmentData[id] || departmentData['cs-it'];

    if (!dept) return <div className="p-10 text-center">Department not found.</div>;

    return (
        <div className="bg-gray-50 pb-12 font-roboto overflow-hidden">
            {/* Page Header */}
            <div className="bg-white border-b px-4 py-8 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <Link to={`/department/${id}`} className="text-custom-green text-sm hover:underline mb-2 block">
                        <i className="fas fa-arrow-left mr-2"></i> Back to Department Page
                    </Link>
                    <h1 className="text-3xl font-bold text-custom-green border-b-2 border-custom-green pb-2 inline-block">
                        Vision & Mission - {dept.name}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            
                            {/* Vision Section */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                    Department Vision
                                </h2>
                                <div className="prose prose-green text-gray-700 leading-relaxed space-y-4 text-justify bg-gray-50 p-6 rounded-xl border-l-4 border-custom-green">
                                    <p className="text-lg font-medium text-gray-800 italic">
                                        To be a leading Computer Science department by providing high-quality education, fostering innovation in computing, conducting cutting-edge research, driving technological advancement, and cultivating economic leadership.
                                    </p>
                                </div>
                            </div>

                            {/* Mission Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                    Department Mission
                                </h2>
                                <div className="prose prose-green text-gray-700 leading-relaxed space-y-4 text-justify">
                                    <p>
                                        To prepare students as skilled and forward-thinking computer scientists through a high-quality and well-rounded education in computing. The programs aim to equip graduates with a solid foundation in theoretical knowledge, practical skills, and innovative thinking, enabling them to contribute to cutting-edge research, drive technological advancements, and support economic development. Students will be empowered to pursue successful careers in research, academia, industry, or entrepreneurial ventures, while embracing ethical practices, creative problem-solving, and commitment to lifelong learning in an ever-evolving technological landscape.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Shared Sidebars Area */}
                    <div className="space-y-6">
                        <NewsEventsSidebar newsEvents={dept.newsEvents} />
                        <AnnouncementsSidebar announcements={dept.announcements} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VisionMission;
