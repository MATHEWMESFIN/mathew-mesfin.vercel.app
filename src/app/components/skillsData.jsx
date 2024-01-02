import { SiTailwindcss, SiNextdotjs, SiReact, SiBootstrap, SiHtml5, 
    SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
    SiPostgresql, SiPython, SiPhp, SiSass, SiStyledcomponents, SiGit, SiGithub,
    SiFigma, SiVercel, SiStreamlit, SiPandas, SiFolium } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";


import { DiJava } from "react-icons/di";

const skills = [
    {
        id: 1,
        title: "Frontend",
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
                name: "Bootstrap",
                image: [<SiBootstrap />]
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
                name: "JavaScript",
                image: [<SiJavascript />]
            },
            {
                id: 8,
                name: "Sass",
                image: [<SiSass />]
            },
            {
                id: 10,
                name: "styled-components",
                image: [<SiStyledcomponents />]
            }
        ]
    },
    {
        id: 2,
        title: "Backend",
        skills: [
            {
                id: 1,
                name: "Node.js",
                image: [<SiNodedotjs />]
            },
            {
                id: 2,
                name: "Express",
                image: [<SiExpress />]
            },
            {
                id: 3,
                name: "MongoDB",
                image: [<SiMongodb />]
            },
            {
                id: 4,
                name: "MySQL",
                image: [<SiMysql />]
            },
            {
                id: 5,
                name: "PostgreSQL",
                image: [<SiPostgresql />]
            },
            {
                id: 6,
                name:"Python",
                image: [<SiPython />]
            },
            {
                id: 7,
                name: "Java",
                image: [<DiJava />]
            },
            {
                id: 8,
                name: "PHP",
                image: [<SiPhp />]
            },
            {
                id: 9,
                name: "Streamlit",
                image: [<SiStreamlit />]
            },
            {
                id: 10,
                name: "Pandas",
                image: [<SiPandas />]
            },
            {
                id: 11,
                name: "Folium",
                image: [<SiFolium />]
            }
        ]
    },
    {
        id: 3,
        title: "Other",
        skills: [
            {
                id: 1,
                name: "Git",
                image: [<SiGit />]
            },
            {
                id: 2,
                name: "GitHub",
                image: [<SiGithub />]
            },
            {
                id: 3,
                name: "VS Code",
                image: [<TbBrandVscode />]
            },
            {
                id: 4,
                name: "Figma",
                image: [<SiFigma />]
            },
            {
                id: 5,
                name: "Vercel",
                image: [<SiVercel />]
            }
        ]
    }
]

export default skills