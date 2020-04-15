import React from 'react'

const RecipesButtons = () => {
    return (
        <div>
            <button onClick={() => hideRecipe(recipe.id)}>hide recipe</button>
            <button onClick={() => deleteRecipe(recipe.id)}>delete recipe</button>
            <button onClick={() => exportRecipe(recipe.id)}>export recipe</button>
        </div>
    )
}

export default RecipesButtons