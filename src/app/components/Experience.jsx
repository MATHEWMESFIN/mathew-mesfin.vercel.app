'use client'
import React, { useState } from 'react';
import experiences from './experienceData';
import styled from 'styled-components';
import { GoDot } from 'react-icons/go';
import { XSlidingSection, XSlidingWrapper, XSlidingCardContainer } from './XSlidingStyles';

const ExperiencesSection = styled(XSlidingSection)`

`

const ExperiencesWrapper = styled(XSlidingWrapper)`
    
`

const ExperienceCardContainer = styled(XSlidingCardContainer)`
    
`

const ExperieneCardImg = styled.img.attrs(props => ({
    src: props.src,
}))
`
    border-radius: 1rem;
    width: 10rem;
`

const ExperienceCardBottom = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 640px) {
        padding: 0.5rem;
    }
`

const ExperienceCardBottomBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    .role {
        font-size: 1.25rem;
        font-weight: 500;
        color: rgb(var(--primary-color));
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
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    background-color: rgb(var(--primary-color));
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

    const count = experiences.length;
    const [active, setActive] = useState(0);

    const handleScroll = (e) => {
        const element = e.target;
        const scroll = element.scrollLeft;
        const width = element.offsetWidth;
        const index = Math.round((scroll / width));
        setActive(index);
    }

    return (
        <ExperiencesSection>
            <ExperiencesWrapper onScroll={handleScroll}>
                {experiences.map((experience, i) => (
                    <div key={i}>
                        <ExperienceCard experience={experience} />
                    </div>
                ))}
            </ExperiencesWrapper>
            <div className='dots'>
                {experiences.map((experience, i) => (
                    <div key={i} className='dot'
                        style={{
                            '--color-offset': i === active ? 'rgb(var(--primary-color))' : 'rgb(var(--foreground-color))',
                        }}>
                        <GoDot/>
                    </div>
                ))}
            </div>
        </ExperiencesSection>
    )
}

const ExperienceCard = ({ experience }) => {
    return (
        <ExperienceCardContainer>
            <ExperieneCardImg src={experience.img} />
            <ExperienceCardBottom>
                <ExperienceCardBottomBody>
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
                </ExperienceCardBottomBody>
            </ExperienceCardBottom>

        </ExperienceCardContainer>
    )
}

export default Experience