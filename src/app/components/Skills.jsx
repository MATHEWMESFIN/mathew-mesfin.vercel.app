'use client'
import React, { useState, useTransition } from 'react';
import skills from './skillsData';
import TabButton from './TabButton';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SkillsSection = styled.div`
 
`

const SkillsWrapper = styled.div`
    display: flex;
`

const SkillPanel = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    .active-tab {
        position: absolute;
        width: 100%;
        height: var(--skill-height);
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateY(var(--distance));
        transition: transform 0.3s ease-out;
    }
`

const SkillTypeContainer = styled.div`
    position: relative;
    width: 100rem;
    height: 20rem;
`

const Skill = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 0.5rem 1rem;
    transform: translateY(calc(var(--skill-offset) * -22rem));
    transition: transform 0.3s ease-in;

    .skill-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        text-align: center;
    }

    .skill-list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
    }
`

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    background-color: black;
    color: white;
    filter: drop-shadow(0 0 0.25rem white);

`

const Skills = () => {
    const [tab, setTab] = useState(1)
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return (
        <SkillsSection>
            <SkillsWrapper>
                <SkillPanel >
                    <div 
                        className='active-tab'
                        style={{
                            "--distance": `${tab - 1}00%`,
                            "--skill-height": `${20 / 3}rem`
                        }}
                        />
                    <TabButton 
                        active={tab === 1}
                        selectTab={() => handleTabChange(1)}
                        title='Frontend' />
                    <TabButton 
                        active={tab === 2}
                        selectTab={() => handleTabChange(2)}
                        title='Backend' />
                    <TabButton 
                        active={tab === 3}
                        selectTab={() => handleTabChange(3)}
                        title='Other' />
                </SkillPanel>
            <SkillTypeContainer>
                
                {skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} tab={tab} />
                ))}

            </SkillTypeContainer>

            </SkillsWrapper>
        </SkillsSection>
    )
}

const SkillCard = ({ skill, tab }) => {

    return (
        <Skill
            style={{
                "--skill-offset": (tab - skill.id),
                display: tab === skill.id ? 'flex' : 'none'
            }}>
            {/* <div className='skill-title'>
                {skill.title}
            </div> */}
            <div className='skill-list'>
                {skill.skills.map((item) => (
                    <SkillItem key={item.id}>
                        <div className='skill-item-img'>
                            {item.image}
                        </div>
                        {item.name}
                    </SkillItem>
                    
                ))}
            </div>
        </Skill>
    )
}

export default Skills