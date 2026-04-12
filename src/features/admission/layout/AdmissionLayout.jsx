import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdmissionHeader from './AdmissionHeader';
import AdmissionNavbar from './AdmissionNavbar';
import AdmissionTopbar from './AdmissionTopbar';
import Footer from '../../main/layout/Footer';

const AdmissionLayout = () => {
    const navigate = useNavigate();
    // This text can be easily moved to a state variable or fetched from a backend
    const currentDeadlineText = "Last date to apply for Online Admissions in Graduate Programs is 8th February 2026";

    return (
        <div className="bg-[#f0f9eb] min-h-screen font-roboto flex flex-col">
            <AdmissionTopbar />
            <AdmissionHeader deadlineText={currentDeadlineText} />
            <AdmissionNavbar />

            <div className="container mx-auto px-4 mt-4">
                <button 
                    onClick={() => navigate(-1)} 
                    className="bg-[#1A5C3D] text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
                >
                    &larr; Back
                </button>
            </div>

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default AdmissionLayout;
