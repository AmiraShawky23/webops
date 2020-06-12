import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const SliderItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`
const Img = styled.div`
    
`
const H6 = styled.h6`
    color: #fff;
`

const CategoriesSlider = ({Suggestions}) => {

    const settings = {
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 10,
        slidesToScroll: 1,
    }
    return(
        <Slider {...settings}>
            {
                Suggestions && Suggestions.map(suggestion => {
                    return(
                        <SliderItem key={suggestion.id}>
                            <Img>
                                <img src={suggestion.ImgSrc} alt=""/>
                            </Img>
                            <H6>
                                {suggestion.title}
                            </H6>
                        </SliderItem>
                    )
                })
            }
        </Slider>
    )
}

export default CategoriesSlider