import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PortalHeader from './PortalHeader';
import PortalNavbar from './PortalNavbar';
import PortalFooter from './PortalFooter';

/**
 * PortalLayout Component
 * 
 * Provides a specialized layout for Alumni and Admission portals.
 * Dynamically sets the portal name and navbar links based on the route.
 */
const PortalLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Configuration based on path
    const isAlumni = location.pathname.startsWith('/alumni');
    const portalName = isAlumni ? "Alumni Portal" : "Admission Portal";

    const alumniLinks = ["Alumni Home", "About Alumni", "Alumni Benefits", "Alumni Corner", "Alumni Survey", "Contact Us"];
    const admissionLinks = ["Admission Home", "Instructions", "Apply Online", "Merit Lists", "Downloads", "Contact Us"];

    const links = isAlumni ? alumniLinks : admissionLinks;

    return (
        <div className="bg-[#f0f9eb] min-h-screen font-roboto">
            <PortalHeader portalName={portalName} />
            <PortalNavbar links={links} />
            
            <div className="container mx-auto px-4 mt-4">
                <button 
                    onClick={() => navigate(-1)} 
                    className="bg-[#1A5C3D] text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
                >
                    &larr; Back
                </button>
            </div>

            <main>
                <Outlet />
            </main>
            <PortalFooter />
        </div>
    );
};

export default PortalLayout;
