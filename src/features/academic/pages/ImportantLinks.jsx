import React from 'react';
import Sidebar from '../../../components/Sidebar';

const ImportantLinks = () => {
  // Official websites data extracted from the provided image
  const officialWebsites = [
    "Higher Education Commission of Pakistan",
    "Higher Education Commission Digital Library for Hazara University",
    "Government of Khyber Pakhtunkhwa Official Website",
    "Government of Pakistan Official Website",
    "Federal Public Service Commission of Pakistan",
    "Khyber Pakhtunkhwa Public Service Commission",
    "Centre of Excellence for CPEC (China-Pakistan Economic Corridor)",
    "National Computing Education Accreditation Council (NCEAC)",
    "National Agriculture Education Accreditation Council (NAEAC)",
    "National Business Education Accreditation Council (NBEAC)",
    "Pakistan Council for Science and Technology",
    "Pakistan Engineering Council",
    "Pakistan Science Foundation (PSF)"
  ];

  return (
    <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Main Content Area */}
        <section className="flex-1 py-10">
          <h2 className="text-green-900 text-3xl font-bold mb-8">
            List of Important Official Websites
          </h2>
          
          <div className="space-y-0 border border-gray-200 rounded-md overflow-hidden">
            {officialWebsites.map((website, idx) => (
              <div 
                key={idx} 
                className={`flex items-center p-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer group`}
              >
                {/* Arrow Icon based on UI */}
                <div className="mr-4 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className="fas fa-arrow-right text-xs"></i>
                  </div>
                </div>
                
                <span className="text-blue-600 hover:underline font-medium text-sm lg:text-base">
                  {website}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar Area */}
        <aside className="lg:w-1/3">
          <Sidebar />
        </aside>

      </div> 
    </div>
  );
};

export default ImportantLinks;
