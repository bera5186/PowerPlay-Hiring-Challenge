import React from 'react'
import styled from 'styled-components'

const Search = ({ setSearchValue }) => {

    const Form = styled.form`

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    
    `

    const SearchBox = styled.input`

        width: 80%;
        height: 25px;
        margin: 20px 0;
        padding: 10px;
        border: 1px solid red;
        outline: none;
        font-size: 20px;
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
        </Form>
        
    )
}

export default Search;