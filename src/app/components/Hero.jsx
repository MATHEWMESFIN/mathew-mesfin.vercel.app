'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    padding: 1rem;

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
            font-size: 3rem;
        }

        .description {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 880px) {

        .type-animation-container {
            font-size: 2rem;
        }

        .description {
            font-size: 1.25rem;
        }
    
    }

    @media (max-width: 640px) {

        .type-animation-container {
            font-size: 1.5rem;
        }
    }
`

const HeroName = styled.h1`
    font-size: 7rem;
    font-weight: 900;
    color: rgb(var(--foreground-color));

    .colored {
        color: rgb(var(--primary-color));
    }

    @media (max-width: 1120px) {
        font-size: 5rem;
    }

    @media (max-width: 880px) {
        font-size: 4rem;
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

    @media (max-width: 1120px) {
        .link {
            font-size: 2rem;
        }
    }
`

const Hero = ({ setActive }) => {
    return (
        <HeroSection>
            <HeroName>
                <span className='colored'>
                    Mathew {" "}
                </span>
                Mesfin
            </HeroName>
            <h2 className='type-animation-container'>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Software Engineer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web Developer',
                        1000,
                        'Full Stack Developer',
                        1000,
                        'Problem Solver',
                        1000
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