import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';

const Tenders = () => {
    // State to handle which section is open (defaulting to 'new')
    const [openSection, setOpenSection] = useState('new');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-10 flex items-center">
                         All Tenders ( Hazara University)
                    </h2>

                    <div className="space-y-4">
                        
                        {/* New Tenders Accordion Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => toggleSection('new')}
                                className={`w-full p-4 text-left flex items-center justify-between transition-all font-bold ${
                                    openSection === 'new' ? 'bg-primary-green text-white' : 'bg-white text-primary-green hover:bg-gray-50'
                                }`}
                            >
                                <span className="text-lg">New Tenders</span>
                                <i className={`fas fa-chevron-${openSection === 'new' ? 'up' : 'down'} text-sm`}></i>
                            </button>

                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                openSection === 'new' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="divide-y divide-gray-100">
                                    {/* Tender Item 1 */}
                                    <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4">
                                                <i className="fas fa-arrow-right text-xs"></i>
                                            </div>
                                            <span className="text-gray-700 font-medium">Tender Notice: HU/ADV/112-2026</span>
                                        </div>
                                        <a href="#" className="text-blue-600 font-bold hover:underline text-sm">View Here</a>
                                    </div>
                                    {/* Tender Item 2 */}
                                    <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4">
                                                <i className="fas fa-arrow-right text-xs"></i>
                                            </div>
                                            <span className="text-gray-700 font-medium">Tender Notice: HU/ADV/111-2026</span>
                                        </div>
                                        <a href="#" className="text-blue-600 font-bold hover:underline text-sm">View Here</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Archived Tenders Accordion Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => toggleSection('archived')}
                                className={`w-full p-4 text-left flex items-center justify-between transition-all font-bold ${
                                    openSection === 'archived' ? 'bg-primary-green text-white' : 'bg-white text-primary-green hover:bg-gray-50'
                                }`}
                            >
                                <span className="text-lg">Archived Tenders</span>
                                <i className={`fas fa-chevron-${openSection === 'archived' ? 'up' : 'down'} text-sm`}></i>
                            </button>

                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                openSection === 'archived' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="p-8 text-center">
                                    <p className="text-gray-400 italic">No archived tenders available at this time.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <Sidebar />
                </div>

            </div>
        </div>
    );
};

export default Tenders;
