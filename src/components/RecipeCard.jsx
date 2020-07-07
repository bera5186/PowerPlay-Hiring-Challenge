import React from 'react'

import styled from 'styled-components'


const RecipeCard = ({ title, calories, image, ingredients, url , fat, carbs, protien}) => {


    if(title.length > 40) {
        title = title.slice(0, 40) + '....'
    }

    calories = Math.ceil(calories)
    fat = Math.round(fat)
    carbs = Math.round(carbs)
    protien = Math.round(protien)

    const tags = []

    if( protien / (protien, fat, carbs) > 15) {
        tags.push({text:'High Protien 🥩🥩', id: tags.length + 1})
    }

    if( (protien / (protien, fat, carbs) <= 15) && (protien / (protien, fat, carbs) >= 12) ) {
        tags.push({text:'Balanced  🥗🥗', id: tags.length + 1})
    }

    if ( ((carbs + protien) / (protien + carbs + fat)) > 50) {
        tags.push({text:'High Carbs 🧀🧀', id: tags.length + 1})
    }

    if(tags.length === 0) {
        tags.push({text:'Regular 🍚🍚', id: tags.length + 1})
    }


    const RecipeCard = styled.div`

        display: flex;
        flex-direction: column;
        padding: 15px;
        width: 70%;
        min-height: 300px;
        background-color: #fff;
        margin: 20px 0;

    `

    const RecipeInfoPrimary = styled.div`

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 10px 0;
    
    `

    const RecipeInfoSecondary = styled.div`

        display: block;
        margin: 10px 0;
    `

    const RecipeInfoTertiary = styled.div`
    
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;
        margin: 10px 0;
    `

    const RecipeImage = styled.img`
    
        width: 200px;
        height: 200px;
        border-radius: 200px;
        margin-bottom: 10px;
    `

    const RecipeName = styled.h2`
    
        font-weight: 500;
    `

    const RecipeCalorie = styled.p`
    
        font-weight: 300px;
    `

    const RecipeButton = styled.button`
    
        border: none;
        outline: none;
        padding: 10px;

        color: #fff;
        background-color: #28A745;
        transition: all .2s;

        &:hover {
            cursor: pointer;
            -webkit-box-shadow: 10px 9px 15px 2px #BFBFBF; 
            box-shadow: 10px 9px 15px 2px #BFBFBF;
        }
    `

    return (
        <RecipeCard>

            <RecipeInfoPrimary>
                <RecipeImage src={image} alt="Recipe Image" loading="lazy"></RecipeImage>
                <RecipeName>{title}</RecipeName>
                <RecipeCalorie>Calories : {calories}</RecipeCalorie>
            </RecipeInfoPrimary>

            <RecipeInfoSecondary>
                Ingredients :
                <ul>
                    {
                        ingredients.map(ingredient => (
                            <li key={ingredient.text}>{ingredient.text}</li>
                        ))
                    }
                </ul>
                Tags :
                <ul>
                    {
                        tags.map((tag) => {
                            return <li key={tag.id}>{tag.text}</li>
                        })
                    }
                </ul>
            </RecipeInfoSecondary>

            <RecipeInfoTertiary>
                    <a href={url} target="_blank" rel="noopener noreferrer"><RecipeButton>View Full Recipe</RecipeButton></a>
            </RecipeInfoTertiary>

        </RecipeCard>
    )
}

export default RecipeCard
