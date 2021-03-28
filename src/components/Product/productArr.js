import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { LinkA, LinkScroll } from '../reusable/styled';

const productArr = [ 
    {
        title: "Komunita",
        info: <>ReactGirls je komunita, kterou spojuje láska k technologiím a programování. Spolu s profesionálními lektory a mentory pomáháme ženám, které se chtějí stát programátorkami. Zapojte se do naší komunity na sociálních sítích.</>,
        hideButton: false,
        buttonText: "Zjistit více",
        img: "images/products/community.jpg",
        imgStart: false,
        lightBlue: false,
        link: '/onas',
        id: "community"
    },
    {
        title: "Workshopy",
        info: 
            <>Pořádáme pravidelné workshopy plné programování a přednášek nejen na technická témata. Naučíme vás základy HTML, CSS, Javascriptu a Reactu.  Bližší informace najdete na sociálních sítích ReactGirls nebo odebírejte náš  <LinkScroll 
                    to="newsletterHero"
                    smooth={true}
                    duration='700'
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Newsletter</LinkScroll>.
            </>,
        hideButton: true,
        img: "images/products/workshop.jpg",
        imgStart: true,
        lightBlue: true,
        id: "workshop"
    },
    {
        title: "Webináře",
        info: <>Nenechte si ujít webináře nejen na o programováním v Reactu. Věnujeme se i dalším tématům spojeným s prací a rekvalifikací v IT. Některé z webinářů můžete shlédnout na našem <LinkA href="https://www.youtube.com/channel/UCO8WGBzS6J00zlXroeTf90g" target="blank">Youtube</LinkA>. O dalších se dozvíte prostřednictvím <LinkScroll 
        to="newsletterHero"
        smooth={true}
        duration='700'
        spy={true}
        exact='true'
        offset={-80}
        >Newsletteru </LinkScroll> 
        a sociálních sítích.</>,
        hideButton: true,
        img: "images/products/webinar.jpg",
        imgStart: false,
        lightBlue: false,
        id: "webinar"
    },
    {
        title: "Mentoring", 
        info: "Vyzkoušejte si náš jedinečný mentoringový program. Během tří měsíců vás zkušený mentor provede tvorbou komplexního webového projektu zvoleného podle vašich kariérních cílu. Předává vám tak profesionální know-how. Na konci je mentee připravena sama zvládnout tvorbu dalších projektů v Reactu.",
        hideButton: false,
        buttonText: "Zjistit více",
        img: "images/products/mentoring.jpg",
        imgStart: true,
        lightBlue: true,
        link: '/mentoring',
        id: "mentoring"
    },
    {
        title: "Akademie",
        info: "ReactGirls Akademie je program určený pro začátečnice, které se chtějí seznámit s komplexním frontendovým programováním. Provedeme vás tím nejdůležitějším: od kódování webové aplikace v HTML a CSS přes seznámení se s principy programování v JavaScriptu až po první krůčky s Reactem.",
        hideButton: false,
        buttonText: "Zjistit více",
        img: "images/products/academy.jpg",
        imgStart: false,
        lightBlue: false,
        link: '/akademie',
        id: "academy"
    },
    {
        title: "Meetupy",
        info: "Pořádáme pro vás i pravidelné ReactGirls meetupy pod názvem ReactGirls Beer. Na společných setkáních se kromě seznámení s komunitou můžete také těšit na zajímavé přednášky jak ze světa technologií, tak i na aktuální témata, která hýbou IT světem.",
        hideButton: true,
        img: "images/products/meetup.jpg",
        imgStart: true,
        lightBlue: true,
        id: "meetup"
    }
]

export default productArr;


