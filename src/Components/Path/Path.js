import React from 'react'
import styled from 'styled-components';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const PathStyled = styled.div`
  width: 92%;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  
`
const Prev = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`
const PrevH2 = styled.h2`
    
    a {
        color: #008174;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.2rem;

        &:hover {
            color: #024d4c;
        }
    }
`
const H2 = styled.h2`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0.9rem 0;
`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0.4rem;
    margin-top: 0.2rem;
`

const Path = ({current, next}) => {
    return(
        <PathStyled>
            <Prev>
                <PrevH2>
                    <Link to='/categories'>
                        gallery
                    </Link>
                </PrevH2>
                <IconContainer>
                    <FontAwesomeIcon icon={faChevronRight} />
                </IconContainer>
            </Prev>
            {
                current.length != 0 ? (
                        <Prev>
                            <PrevH2>
                                <Link to={'/category_' + current.id}>
                                    {current.name}
                                </Link>
                            </PrevH2>
                            <IconContainer>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </IconContainer>
                        </Prev>
                    ) : (
                        null
                    )
            }
            <H2>{next}</H2>

        </PathStyled>
    )
}

export default Path