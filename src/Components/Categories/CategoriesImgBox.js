import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tempImg from '../../assets/images/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

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
    width: 32%;
    margin: 0 0.3rem;
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

        &:hover .hide{
            opacity: 1;
            z-index: 3;
            transition: all ease-in 0.35s;
        }
    }

    @media (max-width: 991px) {
        width: 47%;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        width: 99%;
    }
`
const Box = styled.div`
    width: 80%;
    height: 80%;
    position: absolute;
    background: #fff;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translate(-50%,-50%);
    transition: all ease-in 0.35s;
`
const BoxTitle = styled.h4`
    color: black;
    font-size: 1.3rem;
    text-align: center;
`
const Icon = styled.div`
    background: black;
    width: 11.5%;
    margin: 0 auto;
    padding: 0.2rem 0;
    color: #fff;
    text-align: center;
    font-size: 1.3rem;
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


const CategoriesImgBox = ({list}) => {
    
    return(
        <CategoriesBox imgSrc={list.image} >
            <Link to={'/category_' + list.id}>
                <Overlay />
                <Title>
                    <Img>
                        <img src={list.icon} alt=""/>
                    </Img>
                    <H3>
                        {list.name}
                    </H3>
                </Title>
                <Box className='hide'>
                    <Icon>
                        <FontAwesomeIcon icon={faHome} />
                    </Icon>
                    <BoxTitle>
                        {list.name}
                    </BoxTitle>
                </Box>
            </Link>
        </CategoriesBox>
    )
}

export default CategoriesImgBox