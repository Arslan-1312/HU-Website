import React from 'react';
import Sidebar from '../../../components/Sidebar';
import { visionMissionData } from '../../../data/academicData';

const HuVision = () => {
    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-8 flex items-center">
                        <i className="fas fa-bullseye mr-4 text-custom-green"></i> Vision & Mission
                    </h2>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-justify">
                        <h4 className="text-xl font-extrabold text-primary-green mb-6 uppercase tracking-wider">
                            University Vision
                        </h4>

                        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
                            <p className="bg-primary-green/5 p-6 rounded-lg border-l-4 border-primary-green italic font-medium">
                                {visionMissionData.vision}
                            </p>

                            <h4 className="text-xl font-extrabold text-primary-green uppercase tracking-wider">
                                University Mission
                            </h4>

                            <p>
                                {visionMissionData.mission}
                            </p>
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

export default React.memo(HuVision);