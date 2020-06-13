import React from 'react';
import styled from 'styled-components' 
import { Link } from 'react-router-dom';

const RelatedStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    margin-top: 3rem;
`
const ImgsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const H2 = styled.h2`
    font-size: 2rem;
    line-height: 1.42;
    margin: 0;
    margin-bottom: 2rem;
    font-weight: bold;
    color: black;
`
const ImgContainerStyles = styled.div`
    width: 24%;
    margin-right: 0.3rem;
    margin-top: 1rem;

    @media (max-width: 991px) {
        width: 33%;
    }

    @media (max-width: 768px) {
        width: 48%;
    }

`
const Img = styled.div`
    height: 230px;
    width: 99%;
    overflow: hidden;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        height: 120px;
    }
`
const H4 = styled.h4`
    font-size: 1rem;
    line-height: 1.2;
    margin: 1.2rem 0 1.5rem 0;
    font-weight: 500;
    color: black;
`

const Related = ({list}) => {
    return (
        <RelatedStyles>
            <H2>Related Photos</H2>
            <ImgsContainer>
                {
                    list && list.map(listItem => {
                        return (
                            <ImgContainerStyles key={listItem.id}>
                                <Link to={listItem.link}>
                                    <Img>
                                        <img src={listItem.imgSrc} alt=""/>
                                    </Img>
                                    <H4>
                                        {listItem.title}
                                    </H4>
                                </Link>
                            </ImgContainerStyles>
                        )
                    })
                }
            </ImgsContainer>
        </RelatedStyles>
    )
}

export default Related;