import React, { useEffect, useState } from 'react'
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

    const [listOfPhotos, setListOfPhotos] = useState(null)

    const searchHandle = (value) => {
        setListOfPhotos(category.photos.filter(photo => photo.title.toLowerCase().includes(value.toLowerCase())));
    }

    useEffect(() => {
        
        if(listOfPhotos == null) {
            dispatch(fetchCategory(id))
            setListOfPhotos(category.photos)
        }
    }, [dispatch,id,category])
    

    return(
        <CategoryStyles>
            <Path current={[]} next={category.name} />
            <Container>
                <SearchImg searchHandle={searchHandle} id={id} />
                <CategoryImgGallery listOfPhotos={listOfPhotos} categoryId={category.id}/>
            </Container>
        </CategoryStyles>
    )
}

export default Category