import React from 'react'
import styled from 'styled-components'
import CategoryImgBox from './CategoryImgBox'

const ImgsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 79%;

    @media (max-width: 768px) {
        width: 99%;
    }
`
const CategoryImgGallery = ({listOfPhotos, categoryId}) => {
    return(
        <ImgsContainer>
            {
                listOfPhotos && listOfPhotos.map(listItem => {
                    return (
                        <CategoryImgBox key={listItem.id} categoryId={categoryId} list={listItem} />
                    )
                })
            }
        </ImgsContainer>
    )
}

export default CategoryImgGallery