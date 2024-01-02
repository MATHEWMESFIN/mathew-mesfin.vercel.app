import { SiTailwindcss, SiNextdotjs, SiReact, SiBootstrap, SiHtml5, 
    SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
    SiPostgresql, SiPython, SiPhp, SiSass, SiStyledcomponents, SiStreamlit,
    SiPandas, SiFolium } from "react-icons/si";

const projects = [
    {
        id: 1,
        title: "My Portfolio",
        description: "My personal portfolio website to showcase my skills, experience, and projects.",
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
        description: "Worked in a team using the Next.js 14 framework to design and develop a personal fitness website that allows users to track their workouts, and progress.",
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
        description: "Worked in a team using the Next.js 14 framework to design and develop a flight search booking app that integrates an AI chat feature.",
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
        title: "Baltimore Crime Data Research",
        description: "Worked in a team as a student researcher to research, analyze, and organize Baltimore crime data to highlight and bring awareness to criminal activity problems.",
        duration: "August 2023 - December 2023",
        img: '/images/projects/Baltimore-crime-data-project.png',
        github: "https://github.com/MATHEWMESFIN/Crime-Data-Research",
        link: "https://crime-data-research.streamlit.app/",
        skills: [
            {
                id: 1,
                name: "Python",
                image: [<SiPython />]
            },
            {
                id: 2,
                name: "Streamlit",
                image: [<SiStreamlit />]
            },
            {
                id: 3,
                name: "Pandas",
                image: [<SiPandas />]
            },
            {
                id: 4,
                name: "Folium",
                image: [<SiFolium />]
            }
        ]
    }
]

export default projects;