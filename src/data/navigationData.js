export const topBarLinks = [
    { name: 'HU Portals', path: '/portal' },
    { name: 'Faculty Profile', path: '/FacultyProfile' },
    { name: 'Alumni Portal', path: '/alumni' },
    { name: 'Admissions', path: '/admissions' },
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
                    { name: 'Telecommunication', path: '/admissions' },
                    { name: 'Physics', path: '/admissions' },
                    { name: 'Chemistry', path: '/admissions' },
                    { name: 'Mathematics', path: '/admissions' },
                    { name: 'Environmental Sciences', path: '/admissions' }
                ]
            },
            {
                name: 'Faculty of Law & Social Sciences',
                subItems: [
                    { name: 'Law', path: '/admissions' },
                    { name: 'Economic', path: '/admissions' },
                    { name: 'Islamic & Religious Studies', path: '/admissions' },
                    { name: 'Management sciences', path: '/admissions' },
                    { name: 'Public Policy & Administration', path: '/admissions' }
                ]
            },
            {
                name: 'Faculty of Arts & Humanities',
                subItems: [
                    { name: 'English', path: '/admissions' },
                    { name: 'Islamic Studies', path: '/admissions' },
                    { name: 'Pakistan Studies', path: '/admissions' },
                    { name: 'Art & Design', path: '/admissions' },
                    { name: 'Education', path: '/admissions' },
                    { name: 'Archaeology', path: '/admissions' }
                ]
            },
            {
                name: 'Faculty of Biological & Health Sciences',
                subItems: [
                    { name: 'Biotechnology & Genetic Engineering', path: '/admissions' },
                    { name: 'Pharmacy', path: '/admissions' },
                    { name: 'Agriculture', path: '/admissions' },
                    { name: 'Biochemistry', path: '/admissions' },
                    { name: 'Botany', path: '/admissions' },
                    { name: 'Microbiology', path: '/admissions' },
                    { name: 'Zoology', path: '/admissions' },
                    { name: 'CRL', path: '/admissions' }
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
                    { name: 'Registrar Office', path: '/admissions' },
                    { name: 'Provost Office', path: '/admissions' },
                    { name: 'Medical Center', path: '/admissions' },
                    { name: 'Controller of Examination', path: '/OnlineResult' },
                    { name: 'Procurment Office', path: '/Tenders' },
                    { name: 'Office of Research Innovation & Communication', path: '/oric' },
                    { name: 'Sir Syed Ahmad Khan Library', path: '/Library' }
                ]
            },
            {
                name: 'ADMINISTRATION',
                subItems: [
                    { name: 'Directorate of Information and Technology', path: '/admissions' },
                    { name: 'Directorate of Administration', path: '/admissions' },
                    { name: 'Directorate of Finance', path: '/admissions' },
                    { name: 'Directorate of University', path: '/admissions' },
                    { name: 'Directorate of Advancement and Aid', path: '/admissions' },
                    { name: 'Student Affairs', path: '/scholarship' }
                ]
            }
        ]
    },
    { name: 'Admissions & Aids', path: '/admissions' },
    { name: 'Scholarship', path: '/scholarship' },
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
    { name: 'Apply Online', path: '/admissions/signup' },
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
];
