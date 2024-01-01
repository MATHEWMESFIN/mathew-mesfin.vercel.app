import { SiPhp, SiHtml5, SiMysql, SiSass, SiJavascript } from "react-icons/si"

const experiences = [
    {
        id: 1,
        img: "/images/coursestorm.png",
        role: "Software Engineer Intern",
        company: "CourseStorm",
        location: "Remote",
        duration: "June 2023 - August 2023",
        about: "Worked in an agile team to update and streamline the waiting list entry into the registration application process.",
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
        img: "/images/Towson.png",
        role: "Lab Admin",
        company: "Towson University",
        location: "Towson, MD",
        duration: "August 2023 - Present",
        about: "Provided technical assistance to students and faculty with technical questions, troubleshooting problems, network service access requests, and software installation."
    },
    {
        id: 3,
        img: "/images/Towson.png",
        role: "Student Researcher",
        company: "Towson University",
        location: "Towson, MD",
        duration: "August 2023 - Present",
        about: "Researched, analyzed, and organized Baltimore crime data to highlight and bring awareness to criminal activity problems.\n\
          Used Streamlit and Pandas with Python to clean the data and visualize the cleaned data."
    }
]

export default experiences