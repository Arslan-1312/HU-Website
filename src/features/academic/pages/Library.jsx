import React from 'react';
import Sidebar from '../../../components/Sidebar';

const Library = () => {
    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-6 flex items-center">
                        Central Library (Hazara University)
                    </h2>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h3 className="text-xl font-bold text-primary-green mb-6 border-b pb-2">
                            Librarian Message
                        </h3>
                        
                        <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                            <p>
                                Welcome to the Central Library of Hazara University, a vital academic hub that supports learning, teaching, and research across the university. Libraries are the heart of every academic institution and serve as the backbone of a progressive and knowledge-driven society. Although Hazara University is a relatively young institution, its Central Library has made remarkable progress in a short span of time.
                            </p>
                            <p>
                                The Central Library takes pride in supporting the academic and research needs of students, faculty members, and researchers. The library houses a rich collection of over 20,000 titles, along with thousands of electronic resources available in multiple formats. Currently, the library serves more than 2,800 registered users, reflecting its growing role in the academic life of the university.
                            </p>
                            <p>
                                To facilitate advanced research and digital learning, the library provides access to the HEC Digital Library, enabling users to explore thousands of national and international journals, books, and research databases. A dedicated computer laboratory has also been established within the library premises to support digital access and research activities.
                            </p>
                            <p>
                                Our mission is to deliver efficient and user-focused library services, including lending services, reference assistance, current awareness services, and selective dissemination of information, tailored to the diverse needs of our users. The library offers a spacious and comfortable study environment, with separate areas for individual study as well as group study, ensuring a productive academic atmosphere.
                            </p>
                            <p>
                                In addition to physical collections, the Hazara University Central Library provides on-campus access to a wide range of digital resources made available by the Higher Education Commission of Pakistan. Our dedicated, professional, and skilled library staff is always ready to assist users in locating required materials and making effective use of modern information technologies.
                            </p>
                            <p>
                                Whether you are a student, researcher, or faculty member seeking digital or physical resources, the library staff is committed to supporting your academic journey. We encourage all users to fully utilize the facilities and opportunities offered by the Central Library, as continuous engagement will further strengthen and enhance library services for the university community.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <p className="font-bold text-gray-900">Mr</p>
                            <p className="text-gray-600">Deputy Librarian/Head Central Library</p>
                            <p className="text-primary-green font-medium">Hazara University</p>
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

export default Library;
