import React from 'react';

const ShowResult = () => {
    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* Main Content Area */}
                <div className="lg:w-full">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-10 flex items-center justify-center lg:justify-start">
                        Search Examination Results ( Hazara University )
                    </h2>

                    <div className="max-w-4xl mx-auto lg:mx-0">
                        <div className="text-center mb-8">
                            <p className="text-gray-800 font-bold mb-2">
                                &lt;&lt; Entry Test Results for MS/M.Phil/M.Sc (Hons)/Ph.D Degree Programs (Admissions Spring 2026 Phase I) &gt;&gt;
                            </p>
                            <p className="text-sm text-gray-700 italic">
                                <strong>Note:</strong> The qualified candidates are requested to report in their respective departments for interview along with original documents.
                            </p>
                        </div>

                        {/* Search Results Form Table */}
                        <div className="bg-white border border-gray-300 rounded-sm overflow-hidden">
                            <div className="bg-gray-50 py-2 border-b border-gray-300">
                                <h3 className="text-center text-blue-800 font-bold text-lg">Search Results</h3>
                            </div>

                            <table className="w-full text-sm">
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-bold text-gray-700 w-1/3 border-r border-gray-200">Search By:</td>
                                        <td className="p-4">
                                            <select className="w-full md:w-2/3 p-1 border border-gray-400 rounded-sm bg-white">
                                                <option>- - - - - - Select Here - - - - - -</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-bold text-gray-700 border-r border-gray-200">Roll No / Name:</td>
                                        <td className="p-4">
                                            <input
                                                type="text"
                                                className="w-full md:w-2/3 p-1 border border-gray-400 rounded-sm"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-r border-gray-200"></td>
                                        <td className="p-4">
                                            <button className="bg-gray-100 border border-gray-400 px-4 py-1 text-xs hover:bg-gray-200 transition-colors">
                                                Search
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowResult;
