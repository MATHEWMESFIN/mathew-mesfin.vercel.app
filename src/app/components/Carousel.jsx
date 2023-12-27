'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Skills from './Skills';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import { Navbar } from './Navbar';
import styled from 'styled-components';

const CarouselCard = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 1rem;
    background-color: black;
    color: white;
    text-align: justify;
    padding: 2.5rem;
    transition: all 0.3s ease-out;
    filter: drop-shadow(0 0 0.75rem white);

    .title-container {
        border-bottom: 2px solid rgb(139, 92, 246);
        margin-bottom: 2rem;
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        filter: drop-shadow(0 0 0.75rem rgb(139, 92, 246));
    }

    .title {
        color: rgb(139, 92, 246);
    }
`

const NavigateCardBtn = styled.button`
    color: white;
    font-size: 5rem;
    /* position: absolute; */
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    background: unset;
    border: unset;
    transition: all 0.3s;
    position: relative;
    margin: auto;
    filter: drop-shadow(0 0 0.75rem white);

    &:hover {
        color: rgb(139, 92, 246);
        filter: drop-shadow(0 0 0.75rem rgb(139, 92, 246 ));
    }
`

const CarouselContainer = styled.div`
    position: relative;
    perspective: 500px;
    transform-style: preserve-3d;
    height: 30rem;
    width: 60rem;
`

const CarouselCardContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateX(calc(var(--offset) * 50deg)) 
        scaleX(calc(1 + var(--abs-offset) * -0.1)) 
        translateZ(calc(var(--abs-offset) * -30rem)) 
        translateY(calc(var(--direction) * -30rem));
    filter: blur(calc(var(--abs-offset) * 1rem));
    transition: all 0.3s ease-out;
`

const MAX_VISIBLE = 3;

const Card = ({ title, content }) => (
    <CarouselCard>
        {title !== '' && (
            <div className='title-container'>
                <span className='title'>
                    {title}
                </span>
            </div>
        )}
        {content}
    </CarouselCard>
)

export const Carousel = ({ setActive, active, children }) => {
  
  const count = React.Children.count(children);

    return (
        <div>
        {active >= 1 && (
            <NavigateCardBtn onClick={() => setActive((i) => i - 1)}>
                <FaChevronUp />
            </NavigateCardBtn>
        )}
        {/* carousel relative lg:w-[70rem] md:w-[55rem] h-[30rem] w-[40rem] */}
        <CarouselContainer>
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
                    display: Math.abs(active - i) > MAX_VISIBLE ? 'none' : 'block',
                    }}
                >
                    {child}
                </CarouselCardContainer>
            ))}
        </CarouselContainer>
        {active < count - 1 && (
            <NavigateCardBtn onClick={() => setActive((i) => i + 1)}>
                <FaChevronDown />
            </NavigateCardBtn>
        )}
        </div>
    );
};

export const App = () => {
    const [active, setActive] = useState(0);
    return(
        <div className='app'>
        <Navbar active={active} setActive={setActive}/>
        <Carousel setActive={setActive} active={active}>
            <Card
                title=''
                content={<Hero />}
            />
            <Card
                title='Skills'
                content={<Skills />}
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
                title=''
                content={<div className='contact' />}
            />
        </Carousel>
        </div>
    )
};
