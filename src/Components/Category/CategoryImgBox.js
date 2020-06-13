import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ImgContainerStyles = styled.div`
    width: 32%;
    margin-right: 0.3rem;
    margin-top: 1rem;

    @media (max-width: 991px) {
        width: 48%;
    }

`
const Img = styled.div`
    height: 230px;
    width: 99%;
    overflow: hidden;
    display: flex;
    align-items: center;
`
const H4 = styled.h4`
    font-size: 1rem;
    line-height: 1.2;
    margin: 1.2rem 0 1.5rem 0;
    font-weight: 500;
    color: black;
`

const CategoryImgBox = ({list}) => {
    console.log(list.imgSrc)
    return(
        <ImgContainerStyles>
            <Link to={list.link}>
                <Img>
                    <img src={list.imgSrc} alt=""/>
                </Img>
                <H4>
                    {list.title}
                </H4>
            </Link>
        </ImgContainerStyles>
    )
}

export default CategoryImgBox