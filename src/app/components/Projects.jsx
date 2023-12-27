'use client'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
import styled from 'styled-components';
import projects from './projectData';

const ProjectsSection = styled.div`
    
`

const ProjectsWrapper = styled.div`
    display: flex;
`

const ProjectsPanel = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    width: 20rem;
`

const ProjectCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 1rem;
    margin-left: 2rem;
`

const CardImage = styled.img.attrs(props => ({
    src: props.src,
}))
`
    display: flex;
    flex-direction: column;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    width: 20rem;
    height: 20rem;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`

const Description = styled.div`
    font-size: 1rem;
    font-weight: 400;
`

const Technologies = styled.div`
    display: flex;
`

const Technology = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 400;
`

const Projects = () => {
    const [tab, setTab] = useState(1)
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <ProjectsSection>
            <ProjectsWrapper>
                <ProjectsPanel>
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
                </ProjectsPanel>
                <ProjectCardContainer>
                    <ProjectCard project={projects.find((project) => project.id === tab)} />
                </ProjectCardContainer>
            </ProjectsWrapper>
        </ProjectsSection>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <CardContainer>
            <CardImage src={project.img} />

            <CardWrapper>
                <Title>
                    {project.title}
                </Title>

                <Description>
                {project.description}
                </Description>

                <Technologies>
                    {project.technologies.map((technology) => (
                        <Technology key={technology.id}>
                            {technology.name}
                        </Technology>
                    ))}
                </Technologies>

            </CardWrapper>

        </CardContainer>
    )
}

export default Projects
