'use client'
import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import TimelineButton from './TimelineButton';
import projects from './projectData';
import { FaGithub, FaLink } from "react-icons/fa";
import { GoDot } from "react-icons/go";

const ProjectsSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 40rem;

    .dots {
        display: flex;
        width: 100%;
        height: 5rem;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: rgba(var(--foreground-color));

        .dot {
            color: var(--color-offset);
            transition: all 0.3s ease-in-out;
        }
    }
`

const Title = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    height: 5rem;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 800;
    color: rgba(var(--foreground-color));
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 30rem;
    overflow-x: scroll;
    gap: 2rem;
`

const ProjectCardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 60rem;
    height: 30rem;
    border-radius: 1rem;
    
`

const ProjectCardTop = styled.div`
    display: flex;
    width: 100%;
    height: 10rem;
    background-color: rgb(var(--background-color), 0.8);
    border: 1px solid rgba(var(--primary-color));
    border-radius: 1rem;
`

const ProjectCardTopBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    gap: 0.5rem;

    .heading {
        font-size: 2rem;
        font-weight: 700;
        display: flex;
        color: rgb(var(--primary-color));
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;

        .link {
            color: white;
            opacity: 0.75;
            transition: all 0.3s ease-in-out;

            &:hover {
                color: rgb(var(--primary-color));
            }
        }
    }

    .duration {
        font-size: 0.75rem;
        font-weight: 400;
        opacity: 0.5;
    }
`

const ProjectCardBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 19rem;
    margin-top: 1rem;
    background-color: rgb(var(--background-color), 0.8);
    border: 1px solid rgba(var(--primary-color));
    border-radius: 1rem;
    padding: 1rem;
`

const ProjectCardImg = styled.img.attrs(props => ({
    src: props.src,
}))
`
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    height: 100%;
`

const ProjectCardBottomBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    color: white;

    .description {
        font-size: 1.5rem;
        font-weight: 400;
        opacity: 1;
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
    font-size: 1rem;
    font-weight: 500;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    background-color: rgb(var(--primary-color), 0.8);
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

    const count = projects.length;
    const [active, setActive] = useState(0);

    const handleScroll = (e) => {
        const element = e.target;
        const scroll = element.scrollLeft;
        const width = element.offsetWidth;
        const index = Math.round(scroll / width);
        setActive(index);
    }

    return (
        <ProjectsSection>
            <Title>
                Projects
            </Title>
            <ProjectsWrapper onScroll={handleScroll}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectsCard project={project} />
                    </div>
                ))}
            </ProjectsWrapper>
            <div className='dots'>
                {projects.map((project, i) => (
                    <div key={i} className='dot'
                        style={{
                            '--color-offset': i === active ? 'rgb(var(--primary-color))' : 'rgb(var(--foreground-color))',
                        }}>
                        <GoDot/>
                    </div>
                ))}
            </div>
        </ProjectsSection>
    )
}

const ProjectsCard = ({ project }) => {
    return (
        <ProjectCardContainer>

            <ProjectCardTop>
                <ProjectCardImg src={project.img} />
                <ProjectCardTopBody>
                    <div className='heading'>
                        {project.title}
                    </div>
                    <div className='links'>
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
                </ProjectCardTopBody>
            </ProjectCardTop>

            <ProjectCardBottom>
                <ProjectCardBottomBody>
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
                </ProjectCardBottomBody>
            </ProjectCardBottom>

        </ProjectCardContainer>
    )
}

export default Projects