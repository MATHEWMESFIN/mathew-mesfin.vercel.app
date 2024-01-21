'use client'
import React from 'react';
import { App } from './components/Carousel';
import Stars from './components/Stars';
import styled, { keyframes } from 'styled-components';

const HomeContainer = styled.div`
    position: relative;
    background-color: black;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const BackGroundImageCorner = styled.div`
    position: absolute;
    left: -11rem;
    top: -11rem;
    height: 22rem;
    width: 22rem;
    background-color: rgb(var(--background-color), 0.8);
    border: 1px solid rgb(var(--primary-color));
    transform: rotate(45deg);
    z-index: 1;

    @media (max-width: 1120px) {
        height: 18rem;
        width: 18rem;
        left: -9rem;
        top: -9rem;
    }

    @media (max-width: 880px) {
        height: 14rem;
        width: 14rem;
        left: -7rem;
        top: -7rem;
    }

    @media (max-width: 640px) {
        height: 10rem;
        width: 10rem;
        left: -5rem;
        top: -5rem;
    }

`

const BackGroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    height: 10rem;
    width: 10rem;
    z-index: 2;

    @media (max-width: 1120px) {
        height: 8rem;
        width: 8rem;
    }

    @media (max-width: 880px) {
        height: 6rem;
        width: 6rem;
    }

    @media (max-width: 640px) {
        height: 4rem;
        width: 4rem;
    }
`

export default function Home() {

    return (
        <HomeContainer>
            <BackGroundImageCorner />
            <BackGroundImage src='/images/portfolio-pic.png' />
            <Stars />
            <App />
        </HomeContainer>
    )
}
