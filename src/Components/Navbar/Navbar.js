import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import NavMenu from './NavMenu'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/images/icons/logo.png'
import styled from 'styled-components'
import Li from '../../Elements/Li'
import Ul from '../../Elements/Ul'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Header = styled.header`
    width: 100%;
    padding-top: 40px;
    z-index: 200;

    @media (max-width: 769px) {
        padding-top: 2%;
    }
`
const NavbarNavigation = styled.nav`
display: flex;
transition: all ease 0.1s;
margin: auto;
width: 92%;
max-width: 1100px;
justify-content: space-between;
position: absolute;
left: 0;
right: 0;    
align-items: center;
margin: auto;
`
const ToggleButton = styled.div`

    svg {
        font-size: 1.2rem;
    }

    @media (min-width: 769px) {
        display: none;
    }
`
const NavbarNavigationItems = styled.div`
    display: flex;
    border-top: solid 1px #000;
    border-bottom: solid 1px #000;
    position: relative;
    padding: 0 1rem;
    color: #333333;
    width: 43%;
    align-self: flex-end;
    display: flex;
    margin-bottom: 2px;

    li {
        position: relative;
        &:hover .show {
            display: block;
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const Lang = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    width: 100%;
    display: flex;

    a {
        padding: 0 0.7% 0 0.3%;
        font-size: 0.8rem;
        border-right: 1px solid black;
        font-weight: bold;
        color: #024d4c;
        margin-right: 0.5%;
    }

    @media (max-width: 1197px) {
        top: 0;
    }
    @media (max-width: 1022px) {
        top: -1rem;
    }
    @media (max-width: 768px) {
        position: relative;
        width: fit-content;
        top: 0;
        margin: 0;
        left: 0;
        a {
            padding: 0 0.3rem 0 0.2rem;
            margin: 0;
        }
    }
`
const NavbarLogo = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    margin: 0 1.2rem;

    a {
        width:100%;
        img {
            width: 100%;
            height: auto;
            vertical-align: center;
        }
    }
    @media (max-width: 768px) {
        width: 23%;
        margin-right: 3rem;
    }

`

const Navbar = (props) => {
    
    const DropdownList = [
        
        {id: 1, text: 'Check list'},
        {id: 2, text: 'Budgeter'},
        {id: 3, text: 'Registry list'},
        {id: 4, text: 'Guest list'},
        {id: 5, text: 'Wedding Website'},
        {id: 6, text: 'Couple Website'},
        {id: 7, text: 'More'}
    ]

    return(
        <Header>
            <NavbarNavigation>
                <Lang>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </Link>
                    <Link to={'/'}>
                        العربية
                    </Link>
                </Lang>
                <NavbarNavigationItems>
                    <Ul>
                        <Li>
                            <Link to="/">360planner</Link>
                            <NavMenu list={DropdownList} />
                        </Li>
                        <Li>
                            <Link to="/">her</Link>
                        </Li>
                        <Li>
                            <Link to="/">him</Link>
                        </Li>
                        <Li>
                            <Link to="/">wedding</Link>
                        </Li>
                    </Ul>
                </NavbarNavigationItems>
                <NavbarLogo>
                    <Link to="/">
                        <img src={LogoImg} alt="logo"/>
                    </Link>
                </NavbarLogo>
                <NavbarNavigationItems>
                    <Ul>
                        <Li>
                            <Link to="/">Vendors</Link>
                        </Li>
                        <Li>
                            <Link to="/Category">Gallery</Link>
                        </Li>
                        <Li>
                            <Link to="/">Ideas & More</Link>
                        </Li>
                    </Ul>
                </NavbarNavigationItems>
                <ToggleButton>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </ToggleButton>
            </NavbarNavigation>
        </Header>
    )
}

export default Navbar