import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Path from '../Path/Path'
import CategoryImgGallery from './CategoryImgGallery'
import SearchImg from './SearchImg'
import Img1 from '../../assets/images/category/image_1.jpeg'

// import { useDispatch, useSelector } from 'react-redux'
// import { fetchCategory, categorySelector } from './CategorySlicer'



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


const Category = (props) => {
    
    // const dispatch = useDispatch()
    // const { category} = useSelector(
    //     categorySelector
    // )
    const [CategoryId, setCategoryId] = useState('category_1');

    let id = props.match.params.category_id;

    useEffect(() => {
        setCategoryId(id);
        // dispatch(fetchCategory(id))
    }, [id]);

    // const renderCategory = () => {
    //     return category
    // }

    const list = [
        {id: 1, title: 'Special photoshoot', imgSrc: Img1, link: 'photo_1'},
        {id: 2, title: 'Special photoshoot', imgSrc: Img1, link: 'photo_1'},
        {id: 3, title: 'Special photoshoot', imgSrc: Img1, link: 'photo_1'},
        {id: 4, title: 'Special photoshoot', imgSrc: Img1, link: 'photo_1'},
        {id: 5, title: 'Special photoshoot', imgSrc: Img1, link: 'photo_1'},
        {id: 6, title: 'Special photoshoot', imgSrc: Img1, link: 'photo_1'},
        {id: 7, title: 'Special photoshoot', imgSrc: Img1, link: 'photo_1'},
    ]

    const pathList = [
        { id: 1, text: 'gallery', link: 'category'},
        { id: 2, text: 'wedding ideas', link: 'category'}
    ]
    return(
        <CategoryStyles>
            <Path current={pathList} next='Vintage photoshoot' />
            <Container>
                <SearchImg />
                <CategoryImgGallery list={list}/>
            </Container>
            {/* <ImgDetails imgSrc={Img1} title='Vintage photoshoot' text='A vintage-themed wedding photoshoot for the bride and groom.' name='Gihad Belasy' link='https://google.com/' faceLink='https://www.facebook.com/' twitterLink='https://twitter.com/home' /> */}
        </CategoryStyles>
    )
}

export default Category