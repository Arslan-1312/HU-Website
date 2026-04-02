import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './features/main/layout/MainLayout';
import PortalLayout from './features/alumni/layout/PortalLayout';
import AdmissionLayout from './features/admission/layout/AdmissionLayout';

// Core Pages
import Home from './features/home/pages/Home';
import Portal from './features/portal/pages/Portal';

// Academic Pages
import VCMessage from './features/academic/pages/VCMessage';
import AboutHU from './features/academic/pages/AboutHU';
import HuVision from './features/academic/pages/HuVision';
import SemesterRules from './features/academic/pages/SemesterRules';
import BIC from './features/academic/pages/BIC';
import Downloads from './features/academic/pages/Downloads';
import ASRB from './features/academic/pages/ASRB';
import QEC from './features/academic/pages/QEC';
import ORIC from './features/academic/pages/ORIC';
import Scholarship from './features/academic/pages/Scholarship';
import Tenders from './features/academic/pages/Tenders';
import ImportantLinks from './features/academic/pages/ImportantLinks';
import Daycare from './features/academic/pages/Daycare';
import DRC from './features/academic/pages/DRC';
import Library from './features/academic/pages/Library';
import CSIT from './features/academic/pages/departments/CS&IT/CS&IT';
import DepartmentDetail from './features/academic/pages/departments/CS&IT/DepartmentDetail';
import HODMessage from './features/academic/pages/departments/CS&IT/HODMessage';

// Admission Pages
import AdmissionHome from './features/admission/pages/AdmissionHome';
import AdmissionShedule from './features/admission/pages/AdmissionShedule';
import AdmissionPolicy from './features/admission/pages/AdmissionPolicy';
import AdmissionLogin from './features/admission/pages/AdmissionLogin';
import AdmissionSignup from './features/admission/pages/AdmissionSignup';
import AdmissionEligibility from './features/admission/pages/AdmissionEligibility';
import AdmissionFAQs from './features/admission/pages/AdmissionFAQs';
import EntryTestDetails from './features/admission/pages/EntryTestDetails';
import HelpDesk from './features/admission/pages/HelpDesk';
import FeeStructure from './features/admission/pages/FeeStructure';
import HostelFacility from './features/admission/pages/HostelFacility';
import TransportFacility from './features/admission/pages/TransportFacility';
import HowToApply from './features/admission/pages/HowToApply';
import MeritList from './features/admission/pages/MeritList';
import GeneralMeritList from './features/admission/pages/GeneralMeritList';
import ProvisionalMeritList from './features/admission/pages/ProvisionalMeritList';
import GeneralBSMeritList from './features/admission/pages/GeneralBSMeritList';
import GeneralMSPHilMeritList from './features/admission/pages/GeneralMSPHilMeritList';
import GeneralPHDMeritList from './features/admission/pages/GeneralPHDMeritList';
import ProvisionalBSMeritList from './features/admission/pages/ProvisionalBSMeritList';
import ProvisionalMSPHilMeritList from './features/admission/pages/ProvisionalMSPHilMeritList';
import ProvisionalPHDMeritList from './features/admission/pages/ProvisionalPHDMeritList';




// Portal & Other Pages
import FacultyProfile from './features/portal/FacultyProfile';
import EmployeeLogin from './features/portal/pages/EmployeeLogin';
import StudentLogin from './features/portal/pages/StudentLogin';
import Jobportal from './features/academic/pages/Jobportal';
import Galleryhome from './features/Gallery/Galleryhome';
import OnlineResult from './features/OnlineResult/OnlineResult';
import ShowResult from './features/OnlineResult/ShowResult';

// Alumni Pages
import AlumniHome from './features/alumni/pages/AlumniHome';
import AlumniBenefits from './features/alumni/pages/AlumniBenefits';
import AlumniSurvey from './features/alumni/pages/AlumniSurvey';
import AlumniAbout from './features/alumni/pages/AlumniAbout';
import AlumniContact from './features/alumni/pages/AlumniContact';
import AlumniCorner from './features/alumni/pages/AlumniCorner';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vc-message" element={<VCMessage />} />
          <Route path="/academic/about-hu" element={<AboutHU />} />
          <Route path="/vision-mission" element={<HuVision />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/semester-rules" element={<SemesterRules />} />
          <Route path="/bic" element={<BIC />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/asrb" element={<ASRB />} />
          <Route path="/qec" element={<QEC />} />
          <Route path="/oric" element={<ORIC />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/FacultyProfile" element={<FacultyProfile />} />
          <Route path="/Galleryhome" element={<Galleryhome />} />
          <Route path="/Tenders" element={<Tenders />} />
          <Route path="/ImportantLinks" element={<ImportantLinks />} />
          <Route path="/Daycare" element={<Daycare />} />
          <Route path="/DRC" element={<DRC />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/OnlineResult" element={<OnlineResult />} />
          <Route path="/OnlineResult/ShowResult" element={<ShowResult />} />
          <Route path="/department/:id" element={<CSIT />} />
          <Route path="/department/:id/details" element={<DepartmentDetail />} />
          <Route path="/department/:id/hod-message" element={<HODMessage />} />
        </Route>

        {/* Admission Portal Routes */}
        <Route element={<AdmissionLayout />}>
          <Route path="/admissions" element={<AdmissionHome />} />
          <Route path="/admissions/schedule" element={<AdmissionShedule />} />
          <Route path="/admissions/eligibility" element={<AdmissionEligibility />} />
          <Route path="/admissions/entry-test" element={<EntryTestDetails />} />
          <Route path="/admissions/HelpDesk" element={<HelpDesk />} />
          <Route path="/admissions/hostels" element={<HostelFacility />} />
          <Route path="/admissions/transport" element={<TransportFacility />} />
          <Route path="/admissions/how-to-apply" element={<HowToApply />} />
          <Route path="/admissions/AdmissionPolicy" element={<AdmissionPolicy />} />
          <Route path="/admissions/FeeStructure" element={<FeeStructure />} />
          <Route path="/admissions/AdmissionFAQs" element={<AdmissionFAQs />} />
          <Route path="/admissions/merit-list" element={<MeritList />} />
          <Route path="/admissions/merit-list/general" element={<GeneralMeritList />} />
          <Route path="/admissions/merit-list/provisional" element={<ProvisionalMeritList />} />
          <Route path="/admissions/merit-list/general/bs" element={<GeneralBSMeritList />} />
          <Route path="/admissions/merit-list/general/ms" element={<GeneralMSPHilMeritList />} />
          <Route path="/admissions/merit-list/general/phd" element={<GeneralPHDMeritList />} />
          <Route path="/admissions/merit-list/provisional/bs" element={<ProvisionalBSMeritList />} />
          <Route path="/admissions/merit-list/provisional/ms" element={<ProvisionalMSPHilMeritList />} />
          <Route path="/admissions/merit-list/provisional/phd" element={<ProvisionalPHDMeritList />} />


        </Route>


        {/* Specialized Portal Routes */}
        <Route element={<PortalLayout />}>
          <Route path="/alumni" element={<AlumniHome />} />
          <Route path="/alumni/about" element={<AlumniAbout />} />
          <Route path="/alumni/benefits" element={<AlumniBenefits />} />
          <Route path="/alumni/survey" element={<AlumniSurvey />} />
          <Route path="/alumni/Contact" element={<AlumniContact />} />
          <Route path="/alumni/Corner" element={<AlumniCorner />} />
        </Route>

        {/* Standalone Login Pages */}
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/Student-login" element={<StudentLogin />} />
        <Route path="/Jobportal" element={<Jobportal />} />
        <Route path="/admissions/login" element={<AdmissionLogin />} />
        <Route path="/admissions/signup" element={<AdmissionSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
