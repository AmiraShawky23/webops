import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SliderItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`
const Img = styled.div`
    padding: 0 2.3rem;

    @media (max-width: 768px) {
        padding: 0 5rem;
    }
    @media (max-width: 662px) {
        padding: 0 3rem;
    }
    @media (max-width: 440px) {
        padding: 0 1rem;
    }
`
const H6 = styled.h6`
    color: #fff;
`

const CategoriesSlider = ({Suggestions}) => {

    
    function useWindowSize() {
        const isClient = typeof window === 'object';
      
        function getSize() {
          return {
            width: isClient ? window.innerWidth : undefined
          };
        }
      
        const [windowSize, setWindowSize] = useState(getSize);
      
        useEffect(() => {
          if (!isClient) {
            return false;
          }
          
          function handleResize() {
            setWindowSize(getSize());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, [isClient]); // Empty array ensures that effect is only run on mount and unmount
      
        return windowSize;
    }
    const size = useWindowSize();
    let settings = {
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 10,
        slidesToScroll: 1,
    }

    if(size.width <= 768)
    {
        settings = {
            infinite: true,
            arrows: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    } else if(size.width > 768 && size.width < 992) {
        settings = {
            infinite: true,
            arrows: true,
            speed: 1000,
            slidesToShow: 7,
            slidesToScroll: 1,
        }
    } else {
        settings = {
            infinite: true,
            arrows: true,
            speed: 1000,
            slidesToShow: 10,
            slidesToScroll: 1,
        }
    }

    return(
        <Slider {...settings}>
            {
                Suggestions && Suggestions.map(suggestion => {
                    return(
                        <SliderItem key={suggestion.id}>
                            <Link to={`/category_${suggestion.id}`}>
                                <Img>
                                    <img src={suggestion.icon} alt=""/>
                                </Img>
                                <H6>
                                    {suggestion.name}
                                </H6>
                            </Link>
                        </SliderItem>
                    )
                })
            }
        </Slider>
    )
}

export default CategoriesSlider