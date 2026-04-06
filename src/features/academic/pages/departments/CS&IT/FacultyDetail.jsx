import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { departmentData } from './departmentData';
import { facultyDataList } from './facultyData';
import { NewsEventsSidebar, AnnouncementsSidebar } from '../../../components/DepartmentSidebars';

const FacultyDetail = () => {
    const { id, facultyId } = useParams();
    const dept = departmentData[id] || departmentData['cs-it'];

    // Simulated state for backend data fetching (Odoo database in future)
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate fetching specific data from backend using the ID parameter
        // TODO: Replace with actual API call (e.g., fetch(`/api/faculty/${facultyId}`))
        const fetchFacultyDetails = async () => {
            setIsLoading(true);
            try {
                // Find the profile in our central data list mapping to an Odoo database row query
                const foundProfile = facultyDataList.find(faculty => faculty.id === facultyId);
                
                // Simulate network delay
                setTimeout(() => {
                    setProfile(foundProfile || null);
                    setIsLoading(false);
                }, 800);
            } catch (error) {
                console.error("Failed to fetch faculty details", error);
                setIsLoading(false);
            }
        };

        fetchFacultyDetails();
    }, [facultyId]);

    if (!dept) return <div className="p-10 text-center">Department not found.</div>;

    if (isLoading) {
        return (
            <div className="bg-gray-50 pb-12 font-roboto min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-green"></div>
            </div>
        );
    }

    if (!profile) return <div className="p-10 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Profile not found</h2>
        <Link to={`/department/${id}/faculty`} className="text-custom-green hover:underline">Return to Faculty Directory</Link>
    </div>;

    return (
        <div className="bg-gray-50 pb-12 font-roboto overflow-hidden">
            {/* Page Header */}
            <div className="bg-white border-b px-4 py-8 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <Link to={`/department/${id}/faculty`} className="text-custom-green text-sm hover:underline mb-2 block">
                            <i className="fas fa-arrow-left mr-2"></i> Back to Faculty List
                        </Link>
                        <h1 className="text-3xl font-bold text-custom-green border-b-2 border-custom-green pb-2 inline-block">
                            Faculty Profile
                        </h1>
                    </div>
                    {/* Top Right Resume Button */}
                    <button className="mt-4 md:mt-0 flex items-center gap-2 bg-custom-green hover:bg-dark-green text-white px-5 py-2.5 rounded shadow-md transition-colors font-medium">
                        <i className="fas fa-download"></i> Download Resume
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            
                            {/* Profile Header (Image + About Me) */}
                            <div className="flex flex-col md:flex-row gap-8 mb-8 border-b pb-8">
                                
                                {/* Left side inside card: Image & Basic Info */}
                                <div className="w-full md:w-1/3">
                                    <img 
                                        src={profile.image} 
                                        alt={profile.name} 
                                        className="w-full rounded-xl shadow-md border-4 border-gray-50 hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="font-bold text-gray-800">{profile.name}</h3>
                                        <p className="text-sm text-custom-green font-medium">{profile.designation}</p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{profile.degree}</p>
                                    </div>

                                    {/* Social and Icons */}
                                    <div className="flex justify-center gap-2 text-gray-400 mt-4 mb-4">
                                        <a href="#" className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center hover:bg-custom-green hover:text-white transition-colors">
                                            <i className="fab fa-facebook-f text-sm"></i>
                                        </a>
                                        <a href="#" className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center hover:bg-custom-green hover:text-white transition-colors">
                                            <i className="fab fa-twitter text-sm"></i>
                                        </a>
                                        <a href="#" className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center hover:bg-custom-green hover:text-white transition-colors">
                                            <i className="fab fa-linkedin-in text-sm"></i>
                                        </a>
                                    </div>

                                    {/* Additional Info Cards */}
                                    <div className="w-full space-y-3 mt-4">
                                        <div className="bg-gray-50 rounded-lg p-3 flex items-start">
                                            <i className="fas fa-briefcase mt-1 text-custom-green w-6 text-center"></i>
                                            <div className="ml-3">
                                                <p className="text-xs text-gray-500 font-bold uppercase">Job Position</p>
                                                <p className="text-sm text-custom-green font-medium">{profile.designation}</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-3 flex items-start">
                                            <i className="fas fa-graduation-cap mt-1 text-custom-green w-6 text-center"></i>
                                            <div className="ml-3">
                                                <p className="text-xs text-gray-500 font-bold uppercase">Highest Degree</p>
                                                <p className="text-sm text-custom-green font-medium">{profile.degree}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Right side inside card: About & Contact */}
                                <div className="w-full md:w-2/3">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                        <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                        About Me
                                    </h2>

                                    {/* Contact & Info Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                        <div className="flex px-4 py-4 border border-gray-100 rounded-lg shadow-sm">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                                                <i className="fas fa-phone-alt text-gray-400 text-xs"></i>
                                            </div>
                                            <div className="ml-3">
                                                <h4 className="text-custom-green font-bold text-xs">Phone:</h4>
                                                <p className="text-[11px] text-custom-green italic mt-0.5 font-medium">{profile.phone.split(',')[0]}<br/>{profile.phone.split(',')[1]}</p>
                                            </div>
                                        </div>
                                        <div className="flex px-4 py-4 border border-gray-100 rounded-lg shadow-sm">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                                                <i className="fas fa-envelope text-gray-400 text-xs"></i>
                                            </div>
                                            <div className="ml-3">
                                                <h4 className="text-custom-green font-bold text-xs">Email:</h4>
                                                <p className="text-[11px] text-gray-600 mt-0.5 italic font-medium">{profile.email.split(',')[0]}</p>
                                            </div>
                                        </div>
                                        <div className="flex px-4 py-4 border border-gray-100 rounded-lg shadow-sm">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                                                <i className="fas fa-clipboard-list text-gray-400 text-xs"></i>
                                            </div>
                                            <div className="ml-3 flex flex-col justify-center">
                                                <h4 className="text-custom-green font-bold text-xs">Experience:</h4>
                                                <p className="text-[11px] text-custom-green italic font-medium mt-0.5">{profile.experienceYears}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="prose prose-green text-gray-700 leading-relaxed text-justify text-sm">
                                        <p>{profile.about}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Section */}
                            <div className="mt-8 border-b pb-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                    Professional Summary
                                </h2>
                                <ul className="space-y-3">
                                    {profile.summary.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <i className="fas fa-check-circle text-custom-green mt-1.5 mr-3 text-xs"></i>
                                            <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Experience Section */}
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                    Experience
                                </h2>
                                <div className="space-y-6">
                                    {profile.experiences.map((exp, idx) => (
                                        <div key={idx} className="relative pl-6 border-l-2 border-custom-green/30 pb-2">
                                            <div className="absolute w-3 h-3 bg-custom-green rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                                            <h3 className="font-bold text-gray-800">{exp.pos}</h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center text-xs font-semibold text-gray-500 mt-1 mb-2">
                                                <span className="text-custom-green mr-2">{exp.org}</span>
                                                <span className="hidden sm:inline-block mx-2">|</span>
                                                <span className="italic">{exp.duration}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed">{exp.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Shared Sidebars Area as in HODMessage */}
                    <div className="space-y-6">
                        <NewsEventsSidebar newsEvents={dept.newsEvents} />
                        <AnnouncementsSidebar announcements={dept.announcements} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FacultyDetail;
