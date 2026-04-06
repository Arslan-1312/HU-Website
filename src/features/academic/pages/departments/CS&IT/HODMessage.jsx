import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { departmentData } from './departmentData';
import { NewsEventsSidebar, AnnouncementsSidebar } from '../../../components/DepartmentSidebars';

const HODMessage = () => {
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
                        HOD's Message - {dept.name}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row gap-8 mb-8 border-b pb-8">
                                <div className="w-full md:w-1/3">
                                    <img 
                                        src="assets/mushtaq-ali.png" 
                                        alt="Dr. Mushtaq Ali" 
                                        className="w-full rounded-xl shadow-md border-4 border-white ring-1 ring-gray-200 hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="font-bold text-gray-800">Dr. Mushtaq Ali</h3>
                                        <p className="text-sm text-custom-green font-medium">Chairperson</p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Dept of CS & IT</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                        <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                        Message from Head of Department
                                    </h2>
                                    <div className="prose prose-green text-gray-700 leading-relaxed space-y-4 text-justify">
                                        <p>
                                            It gives me great pleasure to welcome you to the Department of Computer Science & Information Technology at Hazara University. Since the establishment of the university, the department has been providing quality education in computing and contributing to technological development in the region.
                                        </p>
                                        <p>
                                            The department currently offers three undergraduate programs—BS in Computer Science, BS in Artificial Intelligence, and BS in Software Engineering—along with graduate programs including MS in Computer Science and PhD in Computer Science. These programs are designed in line with Outcome-Based Education (OBE), ensuring that our graduates are equipped with the technical expertise, problem-solving ability, and professional competence required to meet the challenges of today’s dynamic digital world.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4 text-gray-700 leading-relaxed text-justify">
                                <p>
                                    Beyond academics, the department actively fosters innovation and entrepreneurship. With a dedicated Incubation Center and the Hazara University Software Technology Park, our students gain hands-on experience through internships, applied projects, and industry collaborations. Strong industry linkages further bridge the gap between theory and practice, preparing our graduates for impactful careers in academia, research, and industry.
                                </p>
                                <p>
                                    Our faculty members are deeply committed to impactful teaching, cutting-edge research, and mentorship. Research activities span emerging domains such as Artificial Intelligence, Internet of Things (IoT), and Network Security, aligning with global technological trends and addressing national needs.
                                </p>
                                <p>
                                    Looking ahead, the department is determined to strengthen its role as a leader in computing education and research. We aim to expand our facilities, deepen industry–academia partnerships, and foster a culture of creativity and innovation to prepare the next generation of computing professionals and researchers.
                                </p>
                                <p>
                                    I sincerely thank our dedicated faculty, staff, students, and partners whose efforts continue to drive the department’s success. I warmly welcome prospective students and collaborators to join us in this journey of learning, innovation, and societal contribution.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t flex flex-col items-end">
                                <div className="text-right">
                                    <p className="font-bold text-gray-900 text-lg">Dr. Mushtaq Ali</p>
                                    <p className="text-custom-green font-medium">Chairperson</p>
                                    <p className="text-sm text-gray-600">Department of Computer Science & Information Technology</p>
                                    <p className="text-sm text-gray-600">Hazara University</p>
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

export default HODMessage;
