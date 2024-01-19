'use client'
import React, { useState } from 'react';
import { BiSolidBriefcase, BiSolidMessageRounded } from "react-icons/bi";
import { FaCode, FaUserCircle } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import Skills from './Skills';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import { Navbar } from './Navbar';
import styled from 'styled-components';

const CarouselCard = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 1rem;
    background-color: transparent;
    color: white;
    text-align: justify;
    padding: 2.5rem;
    transition: all 0.3s ease-out;

    .title-container {
        margin-bottom: 1rem;
        font-size: 3rem;
        font-weight: 800;
        text-align: center;
    }

    .title {
        color: rgb(var(--primary-color));
    }

    .card-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 200vh;
        color: rgb(var(--foreground-color), 0.3);
        filter: blur(2rem);
        z-index: -1;
    }

    @media (max-width: 1120px) {
        padding: 2rem;
        
        .title-container {
            margin-bottom: 2rem;
            font-size: 1.75rem;
        }
    }

    @media (max-width: 880px) {
        padding: 1rem;
        
        .title-container {
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
    }
`

const CarouselContainer = styled.div`
    position: relative;
    perspective: 500px;
    transform-style: preserve-3d;
    width: 70rem;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1120px) {
        width: 55rem;
        height: 40rem;
    }

    @media (max-width: 880px) {
        width: 40rem;
        height: 45rem;
    }

    @media (max-width: 640px) {
        width: 30rem;
        height: 45rem;
    }
`

const CarouselCardContainer = styled.div`
    position: absolute;
    width: 60rem;
    height: 30rem;
    transform: rotateX(calc(var(--offset) * 50deg)) 
        scaleX(calc(1 + var(--abs-offset) * -0.1)) 
        translateZ(calc(var(--abs-offset) * -30rem)) 
        translateY(calc(var(--direction) * -30rem));
    filter: blur(calc(var(--abs-offset) * 1rem));
    transition: all 0.5s ease-out;

    @media (max-width: 1120px) {
        width: 45rem;
        height: 30rem;
    }

    @media (max-width: 880px) {
        width: 30rem;
        height: 35rem;
    }

    @media (max-width: 640px) {
        width: 20rem;
        height: 35rem;
    }
`

const MAX_VISIBLE = 1;

const Card = ({ title, content, background }) => (
    <CarouselCard>
        {title !== '' && (
            <div className='title-container'>
                <span className='title'>
                    {title}
                </span>
            </div>
        )}
        {/* <div className='card-background'>
            {background}
        </div> */}
        {content}
    </CarouselCard>
)

export const Carousel = ({ setActive, active, children }) => {
  
  const count = React.Children.count(children);

    return (
        <CarouselContainer>
            <Navbar active={active} setActive={setActive}/>
            {React.Children.map(children, (child, i) => (
                <CarouselCardContainer
                    key={i}
                    style={{
                    "--active": i === active ? 1 : 0,
                    "--offset": (active - i) / 3,
                    "--direction": Math.sign(active - i),
                    "--abs-offset": Math.abs(active - i) / 3,
                    "pointerEvents": active === i ? 'auto' : 'none',
                    opacity: Math.abs(active - i) >= MAX_VISIBLE ? '0' : '1',
                    }}
                >
                    {child}
                </CarouselCardContainer>
            ))}
        </CarouselContainer>
    );
};

export const App = () => {
    const [active, setActive] = useState(0);
    const count = 5;

    return(
        <div className='app'>
            <Carousel setActive={setActive} active={active}>
                <Card
                    title=''
                    content={<Hero setActive={setActive} />}
                    background={<FaUserCircle />}
                />
                <Card
                    title='Skills'
                    content={<Skills />}
                    background={<IoStatsChart />}
                />
                <Card
                    title='Experience'
                    content={<Experience />}
                    background={<BiSolidBriefcase />}
                />
                <Card
                    title='Projects'
                    content={<Projects />}
                    background={<FaCode />}
                />
                <Card
                    title='Contact'
                    content={<Contact />}
                    background={<BiSolidMessageRounded />}
                />
            </Carousel>
        </div>
    )
};
