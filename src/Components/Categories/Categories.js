import React, { useEffect } from 'react'
import styled from 'styled-components'
import CategoriesSlider from './CategoriesSlider'
import SearchCategory from './SearchCategory'
import CategoriesList from './CategoriesList'
import WhiteArticles from '../../assets/images/icons/white-articles.png'
import ImgCategories from '../../assets/images/categories.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchCategories, categoriesSelector } from './CategoriesSlicer'
import ImgSrc from '../../assets/images/icons/categories/1.png'



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
const MySlider = styled.div`
  background: black;
`

const Categories = () => {
    

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
    const categoriesList = [
        { "id": 1,
      "name": "Wedding Ideas", 
      "icon": "https://res.cloudinary.com/megoox97/image/upload/v1592074635/white-articles_rpqt71.png", 
      "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074073/amira2_cjjz2s.jpg", 
      "photos":[
        {
          "id":"1",
          "title":"Vintage photoshoot",
          "paragraph": "A vintage-themed wedding photoshoot for the bride and groom.",
          "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074071/amira4_lvqy65.jpg",
          "author":"Gihad Belasy",
          "author_link":"https://twitter.com/",
          "author_facebook":"https://www.facebook.com/",
          "author_twitter":"https://twitter.com/"
        },
        {
          "id":"2",
          "title":"Special photoshoot",
          "paragraph": "A special photoshoot for the bride.",
          "image":"https://res.cloudinary.com/megoox97/image/upload/v1592073972/amira1_xq6dxo.jpg",
          "author":"Gihad Belasy",
          "author_link":"https://twitter.com/",
          "author_facebook":"https://www.facebook.com/",
          "author_twitter":"https://twitter.com/"
        },
        {
          "id":"3",
          "title":"Pink/white bouquet",
          "paragraph": "A special photoshoot for the bride.",
          "image":"https://res.cloudinary.com/megoox97/image/upload/v1592073972/amira1_xq6dxo.jpg",
          "author":"Gihad Belasy",
          "author_link":"https://twitter.com/",
          "author_facebook":"https://www.facebook.com/",
          "author_twitter":"https://twitter.com/"
        },
        {
          "id":"4",
          "title":"Wedding cupcakes",
          "paragraph": "A special photoshoot for the bride.",
          "image":"https://res.cloudinary.com/megoox97/image/upload/v1592073972/amira1_xq6dxo.jpg",
          "author":"Gihad Belasy",
          "author_link":"https://twitter.com/",
          "author_facebook":"https://www.facebook.com/",
          "author_twitter":"https://twitter.com/"
        }
      ]
    },
    { "id": 2,
      "name": "Rings", 
      "icon": "https://res.cloudinary.com/megoox97/image/upload/v1592074635/white-articles_rpqt71.png", 
      "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074073/amira2_cjjz2s.jpg", 
      "photos":[
        {
          "id":"1",
          "title":"Vintage photoshoot",
          "paragraph": "A vintage-themed wedding photoshoot for the bride and groom.",
          "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074071/amira4_lvqy65.jpg",
          "author":"Gihad Belasy",
          "author_link":"https://twitter.com/",
          "author_facebook":"https://www.facebook.com/",
          "author_twitter":"https://twitter.com/"
        }
      ]
    },
    { "id": 3,
      "name": "Something", 
      "icon": "https://res.cloudinary.com/megoox97/image/upload/v1592074635/white-articles_rpqt71.png", 
      "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074073/amira2_cjjz2s.jpg", 
      "photos":[
        {
          "id":"1",
          "title":"Vintage photoshoot",
          "paragraph": "A vintage-themed wedding photoshoot for the bride and groom.",
          "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074071/amira4_lvqy65.jpg",
          "author":"Gihad Belasy",
          "author_link":"https://twitter.com/",
          "author_facebook":"https://www.facebook.com/",
          "author_twitter":"https://twitter.com/"
        }
      ]
    }
    ];
    
    // const [Suggestions, setSuggestions] = useState([]);
    // useEffect(() => {
    //     fetch('').then(res=> res.json()).then(data=> {
    //         setSuggestions(data);
    //     })
    // });

    const Suggestions = [
        {id: 1, title: 'Outdoor Wedding Venues', iconSrc: ImgSrc},
        {id: 2, title: 'Wedding Dresses', iconSrc: ImgSrc},
        {id: 3, title: 'Rings', iconSrc: ImgSrc},
        {id: 4, title: 'Videographers', iconSrc: ImgSrc},
        {id: 5, title: 'Videographers', iconSrc: ImgSrc},
        {id: 6, title: 'Videographers', iconSrc: ImgSrc},
        {id: 7, title: 'Videographers', iconSrc: ImgSrc},
        {id: 8, title: 'Videographers', iconSrc: ImgSrc},
        {id: 9, title: 'Videographers', iconSrc: ImgSrc},
        {id: 10, title: 'Videographers', iconSrc: ImgSrc},
        {id: 11, title: 'Videographers', iconSrc: ImgSrc},
        {id: 12, title: 'Videographers', iconSrc: ImgSrc},
        {id: 13, title: 'Videographers', iconSrc: ImgSrc},
        {id: 14, title: 'Videographers', iconSrc: ImgSrc},
        {id: 15, title: 'Videographers', iconSrc: ImgSrc}
    ]

    
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
                <MySlider>
                  <CategoriesSlider Suggestions={Suggestions}/>
                </MySlider>
            </FindContainer>
            <CategoriesList list={categoriesList}/>
        </CategoriesStyles>
    )
}

export default Categories
