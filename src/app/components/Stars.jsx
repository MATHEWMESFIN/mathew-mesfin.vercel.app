import React from 'react';
import starData from './starData';
import styled, { keyframes } from 'styled-components';

const glide = keyframes`
    0%   {
        transform: translate(-20vh, -20vh);
        opacity: 1;
    }
    100%  {
        transform: translate(-120vh, 120vh);
        opacity: 0;
    }
`

const StarBackground = styled.div`
    position: fixed;
    top: 0;
    left: 20vw;
    width: 200%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    user-select: none;
    pointer-events: none;

    .star-img {
        opacity: 0;
        box-shadow: 0 0 1rem 0.5rem rgb(var(--foreground-color));
        filter: blur(1rem);
        width: 10px;
        border-radius: 9999px;
        animation: ${glide} var(--speed) linear infinite;
    }

    .star-img:nth-child(1) {
        animation-delay: var(--delay);
        width: var(--size);
    }
`

const Stars = () => {
  return (
    <>
        <StarBackground>
            {starData.map((star, index) => (
                <div 
                    key={index}
                    style={{
                    '--delay': (Math.floor(Math.random() * 25)) + 's',
                    '--speed': (Math.floor(Math.random() * 20) + 10) + 's',
                    '--size': (Math.floor(Math.random() * 10)) + 'rem',
                    }}>
                    <img src="/images/star.png" className="star-img"/>
                </div>
            ))}
        </StarBackground>
    </>
  )
}

export default Stars