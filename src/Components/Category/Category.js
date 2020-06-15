import React, { useEffect } from 'react'
import styled from 'styled-components'
import Path from '../Path/Path'
import CategoryImgGallery from './CategoryImgGallery'
import SearchImg from './SearchImg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory, categorySelector } from '../../app/slicers/categorySlicer'



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
    
    let id = props.match.params.category_id;
    id = id.replace("category_","");

    
    const dispatch = useDispatch()
    const { category } = useSelector(categorySelector)	
            
    useEffect(() => {
        dispatch(fetchCategory(id))
    }, [dispatch,id])


    const pathList = [
        { id: 1, text: 'gallery', link: 'category'},
        { id: 2, text: 'wedding ideas', link: 'category'}
    ]

    return(
        <CategoryStyles>
            <Path current={pathList} next='Vintage photoshoot' />
            <Container>
                <SearchImg />
                <CategoryImgGallery list={category}/>
            </Container>
            {/* <ImgDetails imgSrc={Img1} title='Vintage photoshoot' text='A vintage-themed wedding photoshoot for the bride and groom.' name='Gihad Belasy' link='https://google.com/' faceLink='https://www.facebook.com/' twitterLink='https://twitter.com/home' /> */}
        </CategoryStyles>
    )
}

export default Category