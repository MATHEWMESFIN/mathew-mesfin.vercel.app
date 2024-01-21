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

const CarouselContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 5% 0;

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
    width: 60rem;
    height: 40rem;
    transform: translateX(var(--right-offset));
    transition: all 0.5s ease-out;

    @media (max-width: 1120px) {
        width: 45rem;
        height: 40rem;
    }

    @media (max-width: 880px) {
        width: 30rem;
        height: 45rem;
    }

    @media (max-width: 640px) {
        width: 20rem;
        height: 45rem;
    }
`

const CarouselCard = styled.div`
    width: 100%;
    height: 40rem;
    border: none;
    background-color: transparent;
    color: white;
    text-align: justify;
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

    @media (max-width: 1120px) {
        padding: 2rem;
        height: 40rem;
        
        .title-container {
            margin-bottom: 2rem;
            font-size: 2rem;
        }
    }

    @media (max-width: 880px) {
        padding: 1rem;
        height: 45rem;
        
        .title-container {
            margin-bottom: 1rem;
            font-size: 1.75rem;
        }
    }
`

const MAX_VISIBLE = 1;

const Card = ({ title, content }) => {

    return (
        <CarouselCard>
            {/* {title !== '' && (
                <div className='title-container'>
                    <span className='title'>
                        {title}
                    </span>
                </div>
            )} */}
            {content}
        </CarouselCard>
    )
}

export const Carousel = ({ setActive, active, children }) => {
  
    const count = React.Children.count(children);
    const [scrollLevel, setScrollLevel] = useState(0);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        const scrollFraction = scrollTop / (scrollHeight - clientHeight);
        const scrollLevel = scrollFraction * (count - 1);
        setScrollLevel(scrollLevel);

        const active = Math.round(scrollLevel);
        setActive(active);
    }

    return (
        <CarouselContainer onScroll={handleScroll}>
            {React.Children.map(children, (child, i) => (
                <CarouselCardContainer
                    key={i}
                    style={{
                    "--active": i === active ? 1 : 0,
                    "--right-offset": i <= (active) ? '0' : `calc(${(i - scrollLevel) >= 0 && (i - scrollLevel)}% * 130)`,
                    opacity: Math.abs(active - i) >= MAX_VISIBLE ? '1' : '1',
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
            <Navbar active={active} setActive={setActive}/>
            <Carousel setActive={setActive} active={active}>
                <Card
                    title=''
                    content={<Hero setActive={setActive} />}
                />
                <Card
                    title='Experience'
                    content={<Experience />}
                />
                <Card
                    title='Projects'
                    content={<Projects />}
                />
                <Card
                    title='Contact'
                    content={<Contact />}
                />
            </Carousel>
        </div>
    )
};
