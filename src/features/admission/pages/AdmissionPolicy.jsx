import React from 'react';
import Sidebar from '../../../components/Sidebar';

/**
 * Admission Page
 * 
 * Provides information about undergraduate and graduate degree programs,
 * admission policies, and contact information.
 */
const AdmissionPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-8 flex items-center border-b border-gray-100 pb-4">
                        <i className="fas fa-graduation-cap mr-4 text-custom-green"></i> Admissions
                    </h2>

                    <div className="space-y-12">
                        {/* Undergraduate Section */}
                        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-primary-green mb-6 flex items-center">
                                <span className="bg-primary-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-xs">01</span>
                                Undergraduate Degree Programs
                            </h4>

                            <div className="prose prose-sm max-w-none text-gray-700">
                                <h6 className="font-bold text-gray-800 mt-6 mb-3 uppercase tracking-wider text-xs bg-gray-50 p-2 inline-block rounded">Salient Features of Admission Policy</h6>
                                <p className="text-justify leading-relaxed mb-4">
                                    Admissions at Hazara University are offered strictly on merit basis to all eligible candidates,
                                    without discrimination on the basis of region, social background, culture, race, religion,
                                    gender, or ethnicity.
                                </p>
                                <ul className="space-y-2 mb-8 list-none p-0">
                                    {["Academic ability and potential", "Motivation, dedication, and suitability", "Self-discipline and commitment"].map((item, i) => (
                                        <li key={i} className="flex items-center text-sm font-medium">
                                            <i className="fas fa-check text-custom-green mr-3 text-xs"></i> {item}
                                        </li>
                                    ))}
                                </ul>

                                <h6 className="font-bold text-gray-800 mt-6 mb-3 uppercase tracking-wider text-xs bg-gray-50 p-2 inline-block rounded">General Conditions</h6>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Online application via official portal",
                                        "Pay prescribed processing fee",
                                        "Submit required original documents",
                                        "Equivalence certificate for foreign boards",
                                        "Fulfill minimum eligibility criteria",
                                        "Submit non-political affidavit"
                                    ].map((cond, i) => (
                                        <div key={i} className="p-3 bg-gray-50/50 rounded border border-gray-100 flex items-start">
                                            <i className="fas fa-info-circle text-primary-green mt-1 mr-3 text-xs"></i>
                                            <span className="text-xs font-semibold leading-tight">{cond}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Graduate Section */}
                        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-primary-green mb-6 flex items-center">
                                <span className="bg-primary-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-xs">02</span>
                                Graduate Degree Programs
                            </h4>
                            <div className="prose prose-sm max-w-none text-gray-700">
                                <p className="text-justify leading-relaxed mb-6">
                                    Admissions to Graduate Programs are strictly merit-based. Selection criteria depend on the relevance of the discipline and research potential.
                                </p>
                            </div>
                        </section>

                        {/* Contacts Section */}
                        <section className="bg-gradient-to-br from-primary-green to-dark-green p-8 rounded-xl shadow-lg text-white">
                            <h4 className="text-xl font-bold mb-8 items-center flex">
                                <i className="fas fa-address-book mr-3"></i> Contact Information
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                    <h6 className="font-extrabold uppercase tracking-widest text-[10px] mb-4 text-white/70">Undergraduate Admissions</h6>
                                    <div className="space-y-2 text-sm">
                                        <p className="font-bold text-lg m-0">Dr. Zahoor Ahmad</p>
                                        <p className="text-white/80 m-0">Director, Undergraduate Studies</p>
                                        <p className="flex items-center mt-4">
                                            <i className="fas fa-phone mr-3 text-xs"></i> 0995-920612
                                        </p>
                                        <p className="flex items-center">
                                            <i className="fas fa-envelope mr-3 text-xs"></i> admissions.ugs@hu.edu.pk
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                    <h6 className="font-extrabold uppercase tracking-widest text-[10px] mb-4 text-white/70">Graduate Admissions</h6>
                                    <div className="space-y-2 text-sm">
                                        <p className="font-bold text-lg m-0">Dr. Sami Ullah Khan</p>
                                        <p className="text-white/80 m-0">Director, Advanced Studies & Research</p>
                                        <p className="flex items-center mt-4">
                                            <i className="fas fa-phone mr-3 text-xs"></i> 0995-920631
                                        </p>
                                        <p className="flex items-center">
                                            <i className="fas fa-envelope mr-3 text-xs"></i> drasrb@hu.edu.pk
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
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

export default AdmissionPolicy;
