import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { departmentData } from '../../../data/departmentData';

const DepartmentPage = () => {
    const { id } = useParams();
    const dept = departmentData[id] || departmentData['cs-it']; // Fallback to CS&IT for now
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide for the small slider
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
                <h1 className="text-3xl font-bold text-[#005c87] border-b-2 border-[#005c87] pb-2 inline-block">
                    {dept.name}
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-8 md:px-12">
                {/* Top Grid Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    
                    {/* Introduction Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-full">
                        <div className="bg-[#007ba1] text-white px-4 py-3 rounded-t-lg">
                            <h2 className="text-xl font-semibold">{dept.introduction.title}</h2>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <img 
                                    src={dept.introduction.image} 
                                    alt="Intro" 
                                    className="w-full md:w-1/2 h-40 object-cover rounded shadow-sm border border-gray-100"
                                />
                                <div className="text-sm text-gray-700 leading-relaxed md:w-1/2">
                                    <p className="mb-2">Welcome to the {dept.name} at Hazara University!</p>
                                    <p>{dept.introduction.content.substring(dept.introduction.content.indexOf('!') + 2)}</p>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                                <span className="text-gray-500 text-xs italic">Our .....</span>
                                <Link 
                                    to={dept.introduction.readMoreLink}
                                    className="bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                                >
                                    READ MORE
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* News & Events Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-full">
                        <div className="bg-[#007ba1] text-white px-4 py-3 rounded-t-lg">
                            <h2 className="text-xl font-semibold">{dept.newsEvents.title}</h2>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <ul className="space-y-4">
                                {dept.newsEvents.items.map((item, index) => (
                                    <li key={index} className="border-b border-dashed border-gray-300 pb-3 last:border-0">
                                        <Link to={item.link} className="text-[#3498db] hover:underline text-sm font-medium block mb-1">
                                            {item.title}
                                            {item.isNew && (
                                                <span className="ml-2 bg-red-500 text-white text-[10px] px-1 rounded uppercase font-bold italic animate-pulse">
                                                    New
                                                </span>
                                            )}
                                        </Link>
                                        <span className="text-gray-500 text-xs">{item.date}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Announcements Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-full">
                        <div className="bg-[#007ba1] text-white px-4 py-3 rounded-t-lg">
                            <h2 className="text-xl font-semibold">{dept.announcements.title}</h2>
                        </div>
                        <div className="p-4 flex flex-col flex-grow italic text-gray-500 text-sm">
                            {dept.announcements.items.length > 0 ? (
                                <ul className="space-y-3">
                                    {dept.announcements.items.map((item, index) => (
                                        <li key={index}>{item.title}</li>
                                    ))}
                                </ul>
                            ) : (
                                "No Announcement Found"
                            )}
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Slider and Important Links */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Small Slider - Homepage Style but Smaller */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative h-[400px]">
                        <div className="flex flex-col md:flex-row h-full">
                            {/* Image Section (80%) */}
                            <div className="w-full md:w-[75%] relative bg-black overflow-hidden">
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
                                
                                {/* Dots Overlay */}
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

                            {/* Text Section (25%) */}
                            <div className="w-full md:w-[25%] bg-[#007ba1] text-white p-6 flex flex-col justify-center relative">
                                {dept.sliderImages.map((slide, index) => (
                                    <div 
                                        key={index}
                                        className={`absolute inset-0 p-6 flex flex-col justify-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                    >
                                        <span className="uppercase tracking-widest text-[10px] text-white/70 mb-2">Department Gallery</span>
                                        <h3 className="text-lg font-bold mb-3 leading-tight">{slide.caption}</h3>
                                        <div className="w-8 h-1 bg-white mb-4 rounded-full"></div>
                                        <button className="mt-2 inline-block bg-white text-[#007ba1] text-[10px] font-bold py-2 px-4 rounded shadow hover:bg-gray-100 transition-colors w-max uppercase tracking-wider">
                                            View More
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Important Links Card */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-[#005c87] mb-6 border-b pb-2">Important Links</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                            {dept.importantLinks.columns.map((column, colIdx) => (
                                <ul key={colIdx} className="space-y-2">
                                    {column.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-center group">
                                            <span className="text-gray-400 mr-2 group-hover:text-[#3498db] transition-colors">•</span>
                                            <Link to={item.link} className="text-gray-700 hover:text-[#3498db] text-sm transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DepartmentPage;
