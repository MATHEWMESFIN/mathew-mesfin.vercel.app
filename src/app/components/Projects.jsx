'use client'
import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { XSlidingSection, XSlidingWrapper, XSlidingCardContainer } from './XSlidingStyles';
import TimelineButton from './TimelineButton';
import projects from './projectData';
import { FaGithub, FaLink } from "react-icons/fa";
import { GoDot } from "react-icons/go";

const ProjectsSection = styled(XSlidingSection)`
    
`

const ProjectsWrapper = styled(XSlidingWrapper)`
`

const ProjectCardContainer = styled(XSlidingCardContainer)`
    
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
    border-radius: 1rem;
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
        color: rgb(var(--primary-color));
        
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
    background-color: rgba(var(--primary-color), 0.5);
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