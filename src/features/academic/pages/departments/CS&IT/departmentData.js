export const departmentData = {
    'cs-it': {
        name: 'Computer Science and Information Technology',
        id: 'cs-it',
        introduction: {
            title: 'Introduction',
            content: 'The Department of Computer Science and Information Technology, established in 2002, is one of the oldest and largest departments of the University in terms of student intake and enrollment. At the undergraduate level, the department offers the following programs: 1. BS in Computer Science 2. BS in Software Engineering 3. BS in Artificial Intelligence In Fall 2011, the department launched its graduate program with the introduction of the MS in Computer Science, followed by the PhD in Computer Science in Fall 2012. Both programs are research-oriented and designed to produce highly skilled computing professionals and researchers. Graduate students may specialize in one of the following major research areas: 1. Computer Networks 2. Data Mining 3. Software Engineering 4. Image Processing Students are encouraged to engage in research from the very first semester of their MS or PhD studies. The department is committed to providing an enabling academic and research environment to ensure that students complete their degrees within the prescribed time frame.',
            image: 'assets/dept-csit.jpg', // Local image from university building
            readMoreLink: '/department/cs-it/details'
        },
        stats: [
            { label: 'Students', count: 1092, suffix: '', icon: 'fas fa-user-graduate' },
            { label: 'Academic Programs', count: 3, suffix: '', icon: 'fas fa-book' },
            { label: 'Faculty Members', count: 50, suffix: '', icon: 'fas fa-chalkboard-teacher' }

        ],
        newsEvents: {
            title: 'News & Events',
            items: [
                {
                    title: 'Global, South Korea to Promote Academic Exchange and Collaboration',
                    date: '25 May 2025',
                    isNew: true,
                    link: '#'
                },
                {
                    title: 'Industrial Visit to KPITB Offers Real-World Insights to Hazara University IT Graduates',
                    date: '21 May 2025',
                    isNew: true,
                    link: '#'
                },
                {
                    title: 'A one-day practical session on Digital Logic Design (DLD) was organized by...',
                    date: '15 May 2025',
                    isNew: false,
                    link: '#'
                }
            ]
        },
        announcements: {
            title: 'Announcements',
              image: '/assets/csit-announcement.jpeg', // This image renders right below the title in the sidebar
            items: [] 
          
        },
        sliderImages: [
            {
                url: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                caption: 'Workshop on Skill Set Awareness'
            },
            {
                url: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                caption: 'Computer Lab'
            }

        ],
        importantLinks: {
            title: 'Important Links',
            columns: [
                [
                    { name: "HOD's Message", link: '/department/cs-it/hod-message' },
                    { name: 'BS (Computer Science)', link: '#' },
                    { name: 'BS (Software Engineering)', link: '#' },
                    { name: 'MS (Computer Science)', link: '#' },
                    { name: 'Vision & Mission', link: '/department/cs-it/vision-mission' },
                    { name: 'Industry Linkages', link: '#' },
                    { name: 'Labs', link: '#' }
                ],
                [
                    { name: 'BS (Artificial Intelligence)', link: '#' },
                    { name: 'Ph.D Computer Science', link: '#' },
                    { name: 'MOUs', link: '/department/cs-it/mous' },
                    { name: 'Industry Advisory Board', link: '/department/cs-it/industry-advisory-board' },
                    { name: ' MS,PhD Program Proforma', link: '#' },
                    { name: 'Quality Assurance Agency, HEC', link: '#' },
                    { name: 'Faculty', link: '/department/cs-it/faculty' },
                ]
            ]
        }
    }
};
