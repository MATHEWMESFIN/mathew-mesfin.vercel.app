'use client'
import React, { useState } from 'react';
import navCards from './navCards';
import styled from 'styled-components';

const NavContainer = styled.nav`
    position: absolute;
    display: flex;
    right: -5rem;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    z-index: 2;

    .nav-main {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: 9999px;
        background-color: rgba(0, 0, 0, 0.9);
    }

    @media (max-width: 1120px) {

    }

    @media (max-width: 640px) {
        bottom: -3rem;
        right: 0;
        left: 0;
        top: unset;

        .nav-main {
            flex-direction: row;
            gap: 1rem;
            padding: 0 0.5rem;
        }
    }
`

const NavDotButton = styled.button`
    border-radius: 9999px;
    opacity: var(--opacity-offset);
    font-size: var(--font-size-offset);
    filter: drop-shadow(0 0 0.75rem var(--filter-color));

    /* transform: scale(calc(1 + var(--offset) * -3)); */
    transition: all 0.3s;

    &:hover {
        transform: scaleX(1.5) scaleY(1.5);
        opacity: 1;
    }
`

export const Navbar = ({active, setActive}) => {
    
    const MAX_VISIBLE = 3;

    return (
        <NavContainer>
            <ul className='nav-main'>
                {navCards.map((card, index) => (
                    <li key={index}>
                        <NavDotButton
                            onClick={() => setActive(card.to)}
                            style={{
                                '--active': card.to,
                                '--offset': Math.abs(active - index) / 5,
                                '--filter-color': active === card.to ? 'rgb(139 92 246)' : 'white',
                                '--opacity-offset': active === card.to ? 1 : 0.5,
                                '--font-size-offset': active === card.to ? '2rem' : '1rem',
                                color: active === card.to ? 'rgb(139 92 246)' : 'white',
                            }}
                        >
                            {card.icon}
                        </NavDotButton>
                    </li>
                ))}
            </ul>
        </NavContainer>
    )
}
