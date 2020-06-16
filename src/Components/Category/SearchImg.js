import React, { useState } from 'react'
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 2rem;
    margin-top: 2rem;
    width: 20%;

    @media (max-width: 768px) {
        width: 99%;
    }
`
const Buttons = styled.div`
    display: flex;
    
`
const LinkButton = styled.button`
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    text-align: center;
    background-color: #fff;
    color: black;
    border: solid 1px black;
    padding: 0 15px;
    cursor: pointer;
`
const Button = styled.button`
    border: solid 1px #000;
    height: 21px;
    margin-left: 0.3rem;
    font-size: 0.73rem;
    text-align: center;
    padding: 0 15px;
    color: #fff;
    background: black;
    cursor: pointer;
    
`
const Input = styled.input`
    width: 100%;
    border: 1px solid black;
    text-align: left;
    padding: 0.41rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;

    &::placeholder {
        font-size: 0.9rem;
        line-height: 100%;
    }
`

// function to handle form submite with the category name (call back function to send request to fetch any category name has the searched name)
const SearchImg = (props) => {
    
    const [Val, setVal] = useState('');

    const handleChange = (e) => {
        setVal(e.target.value)
    }
    const handleClick = () => {
        setVal('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchHandle(Val);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Buttons>
                <LinkButton onClick={handleClick}>
                    Clear
                </LinkButton>
                <Button>
                    Apply
                </Button>
            </Buttons>
            <Input type='text' placeholder='Search' onChange={handleChange} />
        </Form>
    )
}

export default SearchImg