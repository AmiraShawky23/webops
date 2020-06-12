import React from 'react'
import ImgDetails from './ImgDetails'
import Img1 from '../../assets/images/category/image_1.jpeg'

const Category = () => {
    
    return(
        <div>
            <ImgDetails imgSrc={Img1} title='Vintage photoshoot' text='A vintage-themed wedding photoshoot for the bride and groom.' name='Gihad Belasy' link='https://google.com/' faceLink='https://www.facebook.com/' twitterLink='https://twitter.com/home' />
        </div>
    )
}

export default Category