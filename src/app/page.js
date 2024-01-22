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

export default function Home() {

    return (
        <HomeContainer>
            <Stars />
            <App />
        </HomeContainer>
    )
}
