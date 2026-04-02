import React from 'react';
import { hostelData } from '../data/admissionData';
import logo from '../assets/logo.png';

const HostelFacility = () => {
    const documents = hostelData.documents;

    return (
        <div className="bg-white py-12 font-roboto min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-green-800 mb-2">Hostel Facility</h1>
                <p className="text-gray-600 mb-8 italic">Hazara University has started hostel facility for female students from Fall-2023. The seat will be allotted on first come first serve basis.</p>

                <div className="bg-green-800 text-white p-12 rounded-lg mb-12 shadow-2xl relative overflow-hidden border-4 border-green-700">
                    <div className="relative z-10 text-center flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">Hazara University Mansehra</h2>
                        <div className="bg-white text-green-800 px-12 py-3 text-3xl md:text-4xl font-bold mb-8 shadow-lg">
                            Girl Hostel
                        </div>
                        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mb-8">
                            Hazara University provides modern hostel facilities for female students within the university campus. The hostel includes a mosque, fully furnished rooms, dining area, common room, study room, and a play area. It also offers affordable fees, 24/7 ambulance service, free internet, and proper security. Please note that the university is not responsible for any hostels located outside the campus....
                        </p>
                        {/* Adding the Urdu text placeholder for visual matching */}
                        <p className="text-xl md:text-2xl font-bold text-right w-full mt-4 leading-loose" dir="rtl">
                            اچھے ہری پور طالبات کے لیے یونیورسٹی کی حدود کے اندر جدید ہاسٹل کی سہولت فراہم کرتی ہے۔ اس میں مسجد، فرنشڈ کمرے، کھانے کا انتظام، کامن روم، اسٹڈی روم اور کھیل کی جگہ موجود ہے۔ مناسب فیس کے ساتھ 24 گھنٹے ایمبولینس، مفت انٹرنیٹ اور سیکیورٹی بھی فراہم کی جاتی ہے۔ یونیورسٹی اپنی حدود سے باہر موجود ہاسٹلز کی کسی بھی قسم کی ذمہ داری قبول نہیں کرتی۔
                        </p>
                    </div>
                    {/* Background Logo Overlay */}
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                        <img src={logo} alt="Overlay" className="w-[50%] grayscale invert scale-125" loading="lazy" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase">Salient Features of Girls Hostel at Hazara University:</h3>
                        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>State-of-the-art building/furniture</li>
                            <li>Three-layer security measures</li>
                            <li>Biometric attendance (in-out)</li>
                            <li>High speed internet facility</li>
                            <li>Hot and cold water</li>
                            <li>Energy backup</li>
                            <li>Indoor/outdoor sports</li>
                            <li>Indoor canteen/tuck shop</li>
                            <li>Study room + common room</li>
                            <li>Indoor mosque</li>
                            <li>Laundry and cleaning facility</li>
                            <li>Conducive environment</li>
                            <li>Reasonable living and mess charges.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase">Procedure:</h3>
                        <p className="text-sm text-gray-700 mb-4">Download these forms from university website, fill-up the hostel admission form and attached relevant documents and submit in the Office of the Provost.</p>

                        <div className="border border-gray-300 rounded-sm overflow-hidden">
                            <table className="w-full text-left border-collapse text-xs">
                                <tbody className="divide-y divide-gray-200">
                                    {documents.map((doc, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-3 w-10">
                                                {doc.type === 'Word' ? (
                                                    <i className="fas fa-file-word text-blue-700 text-lg"></i>
                                                ) : (
                                                    <i className="fas fa-file-pdf text-red-600 text-lg"></i>
                                                )}
                                            </td>
                                            <td className="p-3 font-semibold text-gray-800">{doc.name}</td>
                                            <td className="p-3 text-right">
                                                <a href={doc.link} className="text-blue-600 font-bold hover:underline">Download Here</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
                    <div>
                        <h4 className="font-bold text-gray-800 mb-2 uppercase">For any information and query about girls hostel please contact</h4>
                        <div className="text-sm text-gray-700 space-y-1">
                            <p className="font-bold">Sajjad Afridi,</p>
                            <p>Assistant Provost</p>
                            <p>Ph: 0995-345678</p>
                            <p>Email: provost@hu.edu.pk</p>
                            <p>Room # 302, 2nd floor Admin Block</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-800 mb-2 uppercase">Boys Hostel</h4>
                        <p className="text-xs text-gray-600 mb-4 italic">For any information and query about boys hostel please contact</p>
                        <div className="text-sm text-gray-700 space-y-1">
                            <p className="font-bold">Sajjad Afridi,</p>
                            <p>Assistant Provost</p>
                            <p>Ph: 0995-232134</p>
                            <p>Email: aproyost@hu.edu.pk</p>
                            <p>Room # 1001, ground floor Examination Block</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostelFacility;
