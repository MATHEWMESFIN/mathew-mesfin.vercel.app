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

    @media (max-width: 1120px) {
        height: 20rem;
    }

    @media (max-width: 880px) {
        height: 30rem;
    }
`

const ExperiencesWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    .experience-container {
        width: 100%;
        height: 17rem;
        position: absolute;
        top: 0;
        background-color: rgba(139, 92, 246, 0.2);
        border-radius: 1rem;

        .experience {
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
        .experience-container {
            height: 17rem;
        }
    }

    @media (max-width: 880px) {
        .experience-container {
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

const ExperienceCardContainer = styled.div`
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
        width: 100%;
        height: 100%;
        text-align: left;
        justify-content: space-around;
    }
`

const ExperienceCardLeft = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;

    @media (max-width: 640px) {
        padding: 0.5rem;
    }
`

const ExperieneCardImg = styled.img.attrs(props => ({
    src: props.src,
}))
`
    border-radius: 9999px;
    width: 10rem;
    height: 10rem;
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
        color: rgb(139, 92, 246);
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

const ExperienceCardSkillsWrapper = styled.div`
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
    background-color: rgb(139, 92, 246);
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

const Experience = () => {
    const [timeTab, setTimeTab] = useState(1);
    const [isPending, startTransition] = useTransition();
    return (
        <ExperiencesSection>
            <ExperiencesWrapper>
                <div className='experience-container'>
                    {experiences.map((experience) => (
                        <div key={experience.id} 
                            className='experience'
                            style={{
                                "--distance": timeTab === experience.id ? '0' : timeTab > experience.id ? '-40%' : '40%',
                                zIndex: timeTab === experience.id ? 1 : 0,
                                opacity: timeTab === experience.id ? 1 : 0,
                                
                            }}>
                            <ExperienceCard experience={experience} />
                        </div>
                    )
                    )}
                </div>

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
                </ExperienceCardLeftBody>
            </ExperienceCardLeft>

        </ExperienceCardContainer>
    )
}

export default Experience