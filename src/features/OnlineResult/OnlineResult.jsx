import React from 'react';
import { useNavigate } from 'react-router-dom';


const OnlineResult = () => {
    const navigate = useNavigate();

    const handleResultClick = (e) => {
        e.preventDefault();
        // Navigates to the result search form page
        navigate('/OnlineResult/ShowResult'); 
    };

    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-10 flex items-center">
                        Search Examination Results ( Hazara University )
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 text-center">
                            <p className="text-gray-800 font-bold mb-4 text-lg">
                                &lt;&lt; Entry Test Results Phase 2 for Admissions MS/M.Phil/Ph.D Degree Programs (Admission Fall 2025) &gt;&gt;
                            </p>
                            
                            <button 
                                onClick={handleResultClick}
                                className="text-red-600 font-extrabold hover:underline cursor-pointer transition-colors text-lg"
                            >
                                (Click Here for Entry Test Results)
                            </button>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default OnlineResult;