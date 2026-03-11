import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { admissionNavLinks } from '../../../data/navigationData';

const AdmissionNavbar = React.memo(() => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = admissionNavLinks;

    return (
        <div className="relative">
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 lg:hidden"
                    style={{ zIndex: 40 }}
                    onClick={() => setIsOpen(false)}
                />
            )}

            <nav className="bg-custom-green text-white sticky top-0 border-t border-[#3c8f50] border-b-2 border-[#1e5e2b] font-roboto" style={{ zIndex: 50 }}>
                <div className="container mx-auto px-4">

                    <div className="flex justify-between items-center">

                        {/* LEFT SIDE MENU ICON (Mobile) */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={handleToggleMenu}
                                className="p-3 rounded-md hover:bg-black/10 transition"
                            >
                                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl text-white`}></i>
                            </button>
                        </div>

                        {/* RIGHT SIDE MENU TEXT (Mobile) */}
                        <div className="lg:hidden text-white font-semibold text-sm tracking-wide ml-2">
                            MENU
                        </div>

                        {/* DESKTOP NAV CENTER */}
                        <div className="hidden lg:flex justify-center w-full py-1">
                            <ul className="flex flex-row items-center space-x-6">
                                {navLinks.map((link, index) => (
                                    <li key={index} className="relative group">
                                        <Link
                                            to={link.path}
                                            className={`nav-link-style ${location.pathname === link.path ? 'bg-black/25' : ''}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* MOBILE DROPDOWN */}
                    <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden w-full bg-custom-green max-h-[85vh] overflow-y-auto pb-4`}>
                        <ul className="flex flex-col">
                            {navLinks.map((link, index) => (
                                <li key={index} className="border-t border-green-600">
                                    <Link
                                        to={link.path}
                                        className="nav-link-style block py-3"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .nav-link-style {
                        font-size: 14px;
                        font-weight: 600;
                        padding: 10px 15px;
                        color: white;
                        text-decoration: none;
                        transition: background-color 0.3s;
                        border-radius: 6px;
                    }
                    .nav-link-style:hover {
                        background-color: rgba(0, 0, 0, 0.25);
                        color: #d1ffd6;
                    }
                `}} />
            </nav>
        </div>
    );
});

export default AdmissionNavbar;