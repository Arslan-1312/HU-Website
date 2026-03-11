import React from 'react';
import Sidebar from '../../../components/Sidebar';
import { bicData } from '../../../data/academicData';

const BIC = () => {
    const data = bicData;

    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <div className="relative mb-10 overflow-hidden rounded-2xl h-[300px] shadow-lg">
                        <img
                            src="assets/banner 2.png"
                            className="w-full h-full object-cover"
                            alt={data.bannerTitle}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{data.bannerTitle}</h2>
                            <p className="text-white/80 max-w-2xl">{data.bannerSubtitle}</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-gray-700 leading-relaxed text-justify">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-primary-green/10 rounded-lg">
                                <i className="fas fa-lightbulb text-2xl text-primary-green"></i>
                            </div>
                            <h4 className="text-xl font-bold text-primary-green m-0 uppercase tracking-wide">{data.introTitle}</h4>
                        </div>

                        <p>
                            {data.description}
                        </p>

                        <p className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-green italic font-medium">
                            {data.highlight}
                        </p>

                        <p>
                            {data.subDescription}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            {data.features.map((item, i) => (
                                <div key={i} className="flex p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i className={`${item.icon} text-primary-green text-xl mt-1 mr-4`}></i>
                                    <div>
                                        <h6 className="font-bold mb-1 text-sm">{item.title}</h6>
                                        <p className="text-xs m-0 text-gray-600">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8">
                            {data.conclusion}
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <Sidebar />
                </div>

            </div>
        </div>
    );
};

export default BIC;
