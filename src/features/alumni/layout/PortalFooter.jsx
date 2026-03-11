import React from 'react';

/**
 * PortalFooter Component
 * 
 * Extracted footer for the Alumni and Admission portals.
 */
const PortalFooter = () => {
    return (
        <div className="bg-white border-t border-gray-200 py-8 px-12 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-gray-400">
            <div className="flex gap-6 uppercase tracking-widest text-primary-green">
                <a href="#" className="hover:text-black no-underline">Privacy Policy</a>
                <a href="#" className="hover:text-black no-underline">Terms of Service</a>
                <a href="/" className="hover:text-black no-underline">HU Home</a>
            </div>
            <div className="uppercase tracking-widest">
                Copyright © 2026. <span className="text-dark-green">Hazara University</span> Portal Cell.
            </div>
        </div>
    );
};

export default PortalFooter;
