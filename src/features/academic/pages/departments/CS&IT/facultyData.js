// This file simulates the data structure that will eventually come from your Odoo database backend.

const hamadShiraziData = {
    id: "4",
    name: 'Syed Hamad Shirazi',
    degree: 'PhD',
    designation: 'Assistant Professor (CS)',
    department: 'Dept. of CS & IT, Hazara University',
    address: 'Dhodial, Mansehra, KPK, Pakistan',
    phone: '+92-321-5577462, +92-301-0006462',
    email: 'syedhamad@hu.edu.pk, syedhamad@gmail.com',
    experienceYears: '10Y+ Years',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', // Placeholder
    about: 'Dr. Syed Hamad Shirazi is an accomplished academic and researcher in the field of Computer Science, with a specialization in Medical Image Processing, Artificial Intelligence (AI), and Machine Learning. He holds a Ph.D. in Computer Science from Hazara University, where his doctoral work focused on the development of intelligent systems for medical image analysis. Dr. Shirazi began his academic career as a Lecturer in Computer Science with the Higher Education Department in 2008, where he served for a decade and received the Best Teacher Award from the Government of Khyber Pakhtunkhwa. In 2018, he joined Hazara University as an Assistant Professor, where he currently serves as the Graduate Coordinator and BS-AI Program Coordinator in the Department of Computer Science. He has published over 50 research articles, with more than 30 in W category journals, and contributed to two book chapters. His research focuses on the application of deep learning and machine learning techniques to medical diagnosis, including blood cell classification, cervical nuclei segmentation, eczema image analysis, and Meibomian Gland Dysfunction quantification.',
    summary: [
        'More than ten years of experience in medical image processing, research and development',
        'Machine Learning, Medical Image Processing, Decision support systems, and Information Retrieval are my current research interests.',
        'Have sound background in the areas of Machine Learning, Deep Learning, Image Processing, Computer vision and Information Retrieval.',
        'Won two Funded Project Grants (NRPU 2022 & HED KPK 2025)',
        'Got Best Teacher Award from Government of KPK (2018)',
        'Got Research Productivity Award from COMSATS (2014)',
        'Got HEC Indigenous Scholarship for PhD (2013)',
        'Got COMSATS Scholarship for MS-CS (2009)',
        'Member Academic Council Hazara University Mansehra (2025)'
    ],
    experiences: [
        { org: 'Hazara University Mansehra', pos: 'Assistant Professor Computer Science', duration: 'November 2018- till date', details: 'Teaching at Masters and Doctorate Level. Supervision of Masters and Doctorate level students. Coordinator BS-AI Program, Coordinator Graduate Program. Member of GRC Committee' },
        { org: 'Higher Education Department KPK', pos: 'Assistant Professor Computer Science', duration: 'April 2008- October 2018', details: 'Worked as Controller exams for ten years. Worked as MIS In-charge for five years' },
        { org: 'CAIR- FAST University Islamabad', pos: 'Data Warehouse Programmer', duration: 'February 2007- April 2008', details: 'Design, Development, and Implementation of Data Warehouse Projects' },
        { org: 'Mile-Stone Software Solutions Islamabad', pos: 'Web Developer', duration: 'September 2005 to January 2007', details: 'Worked on different web-based applications using ASP.NET, C# & SQL Server' }
    ],
    educations: [
        { degree: 'Ph.D. Computer Science', inst: 'Hazara University, Mansehra Pakistan', duration: 'Sep 2012- Aug 2017', details: 'Machine Learning, Image Processing. CGPA: 3.55/4.00' },
        { degree: 'MS. Computer Science', inst: 'COMSATS University, Abbottabad Pakistan', duration: 'Oct 2009- Jul 2011', details: 'Image Processing. CGPA: 3.21/4.00' },
        { degree: 'BS-IT(Hons)', inst: 'IBMS Agriculture University, Peshawar Pakistan', duration: 'Nov 2001-Dec-2005', details: 'Information Technology. CGPA: 3.51/4.00' }
    ]
};

const baseFaculty = [
    {
        id: "1",
        name: "Dr. Mushtaq Ali",
        designation: "ASSOCIATE PROFESSOR",
        degree: "PhD",
        image: "assets/mushtaq-ali.png",
        department: 'Dept. of CS & IT, Hazara University',
        address: 'Mansehra, KPK, Pakistan',
        phone: '+92-000-0000000',
        email: 'mushtaq@hu.edu.pk',
        experienceYears: '10Y+ Years',
        about: 'Dr. Mushtaq Ali is an experienced Associate Professor in the Department of Computer Science & IT.',
        summary: ['Experienced in academic teaching and research governance.'],
        experiences: [],
        educations: []
    },
    {
        id: "2",
        name: "Dr. Noor ul Amin",
        designation: "ASSOCIATE PROFESSOR",
        degree: "PhD",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        department: 'Dept. of CS & IT, Hazara University',
        address: 'Mansehra, KPK, Pakistan',
        phone: '+92-000-0000000',
        email: 'noorulamin@hu.edu.pk',
        experienceYears: '10Y+ Years',
        about: 'Dr. Noor ul Amin is an experienced Associate Professor in the Department of Computer Science & IT.',
        summary: ['Focuses on advanced computing research and development.'],
        experiences: [],
        educations: []
    },
    {
        id: "3",
        name: "Dr. Faisal Bahadur",
        designation: "ASSISTANT PROFESSOR",
        degree: "PhD",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        department: 'Dept. of CS & IT, Hazara University',
        address: 'Mansehra, KPK, Pakistan',
        phone: '+92-000-0000000',
        email: 'faisal@hu.edu.pk',
        experienceYears: '8Y+ Years',
        about: 'Dr. Faisal Bahadur is a dedicated Assistant Professor contributing to both undergraduate and graduate levels.',
        summary: ['Specializes in problem-solving methodologies and software engineering.'],
        experiences: [],
        educations: []
    },
    hamadShiraziData
];

// Combine the real known profiles with generated generic ones to meet the 41 faculty target smoothly.
export const facultyDataList = [
    ...baseFaculty,
    ...Array.from({ length: 37 }, (_, i) => ({
        id: (i + 5).toString(),
        name: `Faculty Member ${i + 5}`,
        designation: i % 3 === 0 ? 'LECTURER' : 'ASSISTANT PROFESSOR',
        degree: i % 3 === 0 ? 'MS' : 'PhD',
        image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        department: 'Dept. of CS & IT, Hazara University',
        address: 'Mansehra, KPK, Pakistan',
        phone: '+92-000-0000000',
        email: `faculty${i+5}@hu.edu.pk`,
        experienceYears: '5Y+ Years',
        about: `This is a placeholder profile for Faculty Member ${i + 5}. Once connected to Odoo, this entire dataset will be pulled directly from the backend database dynamically without requiring source code modifications.`,
        summary: ['Dedicated to teaching and engaging with academic advancements in computer science.'],
        experiences: [
            { org: 'Hazara University Mansehra', pos: i % 3 === 0 ? 'Lecturer' : 'Assistant Professor', duration: '2020- till date', details: 'Engaged in teaching core subjects.' }
        ],
        educations: [
            { degree: i % 3 === 0 ? 'MS Computer Science' : 'Ph.D. Computer Science', inst: 'University Name', duration: '2015-2019', details: 'Relevant course studies.' }
        ]
    }))
];
