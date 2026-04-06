import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { departmentData } from './departmentData';
import { facultyDataList } from './facultyData';
import { NewsEventsSidebar, AnnouncementsSidebar } from '../../../components/DepartmentSidebars';

const Faculty = () => {
    const { id } = useParams();
    const dept = departmentData[id] || departmentData['cs-it'];

    // Simulated state for backend data fetching
    const [facultyMembers, setFacultyMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate fetching data from backend Odoo Database
        // TODO: Replace with actual API call (e.g., fetch('/api/faculty'))
        const fetchFaculty = async () => {
            setIsLoading(true);
            try {
                // Network delay simulation returning the centralized data
                setTimeout(() => {
                    setFacultyMembers(facultyDataList);
                    setIsLoading(false);
                }, 800);
            } catch (error) {
                console.error("Failed to fetch faculty", error);
                setIsLoading(false);
            }
        };

        fetchFaculty();
    }, []);

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
                        Teaching Faculty - {dept.name}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-[600px]">
                            
                            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center border-b pb-4">
                                <span className="w-8 h-1 bg-custom-green mr-3 rounded-full"></span>
                                Meet Our Faculty ({facultyMembers.length})
                            </h2>

                            {isLoading ? (
                                <div className="flex justify-center items-center h-48">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-green"></div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                    {facultyMembers.map((faculty) => (
                                        <div key={faculty.id} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                                            {/* Circular Image Container */}
                                            <Link to={`/department/${id}/faculty/${faculty.id}`} className="relative w-32 h-32 mb-4 group block">
                                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-50 shadow-md group-hover:border-custom-green transition-colors duration-300">
                                                    <img 
                                                        src={faculty.image} 
                                                        alt={faculty.name} 
                                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                {/* Overlay on hover for a modern feel */}
                                                <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                </div>
                                            </Link>
                                            
                                            {/* Faculty Details */}
                                            <div className="text-center w-full">
                                                <Link to={`/department/${id}/faculty/${faculty.id}`} className="block hover:opacity-80 transition-opacity">
                                                    <h3 className="text-lg font-bold text-custom-green mb-1 line-clamp-1" title={faculty.name}>
                                                        {faculty.name}
                                                    </h3>
                                                </Link>
                                                <p className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 line-clamp-2 min-h-[32px]">
                                                    {faculty.designation}
                                                </p>
                                                
                                                {/* Social Icons matching the image */}
                                                <div className="flex justify-center gap-2 text-gray-400">
                                                    <a href="#" className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center hover:bg-custom-green hover:text-white transition-colors">
                                                        <i className="fab fa-facebook-f text-xs"></i>
                                                    </a>
                                                    <a href="#" className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center hover:bg-custom-green hover:text-white transition-colors">
                                                        <i className="fab fa-twitter text-xs"></i>
                                                    </a>
                                                    <a href="#" className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center hover:bg-custom-green hover:text-white transition-colors">
                                                        <i className="fab fa-linkedin-in text-xs"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
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

export default Faculty;
