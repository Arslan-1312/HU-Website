import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PortalNavbar Component
 * * Navigation for the Alumni and Admission portals.
 */
const PortalNavbar = ({ links }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    // Helper function to map link names to routes
    const getPath = (link) => {
        switch (link) {
            case "Alumni Home": return "/alumni";
            case "About Alumni": return "/alumni/about";
            case "Alumni Benefits": return "/alumni/benefits";
            case "Alumni Survey": return "/alumni/survey";
            case "Alumni Corner": return "/alumni/corner"; // Added for completeness
            case "Contact Us": return "/alumni/contact";  // ✅ Matches the Contact page route
            ; // ✅ Supporting both naming variations
            default: return "/alumni";
        }
    };

    return (
        <>
            <nav className="bg-white shadow-md mx-4 md:mx-12 mt-6 rounded-lg overflow-hidden">

                {/* Mobile Header */}
                <div className="flex justify-between items-center md:hidden px-4 py-3">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-primary-green focus:outline-none"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    <span className="font-bold text-primary-green text-center">Menu</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex m-0 p-0 text-sm font-bold bg-white">
                    {links.map((link, i) => {
                        const path = getPath(link);
                        return (
                            <li key={i} className="border-r border-gray-100 last:border-0">
                                <NavLink
                                    to={path}
                                    end={path === "/alumni"} 
                                    className={({ isActive }) =>
                                        `px-6 py-4 block no-underline ${
                                            isActive
                                                ? 'bg-primary-green text-white'
                                                : 'text-primary-green hover:bg-primary-green hover:text-white'
                                        }`
                                    }
                                >
                                    {link}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="md:hidden flex flex-col text-sm font-bold border-t border-gray-100 bg-white">
                        {links.map((link, i) => {
                            const path = getPath(link);
                            return (
                                <li key={i} className="border-b border-gray-100">
                                    <NavLink
                                        to={path}
                                        end={path === "/alumni"}
                                        className={({ isActive }) =>
                                            `px-6 py-4 block no-underline ${
                                                isActive
                                                    ? 'bg-primary-green text-white'
                                                    : 'text-primary-green hover:bg-primary-green hover:text-white'
                                            }`
                                        }
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </nav>
        </>
    );
};

export default PortalNavbar;
