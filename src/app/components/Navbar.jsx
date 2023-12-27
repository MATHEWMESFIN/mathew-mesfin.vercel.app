'use client'
import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import navCards from './navCards';
import styled from 'styled-components';

const NavContainer = styled.nav`
    position: absolute;
    display: flex;
    right: 2.5rem;
    bottom: 0;
    top: 0;
    align-items: center;
    justify-content: center;

    @media screen {
        @media (max-width: 768px) {
            display: none;
        }
    }

    .nav-main {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }
`

const NavDotButton = styled.button`
    border-radius: 9999px;
    font-size: 1.5rem;

    transform: scaleX(calc(1 + var(--offset) * -2))
        scaleY(calc(1 + var(--offset) * -2));
    transition: all 0.3s;

    &:hover {
        transform: scaleX(1.5) scaleY(1.5);
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
