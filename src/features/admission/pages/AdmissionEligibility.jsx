import React, { useState } from 'react';
import { eligibilitySections } from '../../../data/admissionData';

const AdmissionEligibility = React.memo(() => {
    // Defaulting to 'bs-programs' to match the open accordion style
    const [openSection, setOpenSection] = useState('bs-programs');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    // The sections exactly as they appear in the provided Eligibility Criteria image
    const sections = eligibilitySections;

    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="w-full"> {/* Set to full width as per request */}
                    <h2 className="text-3xl font-extrabold text-primary-green mb-10 flex items-center">
                        Eligibility Criteria for All Programs
                    </h2>

                    <div className="space-y-4">
                        {sections.map((section) => (
                            <div key={section.id} className="bg-white border border-gray-300 overflow-hidden">
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="w-full p-6 text-left flex items-center justify-between transition-all hover:bg-gray-50 focus:outline-none"
                                >
                                    <span className={`text-xl font-bold ${openSection === section.id ? 'text-primary-green' : 'text-gray-700'
                                        }`}>
                                        {section.title}
                                    </span>
                                    <i className={`fas fa-chevron-${openSection === section.id ? 'up' : 'down'} text-gray-400`}></i>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openSection === section.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 border-t border-gray-100 bg-gray-50/30">
                                        <p className="text-gray-600 leading-relaxed">
                                            Detailed eligibility requirements for <strong>{section.title}</strong> including
                                            minimum marks, required subjects, and entrance test weightage will be
                                            listed here as per university policy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
});

export default AdmissionEligibility;