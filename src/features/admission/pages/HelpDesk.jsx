import React from 'react';
import { focalPersonsList } from '../../../data/admissionData';

const HelpDesk = () => {
    const focalPersons = focalPersonsList;

    return (
        <div className="bg-white py-6 md:py-12 font-roboto min-h-screen w-full overflow-x-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">Focal Persons</h1>
                <p className="text-gray-600 mb-8 text-sm">List of Focal Persons for various programs.</p>

                {/* This wrapper enables both Vertical (max-h) and Horizontal (overflow-x) scrolling.
                    'sticky top-0' ensures the header stays visible while scrolling down.
                */}
                <div className="border border-gray-300 rounded-sm shadow-sm overflow-hidden">
                    <div className="overflow-x-auto overflow-y-auto max-h-[500px] md:max-h-[700px] touch-pan-x touch-pan-y">
                        <table className="w-full text-left border-collapse text-sm min-w-[800px]">
                            <thead className="sticky top-0 z-10 bg-gray-100 shadow-sm">
                                <tr className="text-gray-800 border-b border-gray-300 font-bold uppercase tracking-wider">
                                    <th className="p-4 border-r border-gray-300 w-1/4 bg-gray-50">Department Name</th>
                                    <th className="p-4 border-r border-gray-300 w-1/4 bg-gray-50">Focal Person Name</th>
                                    <th className="p-4 border-r border-gray-300 w-1/4 text-center bg-gray-50">Contact Nos.</th>
                                    <th className="p-4 w-1/4 bg-gray-50">Email Address</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {focalPersons.map((dept, idx) => (
                                    <React.Fragment key={idx}>
                                        {dept.persons ? (
                                            dept.persons.map((person, pIdx) => (
                                                <tr key={`${idx}-${pIdx}`} className={(idx + pIdx) % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'}>
                                                    {pIdx === 0 && (
                                                        <td rowSpan={dept.persons.length} className="p-4 border-r border-gray-300 font-bold text-gray-900 align-top">
                                                            {dept.dept}
                                                        </td>
                                                    )}
                                                    <td className="p-4 border-r border-gray-300 text-gray-700">{person.name}</td>
                                                    <td className="p-4 border-r border-gray-300 text-gray-700 text-center whitespace-nowrap">{person.contact}</td>
                                                    <td className="p-4 text-blue-700 hover:underline break-all">
                                                        <a href={`mailto:${person.email}`}>{person.email}</a>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'}>
                                                <td className="p-4 border-r border-gray-300 font-bold text-gray-900">{dept.dept}</td>
                                                <td className="p-4 border-r border-gray-300 text-gray-700">{dept.name}</td>
                                                <td className="p-4 border-r border-gray-300 text-gray-700 text-center whitespace-nowrap">{dept.contact}</td>
                                                <td className="p-4 text-blue-700 hover:underline break-all">
                                                    <a href={`mailto:${dept.email}`}>{dept.email}</a>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpDesk;