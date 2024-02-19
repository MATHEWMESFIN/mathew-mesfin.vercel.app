'use client'
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 40rem;
    border-radius: 1rem;

    .type-animation-container {
        color: rgb(var(--foreground-color));
        font-size: 5rem;
        font-weight: 800;
    }

    .description {
        color: rgb(203 213 225);
        text-align: left;
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 1120px) {
            
        .type-animation-container {
            font-size: 4rem;
        }
    }

    @media (max-width: 880px) {
        height: 45rem;

        .type-animation-container {
            font-size: 2.5rem;
        }

        .description {
            font-size: 1.5rem;
        }
    
    }

    @media (max-width: 640px) {

        .type-animation-container {
            font-size: 1.5rem;
        }
    }
`

const bounce = keyframes`
    0%   { transform: scale(1,1) translateY(0); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-55px);}
        50%  { transform: scale(1.05,.95) translateY(0); }
        58%  { transform: scale(1,1) translateY(-7px); }
        65%  { transform: scale(1,1) translateY(0);}
        100% { transform: scale(1,1) translateY(0);}
`

const HeroName = styled.h1`
    font-size: 6rem;
    font-weight: 900;
    color: rgb(var(--foreground-color));

    .colored {
        display: inline-block;
        color: rgb(var(--primary-color));
    }

    .special {
        display: inline-block;
        cursor: pointer;
    }

    .animate-special {
        animation: ${bounce} 1s ease infinite;
    }

    @media (max-width: 1120px) {
        font-size: 5rem;
    }

    @media (max-width: 880px) {
        font-size: 3rem;
    }
`

const HeroButtons = styled.div`
    display: flex;
    gap: 1rem;

    .link {
        font-size: 3rem;
        color: rgb(var(--foreground-color));
        transition: all 0.3s ease-in-out;

        &:hover {
            color: rgb(var(--primary-color));
            scale: 1.1;
        }
    }

    @media (max-width: 880px) {
        .link {
            font-size: 2rem;
        }
    }
`

const Hero = ({ handleSpecialName, specialNameAnimation }) => {

    return (
        <HeroSection>
            <HeroName>
                <div className='colored'>
                    MA 
                    <div 
                        className={specialNameAnimation? 'special animate-special': 'special'} 
                        onClick={handleSpecialName}>
                        T
                    </div>
                    HEW
                </div>
                {" "}MESFIN
            </HeroName>
            <h2 className='type-animation-container'>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Software Engineer',
                        1000, // wait 1s before replacing the string
                        'Web Developer',
                        1000,
                        'Full Stack Developer',
                        1000,
                        'Problem Solver',
                        1000,
                        'Data Scientist',
                        1000,
                        'Student',
                        1000,
                        'Lab Admin',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block'}}
                    repeat={Infinity}
                    />
            </h2>
            <p className='description'>
                A man who finds happiness on the path to success.
            </p>
            <HeroButtons>
                <Link className='link' href='/Resume - Mathew Mesfin.pdf' target='_blank'>
                    <FaFileAlt />
                </Link>
                <Link href='https://github.com/MATHEWMESFIN' target='_blank' className='link'>
                    <FaGithub />
                </Link>
                <Link href='https://www.linkedin.com/in/mathew-mesfin-9b1610234/' target='_blank' className='link'>
                    <FaLinkedin />
                </Link>
            </HeroButtons>
        </HeroSection>
    )
}

export default Hero