'use client'
import React, { useState, useTransition } from 'react';
import skills from './skillsData';
import styled from 'styled-components';

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 20rem;
    gap: 1rem;
    padding: 1rem;
    background-color: rgba(139, 92, 246, 0.2);
    border-radius: 1rem;
    overflow: auto;

    @media (max-width: 1120px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 880px) {
        height: 30rem;
        gap: 0.5rem;
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    
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
    gap: 1rem;
    background-color: rgba(139, 92, 246, 0.75);
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        background-color: rgba(139, 92, 246);

        .skill-item-img {
            transform: rotate(360deg);
        }
    }

    .skill-item-img {
        font-size: 2rem;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 880px) {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        gap: 0.5rem;
        
    
            .skill-item-img {
                font-size: 1.5rem;
            }
    }
`

export const Skills = () => {

    return (
        <SkillsContainer>
            {skills.map((skill) => (
                <SkillItem className='skill-item' key={skill.id}>
                    <div className='skill-item-img'>
                        {skill.image}
                    </div>
                    {skill.name}
                </SkillItem>
            ))}
        </SkillsContainer>
    )
}

export default Skills