import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
            <main>
                <Outlet />
            </main>
            <PortalFooter />
        </div>
    );
};

export default PortalLayout;
