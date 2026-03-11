import React from 'react';

/**
 * PortalHeader Component
 * 
 * Extracted header for the Alumni and Admission portals.
 */
const PortalHeader = ({ portalName }) => {
    return (
        <div className="bg-white border-b border-gray-100 py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
                <img src="/assets/logo.png" alt="HU Logo" className="w-16 md:w-20" loading="lazy" />
                <div className="ml-4">
                    <h1 className="text-2xl md:text-3xl font-black text-dark-green leading-tight">Hazara University Mansehra</h1>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Dhodial, Mansehra, Pakistan</p>
                </div>
            </div>
            <div>
                <h2 className="text-xl md:text-2xl font-black text-primary-green m-0 italic text-shadow-lg">{portalName}</h2>
            </div>
        </div>
    );
};

export default PortalHeader;
