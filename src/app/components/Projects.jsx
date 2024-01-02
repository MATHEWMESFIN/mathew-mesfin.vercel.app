'use client'
import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import TimelineButton from './TimelineButton';
import projects from './projectData';
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 20rem;

    @media (max-width: 1120px) {
        height: 20rem;
    }

    @media (max-width: 880px) {
        height: 30rem;
    }
`

const ProjectsWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    .projects-container {
        width: 100%;
        height: 17rem;
        position: absolute;
        top: 0;
        background-color: rgba(139, 92, 246, 0.2);
        border-radius: 1rem;

        .project {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(var(--distance));
            transition: all 0.4s ease-out;
        }
    }

    @media (max-width: 1120px) {
        .projects-container {
            height: 17rem;
        }
    }

    @media (max-width: 880px) {
        .projects-container {
            height: 27rem;
        }
    }
`

const TimeLineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    bottom: 1rem;
    width: 100%;
`

const TimeLineLine = styled.div`
    position: absolute;
    bottom: 1.75rem;
    background-color: rgb(139, 92, 246, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 9999px;
    width: 100%;
    height: 0.1rem;
    z-index: -1;
`

const ProjectCardContainer = styled.div`
    display: grid;
    grid-template-columns: 10rem 40rem;
    justify-content: center;
    align-items: center;
    width: 50rem;
    height: 100%;
    border-radius: 1rem;

    @media (max-width: 1120px) {
        grid-template-columns: 10rem 25rem;
        width: 35rem;
    }
    
    @media (max-width: 880px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        text-align: left;
    }
`

const ProjectCardLeft = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
    
    @media (max-width: 640px) {
        padding: 0.5rem;
    }
`

const ProjectCardImg = styled.img.attrs(props => ({
    src: props.src,
}))
`
    border-radius: 9999px;
    width: 10rem;
    height: 10rem;
`

const ProjectCardLeftBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    color: white;

    .heading {
        font-size: 1.25rem;
        font-weight: 500;
        display: flex;
        gap: 1rem;
        color: rgb(139, 92, 246);
        
        .link {
            font-size: 2rem;
        }
    }

    .duration {
        font-size: 0.75rem;
        font-weight: 400;
        opacity: 0.5;
    }

    .description {
        font-size: 1rem;
        font-weight: 400;
        opacity: 1;
        color: white;
    }

    @media (max-width: 1120px) {
        .heading {
            font-size: 1rem;
            
            .link {
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 640px) {

        .description {
            font-size: 0.75rem;
            font-weight: 400;
            opacity: 1;
            color: white;
        }
    
    }

`

const ProjectCardSkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.5rem;

    @media (max-width: 640px) {
        gap: 0.25rem;
    }
`

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    background-color: rgba(139, 92, 246, 0.5);
    color: white;

    .skill-item-img {
        font-size: 1rem;
    }

    @media (max-width: 1120px) {
        font-size: 0.5rem;
        padding: 0.25rem 0.5rem;
        gap: 0.25rem;

        .skill-item-img {
            font-size: 0.75rem;
        }
    }
`

const Projects = () => {
    const [timeTab, setTimeTab] = useState(1);
    const [isPending, startTransition] = useTransition();
    return (
        <ProjectsSection>
            <ProjectsWrapper>
                <div className='projects-container'>
                    {projects.map((project) => (
                        <div key={project.id} 
                            className='project'
                            style={{
                                "--distance": timeTab === project.id ? '0' : timeTab > project.id ? '-40%' : '40%',
                                zIndex: timeTab === project.id ? 1 : 0,
                                opacity: timeTab === project.id ? 1 : 0,
                                
                            }}>
                            <ProjectsCard project={project} />
                        </div>
                    )
                    )}
                </div>

                <TimeLineWrapper>
                    {projects.map((project) => (
                        <TimelineButton
                            key={project.id}
                            active={timeTab === project.id}
                            selectTab={() => {
                                startTransition(() => {
                                    setTimeTab(project.id)
                                })
                            }}
                            title={project.title}
                        />
                    ))}
                </TimeLineWrapper>

                <TimeLineLine />

            </ProjectsWrapper>
        </ProjectsSection>
    )
}

const ProjectsCard = ({ project }) => {
    return (
        <ProjectCardContainer>
            <ProjectCardImg src={project.img} />
            <ProjectCardLeft>
                <ProjectCardLeftBody>
                    <div className='heading'>
                        {project.title}
                        {project?.github && (
                            <Link className="link" href={project.github} target='_blank'>
                                <FaGithub />
                            </Link>
                        )}
                        {project?.link && (
                            <Link className='link' href={project.link} target='_blank'>
                                <FaLink />
                            </Link>
                        )}
                    </div>
                    <div className='duration'>
                        {project.duration}
                    </div>
                    <div className='description'>
                        {project.description}
                    </div>

                    {project?.skills &&
                        <ProjectCardSkillsWrapper>
                            {project?.skills?.map((skill, index) => (
                                <SkillItem key={index}>
                                    <div className='skill-item-img'>
                                        {skill.image}
                                    </div>
                                    {skill.name}
                                </SkillItem>
                            ))}
                        </ProjectCardSkillsWrapper>
                    }
                </ProjectCardLeftBody>
            </ProjectCardLeft>

        </ProjectCardContainer>
    )
}

export default Projects