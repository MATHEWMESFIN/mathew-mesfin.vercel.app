import React from 'react';
import styled from 'styled-components';

const TabButtonStyle = styled.button`
    font-weight: 600;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

    .tab {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`

const TabButton = ({active, selectTab, title}) => {

    return (
        <TabButtonStyle onClick={selectTab}>
            <div className={'tab'}>
                {title}
            </div>
        </TabButtonStyle>
    )
}

export default TabButton
