'use client'
import React from 'react';
import navCards from './navCards';
import styled from 'styled-components';
import { GoDot } from "react-icons/go";

const NavContainer = styled.nav`
    position: absolute;
    display: flex;
    left: 2rem;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    z-index: 2;

    .nav-main {
        display: flex;
        flex-direction: column;
        width: 4rem;
        height: 18rem;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
    }

    @media (max-width: 640px) {
        left: 0;

        .nav-main {
            width: 2rem;
            height: 18rem;
            padding: 0.5rem;
        }
    }
`

const NavDot= styled.div`
    border-radius: 9999px;
    opacity: var(--opacity-offset);
    font-size: var(--font-size-offset);
    color: var(--color-offset);
    transition: all 0.3s;
`

export const Navbar = ({active, setActive}) => {

    return (
        <NavContainer>
            <ul className='nav-main'>
                {navCards.map((card, index) => (
                    <li key={index}>
                        <NavDot
                            style={{
                                '--active': card.to,
                                '--offset': Math.abs(active - index) / 5,
                                '--opacity-offset': active === card.to ? 1 : 0.5,
                                '--font-size-offset': active === card.to ? '2rem' : '1rem',
                                '--color-offset': active === card.to ? 'rgb(var(--primary-color))' : 'rgb(var(--foreground-color))'
                            }}
                        >
                            {card.icon}
                        </NavDot>
                    </li>
                ))}
            </ul>
        </NavContainer>
    )
}
