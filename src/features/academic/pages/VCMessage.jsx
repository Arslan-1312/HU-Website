import React from 'react';
import { vcMessageData } from '../../../data/academicData';
import Sidebar from '../../../components/Sidebar';

const VCMessage = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                {/* Main Content Area */}
                <div className="w-full lg:w-2/3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-green mb-6 sm:mb-8 flex items-center">
                        <i className="fas fa-user-tie mr-3 sm:mr-4 text-custom-green"></i>
                        <span className="leading-tight">{vcMessageData.title}</span>
                    </h2>

                    <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-justify">
                        <h4 className="text-lg sm:text-xl font-extrabold text-primary-green mb-4 sm:mb-6 uppercase tracking-wider">
                            Message from the Vice Chancellor
                        </h4>

                        {/* VC Intro with Image */}
                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start mb-6">
                            <img
                                src={vcMessageData.image}
                                alt={vcMessageData.name}
                                className="w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 object-cover rounded-lg border-2 border-white shadow-sm shrink-0"
                                loading="lazy"
                            />

                            <div className="space-y-4 text-sm sm:text-base">
                                <p>
                                    {vcMessageData.intro}
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 space-y-5 sm:space-y-6">
                            {vcMessageData.paragraphs.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}

                            <p className="bg-primary-green/5 p-4 sm:p-6 rounded-lg border-l-4 border-primary-green italic font-medium">
                                {vcMessageData.conclusion}
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-8 sm:mt-10">
                            <h5 className="text-base sm:text-lg font-black text-dark-green">
                                {vcMessageData.name}
                            </h5>
                            <p className="text-xs sm:text-sm font-bold text-primary-green">
                                {vcMessageData.designation}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-1/3">
                    <Sidebar />
                </div>

            </div>
        </div>
    );
};

export default VCMessage;
