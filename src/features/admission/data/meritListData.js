const generalBSList = [
    { name: "BS Computer Science", link: "/path/to/bs-cs-general.pdf" },
    { name: "BS Software Engineering", link: "/path/to/bs-se-general.pdf" },
    { name: "BS Information Technology", link: "/path/to/bs-it-general.pdf" },
    { name: "BS Mathematics", link: "/path/to/bs-math-general.pdf" },
    { name: "BS Physics", link: "/path/to/bs-physics-general.pdf" },
    { name: "BS Chemistry", link: "/path/to/bs-chem-general.pdf" },
    { name: "BS Zoology", link: "/path/to/bs-zoo-general.pdf" },
    { name: "BS Botany", link: "/path/to/bs-bot-general.pdf" },
    { name: "BS English", link: "/path/to/bs-eng-general.pdf" },
    { name: "BS Economics", link: "/path/to/bs-eco-general.pdf" }
];

const generalMSList = [
    { name: "MS Computer Science", link: "/path/to/ms-cs-general.pdf" },
    { name: "MS Mathematics", link: "/path/to/ms-math-general.pdf" },
    { name: "MS Physics", link: "/path/to/ms-physics-general.pdf" },
    { name: "MS English", link: "/path/to/ms-eng-general.pdf" }
];

const generalPHDList = [
    { name: "PhD Computer Science", link: "/path/to/phd-cs-general.pdf" },
    { name: "PhD Mathematics", link: "/path/to/phd-math-general.pdf" }
];

const provisionalBSList = generalBSList.map(item => ({ ...item, link: item.link.replace('general', 'provisional') }));
const provisionalMSList = generalMSList.map(item => ({ ...item, link: item.link.replace('general', 'provisional') }));
const provisionalPHDList = generalPHDList.map(item => ({ ...item, link: item.link.replace('general', 'provisional') }));

export const meritListData = {
    general: {
        bs: generalBSList,
        ms: generalMSList,
        phd: generalPHDList
    },
    provisional: {
        bs: provisionalBSList,
        ms: provisionalMSList,
        phd: provisionalPHDList
    }
};
