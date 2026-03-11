import React from 'react';

const AdmissionShedule = () => {
    const phase2Schedule = [
        { activity: "Last Date of Online Application Submission", date: "8th February 2026" },
        { activity: "Entry Test for all MS/M.Phil/MBA & Ph.D Programs (10:30 AM to 12:30 PM) at HU Campus", date: "9th February 2026" },
        { activity: "Result Announcement on HU website (Afternoon)", date: "11th February 2026" },
        { activity: "Interview of only Test qualified candidates in the respective department", date: "12th February to 13th February 2026" },
        { activity: "Display of Merit List and Fee Submission", date: "13th February 2026" },
        { activity: "Orientation", date: "12th February to 13th February 2026" },
        { activity: "Commencement of Classes", date: "16th February 2026" },
    ];

    const phase2SecondarySchedule = [
        { activity: "Last Date of Online Application Submission", date: "On First Come First Serve Basis in selected programs" },
        { activity: "Orientation, Document Submission, Document Verification, Admission Confirmation", date: "12th February to 13th February 2026" },
        { activity: "Commencement of Classes", date: "16th February 2026" },
    ];

    return (
        <div className="bg-white py-12 font-roboto min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-2xl font-bold text-green-800 mb-2">
                    Admission Schedule (Admissions Spring 2026 )
                </h1>
                <h2 className="text-xl font-bold text-green-700 mb-6">
                    Admission Schedule for MS/MPhil/MBA/M.Sc (Hons.)/Ph.D Programs (Phase 2)
                </h2>

                {/* Table 1 */}
                <div className="border border-gray-300 rounded-lg overflow-hidden mb-12 shadow-sm overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-green-800 text-white">
                                <th className="p-4 text-xl md:text-2xl font-bold border-r border-white/20 whitespace-nowrap">Activity</th>
                                <th className="p-4 text-xl md:text-2xl font-bold whitespace-nowrap">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {phase2Schedule.map((item, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="p-4 text-sm md:text-lg font-semibold text-gray-800 border-r border-gray-300">{item.activity}</td>
                                    <td className="p-4 text-sm md:text-lg font-semibold text-gray-800">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className="text-xl font-bold text-green-700 mb-6">
                    Admission Schedule for MS/MPhil/MBA/M.Sc (Hons.)/Ph.D Programs (Phase 2)
                </h2>

                {/* Table 2 */}
                <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-green-800 text-white">
                                <th className="p-4 text-xl md:text-2xl font-bold border-r border-white/20 whitespace-nowrap">Activity</th>
                                <th className="p-4 text-xl md:text-2xl font-bold whitespace-nowrap">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {phase2SecondarySchedule.map((item, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="p-4 text-sm md:text-lg font-semibold text-gray-800 border-r border-gray-300">{item.activity}</td>
                                    <td className="p-4 text-sm md:text-lg font-semibold text-gray-800">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-red-600 text-sm italic font-bold">
                        Important:
                    </p>
                    <ul className="list-disc ml-6 text-[12px] text-gray-700 mt-2 space-y-1">
                        <li>University reserves the right to not start any offered BS program without assigning any reason. In such case, applicant will be given the choice to i) select any other BS program for which he is eligible, seats are available and qualify the merit OR ii) claim for reimbursement of program admission fee as per university policy.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdmissionShedule;
