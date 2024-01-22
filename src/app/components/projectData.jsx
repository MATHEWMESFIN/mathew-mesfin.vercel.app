import { SiTailwindcss, SiNextdotjs, SiReact, SiBootstrap, SiHtml5, 
    SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
    SiPostgresql, SiPython, SiPhp, SiSass, SiStyledcomponents, SiStreamlit,
    SiPandas, SiFolium } from "react-icons/si";
import { DiJava } from "react-icons/di";

const projects = [
    {
        id: 1,
        title: "My Portfolio",
        description: "Designed and developed my personal portfolio website that is fully responsive and mobile-friendly using the Next.js 14 framework.",
        duration: "December 2023 - January 2024",
        img: '/images/projects/portfolio-project.png',
        github: "https://github.com/MATHEWMESFIN/mathew-mesfin",
        link: "https://mathewmesfin.vercel.app/",
        skills: [
            {
                id: 1,
                name: "React",
                image: [<SiReact />]
            },
            {
                id: 2,
                name: "Next.js",
                image: [<SiNextdotjs />]
            },
            {
                id: 3,
                name: "Styled-components",
                image: [<SiStyledcomponents />]
            },
            {
                id: 4,
                name: "JavaScript",
                image: [<SiJavascript />]
            },
            {
                id: 5,
                name: "HTML",
                image: [<SiHtml5 />]
            },
            {
                id: 6,
                name: "CSS",
                image: [<SiCss3 />]
            }
        ]
    },
    {
        id: 2,
        title: "My-Fit",
        description: "Designed, developed, and deployed a fitness website for users to track their fitness journeys, \
            run through their workout routines, and share their progress with others on the public feed.",
        duration: "August 2023 - December 2023",
        img: '/images/projects/fitness-project.png',
        github: "https://github.com/MATHEWMESFIN/Fitness-App",
        link: "https://my-fit-webapp.vercel.app/",
        skills: [
            {
                id: 1,
                name: "React",
                image: [<SiReact />]
            },
            {
                id: 2,
                name: "Next.js",
                image: [<SiNextdotjs />]
            },
            {
                id: 3,
                name: "Tailwind",
                image: [<SiTailwindcss />]
            },
            {
                id: 4,
                name: "JavaScript",
                image: [<SiJavascript />]
            },
            {
                id: 5,
                name: "HTML",
                image: [<SiHtml5 />]
            },
            {
                id: 6,
                name: "CSS",
                image: [<SiCss3 />]
            },
            {
                id: 7,
                name: "PostgreSQL",
                image: [<SiPostgresql />]
            }
        ]
    },
    {
        id: 3,
        title: "TravelTroveAI",
        description: "Designed and developed a flight search booking app for users to search and book flights, \
            ask AI to search for the user, translate text, and convert currencies.",
        duration: "August 2023 - December 2023",
        img: '/images/projects/travel-project.png',
        github: "https://github.com/MATHEWMESFIN/travel-trove-ai",
        skills: [
            {
                id: 1,
                name: "React",
                image: [<SiReact />]
            },
            {
                id: 2,
                name: "Next.js",
                image: [<SiNextdotjs />]
            },
            {
                id: 3,
                name: "Tailwind",
                image: [<SiTailwindcss />]
            },
            {
                id: 4,
                name: "JavaScript",
                image: [<SiJavascript />]
            },
            {
                id: 5,
                name: "HTML",
                image: [<SiHtml5 />]
            },
            {
                id: 6,
                name: "CSS",
                image: [<SiCss3 />]
            },
            {
                id: 7,
                name: "PostgreSQL",
                image: [<SiPostgresql />]
            }
        ]
    },
    {
        id: 4,
        title: "Virtual Shopping Center",
        description: "Designed and developed a back-end application for an online store that handles accounts, \
            orders, membership, transaction history, etc. following my own use case and UML diagrams.",
        duration: "April 2022 - May 2022",
        img: '',
        github: "https://github.com/MATHEWMESFIN/Virtual-Shopping-Center",
        skills: [
            {
                id: 1,
                name: "Java",
                image: [<DiJava />]
            }
        ]
    },
]

export default projects;