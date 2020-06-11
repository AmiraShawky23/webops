import React from 'react'
import styled from 'styled-components'

const BackdropStyle = styled.div`
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.3);
    position: fixed;
    left: 0;
    top: 10.5%;
`

const Backdrop = (props) => {
    return(
        <BackdropStyle onClick={props.click} />
    )
}

export default Backdrop
