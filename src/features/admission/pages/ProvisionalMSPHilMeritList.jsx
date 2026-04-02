import React from 'react';
import { Link } from 'react-router-dom';
import { meritListData } from '../data/meritListData';

const ProvisionalMSPHilMeritList = () => {
    const list = meritListData.provisional.ms;

    return (
        <div className="bg-white py-4 md:py-8 w-full min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Back Link */}
                <div className="mb-6">
                    <Link
                        to="/admissions/merit-list/provisional"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-green-800 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-green-50 hover:gap-3 group border border-gray-100"
                    >
                        <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
                        Back to Provisional Merit List
                    </Link>
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-green-900 mb-1">
                            MS/MPhil Programs Provisional List
                        </h1>
                        <p className="text-gray-600 font-medium">Spring Admissions 2026</p>
                    </div>
                    <button className="bg-green-800 text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center shadow-md hover:bg-green-900 transition-colors self-start md:self-auto">
                        <i className="fas fa-download mr-2"></i> Download All Merit Lists (PDF)
                    </button>
                </div>

                {/* Table */}
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-green-800 text-white">
                                <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Program</th>
                                <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-center">Merit List</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {list.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                                    <td className="px-6 py-4 font-bold text-gray-700">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 w-64 text-center">
                                        <a 
                                            href={item.link}
                                            download
                                            className="w-full max-w-[240px] bg-green-800 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center justify-center hover:bg-green-900 transition-all shadow-sm mx-auto"
                                        >
                                            <i className="fas fa-file-download mr-2"></i> Download Merit List
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProvisionalMSPHilMeritList;
