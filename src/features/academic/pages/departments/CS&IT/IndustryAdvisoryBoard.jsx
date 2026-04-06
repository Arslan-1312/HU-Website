import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { departmentData } from './departmentData';
import { NewsEventsSidebar, AnnouncementsSidebar } from '../../../components/DepartmentSidebars';

const IndustryAdvisoryBoard = () => {
    const { id } = useParams();
    const dept = departmentData[id] || departmentData['cs-it'];

    const boardMembers = [
        { id: 1, name: 'Mr. Saqib Hanif', designation: 'Founder / CEO', organization: 'SaqibVentures' },
        { id: 2, name: 'Mr. Waqas Shah', designation: 'Technical Manager / Sr. Software Engineer', organization: 'Upwards' },
        { id: 3, name: 'Mr. Kashif Abbasi', designation: 'Senior Software Consultant', organization: 'IBM' },
        { id: 4, name: 'Mr. Syed Ibrar Hussain Shah', designation: 'General Manager', organization: 'Centigma Soft' },
        { id: 5, name: 'Mr. Malik Saifullah', designation: 'Team Lead', organization: 'Elite Technologies Pvt. Limited' },
        { id: 6, name: 'Mr. Qamar Zia', designation: 'Senior AI Consultant / Data Scientist', organization: 'QzSolutions.org / ADIA / Reporteq Pakistan' },
        { id: 7, name: 'Mr. Asad Mehmood Khan', designation: 'Defence Engineer / Deputy Project Director', organization: 'NESCOM / National Command Authority (NCA)' },
        { id: 8, name: 'Mr. Ibrar Munsif', designation: 'SAF Program Manager', organization: 'DXT Technology, Melbourne, Australia' },
        { id: 9, name: 'Mr. Waqas Ahmad', designation: 'GM Technical', organization: 'Pakistan Atomic Energy Commission (PAEC)' },
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
                        Industry Advisory Board - {dept.name}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            
                            {/* Introduction Section */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                    Introduction
                                </h2>
                                <div className="prose prose-green text-gray-700 leading-relaxed space-y-4 text-justify bg-gray-50 p-6 rounded-xl border-l-4 border-custom-green">
                                    <p className="text-md text-gray-800">
                                        The Department of Computer Science & Information Technology, Hazara University, is pleased to propose the formation of an Industry Advisory Board (IAB) comprising distinguished professionals. The primary role of the IAB is to provide expert guidance and recommendations for continuous improvement of the curriculum to meet current and future industry demands.
                                    </p>
                                </div>
                            </div>

                            {/* Board Members Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                    Board Members
                                </h2>
                                
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                                        <thead className="bg-custom-green text-white">
                                            <tr>
                                                <th className="py-4 px-4 text-left font-semibold text-sm w-12 rounded-tl-lg">S.No.</th>
                                                <th className="py-4 px-4 text-left font-semibold text-sm">Name</th>
                                                <th className="py-4 px-4 text-left font-semibold text-sm">Designation</th>
                                                <th className="py-4 px-4 text-left font-semibold text-sm rounded-tr-lg">Organization</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {boardMembers.map((member, index) => (
                                                <tr key={member.id} className={index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white hover:bg-gray-50 transition-colors'}>
                                                    <td className="py-4 px-4 text-sm text-gray-600 font-medium">{member.id}</td>
                                                    <td className="py-4 px-4 text-sm text-gray-800 font-bold">{member.name}</td>
                                                    <td className="py-4 px-4 text-sm text-gray-600">{member.designation}</td>
                                                    <td className="py-4 px-4 text-sm text-gray-600">{member.organization}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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

export default IndustryAdvisoryBoard;
