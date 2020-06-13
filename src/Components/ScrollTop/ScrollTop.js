import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Scroll = styled.div`
    position: fixed;
    bottom: 1.3rem;
    right: 0.7rem;
    text-align: center;
    background: #fff;
    box-shadow: 0 0 2px 0;
    z-index: 300;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        text-align: center;
        color: #024d4c;
    }
`

const ScrollTop = () => {
    return(
        <Scroll>
            <FontAwesomeIcon icon={faChevronUp} />
        </Scroll>
    )
}

export default ScrollTop