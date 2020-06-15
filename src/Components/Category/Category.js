import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Path from '../Path/Path'
import CategoryImgGallery from './CategoryImgGallery'
import SearchImg from './SearchImg'
import { connect } from 'react-redux'

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

    const pathList = [
        { id: 1, text: 'gallery', link: 'category'},
        { id: 2, text: 'wedding ideas', link: 'category'}
    ]
    console.log(props)
    return(
        <CategoryStyles>
            <Path current={pathList} next='Vintage photoshoot' />
            <Container>
                <SearchImg />
                <CategoryImgGallery list={props.category.category}/>
            </Container>
            {/* <ImgDetails imgSrc={Img1} title='Vintage photoshoot' text='A vintage-themed wedding photoshoot for the bride and groom.' name='Gihad Belasy' link='https://google.com/' faceLink='https://www.facebook.com/' twitterLink='https://twitter.com/home' /> */}
        </CategoryStyles>
    )
}
const mapStateToProps = (state) => {
    return{
      category: state.category
    }
  }

export default connect(mapStateToProps)(Category)