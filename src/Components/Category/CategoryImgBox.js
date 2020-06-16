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
    img {
        object-fit: none;
        height: 230px;
    }
`
const H4 = styled.h4`
    font-size: 1rem;
    line-height: 1.2;
    margin: 1.2rem 0 1.5rem 0;
    font-weight: 500;
    color: black;
`

const CategoryImgBox = ({categoryId, list}) => {
    return(
        <ImgContainerStyles>
        {/* '/categories/category_' + id + '/' + list.link */}
            <Link to={'/category_' + categoryId + '/photo_' + list.id}>
                <Img>
                    <img src={list.image} alt=""/>
                </Img>
                <H4>
                    {list.title}
                </H4>
            </Link>
        </ImgContainerStyles>
    )
}

export default CategoryImgBox