export const topBarLinks = [
    { name: 'Faculty Profile', path: '/FacultyProfile' },
    { name: 'Alumni Portal', path: '/alumni' },
    
];

export const mainNavLinks = [
    { name: 'Home', path: '/' },
    {
        name: 'Academics',
        dropdown: [
            {
                name: 'Faculty of Natural & Computational Sciences',
              
                subItems: [
                    { name: 'Computer Science and Information Technology', path: '/department/cs-it' },
                    { name: 'Telecommunication', path: '/' },
                    { name: 'Physics', path: '/' },
                    { name: 'Chemistry', path: '/' },
                    { name: 'Mathematics', path: '/' },
                    { name: 'Environmental Sciences', path: '/' }
                ]
            },
            {
                name: 'Faculty of Law & Social Sciences',
                subItems: [
                    { name: 'Law', path: '/' },
                    { name: 'Economic', path: '/' },
                    { name: 'Islamic & Religious Studies', path: '/' },
                    { name: 'Management sciences', path: '/' },
                    { name: 'Public Policy & Administration', path: '/' }
                ]
            },
            {
                name: 'Faculty of Arts & Humanities',
                subItems: [
                    { name: 'English', path: '/' },
                    { name: 'Islamic Studies', path: '/' },
                    { name: 'Pakistan Studies', path: '/' },
                    { name: 'Art & Design', path: '/' },
                    { name: 'Education', path: '/' },
                    { name: 'Archaeology', path: '/' }
                ]
            },
            {
                name: 'Faculty of Biological & Health Sciences',
                subItems: [
                    { name: 'Biotechnology & Genetic Engineering', path: '/' },
                    { name: 'Pharmacy', path: '/' },
                    { name: 'Agriculture', path: '/' },
                    { name: 'Biochemistry', path: '/' },
                    { name: 'Botany', path: '/' },
                    { name: 'Microbiology', path: '/' },
                    { name: 'Zoology', path: '/' },
                    { name: 'CRL', path: '/' }
                ]
            }
        ]
    },
    {
        name: 'Administration',
        dropdown: [
            {
                name: 'OFFICE',
                subItems: [
                    { name: 'Vice Chanceller Secretariate', path: '/vc-message' },
                    { name: 'Registrar Office', path: '/' },
                    { name: 'Provost Office', path: '/' },
                    { name: 'Medical Center', path: '/' },
                    { name: 'Controller of Examination', path: '/' },
                    { name: 'Procurment Office', path: '/' },
                    { name: 'Office of Research Innovation & Communication', path: '/oric' },
                    { name: 'Sir Syed Ahmad Khan Library', path: '/Library' }
                ]
            },
            {
                name: 'ADMINISTRATION',
                subItems: [
                    { name: 'Directorate of Information and Technology', path: '/' },
                    { name: 'Directorate of Administration', path: '/' },
                    { name: 'Directorate of Finance', path: '/' },
                    { name: 'Directorate of University', path: '/' },
                    { name: 'Directorate of Advancement and Aid', path: '/' },
                    { name: 'Student Affairs', path: '/scholarship' }
                ]
            }
        ]
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Scholarships', path: '/scholarship' },
    {
        name: 'Journals',
        dropdown: [
            { name: 'HU Journal of Science', path: '/ImportantLinks' },
            { name: 'HU Journal of Social Sciences', path: '/ImportantLinks' },
            { name: 'Research Publications', path: '/ImportantLinks' }
        ]
    },
    { name: 'ORIC', path: '/oric' },
    { name: 'QEC', path: '/qec' },
    { name: 'BIC', path: '/bic' },
    { name: 'ASRB', path: '/asrb' },
];

export const admissionTopLinks = [
    { name: 'Admission Policy', path: '/admissions/AdmissionPolicy' },
    { name: 'AdmissionFAQs', path: '/admissions/AdmissionFAQs' },
    { name: 'How To Apply', path: '/admissions/how-to-apply' },
    { name: 'Apply Online', path: '/admissions/login' },
];

export const admissionNavLinks = [
    { name: 'Programs offered', path: '/admissions' },
    { name: 'Admission Schedule', path: '/admissions/schedule' },
    { name: 'Eligibility Criteria', path: '/admissions/eligibility' },
    { name: 'Fee Structure', path: '/admissions/FeeStructure' },
    { name: 'Transport', path: '/admissions/transport' },
    { name: 'Hostels', path: '/admissions/hostels' },
    { name: 'Help Desk', path: '/admissions/HelpDesk' },
    { name: 'Entry Test', path: '/admissions/entry-test' },
    { name: 'Merit List', path: '/admissions/merit-list' },

];

