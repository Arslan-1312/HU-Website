import React from 'react';
import { inspirationalQuote } from '../../../data/homeData';

/**
 * QuoteSection displays a famous educational quote.
 */
const QuoteSection = () => {
    return (
        <section className="container mx-auto px-4 mb-16">
            <div className="bg-white border-l-8 border-primary-green rounded-r-lg shadow-md p-8 flex flex-col md:flex-row items-center relative overflow-hidden">
                {/* Background Quote Mark */}
                <i className="fas fa-quote-left absolute top-4 left-6 text-gray-100 text-7xl -z-0"></i>

                <div className="bg-primary-green text-white rounded-2xl p-5 mb-6 md:mb-0 md:mr-10 shrink-0 shadow-lg relative z-10">
                    <i className="fas fa-graduation-cap text-3xl"></i>
                </div>

                <div className="relative z-10">
                    <p className="italic font-bold text-gray-800 text-sm sm:text-base leading-relaxed mb-4 text-justify">
                        "{inspirationalQuote.text}"
                    </p>
                    <div className="flex items-center">
                        <div className="h-0.5 w-10 bg-nav-green mr-3"></div>
                        <p className="font-extrabold text-xs text-nav-green uppercase tracking-widest">
                            Source: {inspirationalQuote.source}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(QuoteSection);
