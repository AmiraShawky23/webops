import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Button = styled.button`
    background: transparent;
    border: none;
`

const DrawerToggleButton = (props) => {
    return (
        <Button onClick={props.click}>
            <FontAwesomeIcon icon={faBars} />
        </Button>
    )
}

export default DrawerToggleButton
