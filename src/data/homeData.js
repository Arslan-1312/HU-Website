import { Link, Links } from "react-router-dom";

export const heroSlides = [
    {
        image: "assets/Slider image 1.png",
        title: "Excellence in Higher Education",
        description: "Hazara University offers a diverse range of programs designed to foster leadership, innovation, and academic growth.",
    },
    {
        image: "assets/Slider Image 2.png",
        title: "State-of-the-Art Research",
        description: "Our campus provides world-class laboratory facilities and a vibrant research culture for the next generation of scholars.",
    },
     {
        image: "assets/Slider image 8.png",
        title: "Vice Chancellor Honors Dean for Academic Excellence CS & IT Department ",
        description: "In a prestigious ceremony held at Hazara University, Mansehra, the Worthy Vice Chancellor presented an Award of Appreciation to Dr. Sajjad Ahmad (Dean, CS & IT Department). ",
    },
    {
        image: "assets/Slider Image 4.jpeg",
        title: "Annual Prize Distribution Ceremony ",
        description: "Participation of Vice Chancellor Hazara University, Prof. Dr. Ikramullah Khan in Annual Prize Distribution Ceremony of Shama Public School and College Abbottabad as a Chief Guest on February 12th, 2026",
    },
    {
        image: "assets/Slider Image 3.jpeg",
        title: "Academic Excellence Amidst the Serene Landscapes",
        description: "A beacon of higher education nestled in the scenic Dhodial region, offering a perfect environment for focused learning.",
    },
    {
        image: "assets/Slider Image 5.jpeg",
        title: "MoU signing ceremony  ",
        description: "MoU signing ceremony between Hazara University and The Smart School College Doraha Campus, Mansehra, was held on March 9, 2026, in the Conference Room of the Vice Chancellor’s Secretariat. ",
    },
    {
        image: "assets/Slider Image 6.jpeg",
        title: "Youth Leadership Convention 2.0 ",
        description: "Hazara University hosted the Youth Leadership Convention 2.0 in collaboration with the Youth Association of Pakistan and the Department of Law on 30–31 December 2025. . ",
    },
    {
        image: "assets/Slider Image 7.jpeg",
        title: "VC Cabinet Meeting ",
        description: "The Vice Chancellor (VC) is meeting with the cabinet to discuss strategic initiatives and policies aimed at enhancing academic quality, research, and overall university performance. Key focus areas include institutional growth and innovation. ",
    },
];

export const promoBanners = [
    { src: "assets/BAnner 1.png", alt: "University Banner 1" },
    { src: "assets/banner 2.png", alt: "University Banner 2" },
    { src: "assets/banner 3.png", alt: "University Banner 3" },
];

export const universityStats = [
    { icon: "fas fa-university", count: 50, suffix: "", label: "Departments" },
    { icon: "fas fa-graduation-cap", count: 100, suffix: "+", label: "Programs" },
    { icon: "fas fa-chalkboard-teacher", count: 500, suffix: "+", label: "Faculty" },
    { icon: "fas fa-user-graduate", count: 12000, suffix: "+", label: "Students" },
];

export const inspirationalQuote = {
    text: "Destroying any nation does not require the use of atomic bombs or the use of long range missiles. It only requires lowering the quality of education and allowing cheating in the examinations by the students. Patients die at the hands of such doctors. Buildings collapse at the hands of such engineers. Money is lost at the hands of such economists & accountants. Humanity dies at the hands of such religious scholars. Justice is lost at the hands of such judges... The collapse of education is the collapse of the nation.",
    source: "Written at the entrance gate of UNISA, South Africa."
};

export const vcMessage = {
    image: "assets/VC.png",
    paragraphs: [
        "Welcome to Hazara University. A gateway to learning about our dedication to sustainable development, innovation, and community empowerment...",
        "As the Vice Chancellor, I share our mission and achievements since our inception in 2001. We strive for excellence in every academic endeavor..."
    ]
};

export const importantHighlights = [
    { text: "FIFTH SUSTAINABILITY REPORT, HAZARA UNIVERSITY 2025", path: "/downloads" },
    { text: "Hazara University Job Portal", path: "/Jobportal" },
    { text: "Hazara University Directorate of Academic", path: "/semester-rules" },
    { text: "Hazara University Controller of Examinations", path: "/OnlineResult" },
    { text: "Hazara University Directorate of Student Affairs", path: "/scholarship" },
    { text: "HEC Digital Library", path: "/Library" },
    { text: "Hazara University Student Service Center", path: "/admissions/HelpDesk" }
];

export const newsEvents = [
    { month: "NOV", day: "12", text: "Hazara University wins the Grand Innovation Challenge organized by HEC Islamabad..." },
    { month: "NOV", day: "09", text: "Inauguration ceremony of the newly built state-of-the-art Research Laboratory at the main campus..." },
    { month: "NOV", day: "05", text: "International Conference on Sustainable Technologies set to be hosted by HU next week..." },
    { month: "NOV", day: "01", text: "Vice Chancellor meets with the Federal Education Minister to discuss funding and developmental projects..." },
    { month: "OCT", day: "28", text: "Department of Management Sciences wraps up its 3-day extensive entrepreneurship bootcamp..." },
    { month: "OCT", day: "24", text: "Final match of Intervarsity Zone C Volleyball Championship was played between Abdul Wali Khan University Mardan..." },
    { month: "OCT", day: "20", text: "Visit of Honorable Vice Chancellor Hazara University Prof. Dr. Ikramullah Khan to the site..." },
    { month: "OCT", day: "15", text: "Hazara University announces the commencement of Fall Semester examinations from next month..." },
    { month: "OCT", day: "12", text: "A seminar on 'Modern Research Methodologies' was organized by the Department of CS & IT..." },
    { month: "OCT", day: "08", text: "The University library has added 500+ new research journals to the digital repository..." }
];

export const marqueeLinks = [
    { text: "Merit list for BS / M.Phil / PhD, Diploma Program Spring 2026", path: "/OnlineResult" },
    { text: "Welcome to Hazara University Mansehra - Excellence in Education", path: "/vc-message" }
];

export const bottomLinksData = [
    { icon: "fas fa-exclamation", title: "ABOUT HU", filled: true, path: "/academic/about-hu" },
    { icon: "fas fa-eye", title: "VISION & MISSION", filled: true, path: "/vision-mission" },
    { icon: "fas fa-globe", title: "Internet Access Perfoma", filled: true, path: "https://docs.google.com/forms/d/1juEIHLYX2IaUC1kb2V3Kyd8pCnqpUnaUrhxeM4wATI8/viewform?edit_requested=true" },
    { icon: "fas fa-bus", title: "HU TRANSPORT", filled: true, path: "/admissions/transport" },
    { icon: "fas fa-home", title: "HU HOSTELS", filled: true, path: "/admissions/hostels" },
];

export const homeAlert = {
    enabled: true,
    title: "Job Opportunities",
    links: [
        { text: "SITUATION VACANT Adv. No. 01/2026", path: "/Jobportal" },
        { text: "SITUATION VACANT Adv. No. 02/2026", path: "/Jobportal" }
    ]
};
