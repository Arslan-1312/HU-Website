import React from 'react';
import Sidebar from '../../../components/Sidebar';

const ASRB = () => {
    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-8 flex items-center">
                        <i className="fas fa-microscope mr-4 text-custom-green"></i> ASRB
                    </h2>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-justify">
                        <h4 className="text-xl font-extrabold text-primary-green mb-6 uppercase tracking-wider">
                            Directorate of Advanced Studies & Research Board
                        </h4>

                        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
                            <p>
                                The Directorate of advanced studies and research board (ASRB) was established in March 2014
                                to advise the authorities on all matters concerning promotion of advanced studies, publications
                                and research in the University. The board considers and reports to the authorities on the
                                institution of research degrees in the University.
                            </p>

                            <p>
                                The Directorate primary and leading priority is to play a crucial role in materializing the
                                vision and mission of the University and to achieve excellence in academics and research.
                                The directorate is committed to provide conducive and competitive environment for the scholars
                                of the graduate programs to ensure prominent position for Hazara University in the regional
                                and global scenario.
                            </p>

                            <p className="bg-primary-green/5 p-6 rounded-lg border-l-4 border-primary-green italic font-medium">
                                All these efforts are based in terms of quality assurance and standards
                                set by Higher Education Commissions (HEC) through vigorous monitoring of research programs.
                            </p>
                        </div>

                        {/* Contact Card */}
                        <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-8">
                            <div className="w-24 h-24 bg-primary-green/10 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
                                <i className="fas fa-user-tie text-4xl text-primary-green"></i>
                            </div>
                            <div className="text-center md:text-left">
                                <h5 className="text-xl font-black text-dark-green m-0">Dr. Asif Umer</h5>
                                <p className="text-sm font-bold text-primary-green mb-4">Director, ASRB</p>
                                <div className="space-y-1 text-xs font-semibold text-gray-500">
                                    <p className="flex items-center justify-center md:justify-start">
                                        <i className="fas fa-envelope mr-3 text-primary-green"></i> drasrb@hu.edu.pk
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start">
                                        <i className="fas fa-phone-alt mr-3 text-primary-green"></i> 0995-223344
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start">
                                        <i className="fas fa-map-marker-alt mr-3 text-primary-green"></i> Hazara University, Mansehra
                                    </p>
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

export default ASRB;
