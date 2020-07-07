import React from 'react'
import styled from 'styled-components'

import search from '../assets/search.svg'

const Search = ({ setSearchValue }) => {

    const Form = styled.form`

        display: flex;
        flex-direction: row;
        flex: 0 0 80%;
        align-items: center;
        justify-content: center;
        width: 100%;
    
    `

    const SearchBox = styled.input`

        width: 65%;
        height: 25px;
        margin: 20px 0;
        padding: 10px 20px;
        outline: none;
        border: none;
        font-size: 20px;
        font-family: inherit;
        background-color: #f4f2f2;
        transition: all .2s;
        margin-right: -35px;

        &:focus {
            width: 70%;
            background-color: #f0eeee;
        }

    `
    const SearchButton = styled.button`

        border: none;
        background-color: #f4f2f2f2;
    
    `

    const SearchIcon = styled.img`

        width: 20px;
        height: 20px;
    
    `
    
    function handleFormSubmit(event) {
        setSearchValue(event.target[0].value)
    }

    return (

        <Form onSubmit={(event) => {
            event.preventDefault()
            handleFormSubmit(event)
        } }>
            <SearchBox   placeholder="Enter something...."></SearchBox>
            <SearchButton><SearchIcon src={search}></SearchIcon></SearchButton>
        </Form>
        
    )
}

export default Search;