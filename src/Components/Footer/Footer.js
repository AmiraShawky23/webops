import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FooterStyle = styled.footer`
    padding: 1.2rem 7rem 1.5rem 0.4rem;
    background: black;
    display: flex;
    justify-content: space-around;
`
const Media = styled.div`
    
    h4 {
        color: #fff;
        font-weight: 500;
        font-size: 1.2rem;
        margin: 0;
        margin-bottom: 0.2rem;
    }
    svg {
    }
`
const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: fit-content;
`
const Icon = styled.a`
    color: #fff;
    margin-right: 0.5rem;
`
const CopyRight = styled.div`
    font-size: 0.57rem;
    font-weight: 100;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: flex-end;

    p{
        margin: 0;
    }
    a {
        color: #337ab7;
        &:hover{
            color: #23527c;
        }
    }
`
const Terms = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;

    a{
        font-size: 0.7rem;
        color: #fff;
    }
`

const Footer = () => {
    return(
        <FooterStyle>
            <Media>
                <h4>Weds360</h4>
                <Icons>
                    <Icon>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Icon>
                </Icons>
            </Media>
            <CopyRight>
                <p>© Copyright <a href="https://reactjs.org/">Plus360</a>. All Rights Reserved</p>
            </CopyRight>
            <Terms>
                <a href='https://reactjs.org/'>Terms & Conditions</a> 
                <a href='https://reactjs.org/'>Privacy Policy</a> 
            </Terms>
        </FooterStyle>
    )
}

export default Footer