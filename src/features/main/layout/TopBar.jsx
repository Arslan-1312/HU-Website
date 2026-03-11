import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { topBarLinks } from '../../../data/navigationData';

const TopBar = () => {
    const [isTopBarOpen, setIsTopBarOpen] = useState(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const location = useLocation();
    const modalRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsEmailModalOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsEmailModalOpen(false);
        }
    };

    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        return `px-2 py-1 rounded transition-colors duration-200 hover:bg-black/25 ${isActive ? 'bg-black/25' : ''}`;
    };

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
                            <button onClick={() => setIsEmailModalOpen(true)} className={getLinkStyle('/email')}>Email</button>
                            <span className="hidden md:inline text-gray-400">|</span>
                            {topBarLinks.map((link, index) => (
                                <React.Fragment key={link.path}>
                                    <Link to={link.path} className={getLinkStyle(link.path)}>{link.name}</Link>
                                    {index < topBarLinks.length - 1 && <span className="hidden md:inline text-gray-400">|</span>}
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

            {/* --- EMAIL MODAL USING PORTAL --- */}
            {isEmailModalOpen && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md"
                    style={{ zIndex: 99999 }} // Extremely high Z-index
                    onClick={handleBackdropClick}
                >
                    <div
                        ref={modalRef}
                        className="bg-white text-black p-8 rounded-xl shadow-2xl max-w-2xl w-full mx-4 relative border-t-8 border-green-700 animate-in fade-in zoom-in duration-200"
                    >
                        <button
                            onClick={() => setIsEmailModalOpen(false)}
                            className="absolute top-4 right-6 text-red-600 font-bold text-lg hover:scale-110 transition-transform"
                        >
                            Close
                        </button>

                        <h3 className="text-2xl font-bold text-green-800 mb-1">Email Services (Hazara University)</h3>
                        <p className="text-gray-600 text-[13px] mb-8">
                            Welcome to Hazara University Email Services. Please use the following links for accessing our Email Services.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <a href="http://outlook.office365.com" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                                <div className="bg-green-700 w-20 h-20 flex items-center justify-center rounded-2xl mb-3 group-hover:bg-green-800 transition-all shadow-md group-hover:scale-105">
                                    <i className="fas fa-user text-white text-3xl"></i>
                                </div>
                                <span className="text-green-800 font-bold text-sm">Login/Sign in</span>
                            </a>
                            <a href="https://prp.pern.edu.pk" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                                <div className="bg-green-700 w-20 h-20 flex items-center justify-center rounded-2xl mb-3 group-hover:bg-green-800 transition-all shadow-md group-hover:scale-105">
                                    <i className="fas fa-lock text-white text-3xl"></i>
                                </div>
                                <span className="text-green-800 font-bold text-sm">Change Password</span>
                            </a>
                            <a href="#" className="flex flex-col items-center group">
                                <div className="bg-green-700 w-20 h-20 flex items-center justify-center rounded-2xl mb-3 group-hover:bg-green-800 transition-all shadow-md group-hover:scale-105">
                                    <i className="fas fa-cloud-download-alt text-white text-3xl"></i>
                                </div>
                                <span className="text-green-800 font-bold text-sm">Download Here</span>
                            </a>
                        </div>
                    </div>
                </div>,
                document.body // This renders the modal at the very end of the HTML body
            )}
        </div>
    );
};

export default TopBar;