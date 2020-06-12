import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tempImg from '../../assets/images/background.jpg'

// const CategoriesBox = styled('div')(props => ({
//     width: '33.33%',
//     height: '230px',
//     backgroundSize: 'cover',
//     backgroundPositionX: 'center',
//     overflow: 'hidden',
//     position: 'relative',
//     background: props.imgSrc ? 'url(' + props.imgSrc + ')' : 'url(../../assets/images/background.jpg)',
// }))
    
const CategoriesBox = styled.div`  
    width: 33.33%;
    height: 230px;
    background-position-x: center;
    background-size: cover;
    overflow: hidden;
    position: relative;
    background: url(${props => props.imgSrc || tempImg});

    a {
        position: relative; 
        width: 100%;
        height: 100%;
        display: block;
    }

    @media (max-width: 991px) {
        width: 48%;
    }

    @media (max-width: 768px) {
        width: 99%;
    }
`
const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0,0,0,0.3);
`
const Title = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 2;
    position: relative;
`
const Img = styled.div`
    z-index: 2;
`
const H3 = styled.h3`
    color: #fff;
    margin: 0.3rem auto;
    font-size: 1.7rem;
    z-index: 2;
`


const CategoriesImgBox = ({title, iconSrc, imgSrc}) => {
    
    return(
        <CategoriesBox imgSrc={imgSrc} >
            <Link to='/category_1'>
                <Overlay />
                <Title>
                    <Img>
                        <img src={iconSrc} alt=""/>
                    </Img>
                    <H3>
                        {title}
                    </H3>
                </Title>
            </Link>
        </CategoriesBox>
    )
}

export default CategoriesImgBox