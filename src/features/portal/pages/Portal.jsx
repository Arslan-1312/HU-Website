import React from 'react';
import PortalCard from '../../../components/PortalCard';
import logo from '../../admission/assets/logo.png';

/**
 * Portal Page
 * * Provides entrance to the Employee and Student Information Portals.
 * Direct access from the Navbar and Quick Actions on the Home page.
 */
const Portal = () => {
    return (
        <div className="bg-gray-50 min-h-[80vh] py-16 font-roboto relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full -mr-48 -mt-48"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <img
                        src={logo}
                        alt="HU University Logo"
                        className="w-24 h-auto mx-auto mb-6 drop-shadow-sm"
                        loading="lazy"
                    />
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary-green uppercase tracking-wider mb-4 transition-all duration-300 [text-shadow:0_0_18px_rgba(34,197,94,0.8)]">
                        HU CAMPUS MANAGEMENT SYSTEM PORTALS
                    </h2>
                    <div className="w-24 h-1.5 bg-custom-green mx-auto rounded-full"></div>
                    <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Welcome to the official digital gateway of Hazara University.
                        Please select your respective portal to manage your academic and professional information.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                    <PortalCard
                        title="EMPLOYEE"
                        subtitle="INFORMATION PORTAL"
                        isNew={true}
                        /* ✅ UPDATED PATH BELOW */
                        path="/employee-login"
                    />
                    <PortalCard
                        title="STUDENTS"
                        subtitle="INFORMATION PORTAL"
                        isNew={true}
                        path="/student-login"
                    />
                </div>


            </div>
        </div>
    );
};

export default Portal;
