import React from 'react';
import styled from 'styled-components';
import { GoDot } from "react-icons/go";

const TimelineStyle = styled.button`

    .tab {
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        color: rgb(139, 92, 246);
        background-color: black;
        border-radius: 9999px;
        transition: all 0.3s ease-out;

        &:hover {
            transform: scale(1.3);
        }
    }

    .active {
        cursor: default;
        background-color: rgb(139, 92, 246);

        &:hover {
            transform: scale(1);
        }
    }
`

const TimelineButton = ({active, selectTab, title}) => {

    return (
        <TimelineStyle onClick={selectTab}>
            <div className={active ? 'tab active' : 'tab'}>
                <GoDot />
            </div>
        </TimelineStyle>
    )
}

export default TimelineButton