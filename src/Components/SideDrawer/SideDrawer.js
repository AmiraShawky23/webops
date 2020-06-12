import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from '../../assets/images/background.jpg'
import PlanningTools from '../../assets/images/icons/planningtools.png'
import ForTheWedding from '../../assets/images/icons/forthewedding.png'
import ForHim from '../../assets/images/icons/forhim.png'
import ForHer from '../../assets/images/icons/forher.png'
import CheckList from '../../assets/images/icons/checklist.png'
import GuestList from '../../assets/images/icons/guestlist.png'
import Registry from '../../assets/images/icons/registry.png'
import Budgeter from '../../assets/images/icons/budgeter.png'
import WhiteArticles from '../../assets/images/icons/white-articles.png'


const Nav = styled.nav`
    background: white;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 7rem;
    width: 100%;
    height: 70%;
    z-index: 300;
    background: ${'url(' + bg + ')'} no-repeat center center fixed;
    background-size: cover;
`
const SidebarLi = styled.li`
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    background: transparent;

    a {
        cursor: pointer;
        color: #fff;
        text-align: center;
        font-size: 0.8rem;

        p {
            margin: 0;
            margin-top: 1rem;
        }
    }

    &::before {
        content: "";
        width: 100%;
        height: 3px;
        background: white;
        position: absolute;
        bottom: -3px;
    }
    &::after {
        content: "";
        height: 100%;
        width: 3px;
        background: white;
        position: absolute;
        right: -3px;
    }
`
const SidebarLiHalf = styled(SidebarLi)`
    width: 25%;
`
const ImgIcon = styled.div`
    padding: 0 30%;
    max-width: 90px;
`
const Ul = styled.ul`
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    height: 100%;
`

const SideDrawer = (props) => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = [...drawerClasses, 'open']
    }
    return (
        <Nav className={drawerClasses.join(' ')}>
            <Ul>
                <SidebarLi>
                    <Link to="/">
                        <ImgIcon>
                            <img src={PlanningTools} alt=""/>
                        </ImgIcon>
                        <p>360 planner</p>
                    </Link>
                </SidebarLi>
                <SidebarLi>
                    <Link to="/">
                        <ImgIcon>
                            <img src={ForTheWedding} alt=""/>
                        </ImgIcon>
                        <p>For The Wedding</p>
                    </Link>
                </SidebarLi>
                <SidebarLi>
                    <Link to="/">
                        <ImgIcon>
                            <img src={ForHim} alt=""/>
                        </ImgIcon>
                        <p>Him</p>
                    </Link>
                </SidebarLi>
                <SidebarLi>
                    <Link to="/">
                        <ImgIcon>
                            <img src={ForHer} alt=""/>
                        </ImgIcon>
                        <p>Her</p>
                    </Link>
                </SidebarLi>
                <SidebarLiHalf>
                    <Link to="/">
                        <ImgIcon>
                            <img src={CheckList} alt=""/>
                        </ImgIcon>
                        <p>Check List</p>
                    </Link>
                </SidebarLiHalf>
                <SidebarLiHalf>
                    <Link to="/">
                        <ImgIcon>
                            <img src={GuestList} alt=""/>
                        </ImgIcon>
                        <p>Guest List</p>
                    </Link>
                </SidebarLiHalf>
                <SidebarLiHalf>
                    <Link to="/">
                        <ImgIcon>
                            <img src={Registry} alt=""/>
                        </ImgIcon>
                        <p>Registry List</p>
                    </Link>
                </SidebarLiHalf>
                <SidebarLiHalf>
                    <Link to="/">
                        <ImgIcon>
                            <img src={Budgeter} alt=""/>
                        </ImgIcon>
                        <p>Budgeter</p>
                    </Link>
                </SidebarLiHalf>
                <SidebarLi>
                    <Link to="/">
                        <ImgIcon>
                            <img src={PlanningTools} alt=""/>
                        </ImgIcon>
                        <p>Gallery</p>
                    </Link>
                </SidebarLi>
                <SidebarLi>
                    <Link to="/">
                        <ImgIcon>
                            <img src={WhiteArticles} alt=""/>
                        </ImgIcon>
                        <p>Ideas & More</p>
                    </Link>
                </SidebarLi>
            </Ul>
        </Nav>
    )
}

export default SideDrawer
