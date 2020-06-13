import React, { useState } from 'react'
import styled from 'styled-components'
import Path from '../Path/Path'
import CategoryImgGallery from './CategoryImgGallery'
import SearchImg from './SearchImg'
import Img1 from '../../assets/images/category/image_1.jpeg'

// import ImgDetails from './ImgDetails'
// import Img1 from '../../assets/images/category/image_1.jpeg'
{/* <ImgDetails imgSrc={Img1} title='Vintage photoshoot' text='A vintage-themed wedding photoshoot for the bride and groom.' name='Gihad Belasy' link='https://google.com/' faceLink='https://www.facebook.com/' twitterLink='https://twitter.com/home' /> */}

const CategoryStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`
const Container = styled.div`
    display: flex;


    @media (max-width: 768px) {
        flex-direction: column;
    }
`


const Category = () => {
    
    const list = [
        {id: 1, title: 'Special photoshoot', imgSrc: Img1, link: '/photo_1'},
        {id: 2, title: 'Special photoshoot', imgSrc: Img1, link: '/photo_1'},
        {id: 3, title: 'Special photoshoot', imgSrc: Img1, link: '/photo_1'},
        {id: 4, title: 'Special photoshoot', imgSrc: Img1, link: '/photo_1'},
        {id: 5, title: 'Special photoshoot', imgSrc: Img1, link: '/photo_1'},
        {id: 6, title: 'Special photoshoot', imgSrc: Img1, link: '/photo_1'},
        {id: 7, title: 'Special photoshoot', imgSrc: Img1, link: '/photo_1'},
    ]

    const pathList = [{ id: 1, text: 'gallery'}, { id: 2, text: 'wedding ideas'}]
    return(
        <CategoryStyles>
            <Path current={pathList} next='Vintage photoshoot' />
            <Container>
                <SearchImg />
                <CategoryImgGallery list={list}/>
            </Container>
        </CategoryStyles>
    )
}

export default Category