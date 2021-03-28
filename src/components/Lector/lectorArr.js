import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../variables.js';

export const Founder = styled.div`
    padding-bottom: 5px;
    text-align: center;
    font-weight: 400;
    font-size: ${sizes.sizeXS};
    color: ${colors.darkGrey};
    margin: 5px auto;
    width: 85%;
    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
`;

const lectorArr = [
    {
        lectorImg: "/images/lectors/terezav.png",
        lectorName: "Tereza Vaňková",
        lectorJob: <>ReactGirls Founder <br/> Front-End Developer </>,
        lectorCompany: "Avast",
        lectorLinkedIn: "https://www.linkedin.com/in/tereza-vankova",
    },
    {
        lectorImg: "/images/lectors/braňo.jpeg",
        lectorName: "Branislav Benčík",
        lectorJob: <>UX Designer & Front-End <br/>React Developer</>,
        lectorCompany: "Applifting",
        lectorLinkedIn: "https://cz.linkedin.com/in/branislavbencik",
    },
    {
        lectorImg: "/images/lectors/zuzkastav-1.png",
        lectorName: "Zuzana Stavjaňová",
        lectorJob: "React Developer",
        lectorCompany: "Carvago",
        lectorLinkedIn: "https://www.linkedin.com/today/author/zuzanastavjanova",  
    },
    {
        lectorImg: "/images/lectors/simca.jpg",
        lectorName: "Simona Töröková",
        lectorJob: "Data Analyst/Scientist",
        lectorCompany: "DataSentics",
        lectorLinkedIn: "https://www.linkedin.com/in/simona-t%C3%B6r%C3%B6kov%C3%A1-31baa211a",
    },
    {
        lectorImg: "/images/lectors/richard.jpg",
        lectorName: "Riki Fridrich",
        lectorJob: "Javascript Developer",
        lectorCompany: "Mall",
        lectorLinkedIn: "https://www.linkedin.com/in/fczbkk",
    },   
    {
        lectorImg: "/images/lectors/terkam.jpeg",
        lectorName: "Tereza Macháčková",
        lectorJob: "People & Tech Products",
        lectorCompany: "Credo Ventures",
        lectorLinkedIn: "https://www.linkedin.com/in/tereza-mach%C3%A1%C4%8Dkov%C3%A1-29783a9a/",
    },
    {
        lectorImg: "/images/lectors/martinh.jpg",
        lectorName: "Martin Hochel",
        lectorJob: "Principal Engineer",
        lectorCompany: "Productboard",
        lectorLinkedIn: "https://www.linkedin.com/in/hochelmartin/",
    },
    {
        lectorImg: "/images/lectors/karold.jpg",
        lectorName: "Karol Danko",
        lectorJob: "CTO",
        lectorCompany: "OAK'S LAB",
        lectorLinkedIn: "https://www.linkedin.com/in/karoldanko/",
    },
    {
        lectorImg: "/images/lectors/pavelc.jpg",
        lectorName: "Pavel Cvetler",
        lectorJob: "Head of FlashScore",
        lectorCompany: "Livesport",
        lectorLinkedIn: "https://www.linkedin.com/in/pavel-cvetler-36485bb4/",
    },
    {
        lectorImg: "/images/lectors/zuzkapes-300x300.jpg",
        lectorName: "Zuzana Pešková",
        lectorJob: "HR",
        lectorCompany: "Livesport",
        lectorLinkedIn: "https://www.linkedin.com/in/zuzka-peskova/",
    },
    {
        lectorImg: "/images/lectors/romansch.jpg",
        lectorName: "Roman Schejbal",
        lectorJob: "Lead Developer",
        lectorCompany: "HomeWerk",
        lectorLinkedIn: "https://www.linkedin.com/in/roman-schejbal-b71b3447/",
    },
    {
        lectorImg: "/images/lectors/hanahaber-300x300.jpg",
        lectorName: "Hana Habermannová",
        lectorJob: "CEO and Company Director",
        lectorCompany: "PPC Bee",
        lectorLinkedIn: "https://www.linkedin.com/in/hanahabermannova/",
    },
    {
        lectorImg: "/images/lectors/lenak.jpg",
        lectorName: "Lena Kirichok",
        lectorJob: "Back-End Developer",
        lectorCompany: "Zásilkovna",
        lectorLinkedIn: "https://www.linkedin.com/in/lena-k-14b891aa/",
    },
    {
        lectorImg: "/images/lectors/marekv.jpg",
        lectorName: "Marek Velas",
        lectorJob: "Founder",
        lectorCompany: "EDUpunk",
        lectorLinkedIn: "https://www.linkedin.com/in/marek-velas/",
    },
    {
        lectorImg: "/images/lectors/petraz-300x300.jpg",
        lectorName: "Petra Zárubová",
        lectorJob: "Lecturer",
        lectorCompany: "Freelancer",
        lectorLinkedIn: "https://www.linkedin.com/in/petra-gasek-zarubova/",
    },
    {
        lectorImg: "/images/lectors/ondrejk.jpg",
        lectorName: "Ondřej Kučera",
        lectorJob: "Senior Consultant",
        lectorCompany: "Unicorn Systems",
        lectorLinkedIn: "https://www.linkedin.com/in/ond%C5%99ej-ku%C4%8Dera-9410167/",
    },
    {
        lectorImg: "/images/lectors/kamilam.jpg",
        lectorName: "Kamila Macháčová",
        lectorJob: "HR",
        lectorCompany: "",
        lectorLinkedIn: "https://www.linkedin.com/in/kamilamach%C3%A1%C4%8Dov%C3%A1/",
    },
    {
        lectorImg: "/images/lectors/pavels.jpg",
        lectorName: "Pavel Šuraba",
        lectorJob: "Front-End Developer",
        lectorCompany: "Productboard",
        lectorLinkedIn: "https://www.linkedin.com/in/pavel-suraba/?originalSubdomain=cz",
    },
    {
        lectorImg: "/images/lectors/kirillb.jpg",
        lectorName: "Kirill Bunin",
        lectorJob: <>Software Developer <br/> & Consultant</>,
        lectorCompany: "Freelance",
        lectorLinkedIn: "https://www.linkedin.com/in/kirillbunin/?originalSubdomain=cz",
    },
    {
        lectorImg: "/images/lectors/lukasv.jpg",
        lectorName: "Lukáš Valenta",
        lectorJob: "Full Stack Developer",
        lectorCompany: "Applifting",
        lectorLinkedIn: "https://www.linkedin.com/in/luk%C3%A1%C5%A1-valenta-313b328a/",
    },
]

export default lectorArr;