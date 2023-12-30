'use client'
import React from 'react';
import { App } from './components/Carousel';
import starData from './components/starData';
import styled, { keyframes } from 'styled-components';

const HomeContainer = styled.div`
    background-color: black;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const glideTop = keyframes`
    0%   {
        transform: translate(0, 0);
        opacity: 0;
    }
    50%  {
        opacity: 0.4;
    }
    70%  {
        opacity: 0.4;
    }
    100%  {
        transform: translate(100vh, 100vh);
        opacity: 0;
    }
`

const glideBottom = keyframes`
    0%   {
        transform: translate(0, 0);
        opacity: 0;
    }
    50%  {
        opacity: 0.4;
    }
    70%  {
        opacity: 0.4;
    }
    100%  {
        transform: translate(-100vh, -100vh);
        opacity: 0;
    }
`

const StarBackground = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    user-select: none;
    pointer-events: none;

    .star-img {
        opacity: 0;
        filter: drop-shadow(0rem 0rem 0.2rem white);
        width: 10px;
        border-radius: 9999px;
    }

    .star-img:nth-child(1) {
        animation-delay: var(--delay);
        width: var(--size);
    }
`

const StarBackgroundTop = styled(StarBackground)`
    top: 0;

    .star-img {
        animation: ${glideTop} 20s linear reverse infinite,
            pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
`

const StarBackgroundBottom = styled(StarBackground)`
    bottom: 0;

    .star-img {
        animation: ${glideBottom} 20s linear infinite,
            pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
`

export default function Home() {

    return (
        <HomeContainer>
        <StarBackgroundTop>
            {starData.map((star, index) => (
                <div 
                    key={index}
                    style={{
                    '--delay': (star.tag) + 's',
                    '--size': (Math.floor(Math.random() * star.tag) + 5) + 'px',
                    }}>
                    <img src="/images/star.jpeg" className="star-img"/>
                </div>
            ))}
        </StarBackgroundTop>

        <StarBackgroundBottom>
            {starData.map((star, index) => (
                <div 
                    key={index}
                    style={{
                    '--delay': (star.tag) + 's',
                    '--size': (Math.floor(Math.random() * star.tag) + 5) + 'px',
                    }}>
                    <img src="/images/star.jpeg" className="star-img"/>
                </div>
            ))}
        </StarBackgroundBottom>

        <App />
        </HomeContainer>
    )
}
