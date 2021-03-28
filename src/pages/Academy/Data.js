import { LinkA, LinkScroll } from '../../components/reusable/styled';

/* switch between Newsletter and LogInButton on Hero Academy page*/

export const heroObjThree = {
    title: "Zúčastni se intenzivní Akademie s ReactGirls!",
    subtitle: "#ReactGirlsPrague",
    buttonText: "ODEBÍRAT NEWSLETTER",
    img: "/images/gallery/academy.jpg",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdb2wmsMPvBtEqxBmfMUdnOaaAcZm5MtTXDFTGLC5mmbBhMWQ/viewform",
    showNewsletter: true,
    showLogInButton: false,
    
};

/* switch between Newsletter and LogInButton on Price Container of Academy page*/

export const acadPrice = {
    price: "490 CZK",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdb2wmsMPvBtEqxBmfMUdnOaaAcZm5MtTXDFTGLC5mmbBhMWQ/viewform",
    showNewsletter: true,
    showLogInButton: false,
    showBorderBottom: true,
}

export const infoObjTwo = {
    text: "Přihlaš se do intenzivní Akademie ReactGirls a nauč se s námi programovat od základů.",
    content: "academy",
   
}

export const academyCardArr = [
    {
        icon: "/images/icons/programming.svg",
        title: "Programování",
        text: "Seznámení se s programováním v  jazyce JavaScript a React, vhodné pro začátečníky.",
    },
    {
        icon: "/images/icons/profesional.svg",
        title: "Profesionály",
        text: "Vybrali jsme pro vás ty nejlepší lektory, kteří jsou profesionálové v IT oboru a mají bohaté zkušenosti.",
    },
    {
        icon: "/images/icons/presentation.svg",
        title: "Lekce",
        text: "Zúčastníte se celkem 5 lekcí zaměřených na budování vašich technických dovedností v HTML, CSS, JavaScript a React.",
    },
    {
        icon: "/images/icons/marathon.svg",
        title: "Hackathon",
        text: "Budete součástí závěrečného hackathonu, kde si získané znalosti ověříte v praxi. Získáte od nás i certifikát o absolvování akademie.",
    },
    {
        icon: "/images/icons/interview.svg",
        title: "Mock interview",
        text: "Po absolvování akademie budete mít možnost vyzkoušet si mock interview se zkušeným HR.",
    },
    {
        icon: "/images/icons/call.svg",
        title: "Online lekce",
        text: "V případě nařízení karantény přesuneme všechny lekce do online prostředí a vy tak o nic nepřijdete!",
    },
];

export const titleObjTwo = {
    mainStudentTitle: "Komu je Akademie určena?",
    mainCardsTitle: "Co Akademie nabízí?",
    mainPriceTitle: "Co vše je v ceně Akademie?",
};

export const acadStudentArr = [
    {
        icon: "/images/icons/website.svg",
        heading: "Zájemkyním",
        text: "Zájemkyním o programováním, které se chtějí naučit tvorbu webových stránek a vytvořit si svou vlastní aplikaci v Reactu.",
    },
    {
        icon: "/images/icons/victory.svg",
        heading: "Začátečnicím",
        text: "Začátečnicím, které mají základní nebo žádné zkušenosti s programováním a chtěly by se seznámit se s HTML, CSS, JavaScriptem a Reactem.",
    },
    {
        icon: "/images/icons/woman3.svg",
        heading: "Ženám",
        text: "Ženám, které se chtějí naučit frontendové programování a vyzkoušet si získané znalosti v praxi. Zároveň si vyzkouší případné mock interview.",
    }
];

export const acadPriceArr = [
    {
        text: "5 lekcí programování",
    },
    {
        text: "závěrečný workshop",   
    },
    {
        text: "celkem 17 hodin vyučování",   
    },
    {
        text: "online studijní materiály k akademii", 
    },
    {
        text: "certifikát o absolvování",  
    },
    {
        text: "tričko ReactGirls",  
    },
    {
        text: "možnost vyzkoušet si mock interview s HR", 
    }
];



export const programArr1 = [
    {
        date: "19.dubna 2021", 
        topic: "HTML & CSS",
        time: "17:30 - 20:30",
        place: "online",
        border: true
    },
    {
        date: "22.dubna 2021", 
        topic: "Úvod do programování",
        time: "17:30 - 20:30",
        place: "online",
        border: true
    },
    {
        date: "26.dubna 2021", 
        topic: "JavaScript",
        time: "17:30 - 20:30",
        place: "online",
        border: true
    },
    {
        date: "29.dubna 2021", 
        topic: "React #1",
        time: "17:30 - 20:30",
        place: "online",
        border: true
    },
    {
        date: "3.května 2021", 
        topic: "React #2",
        time: "17:30 - 20:30",
        place: "online",
        border: true
    },
    {
        date: "6.května 2021",
        topic: "Node.js jen pro nadšence",
        time: "17:30 - 20:30",
        place: "online",
        border: true
    },
    {
        date: "8.května 2021", 
        topic: "Hackaton",
        time: "Celodenní",
        place: "online",
        border: false
    },
]

export const acadQuestionsArr = [
    {
        question: "Pro koho je kurz určen?",
        answer: "Kurz je určen pro všechny ženy, které mají základní zkušenosti s programováním a mají zájem se naučit programovat v Reactu.",
    },
    {
        question: "Jak se můžu na kurz přihlásit? ",
        answer: <>Stačí kliknout <LinkA href="https://docs.google.com/forms/d/e/1FAIpQLSdb2wmsMPvBtEqxBmfMUdnOaaAcZm5MtTXDFTGLC5mmbBhMWQ/viewform" target="blank">ZDE</LinkA> a vyplnit registrační formulář. Obratem ti na e-mail pošleme všechny nezbytné informace a informace o platbě.</>
    },
    {
        question: "Jak bude Akademie probíhat? ",
        answer: <>Akademie bude probíhat prezenčně, nebo online. Materiály budou k dispozici na Slacku, Notionu a Google Disku. Pokud je Akademie aktivní, v harmonogramu <LinkScroll
        to="program"
        smooth={true}
        duration='700'
        spy={true}
        exact='true'
        offset={-80}
        >výše</LinkScroll> jsou vypsány časy jednotlivých lekcí.</>
    },
    {
        question: "Co si z Akademie odnesu? ",
        answer: "Odneseš si znalosti HTML, CSS, JavaScriptu, Reactu. Získáš reálnou zkušenost s Reactem a motivaci do dalšího seberozvoje. Budeš mít možnost si vyzkoušet interview se zkušeným HR a dostaneš certifikát o absolvování Akademie a ReactGirls merch. Odneseš si i skvělé strávený čas se super partou!",
    },
    {
        question: "Kde se bude Akademie konat? ",
        answer: "Všechny bližší informace ti pošleme e-mailem, akademie se bude konat v kancelářích jednoho z našich partnerů v Praze.",
    },
    {
        question: "Stále si nejsi jistá?",
        answer: <>Pokud se chceš ujistit, že je Akademie pro tebe to pravé, případně máš ještě další otázky, neváhej nás <LinkA href="/kontakt">kontaktovat</LinkA>.</>
    }, 
];

export const processArrAcad = [
    {
        number: 1,
        heading: "REGISTRACE",
        text: "V případě, že je momentálně otevřené přihlašování na Akademii, klikni níže na tlačítko REGISTRACE. Pokud aktuálně není registrace otevřena, můžeš odebírat náš Newsletter, kde se o startu dalšího běhu Akademie v předstihu dozvíš.",
        reversed: false,
        last: false,
        first: true
    },
    {
        number: 2,
        heading: "VYPLŇ FORMULÁŘ",
        text: "Po kliknutí na tlačítko REGISTRACE se objeví formulář. Při vyplňování nezapomeň zejména na popsání své motivace. Kapacita Akademie je omezená, proto s přihlašováním neváhej!",
        reversed: true,
        last: false,
        first: false
    },
    {
        number: 3,
        heading: "KONTAKTUJEME TĚ",
        text: "Po přihlášení tě kontaktujeme s bližšími informacemi ohledně akademie a platby.",
        reversed: false,
        last: false,
        first: false
    },
    {
        number: 4,
        heading: "ZAČÍNÁME",
        text: "Konkrétní informace k přípravě na jednotlivé hodiny zasíláme pár dní před každou lekcí.",
        reversed: true,
        last: true,
        first: false

    }
]