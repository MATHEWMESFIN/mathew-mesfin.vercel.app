import React from "react";
import styled from "styled-components";

export const XSlidingSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40rem;

    .dots {
        display: flex;
        height: 5rem;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: rgba(var(--foreground-color));

        .dot {
            color: var(--color-offset);
            transition: all 0.3s ease-in-out;
        }
    }
`

export const XSlidingTitle = styled.div`
    display: flex;
    flex-direction: row;
    height: 5rem;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 800;
    color: rgba(var(--foreground-color));
`

export const XSlidingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 30rem;
    overflow-x: scroll;
    gap: 2rem;
`

export const XSlidingCardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 60rem;
    height: 30rem;
    border-radius: 1rem;
    border: 1px solid rgba(var(--primary-color));
`