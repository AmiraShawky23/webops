import React from 'react'
import styled from 'styled-components'

const BackdropStyle = styled.div`
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.3);
    position: fixed;
    left: 0;
    top: 7rem;
    z-index: 200;
    
  @media (max-width: 922px) {
    top: 10rem;
  }
`

const Backdrop = (props) => {
    return(
        <BackdropStyle onClick={props.click} />
    )
}

export default Backdrop
