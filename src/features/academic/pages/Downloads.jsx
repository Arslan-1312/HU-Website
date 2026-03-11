import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';

const Downloads = () => {
    const [openSection, setOpenSection] = useState('asr');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        { id: 'asr', title: "Advanced Studies & Research", icon: "fas fa-microscope" },
        { id: 'aff', title: "Affiliated Institutions", icon: "fas fa-university" },
        { id: 'bic', title: "Business Incubation Center", icon: "fas fa-lightbulb" },
        { id: 'exam', title: "Examination Forms", icon: "fas fa-file-signature" },
        { id: 'insp', title: "Inspection Proforma", icon: "fas fa-clipboard-check" }
    ];

    const asrFiles = [
        { name: "Annexure-1", type: "pdf" },
        { name: "Annexure-2", type: "pdf" },
        { name: "Annexure-3", type: "pdf" },
        { name: "ASRB-Semester Rules and Regulations for Graduate Academic Programs", type: "pdf" },
        { name: "Process Flow for MPhil and PhD Thesis Approval", type: "pdf" },
        { name: "Synopsis Format MS WORD", type: "word" },
        { name: "Proforma for Ethical Approval", type: "pdf" }
    ];

    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-10 flex items-center">
                        <i className="fas fa-arrow-circle-down mr-4 text-custom-green"></i> All Downloads
                    </h2>

                    <div className="space-y-4">
                        {sections.map((section) => (
                            <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className={`w-full p-5 text-left flex items-center justify-between transition-all font-bold ${openSection === section.id
                                        ? 'bg-primary-green text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="flex items-center">
                                        <i className={`${section.icon} mr-4 w-6 text-center text-lg ${openSection === section.id ? 'text-white' : 'text-primary-green'}`}></i>
                                        {section.title}
                                    </span>
                                    <i className={`fas fa-chevron-${openSection === section.id ? 'up' : 'down'} text-sm`}></i>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openSection === section.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-4 bg-gray-50/30 divide-y divide-gray-100">
                                        {section.id === 'asr' ? (
                                            asrFiles.map((file, i) => (
                                                <div key={i} className="py-3 px-2 flex items-center justify-between hover:bg-white rounded transition-colors group">
                                                    <span className="flex items-center text-sm font-medium text-gray-600 group-hover:text-primary-green">
                                                        <i className={`fa fa-file-${file.type === 'pdf' ? 'pdf text-red-500' : 'word text-blue-500'} mr-3`}></i>
                                                        {file.name}
                                                    </span>
                                                    <a href="#" className="text-xs font-bold text-primary-green underline uppercase tracking-tighter">Download</a>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-sm italic text-gray-400 p-4 text-center">No files currently available in this section.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
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

export default Downloads;
