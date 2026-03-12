import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { departmentData } from '../../../../../data/departmentData';
import { NewsEventsSidebar, AnnouncementsSidebar, ImportantLinksSidebar } from '../../../components/DepartmentSidebars';

const CSIT = () => {
    const { id } = useParams();
    const dept = departmentData[id] || departmentData['cs-it']; 
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!dept.sliderImages || dept.sliderImages.length === 0) return;
        
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % dept.sliderImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [dept.sliderImages]);

    if (!dept) return <div className="p-10 text-center">Department not found.</div>;

    return (
        <div className="bg-gray-50 pb-12 font-roboto overflow-hidden">
            {/* Page Header */}
            <div className="bg-white border-b px-4 py-8 md:px-12 lg:px-24">
                <h1 className="text-3xl font-bold text-custom-green border-b-2 border-custom-green pb-2 inline-block">
                    {dept.name}
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-8 md:px-12">
                {/* Top Grid Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    
                    {/* Introduction Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-full">
                        <div className="bg-custom-green text-white px-4 py-3 rounded-t-lg">
                            <h2 className="text-xl font-semibold">{dept.introduction.title}</h2>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <img 
                                    src={dept.introduction.image.startsWith('/') ? dept.introduction.image.substring(1) : dept.introduction.image} 
                                    alt="Intro" 
                                    className="w-full md:w-1/2 h-40 object-cover rounded shadow-sm border border-gray-100"
                                />
                                <div className="text-sm text-gray-700 leading-relaxed md:w-1/2">
                                    <p className="mb-2">Welcome to the {dept.name} at Hazara University!</p>
                                    <p>{dept.introduction.content.substring(0, 160) + '...'}</p>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                                <span className="text-gray-500 text-xs italic">Our .....</span>
                                <Link 
                                    to={dept.introduction.readMoreLink}
                                    className="bg-custom-green hover:opacity-90 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                                >
                                    READ MORE
                                </Link>
                            </div>
                        </div>
                    </div>

                    <NewsEventsSidebar newsEvents={dept.newsEvents} />
                    <AnnouncementsSidebar announcements={dept.announcements} />
                </div>

                {/* Bottom Section: Slider and Important Links */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* RESPONSIVE SLIDER */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative min-h-[450px] md:h-[400px]">
                        <div className="flex flex-col md:flex-row h-full">
                            {/* Image Section - Adjusts height on mobile */}
                            <div className="w-full h-[250px] md:h-full md:w-[75%] relative bg-black overflow-hidden">
                                {dept.sliderImages.map((slide, index) => (
                                    <div 
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                    >
                                        <img 
                                            src={slide.url} 
                                            alt={slide.caption} 
                                            className="w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-105"
                                        />
                                    </div>
                                ))}
                                
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                                    {dept.sliderImages.map((_, index) => (
                                        <button 
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-2 h-2 rounded-full border border-white transition-all ${index === currentSlide ? 'bg-white w-4' : 'bg-transparent'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Text Section - Becomes a footer on mobile */}
                            <div className="w-full md:w-[25%] bg-custom-green text-white p-6 flex flex-col justify-center relative min-h-[150px] md:min-h-0">
                                {dept.sliderImages.map((slide, index) => (
                                    <div 
                                        key={index}
                                        className={`absolute inset-0 p-6 flex flex-col justify-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                    >
                                        <span className="uppercase tracking-widest text-[10px] text-white/70 mb-1 md:mb-2">Department Gallery</span>
                                        <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 leading-tight line-clamp-2">{slide.caption}</h3>
                                        <div className="w-8 h-1 bg-white mb-3 md:mb-4 rounded-full"></div>
                                        <button className="inline-block bg-white text-custom-green text-[10px] font-bold py-2 px-4 rounded shadow hover:bg-gray-100 transition-colors w-max uppercase tracking-wider">
                                            View More
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <ImportantLinksSidebar importantLinks={dept.importantLinks} />
                </div>
            </div>
        </div>
    );
};

export default CSIT;