import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 300;
    background-color: white;
    min-width: 100%;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    display: none;
`
const DropdownItem = styled.div`
    color: #000;
    border-top: solid 1px #000;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    color: #fff;
    padding: 0.7rem 0.8rem;
`

const NavMenu = ({list}) => {
    return(
        <Dropdown className='show'>
            {
                list && list.map(listItem => {
                    return (
                        <DropdownItem key={listItem.id}>
                            <Link to="/">{listItem.text}</Link>
                        </DropdownItem>
                    )
                })
            }
        </Dropdown>
    )
}

export default NavMenu
