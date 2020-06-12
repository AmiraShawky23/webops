import React from 'react'
import CategoriesImgBox from './CategoriesImgBox'
import styled from 'styled-components'

const CategoriesListStyle = styled.div`
    width: 100%;
    display: flex;
`

const CategoriesList = ({list}) => {

    return(
        <CategoriesListStyle>
            {
                list && list.map(listItem => {
                    return (
                        <CategoriesImgBox key={listItem.id} title={listItem.title} iconSrc={listItem.iconSrc} imgSrc={listItem.imgSrc} />
                    )
                })
            }
        </CategoriesListStyle>
    )
}

export default CategoriesList