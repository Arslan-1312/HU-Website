import React from 'react';
import Sidebar from '../../../components/Sidebar';
import { semesterRulesData } from '../../../data/academicData';

const SemesterRules = () => {
    const data = semesterRulesData;

    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-8 flex items-center">
                        <i className="fas fa-file-contract mr-4 text-custom-green"></i> {data.title}
                    </h2>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                        <div className="bg-gray-50 border-b border-gray-100 p-4 font-bold text-gray-700 flex items-center">
                            <i className="fas fa-folder-open mr-3 text-amber-500"></i> Important Documents
                        </div>
                        <div className="divide-y divide-gray-50">
                            {data.documents.map((doc, i) => (
                                <div key={i} className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                                    <div className="flex items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" className="w-6 mr-4" alt="PDF" loading="lazy" />
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary-green">{doc}</span>
                                    </div>
                                    <a href="#" className="text-xs font-bold text-primary-green hover:bg-primary-green hover:text-white px-3 py-1.5 rounded border border-primary-green transition-all no-underline shrink-0">
                                        DOWNLOAD <i className="fas fa-download ml-1.5"></i>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-sm max-w-none text-gray-700 space-y-8">
                        {data.sections.map((section, idx) => (
                            <section key={idx}>
                                <h5 className="text-lg font-bold text-primary-green border-l-4 border-primary-green pl-4 mb-4 uppercase tracking-wide">
                                    {section.title}
                                </h5>
                                {section.items ? (
                                    <ul className="space-y-3 list-none p-0">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <i className="fas fa-check-circle text-custom-green mt-1 mr-3 shrink-0"></i>
                                                <p className="m-0">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    section.paragraphs.map((para, i) => (
                                        <p key={i} className="leading-relaxed text-justify">
                                            {para}
                                        </p>
                                    ))
                                )}
                            </section>
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

export default SemesterRules;
