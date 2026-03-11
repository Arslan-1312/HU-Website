import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNavLinks } from '../../../data/navigationData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);
    const location = useLocation();

    const handleToggleMenu = () => {
        const nextState = !isOpen;
        setIsOpen(nextState);
        if (!nextState) {
            setActiveDropdown(null);
            setActiveSubDropdown(null);
        }
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
        setActiveSubDropdown(null);
    };

    const toggleSubDropdown = (e, index) => {
        if (window.innerWidth < 1024) {
            e.preventDefault();
            setActiveSubDropdown(activeSubDropdown === index ? null : index);
        }
    };

    const navLinks = mainNavLinks;

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

                    {/* Top Bar */}
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
                        <div className="hidden lg:flex justify-center w-full">
                            <ul className="flex flex-row items-center space-x-6">

                                {navLinks.map((link, index) => (
                                    <li
                                        key={index}
                                        className="relative group"
                                        onMouseEnter={() => setActiveDropdown(index)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        {link.dropdown ? (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(index)}
                                                    className="nav-link-style flex items-center"
                                                >
                                                    {link.name}
                                                    <i className={`fas fa-chevron-down ml-1 text-[10px] transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}></i>
                                                </button>

                                                <ul className={`${activeDropdown === index ? 'block' : 'hidden'} absolute left-0 top-full bg-white text-gray-800 min-w-[220px] rounded-xl shadow-2xl py-2 z-50 border-2 border-gray-300`}>
                                                    {link.dropdown.map((item, i) => (
                                                        <li key={i}>
                                                            {typeof item === 'string' ? (
                                                                <Link to="#" className="block px-4 py-2 hover:bg-green-200 text-[13px]">{item}</Link>
                                                            ) : item.path ? (
                                                                <Link to={item.path} className="block px-4 py-2 hover:bg-green-200 text-[13px]">{item.name}</Link>
                                                            ) : (
                                                                <div className="relative group/sub">
                                                                    <button className="flex justify-between w-full px-4 py-2 hover:bg-green-200 text-[13px]">
                                                                        {item.name}
                                                                        <i className="fas fa-chevron-right text-[10px]"></i>
                                                                    </button>

                                                                    <ul className="hidden group-hover/sub:block absolute left-full top-0 bg-white min-w-[200px] rounded-xl shadow-2xl py-2 border-2 border-gray-300">
                                                                        {item.subItems.map((sub, j) => (
                                                                            <li key={j}>
                                                                                <Link
                                                                                    to={typeof sub === 'string' ? '#' : sub.path}
                                                                                    className="block px-4 py-2 hover:bg-green-200 text-[12px]"
                                                                                >
                                                                                    {typeof sub === 'string' ? sub : sub.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                className={`nav-link-style ${location.pathname === link.path ? 'bg-black/25' : ''}`}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                    {/* MOBILE DROPDOWN - Code 1 Styles */}
                    <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden w-full bg-custom-green max-h-[85vh] overflow-y-auto`}>
                        <ul className="flex flex-col">
                            {navLinks.map((link, index) => (
                                <li key={index} className="border-t border-green-600">
                                    {link.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(index)}
                                                className="nav-link-style flex justify-between w-full"
                                            >
                                                {link.name}
                                                <i className={`fas ${activeDropdown === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px]`}></i>
                                            </button>

                                            {activeDropdown === index && (
                                                <ul className="bg-white text-gray-800 border-2 border-gray-300 rounded-xl ml-0 mt-0">
                                                    {link.dropdown.map((item, i) => (
                                                        <li key={i} className="ml-0">
                                                            {typeof item === 'string' ? (
                                                                <Link to="#" className="block px-4 py-2 text-[13px] hover:bg-green-200 hover:text-green-900" onClick={() => setIsOpen(false)}>{item}</Link>
                                                            ) : item.path ? (
                                                                <Link to={item.path} className="block px-4 py-2 text-[13px] hover:bg-green-200 hover:text-green-900" onClick={() => setIsOpen(false)}>{item.name}</Link>
                                                            ) : (
                                                                <div className="flex flex-col">
                                                                    <button
                                                                        onClick={(e) => toggleSubDropdown(e, i)}
                                                                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-green-200 hover:text-green-900 text-[13px]"
                                                                    >
                                                                        {item.name}
                                                                        <i className={`fas ${activeSubDropdown === i ? 'fa-chevron-down' : 'fa-chevron-right'} text-[10px]`}></i>
                                                                    </button>

                                                                    {activeSubDropdown === i && (
                                                                        <ul className="bg-gray-50 border-l-4 border-custom-green ml-4">
                                                                            {item.subItems.map((sub, j) => (
                                                                                <li key={j}>
                                                                                    <Link
                                                                                        to={typeof sub === 'string' ? '#' : sub.path}
                                                                                        className="block px-4 py-2 text-[12px] text-gray-600 hover:bg-green-100"
                                                                                        onClick={() => setIsOpen(false)}
                                                                                    >
                                                                                        {typeof sub === 'string' ? sub : sub.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className="nav-link-style block"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
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
};

export default React.memo(Navbar);
