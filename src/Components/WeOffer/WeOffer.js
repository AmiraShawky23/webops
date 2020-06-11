import React from 'react'
import ToolsBudgeter from '../../assets/images/icons/tools-budgeter.png'
import ToolsChecklist from '../../assets/images/icons/tools-checklist.png'
import ToolsGuestlist from '../../assets/images/icons/tools-guestlist.png'
import ToolssRegistry from '../../assets/images/icons/tools-registry.png'
import ToolsVendors from '../../assets/images/icons/tools-vendors.png'
import ToolsWebsite from '../../assets/images/icons/tools-website.png'
import styled from 'styled-components'
import WeOfferItem from './WeOfferItem'

const WeOfferStyle = styled.div`
    text-align: center;
    margin: 2rem auto;
    width: 70%;

    @media (max-width: 922px) {
        width: 90%;
    }

`
const H1 = styled.h1`
    text-transform: uppercase;
    font-size: 1.4rem;
    margin-bottom: 4rem;

    @media (max-width: 1050px) {
        margin-bottom: 3rem;
    }
`


const WeOffer = () => {

    const List = [
        {id: 1, title: 'WEDDING WEBSITE', text: 'Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you.', link: 'Create your website', imgSrc: ToolsWebsite},
        {id: 2, title: 'BUDGETER', text: 'Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of.', link: 'Create and manage your budget', imgSrc: ToolsBudgeter},
        {id: 3, title: 'CHECK LIST', text: 'Set your tasks, create your priority list and never forget any wedding detail.', link: 'Get your check list', imgSrc: ToolsChecklist},
        {id: 4, title: 'GUEST LIST', text: 'Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips.', link: 'Create your guest list', imgSrc: ToolsGuestlist},
        {id: 5, title: 'VENDORS', text: 'Meet your service providers, view their profiles and make all the perfect choice for your wedding night.', link: 'Start your tour', imgSrc: ToolsVendors},
        {id: 6, title: 'REGISTRY LIST', text: 'Escape the awkward moments and receiving the same gift twice by listing everything youve thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents.',link: 'Create your dream list' , imgSrc: ToolssRegistry},
    ]

    return(
        <WeOfferStyle>
            <H1>
                WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.
            </H1>
            <WeOfferItem list={List} />
        </WeOfferStyle>
    )
}

export default WeOffer