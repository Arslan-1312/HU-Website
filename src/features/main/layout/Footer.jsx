import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark-green pt-12 text-white font-roboto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-medium mb-6">Quick Links</h3>
                        <ul className="list-none space-y-2 text-sm font-semibold underline">
                            <li><a href="#" className="hover:text-gray-300">Fact Sheet</a></li>
                            <li><a href="#" className="hover:text-gray-300">IT Services</a></li>
                            <li><a href="#" className="hover:text-gray-300">About HU</a></li>
                            <li><a href="#" className="hover:text-gray-300">Annual Report</a></li>
                            <li><a href="#" className="hover:text-gray-300">Business Plan</a></li>
                            <li><a href="#" className="hover:text-gray-300">Anti-Harassment</a></li>
                            <li><a href="#" className="hover:text-gray-300">Affiliated Institutions</a></li>
                            <li><a href="#" className="hover:text-gray-300">Disability Resource Center</a></li>
                            <li><a href="#" className="hover:text-gray-300">Online and Distance Learning</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-medium mb-6">Important Links</h3>
                        <ul className="list-none space-y-2 text-sm font-semibold underline">
                            <li><a href="#" className="hover:text-gray-300">HU Spotlight</a></li>
                            <li><a href="#" className="hover:text-gray-300">Core Objectives</a></li>
                            <li><a href="#" className="hover:text-gray-300">Selection Board</a></li>
                            <li><a href="#" className="hover:text-gray-300">Clubs & Socities</a></li>
                            <li><a href="#" className="hover:text-gray-300">Missions & Core Values</a></li>
                            <li><a href="#" className="hover:text-gray-300">Planning & Development</a></li>
                            <li><a href="#" className="hover:text-gray-300">Career Development Center</a></li>
                            <li><a href="#" className="hover:text-gray-300">University Advancement Cell</a></li>
                            <li><a href="#" className="hover:text-gray-300">Central Research Laboratory</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-medium mb-6">Address</h3>
                        <div className="text-[15px] space-y-1">
                            <p className="font-bold">The Hazara University</p>
                            <p>Dhodial Mansehra</p>
                            <p>Khyber Pakhtunkhwa Pakistan</p>
                            <p className="mt-4 font-bold">Registrar Office</p>
                            <p>Phone: +92-111 232345</p>
                            <p>Fax: 0995920601</p>
                            <p>Email: registrar@h.u.edu.pk</p>
                            <p className="mt-4 font-bold">Examination Section</p>
                            <p>Phone: +92-995 2222222</p>
                            <p>ASRB Office</p>
                            <p>Phone: +92-995-2222222</p>
                            <a href="#" className="inline-block mt-4 font-bold underline hover:text-gray-300">View More Contacts</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#08401c] text-center py-4 mt-12 text-[13px] text-gray-400">
                <p className="m-0">Hazara University Mansehra Alrights Reserved</p>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
