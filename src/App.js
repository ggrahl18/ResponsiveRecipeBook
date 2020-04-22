import React from 'react';
import About from './components/About'
import AddRecipe from './components/AddRecipe'
import Recipe from './components/Recipe'
import ShoppingList from './components/ShoppingList'
import ExportList from './components/ExportList'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <h2>About Recipebook</h2>
      <About />

      <h2>Add Recipe</h2>
      <AddRecipe />

      <h2>Recipes</h2>
      <Recipe />

      <h2>Shopping List</h2>
      <ShoppingList />

      <h4>Export Shopping List</h4>
      <ExportList />

      <h2>The End</h2>
      <Footer />
    </div>
  );
}

export default App;
