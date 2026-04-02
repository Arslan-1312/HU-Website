import React from 'react';
import { Link } from 'react-router-dom';

const GeneralMeritList = () => {
    const programLevels = [
        {
            level: "bs",
            title: "BS Programs",
            description: "Click to view all BS general merit lists",
            icon: "fas fa-user-graduate",
            path: "/admissions/merit-list/general/bs"
        },
        {
            level: "ms",
            title: "MS/MPhil Programs",
            description: "Click to view all MS/MPhil general merit lists",
            icon: "fas fa-user-graduate",
            path: "/admissions/merit-list/general/ms"
        },
        {
            level: "phd",
            title: "PhD Programs",
            description: "Click to view all PhD general merit lists",
            icon: "fas fa-user-graduate",
            path: "/admissions/merit-list/general/phd"
        }
    ];

    return (
        <div className="bg-white py-4 md:py-8 w-full min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                
                {/* Back Link */}
                <div className="mb-6">
                    <Link 
                        to="/admissions/merit-list" 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-green-800 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-green-50 hover:gap-3 group border border-gray-100"
                    >
                        <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
                        Back to Merit Lists Page
                    </Link>
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-green-900 mb-1">
                            General Merit Lists
                        </h1>
                        <p className="text-gray-600 font-medium">Spring Admissions 2026</p>
                    </div>
                    <button className="bg-green-800 text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center shadow-md hover:bg-green-900 transition-colors self-start md:self-auto">
                        <i className="fas fa-download mr-2"></i> Download All Merit Lists (PDF)
                    </button>
                </div>

                {/* Program Selection Cards */}
                <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden shadow-sm">
                        {programLevels.map((program, index) => (
                            <Link
                                key={index}
                                to={program.path}
                                className="flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors group"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-green-800 text-2xl group-hover:bg-green-100 transition-colors">
                                        <i className={program.icon}></i>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-900 transition-colors">
                                            {program.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm">
                                            {program.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-gray-400 group-hover:translate-x-1 transition-transform">
                                    <i className="fas fa-chevron-right text-xl"></i>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralMeritList;
