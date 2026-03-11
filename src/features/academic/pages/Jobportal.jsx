import React from 'react';

const JobPortal = () => {
  // Data for the second (IT/Medical) section
  const itMedicalJobs = [
    { id: 1, title: 'Lecturer (Information Technology) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 2, title: 'Lecturer (Mathematics) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 3, title: 'Lecturer (Food Science & Technology) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 4, title: 'Lecturer (Public Health) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 5, title: 'Lecturer (Microbiology) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 6, title: 'Lecturer (Medical Lab Technology) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 7, title: 'Lecturer (Doctor of Veterinary Medicine) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 8, title: 'Lecturer (Radiology Technology) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 9, title: 'Lecturer (Dental Technology) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 10, title: 'Lecturer (Anesthesia Technology) (Visiting Basis)', posted: '30 Jan 2026' },
    { id: 11, title: 'Lecturer (Surgical Technology) (Visiting Basis)', posted: '30 Jan 2026' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-green-800 to-green-600 text-white p-4 shadow-md border-b-4 border-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo Image */}
            <img
              src="assets/logo.png"
              alt="HU Logo"
              className="w-14 h-14 object-contain bg-white rounded-full p-1 shadow-sm"
              loading="lazy"
            />
            <h1 className="text-2xl font-bold tracking-tight">Hazara University Job Portal System</h1>
          </div>
          <div className="hidden md:block font-semibold uppercase tracking-widest text-sm">
            Advertisement
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Welcome to HU Job Portal System</h2>

        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm mb-10">

          {/* SECTION 1: ECONOMICS */}
          <div className="flex justify-between items-center border-b-2 border-gray-100 pb-2 mb-4">
            <h3 className="text-lg font-bold text-gray-700">Walk In Interview For Hiring On Visiting Basis--</h3>
            <span className="text-sm text-gray-500 font-medium">(Posted On: 09 Feb 2026)</span>
          </div>

          <div className="overflow-x-auto mb-4 border border-gray-200 rounded-sm">
            <table className="w-full border-collapse text-sm min-w-[500px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-300 p-2 text-left w-16">Sr#</th>
                  <th className="border-b border-gray-300 p-2 text-left">Job Title</th>
                  <th className="border-b border-gray-300 p-2 text-center w-24">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-2 text-center border-r border-gray-100">1</td>
                  <td className="p-2 border-r border-gray-100">Lecturer (Economics) (Visiting Basis)</td>
                  <td className="p-2 text-center">
                    <button className="text-blue-600 hover:underline">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-sm text-gray-700 space-y-3 mb-6">
            <p>Complete Advertisement can also be downloaded from following link:</p>
            <p className="text-blue-600 underline cursor-pointer">Download Advertisement</p>
            <p>The Hazara University is intends to hire/engage highly skilled candidates as Graduate Assistant (to teach the class) for semester spring-2026 in Hazara University. Walk in interview/demonstration will be conducted at the office of Chairperson, Department of Economics, Hazara University on <strong>February 15, 2026 (Monday) at 10:00 AM</strong>.</p>

            <p className="font-bold">REQUIREMENTS:</p>
            <ol className="list-decimal ml-6 space-y-1">
              <li>Only current students of PhD/MS/M.Phil. of the concerned Department of Hazara University may apply.</li>
              <li>Interested candidates are required to bring original educational testimonials along with a set of attested photocopies and updated Curriculum Vitae (CV).</li>
              <li>University reserves the right to not to fill any post without showing any reason or increase or decrease the number of posts.</li>
              <li>Terms & Condition of the job will be conveyed at the time of interview.</li>
            </ol>
          </div>

          {/* Contact 1 */}
          <div className="text-center text-xs text-gray-800 font-semibold mb-10 border-t pt-4">
            <p>Registrar, Hazara University</p>
            <p>Registrar Office, The Hazara University, Dhodial Mansehra, Khyber Pakhtunkhwa, Pakistan.</p>
            <p>Phone No: 0995-897643, email: hr@hu.edu.pk</p>
          </div>

          {/* SECTION 2: IT / MEDICAL */}
          <div className="flex justify-between items-center border-b-2 border-gray-100 pb-2 mb-4 mt-12">
            <h3 className="text-lg font-bold text-gray-700">Walk In Interview For Hiring On Visiting Basis</h3>
            <span className="text-sm text-gray-500 font-medium">(Posted On: 30 Jan 2026)</span>
          </div>

          <div className="overflow-x-auto mb-4 border border-gray-200 rounded-sm">
            <table className="w-full border-collapse text-sm min-w-[500px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-300 p-2 text-left w-16">Sr#</th>
                  <th className="border-b border-gray-300 p-2 text-left">Job Title</th>
                  <th className="border-b border-gray-300 p-2 text-center w-24">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {itMedicalJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="p-2 text-center border-r border-gray-100">{job.id}</td>
                    <td className="p-2 border-r border-gray-100">{job.title}</td>
                    <td className="p-2 text-center">
                      <button className="text-blue-600 hover:underline">Detail</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-sm text-gray-700 space-y-3">
            <p>Complete Advertisement can also be downloaded from following link:</p>
            <p className="text-blue-600 underline cursor-pointer">Download Advertisement</p>
            <p>Hazara University is looking for potential candidates with soundtrack records for the following discipline as Lecturer on visiting basis for Semester Spring-2026 extendable on satisfactory performance. The Demonstration/Interview will be conducted at the University of Haripur as per given schedule.</p>

            <p className="font-bold uppercase">Requirements:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Candidates must bring original documents (DMCs, Certificates, Degrees, Transcripts, Domicile, CNIC, Experience Certificates, etc.) along with a set of attested photocopies and updated Curriculum Vitae (CV) on above mentioned date and time.</li>
              <li>Condition of "no 3rd division" shall be relaxed provided that the candidate holds a higher degree viz PhD or equivalent degree with not more than one 3rd division in entire academic career.</li>
              <li>University reserves the right to not to fill any post without showing any reason or increase or decrease the number of posts.</li>
              <li>The degree obtained under the Semester System with a CGPA of 3.00 out of 4.0 and the degree obtained under the Annual system with 60% marks shall be considered as a first-class degree.</li>
              <li>No TA/DA will be paid for demonstration/interview.</li>
              <li>The service matters of the appointed individual shall be governed under terms & conditions mentioned in his/her appointment letter.</li>
              <li>Error/omission (if any) will be rectified by the University as per the rules in vogue.</li>
            </ol>
          </div>

          {/* Contact 2 */}
          <div className="mt-10 text-center text-xs text-gray-800 font-semibold border-t pt-4">
            <p>Registrar, Hazara University</p>
            <p>Registrar Office, The Hazara University, Dhodial Mansehra, Khyber Pakhtunkhwa, Pakistan.</p>
            <p>Phone No: 0995-897643, email: hr@hu.edu.pk</p>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-green-700 text-white text-center p-3 font-semibold shadow-inner">
        <p className="text-sm">Hazara University Mansehra Allrights Reserved</p>
      </footer>

    </div>
  );
};

export default JobPortal;
