import React, { useState } from 'react'
import styled from 'styled-components'
import CategoriesSlider from './CategoriesSlider'
import SearchCategory from './SearchCategory'
import CategoriesList from './CategoriesList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchCategories, categoriesSelector } from './CategoriesSlicer'
import { connect } from 'react-redux'

const CategoriesStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const FindContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 1.2rem;
`
const Find = styled.div`
    display: flex;
    justify-content: space-between;
`
const Container = styled.div`
  border: solid 2px #000;
  width: 49%;
  height: 43px;
  display: flex;
  justify-content: center;
  color: black;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
    
  @media (max-width: 922px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 573px) {
    font-size: 0.6rem;
    width: 48%;
  }
  
`
const SearchContainer = styled(Container)`
    cursor: initial;
`
const H5 = styled.h5`
    font-weight: bold;
    letter-spacing: 4.1px;
    text-transform: uppercase;
    margin-right: 1rem;
    
  @media (max-width: 573px) {
    margin-right: 0.5rem;
  }
`
const MySlider = styled.div`
  background: black;
  padding-top: 1.5rem;
  margin-top: 1.2rem;
`

const Categories = (props) => {
    
    // const dispatch = useDispatch()
    // const { categories, loading, hasErrors } = useSelector(categoriesSelector)

    // useEffect(() => {
    //     dispatch(fetchCategories())
    // }, [dispatch])

    // const renderCategories = () => {
    //     if (loading || hasErrors) return []
    
    //     return categories
    // }

    // const categoriesList = renderCategories();
    
    // const [Suggestions, setSuggestions] = useState([]);
    // useEffect(() => {
    //     fetch('').then(res=> res.json()).then(data=> {
    //         setSuggestions(data);
    //     })
    // });

    
    const [sliderOpen, setSliderOpen] = useState(false);
    
    const sliderClickHandler = () => {
      setSliderOpen(!sliderOpen);
    }

    let sliderClasses = ['my-slider'];
    
    if (sliderOpen) {
        sliderClasses = [...sliderClasses, 'slider-open']
    }

    return(
        <CategoriesStyles>
            <FindContainer>
                <Find>
                    <Container onClick={sliderClickHandler} >
                        <H5>
                            Find categories here
                        </H5>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </Container>
                    <SearchContainer>
                        <SearchCategory />
                    </SearchContainer>
                </Find>
                <MySlider className={sliderClasses.join(' ')}>
                  <CategoriesSlider Suggestions={props.categories.categories}/>
                </MySlider>
            </FindContainer>
            <CategoriesList list={props.categories.categories}/>
        </CategoriesStyles>
    )
}

const mapStateToProps = (state) => {
  return{
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Categories)
