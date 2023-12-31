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
    flex-direction: row;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`

const SkillPanel = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    .active-tab {
        position: absolute;
        width: 90%;
        height: var(--skill-height);
        border-radius: 1rem;
        background-color: rgba(139, 92, 246, 0.2);
        transform: translateY(var(--distance));
        transition: transform 0.3s ease-out;
    }

    @media (max-width: 640px) {
        flex-direction: row;
        justify-content: space-around;
        height: 10rem;

        .active-tab {
            width: var(--skill-width);
            height: 90%;
            transform: translateX(var(--distance-small));
        
        }
    }
`

const SkillTypeContainer = styled.div`
    position: relative;
    background-color: rgba(139, 92, 246, 0.2);
    border-radius: 1rem;
    width: 130rem;
    height: 20rem;

    @media (max-width: 640px) {
        width: 100%;
        height: 22rem;
    
    }
`

const Skill = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    height: 100%;
    border: none;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 1rem;
    transform: translateY(var(--skill-offset));
    transition: all 0.3s ease-in;
`

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    gap: 1rem;
    background-color: rgba(139, 92, 246);
    color: white;

    .skill-item-img {
        font-size: 2rem;
    }

    @media (max-width: 640px) {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        gap: 0.5rem;
        
    
            .skill-item-img {
                font-size: 1.5rem;
            }
        
    }

`

const Skills = () => {
    const [tab, setTab] = useState(1);
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
                            "--skill-height": `${20 / 3}rem`,
                            "--distance-small": `${tab - 2}00%`,
                            "--skill-width": `${18 / 3}rem`,
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
                "--skill-offset": tab === skill.id ? '0' : tab > skill.id ? '-30%' : '30%',
                opacity: tab === skill.id ? '1' : '0'
            }}>
                {skill.skills.map((item) => (
                    <SkillItem key={item.id}>
                        <div className='skill-item-img'>
                            {item.image}
                        </div>
                        {item.name}
                    </SkillItem>
                ))}
        </Skill>
    )
}

export default Skills