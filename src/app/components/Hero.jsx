'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import Link from 'next/link';

const HeroSection = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const HeroLeft = styled.div`
    grid-column: span 7 / span 7;
    align-items: center;
    justify-content: center;

    .type-animation-container {
        color: white;
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .description {
        color: rgb(203 213 225);
        font-size: 1.25rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 640px) {

        .type-animation-container {
            font-size: 1.5rem;
        }

        .description {
            font-size: 1rem;
        }
    
    }
`

const HeroName = styled.h1`
    font-size: 4rem;
    font-weight: 800;
    color: white;

    transition: all 0.3s;

    .colored {
        color: rgb(139 92 246);
    }

    @media (max-width: 640px) {
        font-size: 2rem;
    }
`

const HeroButtons = styled.div`
    display: flex;
    gap: 1rem;

    .resume-link {
        border-radius: 9999px;
    }

    .resume-btn {
        background-color: transparent;
        padding: 1rem 2rem;
        border-radius: 9999px;
        border: 2px solid rgb(139 92 246);
        color: rgb(139 92 246);
        font-weight: 600;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: rgb(139 92 246);
            transform: scale(1.1);
            color: white;
        }

        .resume-link {
            display: flex;
            width: 100%;
            height: 100%;
        }
    
    }

    .contact-btn {
        background-color: black;
        padding: 1rem 2rem;
        border-radius: 9999px;
        border: 2px solid white;
        color: white;
        font-weight: 600;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: white;
            transform: scale(1.1);
            color: black;
        }
    }
`

const HeroRight = styled.div`
    grid-column: span 5 / span 5;
    align-items: center;
    justify-content: center;

    .hero-img-container {
        position: relative;
        border-radius: 9999px;
        filter: drop-shadow(0 0 0.75rem white);
        margin-left: 2rem;

        .hero-img {
            border-radius: 9999px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    @media (max-width: 640px) {
        
        .hero-img-container {
            margin-left: 0;
            margin-bottom: 5rem;

            .hero-img {
                width: 13rem;
                height: 13rem;
            }
        }
    
    }
`

const Hero = ({ setActive }) => {
  return (
    <HeroSection>
        <HeroContainer>
            <HeroLeft>
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
                    <button className='contact-btn' onClick={() => setActive(4)}>
                        Contact
                    </button>
                    <Link className='resume-link' href='/Resume - Mathew Mesfin_2023.pdf' target='_blank'>
                        <button className='resume-btn'>
                            Resume
                        </button>
                    </Link>
                </HeroButtons>
            </HeroLeft>
            <HeroRight>
                <div className='hero-img-container'>
                    <img
                        src='/images/profile-pic.png'
                        className='hero-img'/>
                </div>
            </HeroRight>
        </HeroContainer>
    </HeroSection>
  )
}

export default Hero