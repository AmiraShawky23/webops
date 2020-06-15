import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    width: 99.5%;
    height: 100%;
    padding: 0 15%;
    position: relative;
    overflow: hidden;
`
const Input = styled.input`
    letter-spacing: 6.1px;
    width: 100%;
    max-width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    text-align: center;
    color: black;
    font-weight: bold;
    letter-spacing: 4.1px;
    text-transform: uppercase;
    font-size: 1.2rem;

    &::placeholder {
        color: black;
        font-weight: bold;
        letter-spacing: 4.1px;
        text-transform: uppercase;
        font-size: 1.2rem;
    }
    &:focus {
        outline: none;
    }

    @media (max-width: 922px) {
        font-size: 1rem;
    }
    @media (max-width: 768px) {
        font-size: 0.8rem;
        margin-top: 1px;
    }
`

const SearchCategory = () => {
    return(
        <Form>
            <Input type="text" placeholder='search' />
        </Form>
    )
}

export default SearchCategory
