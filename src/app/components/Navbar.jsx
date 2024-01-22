'use client'
import React from 'react';
import navCards from './navCards';
import styled from 'styled-components';
import { GoDot } from "react-icons/go";

const NavContainer = styled.nav`
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 2rem;
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
        right: 0;

        .nav-main {
            width: 2rem;
            height: 12rem;
        }
    }
`

const NavLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LogoImage = styled.img`
    width: 4rem;

    @media (max-width: 640px) {
        width: 2rem;
    }
`

const NavDot= styled.div`
    border-radius: 9999px;
    font-size: var(--font-size-offset);
    color: var(--color-offset);
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        color: rgb(var(--primary-color));
    }
`

export const Navbar = ({active, setActive, handleNavClick}) => {

    return (
        <NavContainer>
            <NavLogo>
                <LogoImage src='/images/portfolio-pic.png'/>
            </NavLogo>
            <ul className='nav-main'>
                {navCards.map((card, index) => (
                    <li key={index}>
                        <NavDot
                            onClick={() => handleNavClick(card.to)}
                            style={{
                                '--font-size-offset': active === card.to ? '2rem' : '1rem',
                                '--color-offset': active === card.to ? 'rgb(var(--primary-color))' : 'rgb(var(--foreground-color), 0.5)'
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
