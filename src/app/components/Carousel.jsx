'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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

    @media (max-width: 640px) {
        padding: 1rem;
        
        .title-container {
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
    }
`

const NavigateCardBtn = styled.button`
    position: absolute;
    left: 0;
    right: 0;
    color: white;
    font-size: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    background: unset;
    border: unset;
    filter: drop-shadow(0 0 0.75rem white);

    transition: all 0.3s;
    &:hover {
        color: rgb(139, 92, 246);
        filter: drop-shadow(0 0 0.75rem rgb(139, 92, 246 ));
    }
`

const NavigateCardBtnTop = styled(NavigateCardBtn)`
    top: 3rem;

    @media (max-width: 640px) {
        display: none;
    }
`

const NavigateCardBtnBottom = styled(NavigateCardBtn)`
    bottom: 3rem;

    @media (max-width: 640px) {
        display: none;
    }
`

const CarouselContainer = styled.div`
    position: relative;
    perspective: 500px;
    transform-style: preserve-3d;
    height: 30rem;
    width: 60rem;

    @media (max-width: 640px) {
        height: 35rem;
        width: 20rem;
}
`

const CarouselCardContainer = styled.div`
    position: absolute;
    top: 0;
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
                    display: Math.abs(active - i) > MAX_VISIBLE ? 'none' : 'block',
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
            
            {active >= 1 && (
                <NavigateCardBtnTop onClick={() => setActive((i) => i - 1)}>
                    <FaChevronUp />
                </NavigateCardBtnTop>
            )}
            {active < count - 1 && (
                <NavigateCardBtnBottom onClick={() => setActive((i) => i + 1)}>
                    <FaChevronDown />
                </NavigateCardBtnBottom>
            )}
            <Carousel setActive={setActive} active={active}>
                <Card
                    title=''
                    content={<Hero setActive={setActive} />}
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
                    title='Contact'
                    content={<Contact />}
                />
            </Carousel>
        </div>
    )
};
