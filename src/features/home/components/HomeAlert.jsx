import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeAlert } from '../../../data/homeData';

const HomeAlert = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (homeAlert?.enabled) {
            setIsOpen(true);
        }
    }, []);

    if (!isOpen || !homeAlert) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-300">
            <div className="relative bg-white rounded-2xl shadow-2xl border-4 border-custom-green max-w-lg w-full p-8 transform transition-all animate-in zoom-in-95 duration-300">
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-custom-green transition-colors"
                    aria-label="Close alert"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>

                {/* Content */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                            {homeAlert.title}
                        </h3>
                        <div className="h-1 w-12 bg-custom-green rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {homeAlert.links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block group"
                            >
                                <div className="flex items-center space-x-3 text-custom-green hover:text-green-700 font-semibold text-lg transition-all duration-200 group-hover:translate-x-1">
                                    <i className="fas fa-chevron-right text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
                                    <span>{link.text}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAlert;
