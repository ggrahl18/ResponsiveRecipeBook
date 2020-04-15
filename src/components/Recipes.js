import React from 'react'

const Recipes = ({ recipe }) => {

    return (
        <div>Recipe Name: <strong>{recipe.title}</strong>
            <ul>
                Author: {recipe.author}
            </ul>
            <ul>
                Ingredients: {recipe.ingredients}
            </ul>
            <ul>
                Optional Ingredients: {recipe.optionalIngredients}
            </ul>
            <ul>
                Directons: {recipe.directions}
            </ul>
        </div>
    )
}

export default Recipes