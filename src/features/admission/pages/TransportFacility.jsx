import React from 'react';
import { transportRoutes as importedRoutes } from '../../../data/admissionData';

const TransportFacility = () => {
    const transportRoutes = importedRoutes;

    return (
        <div className="bg-white py-12 font-roboto min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-green-800 mb-2">Transport Facility</h1>
                <h2 className="text-xl font-bold text-gray-800 mb-6">The Hazara University Bus Routes/Stops (Public/Private)</h2>

                <p className="text-xs text-gray-600 mb-8 italic">Hazara University Bus Routes/Stops (Public/Private)</p>

                <div className="border border-gray-300 rounded-sm shadow-sm overflow-hidden overflow-x-auto mb-8">
                    <table className="w-full text-left border-collapse text-sm">
                        <thead className="bg-gray-50 text-gray-800 font-bold border-b border-gray-300">
                            <tr>
                                <th className="p-4 border-r border-gray-300 w-16 text-center">S. No</th>
                                <th className="p-4 border-r border-gray-300">Name of Route/Stop</th>
                                <th className="p-4 border-r border-gray-300 text-center">Tentative Fee/Charges per Semester</th>
                                <th className="p-4 text-center">Remarks</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {transportRoutes.map((item, idx) => (
                                <React.Fragment key={idx}>
                                    {item.section ? (
                                        <>
                                            <tr className="bg-gray-100/50">
                                                <td colSpan="4" className="p-4 text-center font-black text-xl text-gray-900 border-b border-gray-300 uppercase tracking-widest">{item.section}</td>
                                            </tr>
                                            {item.routes.map((route, rIdx) => (
                                                <tr key={`${idx}-${rIdx}`} className="hover:bg-gray-50/50 transition-colors">
                                                    {rIdx === 0 && (
                                                        <td rowSpan={item.routes.length} className="p-4 border-r border-gray-300 text-center font-bold text-gray-800 align-middle">
                                                            {item.id}
                                                        </td>
                                                    )}
                                                    <td className="p-4 border-r border-gray-300 text-gray-800 font-medium">{route.name}</td>
                                                    <td className="p-4 border-r border-gray-300 text-center text-gray-800 font-bold">{route.fee}</td>
                                                    <td className="p-4 text-center text-green-700 font-semibold">{route.status}</td>
                                                </tr>
                                            ))}
                                        </>
                                    ) : (
                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 border-r border-gray-300 text-center font-bold text-gray-800">{item.id}</td>
                                            <td className="p-4 border-r border-gray-300 text-gray-800 font-medium">{item.route}</td>
                                            <td className="p-4 border-r border-gray-300 text-center text-gray-800 font-bold">{item.fee}</td>
                                            <td className="p-4 text-center text-green-700 font-semibold">{item.status}</td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-red-600 rounded-r shadow-sm">
                    <p className="text-sm font-medium text-gray-700 m-0">
                        <span className="font-bold text-red-600 uppercase">Note:</span> Transport charges may vary from time to time based on the recommendations of the transport committee.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TransportFacility;
