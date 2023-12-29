'use client'
import React, { useState, useTransition } from 'react';
import experiences from './experienceData';
import styled from 'styled-components';
import TimelineButton from './TimelineButton';

const ExperiencesSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 20rem;
`

const ExperiencesWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    .experience {
        position: absolute;
        top: 0;
        width: 100%;
        height: 15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(var(--distance));
        transition: all 0.3s ease-out;
    
    }
`

const TimelineRow = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: end;

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

const ExperienceCardContainer = styled.div`
    display: grid;
    grid-template-columns: 15rem 20rem 15rem;
    width: 50rem;
    height: 100%;
    border-radius: 1rem;
    background-color: rgba(139, 92, 246, 0.2);
`

const ExperienceCardLeft = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
    gap: 1rem;
    filter: drop-shadow(0 0 0.75rem rgb(139 92 246));
`

const ExperieneCardImg = styled.img.attrs(props => ({
    src: props.src,
}))
`
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    width: 15rem;
    height: 15rem;
`

const ExperienceCardLeftBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;

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

const ExperienceCardSkills = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: block;
    filter: drop-shadow(0 0 0.75rem rgb(139 92 246));
`

const ExperienceCardSkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
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

const Experience = () => {
    const [timeTab, setTimeTab] = useState(1);
    const [isPending, startTransition] = useTransition();
    return (
        <ExperiencesSection>
            <ExperiencesWrapper>

                {experiences.map((experience) => (
                    <div key={experience.id} 
                        className='experience'
                        style={{
                            "--distance": `${(experience.id - timeTab) * 5}%`,
                            opacity: timeTab === experience.id ? 1 : 0,
                            
                        }}>
                        <ExperienceCard experience={experience} />
                    </div>
                )
                )}

                <TimeLineWrapper>
                    {experiences.map((experience) => (
                        <TimelineButton
                            key={experience.id}
                            active={timeTab === experience.id}
                            selectTab={() => {
                                startTransition(() => {
                                    setTimeTab(experience.id)
                                })
                            }}
                            title={experience.company}
                        />
                    ))}
                </TimeLineWrapper>

                <TimeLineLine />

            </ExperiencesWrapper>
        </ExperiencesSection>
    )
}

const ExperienceCard = ({ experience }) => {
    return (
        <ExperienceCardContainer>
            <ExperieneCardImg src={experience.img} />
            <ExperienceCardLeft>
                <ExperienceCardLeftBody>
                    <div className='role'>
                        {experience.role}
                    </div>
                    <div className='company'>
                        {experience.company}
                    </div>
                    <div className='duration'>
                        {experience.duration}
                    </div>
                    <div className='description'>
                        {experience?.about &&
                            <div>
                                {experience.about}
                            </div>
                        }
                    </div>
                </ExperienceCardLeftBody>
            </ExperienceCardLeft>
            <ExperienceCardSkills>
                {experience?.skills &&
                    <ExperienceCardSkillsWrapper>
                        {experience?.skills?.map((skill, index) => (
                            <SkillItem key={index}>
                                <div className='skill-item-img'>
                                    {skill.image}
                                </div>
                                {skill.name}
                            </SkillItem>
                        ))}
                    </ExperienceCardSkillsWrapper>
                }
            </ExperienceCardSkills>
        </ExperienceCardContainer>
    )
}

export default Experience