import banner1 from '../assets/banner 3.png';
import msAdmission from '../assets/banner 3.png';
import bsAdmission from '../assets/banner 3.png';
import deptCsit from '../assets/banner 3.png';
import banner3 from '../assets/banner 3.png';

export const admissionConfig = {
    semester: "Spring",
    year: "2026",
    phase: "Phase I"
};

export const phase2Schedule = [
    { activity: "Last Date of Online Application Submission", date: "8th February 2026" },
    { activity: "Entry Test for all MS/M.Phil/MBA & Ph.D Programs (10:30 AM to 12:30 PM) at HU Campus", date: "9th February 2026" },
    { activity: "Result Announcement on HU website (Afternoon)", date: "11th February 2026" },
    { activity: "Interview of only Test qualified candidates in the respective department", date: "12th February to 13th February 2026" },
    { activity: "Display of Merit List and Fee Submission", date: "13th February 2026" },
    { activity: "Orientation", date: "12th February to 13th February 2026" },
    { activity: "Commencement of Classes", date: "16th February 2026" },
];

export const phase2SecondarySchedule = [
    { activity: "Last Date of Online Application Submission", date: "On First Come First Serve Basis in selected programs" },
    { activity: "Orientation, Document Submission, Document Verification, Admission Confirmation", date: "12th February to 13th February 2026" },
    { activity: "Commencement of Classes", date: "16th February 2026" },
];

export const admissionHeaderData = {
    deadlineText: "Admissions are open till 15 March 2026"
};
const defaultLinks = [
    { text: "Programs Offered", path: "/admissions/programs" },
    { text: "Eligibility Criteria", path: "/admissions/eligibility" },
    { text: "Fee Structure", path: "/admissions/feestructure" },
    { text: "Application Fee Bank & Details", path: "/admissions/how-to-apply" }
];

export const admissionCategories = [
    {
        title: "PHD PROGRAMS",
        image: banner1,
        links: defaultLinks
    },
    {
        title: "MS/MPHIL PROGRAMS",
        image: msAdmission,
        links: defaultLinks
    },
    {
        title: "BS PROGRAMS",
        image: bsAdmission,
        links: defaultLinks
    },
    {
        title: "Lateral Entry for BS PROGRAMS",
        image: deptCsit,
        links: defaultLinks
    },
    {
        title: "DIPLOMA PROGRAMS",
        image: banner3,
        links: defaultLinks
    },
    {
        title: "VIDEO TUTORIAL",
        isYoutube: true,
        videoUrl: "https://youtu.be/W20y8Kiq6J8",
        description: "Watch our step-by-step video guide to learn how to successfully navigate the Hazara University online admission portal, fill out your application, and submit your registration.",
        links: []
    }
];

export const eligibilitySections = [
    { id: 'bs-programs', title: "Eligibility Criteria (BS Programs)" },
    { id: 'graduate-programs', title: "Eligibility Criteria (MS/MPhil/M.Sc (Hons) Programs)" },
    { id: 'phd-programs', title: "Eligibility Criteria (Ph.D Programs)" },
    { id: 'diploma-programs', title: "Eligibility Criteria (Diploma & Certificate Programs)" },
    { id: 'fifth-semester', title: "Eligibility Criteria (Lateral Entry for  BS Programs)" }
];

const defaultMCQs = { english: "40 MCQ", analytical: "30 MCQ", math: "30 MCQ" };
const disciplines = [
    "Agronomy", "Computer Science", "English", "Entomology", "Environmental Sciences",
    "Food Science & Technology", "Forestry", "Geology", "Horticulture", "Mathematics",
    "Medical Laboratory Science", "Microbiology", "Food & Dairy Microbiology",
    "Plant Breeding & Genetics", "Psychology", "Soil Science", "Climate Change",
    "Chemistry", "Biochemistry", "Zoology", "Public Policy & Governance",
    "Sports Science & Physical Education", "Economics", "Statistics", "Physics",
    "Accounting & Finance", "Public Health", "Wildlife Management"
];

export const paperCompositionTable = disciplines.map(discipline => ({
    discipline,
    ...defaultMCQs
}));

export const focalPersonsList = [
    { dept: "Food Science & Technology", name: "Dr. Inam-ullah", contact: "0336-6607386", email: "inamullah.fst@hu.edu.pk" },
    { dept: "Environmental Science", name: "Dr. Naureen Aurangzeb", contact: "0333-9275401 0995-920655", email: "naureen@hu.edu.pk" },
    {
        dept: "Plant Breeding & Genetics",
        persons: [
            { name: "Dr. Naushad Ali", contact: "0300-5167604 0995-920653", email: "naushadali@hu.edu.pk" },
            { name: "Dr. Sajid Fiaz", contact: "0300-6015869 0995-920653", email: "sfiaz@hu.edu.pk" }
        ]
    },
    { dept: "Islamic & Religious Studies", name: "Dr. Muhammad Ikramullah", contact: "0345-2582375 0995-920664", email: "ikramullah@hu.edu.pk" },
    { dept: "Horticulture", name: "Dr. Raheem Shahzad", contact: "03339289464 0995-920652", email: "raheem.shahzad@hu.edu.pk" },
    { dept: "Agronomy", name: "Mr. Ashraf Hussain", contact: "0347-5664380", email: "ashraf.hussain@hu.edu.pk" },
    { dept: "Earth Sciences", name: "Dr. Muhammad Usman Azhar", contact: "0321-4718445 0995-920650", email: "musmanazhar@hu.edu.pk" },
    {
        dept: "Management Sciences",
        persons: [
            { name: "Mr. Malik Usman (BBA)", contact: "0334-9073955 0995-920663", email: "management@hu.edu.pk" },
            { name: "Mr. Malik Usman (BS Accounting & Finance)", contact: "0334-9073955 0995-920663", email: "management@hu.edu.pk" },
            { name: "Mr. Malik Usman (BS Banking & Finance)", contact: "0334-9073955 0995-920663", email: "management@hu.edu.pk" },
            { name: "Mr. Awais (BS Business Analytics)", contact: "03409726009 0995-920663", email: "management@hu.edu.pk" },
            { name: "Dr. Mahnoor Farooq (BS Public Administration and Governance)", contact: "031859-80008 0995-920663", email: "management@hu.edu.pk" },
            { name: "Mr. Awais (BS Tourism and Hospitality Management)", contact: "03409726009 0995-920663", email: "management@hu.edu.pk" },
            { name: "Prof. Dr. Abdul Majid (MS/MPhil PhD)", contact: "0345-9887901 0995-920663", email: "management@hu.edu.pk" }
        ]
    },
    {
        dept: "Pure and Applied Mathematics",
        persons: [
            { name: "Dr. Hashim (BS Mathematics)", contact: "0313-0557550 0995-920617", email: "hashim@hu.edu.pk" },
            { name: "Dr. Waseem Sikandar (M.Phil, PhD Mathematics)", contact: "03315743057 0995-920617", email: "waseem.sikandar@hu.edu.pk" },
            { name: "Dr. Muhammad Ijaz (BS Statistics, M.Phil,)", contact: "0332-6244733 0995-920643", email: "m.ijaz@hu.edu.pk" }
        ]
    }
];

export const transportRoutes = [
    { id: 1, route: "Abbottabbad", fee: "25,770/-", status: "Functional" },
    {
        id: 2, section: "Balakot", routes: [
            { name: "Balakot 1", fee: "12,080/-", status: "Functional" },
            { name: "Jaba", fee: "12,080/-", status: "Functional" },
            { name: "balakot 3", fee: "12,080/-", status: "Functional" },
            { name: "balakot 4", fee: "12,080/-", status: "Functional" },
        ]
    },
    {
        id: 3, section: "Mansehra", routes: [
            { name: "Main city", fee: "12,080/-", status: "Functional" },
            { name: "Atter Shisha", fee: "12,080/-", status: "Functional" },
            { name: "Jaba", fee: "12,080/-", status: "Functional" },
        ]
    }
];

export const hostelData = {
    title: "Hostel Facility",
    description: "Hazara University provides separate hostel facilities for male and female students with all basic amenities.",
    contactInfo: {
        male: { name: "Sajjad Afridi", role: "Assistant Provost", contact: "0995-232134", email: "aproyost@hu.edu.pk", room: "Room # 1001, ground floor Examination Block" },
        female: { name: "Sajjad Afridi", role: "Assistant Provost", contact: "0995-345678", email: "provost@hu.edu.pk", room: "Room # 302, 2nd floor Admin Block" }
    },
    documents: [
        { name: "Hostel Form", type: "Word", link: "#" },
        { name: "Undertaking from Parents", type: "Word", link: "#" },
        { name: "Undertaking from Students", type: "Word", link: "#" },
        { name: "Medical Fitness Certificate", type: "Word", link: "#" },
        { name: "Hostel Fee Structure", type: "PDF", link: "#" },
        { name: "Hostel Policy", type: "Word", link: "#" },
        { name: "Hostel Code and Conduct", type: "Word", link: "#" },
    ]
};

export const meritAlert = {
    enabled: true,
    title: "Announcement",
    links: [
        { text: "Entry Test Date: 20 March 2026", path: "/admissions/entry-test" },
        { text: "1st Merit List Announcement: 25 March 2026", path: "/admissions/merit-list" },
        { text: "2nd Merit List Announcement: 01 April 2026", path: "/admissions/merit-list" }
    ]
};
export const meritDepartments = [
    "BS Computer Science",
    "BS Software Engineering",
    "BS Information Technology",
    "BS Mathematics",
    "BS Physics",
    "BS Chemistry",
    "BS Zoology",
    "BS Botany",
    "BS English",
    "BS Economics",
    "BS Chemistry",
    "BS Zoology",
    "BS Botany",
    "BS English",
    "BS Economics"
];
