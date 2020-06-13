import React from 'react'
import styled from 'styled-components'
// import CategoriesSlider from './CategoriesSlider'
import SearchCategory from './SearchCategory'
import CategoriesList from './CategoriesList'
import WhiteArticles from '../../assets/images/icons/white-articles.png'
import ImgCategories from '../../assets/images/categories.png'
// import ImgSrc from '../../assets/images/icons/categories/1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

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
    margin-bottom: 2rem;
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
`
const SearchContainer = styled(Container)`
    cursor: initial;
`
const H5 = styled.h5`
    font-weight: bold;
    letter-spacing: 4.1px;
    text-transform: uppercase;
    margin-right: 1rem;
`

const Categories = () => {
    
    const List = [
        {id: 1, title: 'Wedding Ideas', iconSrc: WhiteArticles , imgSrc: ImgCategories}
    ]
    
    // const [Suggestions, setSuggestions] = useState([]);
    // useEffect(() => {
    //     fetch('').then(res=> res.json()).then(data=> {
    //         setSuggestions(data);
    //     })
    // });

    // const Suggestions = [
    //     {id: 1, title: 'Outdoor Wedding Venues', iconSrc: ImgSrc},
    //     {id: 2, title: 'Wedding Dresses', iconSrc: ImgSrc},
    //     {id: 3, title: 'Rings', iconSrc: ImgSrc},
    //     {id: 4, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 5, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 6, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 7, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 8, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 9, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 10, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 11, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 12, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 13, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 14, title: 'Videographers', iconSrc: ImgSrc},
    //     {id: 15, title: 'Videographers', iconSrc: ImgSrc}
    // ]

    
    return(
        <CategoriesStyles>
            <FindContainer>
                <Find>
                    <Container>
                        <H5>
                            Find categories here
                        </H5>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </Container>
                    <SearchContainer>
                        <SearchCategory />
                    </SearchContainer>
                </Find>
                {/* <CategoriesSlider Suggestions={Suggestions}/> */}
            </FindContainer>
            <CategoriesList list={List}/>
        </CategoriesStyles>
    )
}

export default Categories
