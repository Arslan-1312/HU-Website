import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-[#1f8544] to-primary-green py-[10px] text-white border-b-4 border-white font-roboto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                        <div className="w-[80px] mr-4">
                            <img
                                src="assets/logo.png"
                                alt="HU Logo"
                                className="max-h-[80px] w-auto"
                                loading="lazy"
                            />
                        </div>
                        <h1 className="text-[2.5rem] font-bold leading-tight drop-shadow-md">
                            Hazara University Mansehra
                        </h1>
                    </div>

                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-[12px]">
                        <ul className="list-none space-y-1">
                            <li>
                                <Link to="/downloads" className="text-white no-underline flex items-center">
                                    <i className="fas fa-arrow-circle-down mr-2 w-4 text-center"></i> Download
                                </Link>
                            </li>
                            <li>
                                <Link to="/OnlineResult" className="text-white no-underline flex items-center">
                                    <i className="fas fa-file-alt mr-2 w-4 text-center"></i> Online Result
                                </Link>
                            </li>
                            <li>
                                <Link to="/jobportal" className="text-white no-underline flex items-center">
                                    <i className="fas fa-briefcase mr-2 w-4 text-center"></i> Job & Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/portal" className="text-[#FFD700] font-bold no-underline flex items-center transition-all animate-pulse">
                                    <i className="fas fa-graduation-cap mr-2 w-4 text-center"></i> HU CMS Portals
                                </Link>
                            </li>
                        </ul>

                        <ul className="list-none space-y-1">
                            <li>
                                <Link to="/Tenders" className="text-white no-underline flex items-center">
                                    <i className="fas fa-graduation-cap mr-2 w-4 text-center"></i> Tenders
                                </Link>
                            </li>
                            <li>
                                <Link to="/Library" className="text-white no-underline flex items-center">
                                    <i className="fas fa-book mr-2 w-4 text-center"></i> Central Library
                                </Link>
                            </li>
                            <li>
                                <Link to="/semester-rules" className="text-white no-underline flex items-center">
                                    <i className="fas fa-calendar-alt mr-2 w-4 text-center"></i> Semesters Rules
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-white no-underline flex items-center">
                                    <i className="fas fa-gavel mr-2 w-4 text-center"></i> HU Statutes 2026
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
