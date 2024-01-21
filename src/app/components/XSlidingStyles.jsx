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

export const XSlidingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 35rem;
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
    height: 35rem;
    border-radius: 1rem;
    padding: 1rem 2rem;
    border: 1px solid rgba(var(--primary-color));
`