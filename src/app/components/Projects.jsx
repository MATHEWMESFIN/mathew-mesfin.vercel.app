'use client'
import React, { useState, useTransition } from 'react';
import styled from 'styled-components';
import TimelineButton from './TimelineButton';
import projects from './projectData';

const ProjectsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 20rem;
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
        height: 15rem;
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
`

const TimeLineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    filter: drop-shadow(0 0 0.75rem rgb(139 92 246));
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
    grid-template-columns: 15rem 35rem;
    justify-content: center;
    align-items: center;
    width: 50rem;
    height: 100%;
    border-radius: 1rem;
    
`

const ProjectCardLeft = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
    gap: 1rem;
    filter: drop-shadow(0 0 0.75rem rgb(139 92 246));
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
    gap: 1rem;

    .role {
        font-size: 1.25rem;
        font-weight: 500;
    }

    .company {
        font-size: 1rem;
        font-weight: 400;
        opacity: 0.75;
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
    }

`

const ProjectCardSkills = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: block;
    filter: drop-shadow(0 0 0.75rem rgb(139 92 246));
`

const ProjectCardSkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 0.75rem;

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
    background-color: rgb(139, 92, 246);
    color: white;

    .skill-item-img {
        font-size: 1rem;
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
                    <div className='title'>
                        {project.title}
                    </div>
                    <div className='description'>
                        {project?.description &&
                            <div>
                                {project.description}
                            </div>
                        }
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

            {/* <ProjectCardSkills>
                
            </ProjectCardSkills> */}

        </ProjectCardContainer>
    )
}

export default Projects