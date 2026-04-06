import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { departmentData } from './departmentData';
import { NewsEventsSidebar, AnnouncementsSidebar } from '../../../components/DepartmentSidebars';

const MoUs = () => {
    const { id } = useParams();
    const dept = departmentData[id] || departmentData['cs-it'];

    const mousList = [
        {
            title: 'Giga Developers',
            description: 'for student internships, web and mobile app development training, and industry project exposure.'
        },
        {
            title: 'National Energy Efficiency & Conservation Authority (NEECA)',
            description: 'to explore opportunities in energy-efficient IT solutions and data analytics projects.'
        },
        {
            title: 'KP IT Board',
            description: 'to facilitate student training under government IT initiatives and support innovation and entrepreneurship through incubation programs.'
        },
        {
            title: 'UPWARDS (KP IT Board Initiative)',
            description: 'to empower students with employable skills and access to mentorship and job placement resources.'
        },
        {
            title: 'Al Huda Hearing Impaired School, Abbottabad',
            description: 'for developing assistive technologies and conducting community-driven software development projects to support inclusive education.'
        },
        {
            title: 'Al Shifa Eye Trust, Islamabad',
            description: 'for collaborative research on healthcare technologies and data management systems.'
        },
        {
            title: 'Shaukat Khanum Memorial Cancer Hospital & Research Centre',
            description: 'for joint initiatives in medical data analytics, healthcare systems, and student-led research projects.'
        }
    ];

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
                        Memorandums of Understanding (MoUs) - {dept.name}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            
                            {/* Introduction */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                    Overview
                                </h2>
                                <div className="prose prose-green text-gray-700 leading-relaxed text-justify bg-gray-50 p-6 rounded-xl border-l-4 border-custom-green mb-6">
                                    <p className="text-md text-gray-800">
                                        To strengthen industry-academia linkages and provide students with meaningful opportunities for hands-on learning, the <strong>Department of Computer Science & Information Technology, Hazara University</strong>, has actively pursued and signed multiple <strong>Memorandums of Understanding (MoUs)</strong> with a range of <strong>reputed organizations</strong>. 
                                    </p>
                                    <p className="text-md text-gray-800 mt-4">
                                        These strategic partnerships aim to engage students in practical work environments, internships, collaborative projects, research activities, and community service initiatives, thereby bridging the gap between theoretical knowledge and real-world application. The following MoUs have been signed to date:
                                    </p>
                                </div>
                            </div>

                            {/* MoUs List */}
                            <div className="mb-8">
                                <ul className="space-y-4 list-none pl-0">
                                    {mousList.map((mou, index) => (
                                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="flex-shrink-0 w-8 h-8 bg-custom-green/10 rounded-full flex items-center justify-center mr-4 mt-1">
                                                <span className="text-custom-green font-bold">{index + 1}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-800 font-medium text-lg block">{mou.title}</span>
                                                <span className="text-gray-600 mt-1 block">– {mou.description}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Conclusion */}
                            <div>
                                <div className="prose prose-green text-gray-700 leading-relaxed text-justify">
                                    <p className="italic border-t pt-6 text-gray-600">
                                        These partnerships reflect the department's continued commitment to <strong>academic excellence, industry collaboration, and social responsibility</strong>, and play a vital role in preparing students to become competent and community-conscious IT professionals.
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

export default MoUs;
