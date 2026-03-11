import React from 'react';
import Sidebar from '../../../components/Sidebar';

const QEC = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
      {/* Using 'flex-col' for mobile and 'lg:flex-row' for desktop 
          to ensure the sidebar and content align correctly.
      */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Main Content Area */}
        <section className="flex-1 py-10">
          <h2 className="text-green-900 text-3xl font-bold mb-6">
            Quality Enhancement Cell (QEC)
          </h2>

          <div className="space-y-6 text-gray-800">
            {/* Introduction Section */}
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Introduction</h3>
              <p className="leading-relaxed text-justify">
                Quality Enhancement Cell at University of Haripur has been established on December 04, 2012 under the direction of HEC. The prime objective of the cell is to practice evaluative measures to achieve excellence in performance in all areas of quality education. Quality Enhancement Cell has developed and implemented Internal Quality Assurance (IQA) process specified by Higher Education Commission. It is comprised of Self Assessment reports prepared by various departments of university. Other exercises like teachers evaluation along with the Student course evaluation has been carried out to meet Quality practices within the institution. External Quality Assurance (EQA) has also been successfully carried out like initiation of Accreditation process of various programs along with the implementation of QA practices in affiliated colleges. These practices help institution to realize its mission and to achieve its goal.
              </p>
            </div>

            {/* Vision Section */}
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Vision</h3>
              <p className="leading-relaxed">
                We are committed to excellence in education to become an institution of choice, contributing towards human development.
              </p>
            </div>

            {/* Mission Section */}
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Mission</h3>
              <p className="leading-relaxed">
                To achieve and maintain high standards in every sphere of teaching and research through affordable, valued and skill based education.
              </p>
            </div>

            {/* Strategic Goals Section */}
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Strategic Goals</h3>
              <p className="mb-3">To advance the mission, The University of Haripur will:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>Respond to identified needs in the region and country and offer academic and technological programs, of high quality.</li>
                <li>Seek and create opportunities to enhance student services, student life and development.</li>
                <li>Consider student's perspectives, needs and provide support and recognition.</li>
                <li>Foster the free exchange of ideas in an ethical inter-dependent, and diverse community of faculty, staff, students, and alumni.</li>
                <li>Exercise accountability to our stakeholders, uphold our integrity and endorse fair practice.</li>
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

export default QEC;
