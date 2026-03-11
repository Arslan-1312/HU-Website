import React from 'react';
import { paperCompositionTable } from '../../../data/admissionData';

const EntryTestDetails = () => {
    const paperComposition = paperCompositionTable;

    return (
        <div className="bg-white py-12 font-roboto min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-green-800 mb-8">Entry Test Details</h1>

                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Important guidelines for all candidates:</h2>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                        <li>There would be No Entry Test for BS/BS 5th Semester/Diploma Programs admissions.</li>
                        <li>For admission in any PhD Program offered by the university; a candidate must possess a MS/M.Phil/Equivalent (18 years qualification) degree with CGPA 3.0/4.0 in a semester system or first division (60%) in an annual system.</li>
                        <li>All applicants for the PhD Programs must qualify GRE type non-subject entry (pro-requisite for PhD admission) test before the interview.</li>
                        <li>The candidates interested for the PhD admissions are advised to visit their Department to meet and obtain written consent from their prospective supervisor.</li>
                        <li>Foreign candidates must provide their equivalency certificates from HEC and IBCC within one month after provisional admission in their respective departments. Inability to provide equivalency certificates within due time may cause cancellation of their admission.</li>
                        <li>After qualifying the Entry Test candidates must appear for Interview before the departmental admission committee with statement of purpose and Research Proposal of their PhD admission.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Entry TEST Composition and Guidelines:</h2>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                        <li>Entry test will be GRE general type for both M.Phil & Ph.D Programs.</li>
                        <li>The paper shall consist of 100 MCQ's (English-40%, Analytical Reasoning-30%, Mathematics-30%) and duration of the test will be two (2) hours.</li>
                        <li>The test will consist of three parts: Quantitative, Analytical and Verbal Reasoning.</li>
                        <li>Qualifying score for PhD admission will be 60% while 50% for MS/MPhil admission.</li>
                        <li>The candidates will be allowed to appear in the test on verification of CNIC or Passport. No other identity shall be entertained to avoid impersonations. In case of a lost CNIC, the candidate shall have to provide a copy of the NADRA slip to prove that he/she has applied for the fresh CNIC, along with a photo ID.</li>
                        <li>The monitoring teams of HU will be allowed to enter in the examination Halls at the test centers for the purpose of monitoring transparency mechanism.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Paper Distribution/Scheme of Question Paper for M.Phil/MS/MSc (Hons) & PhD Entry Test</h2>
                    <h3 className="text-lg font-bold text-gray-700 mb-4">Test Break Up for Upcoming M.Phil/Ph.D. Entry test (Islamic & Religious Studies)</h3>
                    <ul className="list-decimal ml-6 space-y-1 text-sm text-gray-700 mb-8">
                        <li>Analytical Reasoning: 30%</li>
                        <li>General Knowledge: 40% (i.e Pak-Study, Indo-Pak History, General Science)</li>
                        <li>Maths: 30%</li>
                    </ul>

                    <div className="border border-gray-300 rounded-sm overflow-hidden shadow-sm overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm min-w-[700px]">
                            <thead>
                                <tr className="bg-gray-50 text-gray-800 border-b border-gray-300">
                                    <th colSpan="4" className="p-3 text-center border-b border-gray-300 font-bold uppercase tracking-wider">Paper Composition/Structure</th>
                                </tr>
                                <tr className="bg-gray-50 text-gray-800 border-b border-gray-300 font-bold">
                                    <th className="p-3 border-r border-gray-300">Disciplines</th>
                                    <th className="p-3 border-r border-gray-300">English (40%)</th>
                                    <th className="p-3 border-r border-gray-300">Analytical Reasoning (30%)</th>
                                    <th className="p-3">Mathematics (30%)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {paperComposition.map((item, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}>
                                        <td className="p-3 border-r border-gray-300 font-bold text-gray-900">{item.discipline}</td>
                                        <td className="p-3 border-r border-gray-300 text-gray-700">{item.english}</td>
                                        <td className="p-3 border-r border-gray-300 text-gray-700">{item.analytical}</td>
                                        <td className="p-3 text-gray-700">{item.math}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EntryTestDetails;
