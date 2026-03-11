import React from 'react';
import Sidebar from '../../../components/Sidebar';

// Assuming you have your images in the assets folder
// import DaycareImg1 from '../../../assets/daycare1.jpg';
// import DaycareImg2 from '../../../assets/daycare2.jpg';

const Daycare = () => {
    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-6 flex items-center">
                        Day Care Center
                    </h2>

                    <div className="space-y-8">
                        {/* Introduction Section */}
                        <div className="text-gray-800">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Introduction</h3>
                            <p className="leading-relaxed text-justify mb-4">
                                The Day Care Centre at the University of Haripur, established in February 2020, provides a safe, nurturing, and developmentally appropriate environment for young children of faculty, staff, and students. It plays a vital role in enabling parents to focus on their academic, professional, and research commitments with confidence and peace of mind.
                            </p>
                            <p className="leading-relaxed text-justify mb-4">
                                In line with the University's vision and mission, the Centre's primary objective is to foster a family-friendly campus and promote a healthy work-life balance. It is dedicated to delivering high-quality early childhood care and education through well-trained staff, engaging learning activities, and a secure setting that supports children's social, emotional, and cognitive growth.
                            </p>
                            <p className="leading-relaxed text-justify">
                                The Centre upholds recognized quality standards and national childcare guidelines, with ongoing monitoring and evaluation to ensure service excellence. By supporting families, it restores hope, strengthens connections, and contributes to building a thriving and compassionate University community.
                            </p>
                        </div>

                        {/* Gallery Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-lg overflow-hidden border-4 border-gray-100 shadow-md">
                                <img
                                    src="assets/Slider Image 2.png"
                                    alt="Daycare activity"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden border-4 border-gray-100 shadow-md">
                                <img
                                    src="/api/placeholder/400/300"
                                    alt="Daycare room"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden border-4 border-gray-100 shadow-md">
                                <img
                                    src="/api/placeholder/400/300"
                                    alt="Daycare children"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden border-4 border-gray-100 shadow-md">
                                <img
                                    src="/api/placeholder/400/300"
                                    alt="Daycare facility"
                                    className="w-full h-64 object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
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

export default Daycare;
