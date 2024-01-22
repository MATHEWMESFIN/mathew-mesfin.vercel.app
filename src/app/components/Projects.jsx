'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import projects from './projectData';
import { FaGithub, FaLink } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";

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
            cursor: pointer;
            color: var(--color-offset);
            transition: all 0.5s ease-in-out;

            &:hover {
                color: rgb(var(--primary-color));
            }
        }
    }

    @media (max-width: 880px) {
        height: 45rem;
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
    overflow-y: hidden;

    .project {
        transform: translateY(var(--top-offset));
        transition: all 0.5s ease-out;
    }

    @media (max-width: 880px) {
        height: 35rem;
    }
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

    @media (max-width: 1120px) {
        width: 45rem;
    }

    @media (max-width: 880px) {
        width: 30rem;
        height: 35rem;
    }

    @media (max-width: 640px) {
        width: 20rem;
    }
    
`

const ProjectCardTop = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 10rem;
    background-color: rgb(var(--background-color), 0.5);
    border: 0.5px solid rgba(var(--foreground-color), 0.5);
    border-radius: 1rem;

    @media (max-width: 640px) {
        justify-content: center;
    }
`

const ProjectCardTopBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
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
        font-size: 2rem;

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
        font-size: 1.25rem;
        font-weight: 400;
        opacity: 0.5;
    }

    @media (max-width: 880px) {
        .heading {
            font-size: 1.5rem;
        }

        .links {
            font-size: 1.5rem;
        }

        .duration {
            font-size: 1rem;
        }
    }
`

const ProjectCardBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 24rem;
    margin-top: 1rem;
    background-color: rgb(var(--background-color), 0.5);
    border: 0.5px solid rgba(var(--foreground-color), 0.5);
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

    @media (max-width: 640px) {
        display: none;
    }
`

const ProjectCardBottomBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;
    color: white;

    .description {
        font-size: 1.25rem;
        font-weight: 400;
        opacity: 1;
    }

    @media (max-width: 880px) {
        .description {
            font-size: 1rem;
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

    @media (max-width: 880px) {
        gap: 0.5rem;
    }
`

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    font-weight: 500;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    background-color: rgb(var(--primary-color), 0.8);
    color: white;

    .skill-item-img {
        font-size: 1rem;
    }
`

const Projects = () => {

    const count = projects.length;
    const [active, setActive] = useState(0);

    const [scroll, setScroll] = useState(0);
    const [width, setWidth] = useState(0);
    const [scrollLevel, setScrollLevel] = useState(0);

    const projectsRef = React.createRef();

    useEffect(() => {
        const element = projectsRef.current;
        setScroll(element.scrollLeft);
        setWidth(element.offsetWidth);
    }, []);

    const handleScroll = () => {
        const element = projectsRef.current;
        setScroll(element.scrollLeft);
        setWidth(element.offsetWidth);
        setScrollLevel(scroll / width);
        const index = Math.round(scrollLevel);
        
        setActive(index);

        element.onscrollend = () => {
            element.scrollTo({
                left: index * width,
                behavior: 'smooth',
            });
        }
    }

    const handleDotClick = (index) => {
        const element = projectsRef.current;
        element.scrollTo({
            left: index * width,
            behavior: 'smooth',
        });
    }

    return (
        <ProjectsSection>
            <Title>
                Projects
            </Title>
            <ProjectsWrapper onScroll={handleScroll} ref={projectsRef}>
                {projects.map((project, i) => (
                    <div key={i}
                        className='project'
                        style={{
                            '--top-offset': i <= active ? '0' : `calc(${(i - scrollLevel) >= 0 && (i - scrollLevel)}% * -100)`,
                        }}>
                        <ProjectsCard project={project} />
                    </div>
                ))}
            </ProjectsWrapper>
            <div className='dots'>
                {projects.map((project, i) => (
                    <div key={i} className='dot'
                        onClick={() => handleDotClick(i)}
                        style={{
                            '--color-offset': i === active ? 'rgb(var(--primary-color))' : 'rgb(var(--foreground-color))',
                        }}>
                        {i === active ? <GoDotFill /> : <GoDot />}
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
                {project.img && <ProjectCardImg src={project.img} />}
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