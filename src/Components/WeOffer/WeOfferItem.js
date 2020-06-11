import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const WeOfferItemStyle = styled.div`
    display: flex;
    width: 32%;
    margin: 0 0.3rem;

    @media (max-width: 1050px) {
        width: 48%;
    }

    @media (max-width: 768px) {
        width: 99%;
    }
`
const Img = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    padding: 0 0.7rem;

    @media (max-width: 768px) {
        width: 10%;
    }
`
const Item = styled.div`
    margin: 2rem 0.2rem;
    width: 80%;
    text-align: left;
    font-size: 0.7rem;

    h4 {
        text-transform: uppercase;
        font-size: 1.2rem;
        margin-bottom: 0.7rem;
        letter-spacing: 0.7px;
    }

    a {
        color: #333;
    }

    p {
        margin: 0;
        line-height: 1.7;
        letter-spacing: 0.4px;
    }
    
    @media (max-width: 1050px) {
        margin: 1rem 0.2rem;
    }

    @media (max-width: 768px) {
        margin: 1rem 0;
        width: 90%;
    }

`


const WeOfferItem = ({list}) => {

    return(
        <Container>
            {
                list && list.map(listItem => {
                    return (
                        <WeOfferItemStyle key={listItem.id}>
                            <Img>
                                <img src={listItem.imgSrc} alt=""/>
                            </Img>
                            <Item>
                                <h4>{listItem.title}</h4>
                                <p>{listItem.text}</p>
                                <a href="#">{listItem.link}</a>
                            </Item>
                        </WeOfferItemStyle>
                    )
                })
            }
        </Container>
    )
}

export default WeOfferItem