import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { admissionTopLinks } from '../../../data/navigationData';

const AdmissionTopbar = () => {
    const [isTopBarOpen, setIsTopBarOpen] = useState(false);
    const location = useLocation();

    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        return `px-2 py-1 rounded transition-colors duration-200 hover:bg-black/25 ${isActive ? 'bg-black/25' : ''}`;
    };

    const admissionLinks = admissionTopLinks;

    return (
        <div className="bg-dark-green text-white py-2 text-[13px] font-roboto relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Mobile Header */}
                    <div className="flex md:hidden w-full justify-between items-center">
                        <button onClick={() => setIsTopBarOpen(!isTopBarOpen)} className="p-1">
                            <i className={`fas ${isTopBarOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
                        </button>
                        <div className="flex items-center space-x-4">
                            <i className="fas fa-magnifying-glass"></i>
                            <div className="flex space-x-3">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div className={`${isTopBarOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center w-full md:w-auto mt-2 md:mt-0`}>
                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 md:space-y-0 md:space-x-1">
                            {admissionLinks.map((link, index) => (
                                <React.Fragment key={index}>
                                    <Link to={link.path} className={getLinkStyle(link.path)}>{link.name}</Link>
                                    {index < admissionLinks.length - 1 && <span className="hidden md:inline text-gray-400">|</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Socials */}
                    <div className="hidden md:flex items-center space-x-4">
                        <i className="fas fa-magnifying-glass cursor-pointer"></i>
                        <div className="flex space-x-3">
                            <a href="#"><i className="fab fa-facebook-f text-[14px]"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in text-[14px]"></i></a>
                            <a href="#"><i className="fab fa-youtube text-[14px]"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionTopbar;