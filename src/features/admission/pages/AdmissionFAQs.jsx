import React from 'react';

const AdmissionFAQs = () => {
    const faqs = [
        { q: "Q1: I have completed my BS (16 years) degree. Can I apply for PhD admission as per the revised HEC PhD Policy?", a: "Ans: Yes, you can apply for PhD admission." },
        { q: "Q2: Is the revised HEC PhD policy applicable to already enrolled students?", a: "Ans: No, the revised HEC PhD policy is not applicable to already enrolled students. However, the University has the authority to implement selected provisions of the revised policy where deemed appropriate." },
        { q: "Q3: I have completed 16 years of education with a CGPA of 2.95. Am I eligible to apply for PhD admission?", a: "Ans: No. The minimum eligibility requirement for PhD admission is CGPA 3.00/4.00 in the semester system or 60% marks in the annual system." },
        { q: "Q4: Is it compulsory to pass the GRE (General) test for PhD admission?", a: "Ans: Yes, qualifying the GRE General (Non-Subject) test is mandatory for PhD admission." },
        { q: "Q5: Is it compulsory to pass a Subject-Based GRE test for PhD admission?", a: "Ans: No. Only the GRE General (Non-Subject) test is required." },
        { q: "Q6: I qualified the GRE (General) test from another university with 60% marks. Can I use it for admission at Hazara University?", a: "Ans: Yes, provided the test was conducted within the last two years." },
        { q: "Q7: I have completed my MPhil/MS coursework. Can I apply for PhD admission based on this coursework?", a: "Ans: Yes, you are eligible if your coursework CGPA is 3.00 or above and you have qualified the GRE General test with at least 60% marks (if not already availed)." },
        { q: "Q8: Will I get any coursework exemption in the PhD program after completing MPhil/MS coursework?", a: "Ans: Yes, you may receive up to 24 credit hours exemption, subject to verification of transcripts by the department and Controller of Examinations. Deficiency courses (non-credit) may still be required." },
        { q: "Q9: I completed my MPhil/MS coursework from another university. Can I apply for PhD at Hazara University and get coursework exemption?", a: "Ans: Yes, however, only 50% of your earned credit hours will be counted. The remaining credits must be repeated. Research synopsis will not be considered." },
        { q: "Q10: Is there any exit option if I do not wish to complete my PhD degree?", a: "Ans: Yes. As per the revised HEC PhD policy, the following exit options are available:\n• After 24 credit hours, MS (Taught) with 6 credit hours of special problem/assignment/review of literature\n• After 24 credit hours, MPhil with 10 credit hours research thesis\n• After 48 credit hours, MS (Taught) without a research thesis" },
        { q: "Q11: What will be the status of existing MPhil/MS degrees after the revised PhD policy?", a: "Ans: Existing MPhil/MS degrees remain valid. Students with CGPA below 3.00 can still apply for MPhil/MS programs." },
        { q: "Q12: I have completed my MS/MPhil degree. Will I get any coursework exemption in the PhD program?", a: "Ans: Yes. Candidates with 30 credit hours including thesis must complete 24 credit hours of PhD coursework in the relevant discipline. Deficiency courses may be assigned by the department." },
        { q: "Q13: I have a BS degree in Forestry. Can I apply for a PhD in Botany?", a: "Ans: Yes, subject to approval by the Departmental Admission Committee. Deficiency courses may be required." },
        { q: "Q14: Is there any residency requirement for PhD students under the revised policy?", a: "Ans: Yes, candidates entering PhD after 16 years of education must complete a minimum of two years residency." },
        { q: "Q15: I am employed and have completed my MPhil. Can I pursue a PhD on a part-time basis?", a: "Ans: Employed candidates must obtain at least one year of study leave along with an NOC from their organization." },
        { q: "Q16: Is there a residency requirement for already enrolled MPhil students who have completed coursework?", a: "Ans: Yes, such students must complete one year of residency." },
        { q: "Q17: What are the requirements for employed candidates applying for PhD admission?", a: "Ans: Employed candidates must submit an NOC and provide two years study leave (48 credit hours of regular classes) within three months of admission; otherwise, admission will be cancelled." },
        { q: "Q18: What is the duration of the PhD program under the revised policy?", a: "Ans:\n• 4 years for candidates with 16 years of education\n• Minimum 3 years for candidates with an MPhil degree" },
        { q: "Q19: What fee will an enrolled MPhil student pay after entering the PhD program?", a: "Ans: The student will be charged the PhD program fee." },
        { q: "Q20: I qualified the GAT Subject test with 60 marks. Am I eligible for PhD admission?", a: "Ans: No. You must qualify the GAT General (Non-Subject) test with at least 60 marks." },
        { q: "Q21: I qualified the GAT General test conducted by NTS with 60 marks. Am I eligible for PhD admission?", a: "Ans: Yes, provided the test was conducted within the last two years." },
        { q: "Q22: What is the maximum coursework requirement for PhD after MPhil?", a: "Ans: A minimum of 24 credit hours, excluding seminars (non-credit)." },
        { q: "Q23: What is the minimum residency requirement for PhD after 16 years of education?", a: "Ans: Two years residency is required." },
        { q: "Q24: What is the minimum residency requirement for PhD after 18 years of education (MPhil)?", a: "Ans: One year (minimum) residency is required." },
        { q: "Q25: How is the merit for BS programs calculated?", a: "Ans:\n• 30% SSC / Matric marks\n• 70% HSSC / F.A / F.Sc marks" }
    ];

    return (
        <div className="bg-white py-6 md:py-12 font-roboto min-h-screen w-full overflow-x-hidden">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 md:mb-8">Frequently Asked Questions (FAQs)</h1>

                <section className="mb-8 md:mb-12 space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 pb-4">
                            <h2 className="text-[13px] md:text-sm font-bold text-gray-800 mb-2 leading-relaxed">
                                {faq.q}
                            </h2>
                            <p className="text-[13px] md:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Support Section */}
                <section className="bg-green-800 text-white rounded-lg p-6 md:p-10 shadow-lg border-t-4 border-green-700">
                    <h2 className="text-lg md:text-xl font-bold mb-6 text-center text-green-100 uppercase tracking-wider">Online Admission Support</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="space-y-2 border-b border-green-700 md:border-b-0 pb-4 md:pb-0 text-center md:text-left">
                            <h3 className="text-[13px] font-bold text-green-200">Directorate of Advance Studies & Research</h3>
                            <div className="text-xs space-y-1 opacity-90">
                                <p>Phone: +92-995-667788</p>
                                <p className="break-all">Email: drasrb@hu.edu.pk</p>
                            </div>
                        </div>

                        <div className="space-y-2 border-b border-green-700 md:border-b-0 pb-4 md:pb-0 text-center md:text-left">
                            <h3 className="text-[13px] font-bold text-green-200">Directorate of Undergraduate Studies</h3>
                            <div className="text-xs space-y-1 opacity-90">
                                <p>Phone: +92-995-334455</p>
                                <p className="break-all">Email: admissions.urg@hu.edu.pk</p>
                            </div>
                        </div>

                        <div className="space-y-2 text-center md:text-left">
                            <h3 className="text-[13px] font-bold text-green-200">IT Help Desk</h3>
                            <div className="text-xs space-y-1 opacity-90">
                                <p>Phone: +92-995-9234445</p>
                                <p className="break-all">Email: ithelpdesk@hu.edu.pk</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdmissionFAQs;
