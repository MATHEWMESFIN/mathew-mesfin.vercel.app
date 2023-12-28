import { SiPhp, SiHtml5, SiMysql, SiSass, SiJavascript } from "react-icons/si"

const experiences = [
    {
        id: 1,
        img: "/images/coursestorm.png",
        role: "Software Engineer Intern",
        company: "CourseStorm",
        location: "Remote",
        duration: "June 2023 - August 2023",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
        skills: [
            {
                id: 1,
                name: "PHP",
                image: [<SiPhp />]
            },
            {
                id: 2,
                name: "HTML",
                image: [<SiHtml5 />]
            },
            {
                id: 3,
                name: "MySQL",
                image: [<SiMysql />]
            },
            {
                id: 4,
                name: "SCSS",
                image: [<SiSass />]
            },
            {
                id: 5,
                name: "JavaScript",
                image: [<SiJavascript />]
            }
        ]
    },
    {
        id: 2,
        img: "/images/towson.png",
        role: "Lab Admin",
        company: "Towson University",
        location: "Towson, MD",
        duration: "August 2023 - Present",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae."
    },
    {
        id: 3,
        img: "/images/towson.png",
        role: "Student Researcher",
        company: "Towson University",
        location: "Towson, MD",
        duration: "August 2023 - Present",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae."
    }
]

export default experiences