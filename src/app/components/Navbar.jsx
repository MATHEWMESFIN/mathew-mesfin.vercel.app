'use client'
import React from 'react';
import navCards from './navCards';
import styled from 'styled-components';

const NavContainer = styled.nav`
    position: absolute;
    display: flex;
    right: 0;
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
        border-radius: 9999px;
        background-color: rgb(var(--primary-color), 0.2);
    }

    @media (max-width: 1120px) {

    }

    @media (max-width: 640px) {
        bottom: 2rem;
        right: 0;
        left: 0;
        top: unset;

        .nav-main {
            flex-direction: row;
            width: 14rem;
            height: 3rem;
        }
    }
`

const NavDotButton = styled.button`
    border-radius: 9999px;
    opacity: var(--opacity-offset);
    font-size: var(--font-size-offset);

    transition: all 0.3s;

    &:hover {
        transform: scaleX(var(--scale-offset)) scaleY(var(--scale-offset));
        opacity: 1;
    }
`

export const Navbar = ({active, setActive}) => {

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
                                '--scale-offset': active === card.to ? '1' : '1.5',
                                cursor: active === card.to ? 'default' : 'pointer',
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
