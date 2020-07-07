import React from 'react'
import Loading from './Loading'



const RecipeList = ({ loading }) => {

    if(loading) {
        return <Loading />
    }
    return (
        <div>
            Hello Hi
        </div>
    )
}

export default RecipeList
