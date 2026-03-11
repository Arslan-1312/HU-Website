import React from 'react';
import Sidebar from '../../../components/Sidebar';

const ORIC = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Main Content Area */}
        <section className="flex-1 py-10">
          <h2 className="text-green-900 text-3xl font-bold mb-6">
            Office of Research, Innovation and Commercialization (ORIC)
          </h2>

          <div className="space-y-6 text-gray-800">
            {/* Vision & Mission Section */}
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Vision & Mission</h3>
              <h4 className="font-bold text-gray-700 mb-2">Mission</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>Restoring hope through knowledge transfer and building community through technology commercialization.</li>
                <li>Promote need based research in UoH and disseminating it to masses.</li>
                <li>Formulate collaborative ventures by strengthening university-industry linkages.</li>
                <li>Strengthening research through knowledge sharing, trainings and curricula development.</li>
                <li>Promote entrepreneurship by providing applied and practical knowledge.</li>
                <li>Transfer of technology for developing strong and long term bonds with capacity building.</li>
              </ul>
            </div>

            {/* Vision Section */}
            <div>
              <h4 className="font-bold text-gray-700 mb-2">Vision</h4>
              <p className="leading-relaxed italic">
                "Delivering technology through innovative knowledge"
              </p>
            </div>

            {/* Terms of Reference Section */}
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Terms of Reference</h3>
              <p className="mb-3 italic">The Terms of Reference for ORIC are as follows:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
                <li>Supporting the university's strategic research directions and policies.</li>
                <li>Increasing and diversifying external research funding.</li>
                <li>Improving recruitment and retention of top faculty.</li>
                <li>Improving integration of research and education at all levels of the university.</li>
                <li>Improving translation of research into the public benefit.</li>
                <li>Strengthening university-industry relationships.</li>
                <li>Promoting entrepreneurship, technology-transfer and commercialization activities that energize and support the local and national economy.</li>
                <li>Promoting and enhancing cross-cutting and multi-disciplinary research initiatives.</li>
              </ul>
            </div>
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

export default ORIC;
