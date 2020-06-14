import React from 'react'
import CategoriesImgBox from './CategoriesImgBox'
import styled from 'styled-components'

const CategoriesListStyle = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
`

const CategoriesList = ({list}) => {

    return(
        <CategoriesListStyle>
            {
                list && list.map(listItem => {
                    return (
                        <CategoriesImgBox key={listItem.id} list={listItem} />
                    )
                })
            }
        </CategoriesListStyle>
    )
}

export default CategoriesList