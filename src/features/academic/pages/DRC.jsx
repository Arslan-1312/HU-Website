import React from 'react';
import Sidebar from '../../../components/Sidebar';

const DRC = () => {
    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-6 flex items-center">
                        Disability Resource Center (DRC)
                    </h2>

                    <div className="space-y-8">
                        {/* Introduction Section */}
                        <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                Introduction...
                            </h3>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <img
                                        src="/assets/Alumnihome.png"
                                        alt="DRC Facility"
                                        className="rounded-lg shadow-md w-full h-auto object-cover border border-gray-200"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="md:w-2/3">
                                    <p className="leading-relaxed text-justify text-gray-800">
                                        The Disability Resource Centre (DRC-UOH) is serving as a facilitation center at The University of Haripur, Khyber-Pakhtunkhwa in accordance with HEC Policy for Students with disabilities 2021, to provide necessary academic, financial, and professional development resources to promote inclusiveness, opportunities and learning quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Note: Additional sections like Vision or Goals can be added here 
                            to match the layout of your other administrative pages. */}
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

export default DRC;