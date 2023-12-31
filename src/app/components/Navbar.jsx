'use client'
import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import navCards from './navCards';
import styled from 'styled-components';

const NavContainer = styled.nav`
    position: absolute;
    display: flex;
    right: 0;
    bottom: 0;
    top: 0;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: all 0.3s ease-out;

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

    @media (max-width: 640px) {
        right: 0;
        top: 0;
        bottom: unset;
        left: 0;

        .nav-main {
            flex-direction: row;
            gap: 1rem;
            padding: 0;
        }
    }
`

const NavDotButton = styled.button`
    border-radius: 9999px;
    font-size: 3rem;
    filter: drop-shadow(0 0 0.75rem var(--filter-color));

    transform: scale(calc(1 + var(--offset) * -3));
    transition: all 0.3s;

    &:hover {
        transform: scaleX(1.2) scaleY(1.2);
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
                                display: Math.abs(active - index) >= MAX_VISIBLE ? 'none' : 'block',
                                '--filter-color': active === card.to ? 'rgb(139 92 246)' : 'white',
                                color: active === card.to ? 'rgb(139 92 246)' : 'white',
                            }}
                        >
                            <GoDotFill/>
                        </NavDotButton>
                    </li>
                ))}
            </ul>
        </NavContainer>
    )
}
