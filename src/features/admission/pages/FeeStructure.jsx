import React, { useState } from 'react';

const FeeStructure = React.memo(() => {
    // Defaulting to 'bs-programs' to match the open accordion style
    const [openSection, setOpenSection] = useState('bs-programs');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    // The sections exactly as they appear in the provided Fee Schedule image
    const sections = [
        {
            id: 'bs-programs',
            title: "Fee Schedule (BS Programs)",
            content: "The merit for BS programs is calculated based on 30% SSC/Matric marks and 70% HSSC/F.A/F.Sc marks. Fee includes admission processing, tuition, and departmental charges."
        },
        {
            id: 'graduate-programs',
            title: "Fee Schedule (MS/M.Phil/M.Sc (Hons) Programs)",
            content: "Enrolled MPhil students entering the PhD program will transition to the PhD program fee structure. Processing fees must be paid via Easypaisa or Bank of Khyber to be considered."
        },
        {
            id: 'phd-programs',
            title: "Fee Schedule (Ph.D Programs)",
            content: "Candidates are required to pay the PhD program fee upon enrollment. For those transitioning from MPhil coursework, the PhD fee status applies immediately upon entry."
        },
        {
            id: 'diploma-programs',
            title: "Fee Schedule (Diploma & Certificate Programs)",
            content: "Standard processing fees apply. Applications without a paid processing fee will not be considered for admission."
        },
        {
            id: 'fifth-semester',
            title: "Fee Schedule (5th Semester BS Programs)",
            content: "Fee structures for the 5th Semester (Bridge Programs) include credit transfer evaluation fees and standard semester tuition."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="w-full">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-10 flex items-center">
                        Fee Schedule for All Programs
                    </h2>

                    <div className="space-y-4">
                        {sections.map((section) => (
                            <div key={section.id} className="bg-white border border-gray-300 overflow-hidden rounded-sm">
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="w-full p-4 md:p-6 text-left flex items-center justify-between transition-all hover:bg-gray-50 focus:outline-none"
                                >
                                    <span className={`text-lg md:text-xl font-bold ${openSection === section.id ? 'text-green-600' : 'text-green-700'
                                        }`}>
                                        {section.title}
                                    </span>
                                    <span className="text-gray-400 font-mono text-2xl">
                                        {openSection === section.id ? '−' : '+'}
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openSection === section.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 border-t border-gray-100 bg-gray-50/30">
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {section.content}
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

export default FeeStructure;