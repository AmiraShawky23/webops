import React, { useEffect } from 'react';
import styled from 'styled-components' 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Related from './Related';
import Path from '../Path/Path';
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPhoto, photoSelector } from '../../app/slicers/imgDetailsSlicer'


const ImgDetailsStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
const Container = styled.div`
    display: flex;
`
const ImgContainer = styled.div`
    width: 65%;
`
const ContentContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
const H2 = styled.h2`
    font-size: 2rem;
    line-height: 1.42;
    margin: 0;
    margin-bottom: 2rem;
    font-weight: bold;
    color: black;
`
const P = styled.p`
    font-size: 1.7rem;
    color: black;
    line-height: 1.2;
    margin: 0;
`
const PhotographerLink = styled.div`
    font-size: 1.7rem;
    text-decoration: none;
    margin: 1rem 0;

    a {
        color: #337ab7;
    }
`
const IconContainer = styled.div`
    display: flex;
    justify-content: left;
`
const Iocn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    
    a {
        color: #fff;

        &:focus {
            outline: none;
        }
    }
`

const ImgDetails = (props) => {

    let id = props.match.params.category_id;
    id = id.replace("category_","");

    let photoid = props.match.params.photo_id;
    photoid = photoid.replace("photo_","");

    
    // const dispatch = useDispatch()
    // const { category } = useSelector(photoSelector)	
    
    // const filterCategory = category.filter(photo => photoid !== photo.id)
    
    // useEffect(() => {
    //     dispatch(fetchPhoto(id,photoid))
    // }, [dispatch,id,photoid])
    
    console.log('props: ',props)

    return (
        <ImgDetailsStyles>
            <Path />
            {/* <Container>
                <ImgContainer>
                    <img src={photo.image} alt=""/>
                </ImgContainer>
                <ContentContainer>
                    <H2>{photo.title}</H2>
                    <P>{photo.paragraph}</P>
                    <PhotographerLink>
                        <a href={photo.author_link}>{photo.author}</a>
                    </PhotographerLink>
                    <IconContainer>
                        <Iocn>
                            <a href={photo.author_facebook}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>                    
                        </Iocn>
                        <Iocn>
                            <a href={photo.author_twitter}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a> 
                        </Iocn>
                    </IconContainer>
                </ContentContainer>
            </Container> */}
            {/* <Related list={filterCategory} /> */}
        </ImgDetailsStyles>
    )
}
export default ImgDetails;