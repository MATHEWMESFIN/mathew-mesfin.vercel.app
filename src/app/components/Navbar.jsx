'use client'
import React, { useState } from 'react';
import navCards from './navCards';
import styled from 'styled-components';

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

    @media (max-width: 880px) {
        right: 1rem;

        .nav-main {
            width: 3rem;
            height: 15rem;
        }
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
    position: relative;
    display: flex;
    width: 4rem;
    height: 4rem;
`

const LogoImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    transition: all 0.4s;
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

export const Navbar = ({active, setActive, handleNavClick, handleSpecialName}) => {

    const handleLogoClick = () => {
        handleNavClick(0);
        handleSpecialName();
    }

    const [logoHover, setLogoHover] = useState(false);

    return (
        <NavContainer>
            <NavLogo>
                <LogoImage 
                    src='/images/portfolio-pic.png' 
                    style={{
                        opacity: logoHover ? 0 : 1,
                    }} />
                <LogoImage 
                    onMouseEnter={() => setLogoHover(true)} onMouseOut={() => setLogoHover(false)}
                    onClick={() => handleLogoClick()}
                    src='/images/portfolio-pic-purple.png' 
                    style={{
                        opacity: logoHover ? 1 : 0,
                    }} />
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
