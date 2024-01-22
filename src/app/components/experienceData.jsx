import { SiPhp, SiHtml5, SiMysql, SiSass, SiPython, SiJavascript, SiStreamlit,
    SiPandas, SiFolium } from "react-icons/si"

const experiences = [
    {
        id: 1,
        img: "/images/coursestorm.png",
        role: "Software Engineer Intern",
        company: "CourseStorm",
        location: "Remote",
        duration: "June 2023 - August 2023",
        about: "Developed a waiting list feature that makes inviting waitlisted students simpler for 100,000+ customers. \
            Determined and satisfied customer needs for the waiting list feature through customer interviews. \
            Made multiple project plan documents, integrations, pulls, pushes, merges, and QA tests.",
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
        about: "Assisted 1,000+ students and faculty with technical questions, troubleshooting issues, etc. \
            Oversaw laboratory cleanliness and organization while maintaining an inventory of lab supplies."
    },
    {
        id: 3,
        img: "/images/Towson.png",
        role: "Data Scientist",
        company: "Towson University",
        location: "Towson, MD",
        duration: "August 2023 - Present",
        about: "Researched, analyzed, and cleaned Baltimore crime data to bring awareness to criminal activity problems. \
            Implemented and deployed to production, a visualization of 600,000+ data items.",
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

export default experiences