import React from 'react';
import Sidebar from '../../../components/Sidebar';

const Scholarship = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
      {/* Using 'flex-col' for mobile and 'lg:flex-row' for desktop 
          to ensure the sidebar and content align correctly.
      */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Main Content Area */}
        <section className="flex-1 py-10">
          <h2 className="text-green-900 text-3xl font-bold mb-6">
            Scholarships/Financial Assistance
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
            {[
              "Sibling fee reimbursement to real brother sisters",
              "Disable fee concession",
              "Orphan fee concession",
              "HEC Merit and Need Base Scholarship",
              "PM Laptop scheme",
              "Pakistan Bait ul Maal Scholarship",
              "Zakat Scholarship",
              "Sadaat Scholarship",
              "PPDA and many other private Scholarship",
            ].map((scholarship, idx) => (
              <li key={idx} className="hover:text-green-700 transition-colors">
                {scholarship}
              </li>
            ))}
          </ul>
        </section>

        {/* Sidebar Area */}
        <aside className="lg:w-1/3">
          <Sidebar />
        </aside>

      </div> 
    </div>
  );
};

export default Scholarship;
