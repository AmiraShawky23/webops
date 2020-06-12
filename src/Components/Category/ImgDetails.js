import React from 'react';
import styled from 'styled-components' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Related from './Related';
import Img1 from '../../assets/images/category/image_1.jpeg'

const ImgDetailsStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
const Container = styled.div`
    display: flex;
`
const ImgContainer = styled.div`
    width: 65%;
`
const ContentContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
const H2 = styled.h2`
    font-size: 2rem;
    line-height: 1.42;
    margin: 0;
    margin-bottom: 2rem;
    font-weight: bold;
    color: black;
`
const P = styled.p`
    font-size: 1.7rem;
    color: black;
    line-height: 1.2;
    margin: 0;
`
const PhotographerLink = styled.div`
    font-size: 1.7rem;
    text-decoration: none;
    margin: 1rem 0;

    a {
        color: #337ab7;
    }
`
const IconContainer = styled.div`
    display: flex;
    justify-content: left;
`
const Iocn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    
    a {
        color: #fff;

        &:focus {
            outline: none;
        }
    }
`

const ImgDetails = ({imgSrc, title, text, name, link, faceLink, twitterLink}) => {
    const related = [
        {id: 1, title: 'Special photoshoot', imgSrc: {Img1}, link: '/photo_1'},
        {id: 2, title: 'Special photoshoot', imgSrc: {Img1}, link: '/photo_1'},
        {id: 3, title: 'Special photoshoot', imgSrc: {Img1}, link: '/photo_1'},
        {id: 4, title: 'Special photoshoot', imgSrc: {Img1}, link: '/photo_1'},
        {id: 5, title: 'Special photoshoot', imgSrc: {Img1}, link: '/photo_1'},
        {id: 6, title: 'Special photoshoot', imgSrc: {Img1}, link: '/photo_1'},
        {id: 7, title: 'Special photoshoot', imgSrc: {Img1}, link: '/photo_1'},
    ]
    return (
        <ImgDetailsStyles>
            <Container>
                <ImgContainer>
                    <img src={imgSrc} alt=""/>
                </ImgContainer>
                <ContentContainer>
                    <H2>{title}</H2>
                    <P>{text}</P>
                    <PhotographerLink>
                        <a href={link}>{name}</a>
                    </PhotographerLink>
                    <IconContainer>
                        <Iocn>
                            <a href={faceLink}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>                    
                        </Iocn>
                        <Iocn>
                            <a href={twitterLink}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a> 
                        </Iocn>
                    </IconContainer>
                </ContentContainer>
            </Container>
            <Related list={related} />
        </ImgDetailsStyles>
    )
}

export default ImgDetails;