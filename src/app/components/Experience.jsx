'use client'
import React, { useState, useEffect } from 'react';
import experiences from './experienceData';
import styled from 'styled-components';
import { GoDot, GoDotFill } from 'react-icons/go';

const ExperiencesSection = styled.div`
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

const ExperiencesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 30rem;
    overflow-x: scroll;

    @media (max-width: 880px) {
        height: 35rem;
    }
`

const ExperienceCardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1rem;
    width: 58rem;
    // safari handles overflow differently so I have to make the height a bit smaller
    height: 29.9rem;
    border-radius: 1rem;

    @media (max-width: 1120px) {
        width: 43rem;
    }

    @media (max-width: 880px) {
        width: 28rem;
        height: 34.9rem;
    }

    @media (max-width: 640px) {
        width: 18rem;
    }
    
`

const ExperienceCardTop = styled.div`
    display: flex;
    width: 100%;
    height: 10rem;
    background-color: rgb(var(--background-color), 0.5);
    border: 0.5px solid rgba(var(--foreground-color), 0.5);
    border-radius: 1rem;
`

const ExperienceCardTopBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 1rem;

    .role {
        font-size: 2rem;
        font-weight: 700;
        color: rgb(var(--primary-color));
    }

    .company {
        font-size: 1.5rem;
        font-weight: 600;
        opacity: 0.75;
    }

    .duration {
        font-size: 1.25rem;
        font-weight: 500;
        opacity: 0.5;
    }

    @media (max-width: 880px) {
        .role {
            font-size: 1.5rem;
        }

        .company {
            font-size: 1.25rem;
        }

        .duration {
            font-size: 1rem;
        }
    }

    @media (max-width: 640px) {
        padding: 0.5rem;

        .role {
            font-size: 1rem;
        }

        .company {
            font-size: 0.75rem;
        }

        .duration {
            font-size: 0.75rem;
        }
    
    }
`

const ExperieneCardImg = styled.img.attrs(props => ({
    src: props.src,
}))
`
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    height: 100%;
`

const ExperienceCardBottom = styled.div`
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

const ExperienceCardBottomBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;

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

const ExperienceCardSkillsWrapper = styled.div`
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

    @media (max-width: 880px) {
        padding: 0.25rem 0.5rem;

        .skill-item-img {
            font-size: 0.75rem;
        }
    
    }
`

const Experience = () => {

    const count = experiences.length;
    const [active, setActive] = useState(0);

    const [scroll, setScroll] = useState(0);
    const [width, setWidth] = useState(0);
    const [scrollLevel, setScrollLevel] = useState(0);

    const experiencesRef = React.createRef();

    useEffect(() => {
        const element = experiencesRef.current;
        setScroll(element.scrollLeft);
        setWidth(element.offsetWidth);
    }, []);

    const handleScroll = () => {
        const element = experiencesRef.current;
        setScroll(element.scrollLeft);
        setWidth(element.offsetWidth);
        setScrollLevel(scroll / width);
        const index = Math.round(scrollLevel);
        setActive(index);

        element.onscrollend = () => {
            element.scrollTo({
                left: index * (width),
                behavior: 'smooth',
            });
        }
    }

    const handleDotClick = (index) => {
        const element = experiencesRef.current;
        element.scrollTo({
            left: index * (width),
            behavior: 'smooth',
        });
    }

    return (
        <ExperiencesSection>
            <Title>
                Experience
            </Title>
            <ExperiencesWrapper onScroll={handleScroll} ref={experiencesRef}>
                {experiences.map((experience, i) => (
                    <div key={i}
                        className='experience'>
                        <ExperienceCard experience={experience} />
                    </div>
                ))}
            </ExperiencesWrapper>
            <div className='dots'>
                {experiences.map((experience, i) => (
                    <div key={i} className='dot'
                        onClick={() => handleDotClick(i)}
                        style={{
                            '--color-offset': i === active ? 'rgb(var(--primary-color))' : 'rgb(var(--foreground-color))',
                        }}>
                        {i === active ? <GoDotFill /> : <GoDot />}
                    </div>
                ))}
            </div>
        </ExperiencesSection>
    )
}

const ExperienceCard = ({ experience }) => {
    return (
        <ExperienceCardContainer>

            <ExperienceCardTop>
                <ExperieneCardImg src={experience.img} />
                <ExperienceCardTopBody>
                    <div className='role'>
                        {experience.role}
                    </div>
                    <div className='company'>
                        {experience.company}
                    </div>
                    <div className='duration'>
                        {experience.duration}
                    </div>
                </ExperienceCardTopBody>
            </ExperienceCardTop>

            <ExperienceCardBottom>
                <ExperienceCardBottomBody>
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