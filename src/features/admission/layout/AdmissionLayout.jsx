import React from 'react';
import { Outlet } from 'react-router-dom';
import AdmissionHeader from './AdmissionHeader';
import AdmissionNavbar from './AdmissionNavbar';
import AdmissionTopbar from './AdmissionTopbar';
import Footer from '../../main/layout/Footer';

const AdmissionLayout = () => {
    // This text can be easily moved to a state variable or fetched from a backend
    const currentDeadlineText = "Last date to apply for Online Admissions in Graduate Programs is 8th February 2026";

    return (
        <div className="bg-[#f0f9eb] min-h-screen font-roboto flex flex-col">
            <AdmissionTopbar />
            <AdmissionHeader deadlineText={currentDeadlineText} />
            <AdmissionNavbar />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default AdmissionLayout;
