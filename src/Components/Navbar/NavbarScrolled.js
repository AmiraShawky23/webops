import React from 'react'
import NavMenu from './NavMenu'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/images/icons/logo.png'
import styled from 'styled-components'
import Li from '../../Elements/Li'
import Ul from '../../Elements/Ul'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Header = styled.header`
    position: fixed;
    padding-top: 0;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
`
const NavbarNavigation = styled.nav`
    background: #fff;
    display: flex;
    transition: all ease 0.1s;
    align-items: center;
    margin: 0 3.1rem;
    padding: 0.5rem 0;

    @media (max-width: 1332px) {
        margin: 0 1.2rem;
    }
`
const NavbarNavigationItems = styled.div`
    display: flex;
    position: relative;
    padding: 0 1rem;
    color: #333333;
    width: 43%;
    display: flex;
    margin-right: 2rem;

    li {
        position: relative;
        &:hover .show {
            display: block;
        }
        a {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1200px) {
        width: 70%;
        li {
        
            a {
                font-size: 0.7rem;
            }
        }
    }
`
const Lang = styled.div`
    display: flex;
    
    a {
        padding: 0 0.7rem 0 0.3rem;
        font-size: 0.8rem;
        border-right: 1px solid black;
        font-weight: bold;
        color: #024d4c;
        margin-right: 0.5rem;
    }

    @media (max-width: 1332px) {
        a {
            padding: 0 0.4rem 0 0.2rem;
            margin-right: 0.3rem;
        }
    }
    @media (max-width: 992px) {
        a {
            font-size: 0.6rem;
        }
    }
`
const NavbarLogo = styled.div`
    width: 3.7%;
    margin-right: 3rem;
    
    a {
        width:100%;
        img {
            vertical-align: center;
        }
    }
    @media (max-width: 1332px) {
        width: 5%;
    }
`

const NavbarScrolled = (props) => {
    
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
               <NavbarLogo>
                    <Link to="/">
                        <img src={LogoImg} alt="logo"/>
                    </Link>
                </NavbarLogo>
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
                <Lang>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </Link>
                    <Link to='/'>
                        العربية
                    </Link>
                </Lang>
            </NavbarNavigation>
        </Header>
    )
}

export default NavbarScrolled