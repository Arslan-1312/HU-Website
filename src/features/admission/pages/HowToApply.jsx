import React from 'react';

const HowToApply = () => {
    return (
        <div className="bg-white py-12 font-roboto min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-green-800 mb-8">How To Apply</h1>

                <section className="mb-12 space-y-8">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Step 1: Creation of Online Account</h2>
                        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>Click on Register / Create Account on the admission portal.</li>
                            <li>Carefully save your login ID and password for future use.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Step 2: Login & Online Application Form</h2>
                        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>Log in to your newly created account and fill in the online application form.</li>
                            <li>The form is simple and self-explanatory. Please complete all required fields carefully.</li>
                            <li>Upload a passport-size photograph (soft copy) on the portal.</li>
                            <li>Enter marks of Part-I only of FA/FSc or equivalent qualification.</li>
                            <li>Do not provide false or incorrect Information. Any false Information may result in disqualification or cancellation of admission at any stage.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-bold text-gray-800 mb-2">Program Selection</h3>
                        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>You will be given four options to select programs:
                                <ul className="list-none ml-4 space-y-1 mt-1 font-semibold">
                                    <li>Option 1: First priority program</li>
                                    <li>Option 2: Second choice</li>
                                    <li>Option 3: Third choice</li>
                                    <li>Option 4: Fourth choice</li>
                                </ul>
                            </li>
                            <li>Select your options very carefully. Once the application is submitted, options cannot be changed.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-bold text-gray-800 mb-2">Final Submission</h3>
                        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>On the last page, click the "Submit" button.</li>
                            <li>After submission, download the PDF Application Form and Admission Processing Fee Challan.</li>
                            <li>Take a print or soft copy of the challan.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-bold text-gray-800 mb-2">Payment of Admission Processing Fee</h3>
                        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>Fee is payable only through:
                                <ul className="list-none ml-4 space-y-1 mt-1">
                                    <li>- Easypaisa (App / Agent / Franchise)</li>
                                    <li>- QuickPay</li>
                                    <li>- Bank of Khyber (CMS only) (Inform the bank staff to deposit the fee through CMS; no university account number is required)</li>
                                </ul>
                            </li>
                            <li>After payment, log in again to your portal.</li>
                            <li>Your challan status will appear as "Paid".</li>
                            <li>If the status does not update after some time, contact the concerned bank/agent.</li>
                            <li>Keep the paid challan receipt safe for submission at the time of interview.</li>
                        </ul>
                        <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-600 space-y-2 text-xs font-bold text-red-700">
                            <p><i className="fas fa-exclamation-triangle mr-2"></i> Applications without paid processing fee will NOT be considered.</p>
                            <p><i className="fas fa-exclamation-triangle mr-2"></i> DO NOT send application forms or documents by post or by hand.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Step 3: After Submission of Application</h2>
                        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>Merit lists will be displayed according to the admission schedule on your online portal.</li>
                            <li>There is no need to visit the university at this stage.</li>
                            <li>If selected, you will be able to print the Program Admission Fee Challan from the portal.</li>
                            <li>Pay the admission fee through Easypaisa or Bank of Khyber (CMS only).</li>
                            <li>After payment, status will show "Paid" on the portal.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-bold text-gray-800 mb-2">Change of Program</h3>
                        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>Program change is allowed only under specific conditions.</li>
                            <li>For this, visit the Directorate of Undergraduate Studies as early as possible.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-bold text-gray-800 mb-2">Orientation & Document Submission</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">After payment of Program Admission Fee, candidates must report to the university for orientation on the scheduled date along with original documents and one set of photocopies of the following:</p>
                        <ul className="list-disc ml-6 space-y-2 text-xs text-gray-700 leading-relaxed mt-2 italic">
                            <li>Four recent passport-size photographs</li>
                            <li>SSC / Matric Certificate & DMC</li>
                            <li>FA/FSc or equivalent Certificate & DMCs</li>
                            <li>Domicile Certificate</li>
                            <li>Character Certificate from last attended institution</li>
                            <li>CNIC/Form-B of applicant and parent/guardian (Applicants aged 18 years or above must submit CNIC copy)</li>
                            <li>Equivalence Certificate from IBCC (if applicable)</li>
                            <li>Undertaking (Annexure-I)</li>
                            <li>Quota certificates (if applying against reserved quota)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-bold text-gray-800 mb-2 font-black">For PhD Candidates</h3>
                        <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                            <li>All PhD applicants must appear in the Entry Test conducted on campus as per schedule.</li>
                            <li>Candidates who qualify the test must submit the following at the time of departmental interview:
                                <ul className="list-none ml-4 space-y-1 mt-1 text-xs italic">
                                    <li>- Printed Application Form</li>
                                    <li>- Original paid Entry Test Fee Challan</li>
                                    <li>- Four photographs</li>
                                    <li>- Statement of Purpose (SOP)</li>
                                    <li>- Research Proposal</li>
                                    <li>- NOC from employer (if applicable)</li>
                                    <li>- Study Leave Certificate (Two Years for PhD) before mid-term examination (for in-service candidates)</li>
                                </ul>
                            </li>
                            <li>For MPhil and PhD applications, upload BS / MPhil transcript clearly indicating CGPA or percentage marks.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-green-800 text-white rounded-lg p-12 shadow-xl border-t-8 border-green-700">
                    <h2 className="text-3xl font-bold mb-8 text-center text-green-100 uppercase tracking-widest">Online Admission Support:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold border-b border-green-600 pb-2">Directorate of Advance Studies & Research</h3>
                            <div className="space-y-1 text-sm text-green-50/90">
                                <p className="font-bold">Phone: +92-995-667788</p>
                                <p>Email: drasrb@hu.edu.pk</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold border-b border-green-600 pb-2">Directorate of Undergraduate Studies</h3>
                            <div className="space-y-1 text-sm text-green-50/90">
                                <p className="font-bold">Phone: +92-995-334455</p>
                                <p>Email: admissions.urg@hu.edu.pk</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold border-b border-green-600 pb-2">IT Help Desk</h3>
                            <div className="space-y-1 text-sm text-green-50/90">
                                <p className="font-bold">Phone: +92-995-9234445</p>
                                <p>Email: ithelpdesk@hu.edu.pk</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HowToApply;
