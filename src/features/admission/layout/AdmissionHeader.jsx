import React from 'react';

const AdmissionHeader = ({
    deadlineText = "Last date to apply for Online Admissions in Graduate Programs is 8th February 2026"
}) => {
    return (
        <header className="bg-gradient-to-r from-[#1f8544] to-primary-green py-[10px] text-white border-b-4 border-white font-roboto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                        <div className="w-[80px] mr-4">
                            <img
                                src="/assets/logo.png"
                                alt="HU Logo"
                                className="max-h-[80px] w-auto"
                                loading="lazy"
                            />
                        </div>
                        <h1 className="text-[2.5rem] font-bold leading-tight drop-shadow-md">
                            Hazara University Mansehra
                        </h1>
                    </div>

                    {/* Dynamic Yellow Text (Deadline Notice) - Matched to Right List Position */}
                    <div className="w-full md:w-auto flex flex-col items-end text-right">
                        <div className="max-w-[320px] bg-black/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                            <p className="text-[#FFD700] text-[13px] font-bold leading-tight drop-shadow-md italic m-0">
                                {deadlineText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdmissionHeader;