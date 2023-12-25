'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TabButton from './TabButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/projects.css';

const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
        technologies: [
            {
                id: 1,
                name: "React"
            },
            {
                id: 2,
                name: "Next.js"
            },
            {
                id: 3,
                name: "Tailwind"
            }
        ],
        img: '/images/laptop-space.png'
    },
    {
        id: 2,
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
        technologies: [
            {
                id: 1,
                name: "React"
            },
            {
                id: 2,
                name: "Next.js"
            },
            {
                id: 3,
                name: "Tailwind"
            }
        ],
        img: '/images/laptop-space.png'
    },
    {
        id: 3,
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
        technologies: [
            {
                id: 1,
                name: "React"
            },
            {
                id: 2,
                name: "Next.js"
            },
            {
                id: 3,
                name: "Tailwind"
            }
        ],
        img: '/images/laptop-space.png'
    },
    {
        id: 4,
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
        technologies: [
            {
                id: 1,
                name: "React"
            },
            {
                id: 2,
                name: "Next.js"
            },
            {
                id: 3,
                name: "Tailwind"
            }
        ],
        img: '/images/laptop-space.png'
    },
    {
        id: 5,
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
        technologies: [
            {
                id: 1,
                name: "React"
            },
            {
                id: 2,
                name: "Next.js"
            },
            {
                id: 3,
                name: "Tailwind"
            }
        ],
        img: '/images/laptop-space.png'
    }
]

const ProjectCard = ({ project }) => {
    return (
        <div className='project-card flex flex-row justify-center items-center border rounded-xl ml-8'>
            <Image 
                src={project.img}
                width={1000}
                height={1000}
                className='rounded-l-xl w-72 h-72'/>
            <div className='flex flex-col justify-center items-center p-8'>
                <div className='project-title text-lg font-medium'>
                    {project.title}
                </div>
                <div className='project-description text-base font-normal'>
                {project.description}
                </div>
                <div className='project-technologies flex'>
                    {project.technologies.map((technology) => (
                        <div key={technology.id} className='technology flex flex-col items-center justify-center gap-2 text-base font-normal border rounded-xl px-5 py-3'>
                            {technology.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const [tab, setTab] = useState(1)
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <div className='projects'>
            <div className='flex'>
                <div className='grid grid-flow-row items-end w-80'>
                        <TabButton 
                            active={tab === 1}
                            selectTab={() => handleTabChange(1)}
                            title='Project 1' />
                        <TabButton 
                            active={tab === 2}
                            selectTab={() => handleTabChange(2)}
                            title='Project 2' />
                        <TabButton 
                            active={tab === 3}
                            selectTab={() => handleTabChange(3)}
                            title='Project 3' />
                </div>
                <div className='projects-container flex items-center justify-center w-full h-full'>
                    {projects.find((project) => project.id === tab) && (
                        <div className='flex items-center justify-center w-full h-full'>
                            <ProjectCard project={projects.find((project) => project.id === tab)} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects
