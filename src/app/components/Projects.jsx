'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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
        <div className='project-card flex flex-col justify-center items-center border rounded-xl w-80 h-80'>
            <Image 
                src={project.img}
                width={1000}
                height={1000}
                className='rounded-t-xl w-36 h-36'/>
            <div className='flex flex-col justify-center items-center'>
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

    return (
        <div>
            <div className='title text-3xl text-center font-semibold mb-8'>
                Projects
            </div>
            <div className='projects-container flex gap-5 w-full h-full overflow-auto'>
                {projects.map((project, id) => (
                    <div 
                        key={id} 
                        className='flex w-full h-full'>
                            <ProjectCard key={id} project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
